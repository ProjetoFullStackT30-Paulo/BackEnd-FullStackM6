import { z } from "zod";

const AddressCreateSchema = z.object({
  cep: z.string(),
  state: z.string(),
  city: z.string(),
  street: z.string(),
  number: z.number(),
  complement: z.string(),
});

const AddressReturnSchema = AddressCreateSchema.extend({
  id: z.string(),
  user_id: z.string(),
});

export const UserCreateSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  cpf: z.string(),
  phone: z.string(),
  birthdate: z.string(),
  description: z.string(),

  address: AddressCreateSchema,
});

export const UserReturnSchema = UserCreateSchema.extend({
  id: z.string(),
  created_at: z.string(),

  address: AddressReturnSchema.omit({ user_id: true }),
});

export const UserUpdateRequestSchema = UserCreateSchema.partial();
export const UserUpdateSchema = UserCreateSchema.partial().required();

export const UserArraySchema = UserReturnSchema.array();
