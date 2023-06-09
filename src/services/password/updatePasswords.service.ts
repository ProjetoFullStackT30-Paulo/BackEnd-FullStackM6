import prisma from "../../prisma";
import { hashSync } from "bcryptjs";
import { AppError } from "../../errors";
import { sendEmail, mailGenerator } from "../../libs";

interface IProps {
  password: string;
}

export const updatePasswordService = async (
  body: IProps,
  id: string,
  token: string
) => {
  const userFind = await prisma.user.findFirst({
    where: { id },
  });
  if (!userFind) {
    throw new AppError("Invalid link or expired", 400);
  }

  const tokenFind = await prisma.token.findFirst({
    where: { token },
  });
  if (!tokenFind || tokenFind.user_id !== id) {
    throw new AppError("Invalid link or expired", 400);
  }

  const passwordMake = body.password;
  const password = hashSync(passwordMake, 10);
  const user = await prisma.user.update({
    where: { id },
    data: { password },
  });
  await prisma.token.delete({
    where: { user_id: id },
  });

  const arrayUserName = user.name.split(" ");
  const emailName =
    arrayUserName.length > 1
      ? arrayUserName[0] + " " + arrayUserName[1]
      : arrayUserName[0];

  const emailContent = {
    body: {
      greeting: "Prezado",
      signature: "Atenciosamente",
      name: emailName,
      intro:
        "Você recebeu este e-mail porque uma solicitação de redefinição de senha para sua conta foi recebida.",

      outro:
        "Se você não solicitou uma redefinição de senha, por favor nos contate para identificar possiveis brechas de seguranca.",
    },
  };

  const emailBody = mailGenerator.generate(emailContent);
  await sendEmail(user.email, "Password", emailBody);
  return user;
};
