import "dotenv/config";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import { AppError } from "../../errors/appError";
import prisma from "../../prisma";
import { IUserLogin } from "../../interfaces";

export const loginUserService = async ({
  email,
  password,
}: IUserLogin): Promise<{ token: string }> => {
  const user = await prisma.user.findFirst({
    where: { email },
  });

  if (!user || !user.is_active) {
    throw new AppError("User or password invalid", 403);
  }

  const passwordMatch = await compare(password, user.password);
  if (!passwordMatch) {
    throw new AppError("User or password invalid", 403);
  }

  const token = jwt.sign(
    { is_active: user.is_active, role: user.role },

    process.env.SECRET_KEY!,
    { subject: user.id, expiresIn: "24h" }
  );

  return { token: token };
};
