import { z } from "zod";

export const RecoveryCreateSchema = z.object({ email: z.string().email() });

export const PasswordUpdateSchema = z.object({
  oldPassword: z.string(),
  password: z.string(),
});
