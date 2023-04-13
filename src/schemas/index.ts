import { z } from "zod";

export const AnnouncementCreate = z.object({
  brand: z.string(),
  model: z.string(),
  manufacture_year: z.string(),
  fuel: z.string(),
  mileage: z.number(),
  color: z.string(),
  price: z.string(),
  price_fipe: z.string(),
  description: z.string(),
  listImage: z.string().array().optional(),
});

export const AnnouncementReturn = AnnouncementCreate.extend({
  id: z.string(),

  images: z.string().array(),

  user: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    cpf: z.string(),
    phone: z.string(),
    birthdate: z.string(),
    description: z.string(),
    is_active: z.string(),

    address: z.object({
      cep: z.string(),
      state: z.string(),
      city: z.string(),
      street: z.string(),
      number: z.number(),
      complement: z.string(),
    }),
  }),
});

export const AnnouncementUpdateRequest = AnnouncementCreate.partial();
export const AnnouncementUpdate = AnnouncementCreate.partial().required();

export const AnnouncementArray = AnnouncementReturn.array();
