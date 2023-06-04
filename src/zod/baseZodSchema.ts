import { z } from 'zod'

export const baseZodSchema = z
  .object({
    // convert to string from ObjectId and viche versa
    _id: z.any().transform((val) => val.toString()),
    __v: z.number().optional(),
    isDeleted: z.boolean().default(false),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict()

export const newBaseZodSchema = baseZodSchema.deepPartial()

export const emailSchema = z.string().email().trim().min(5).max(50)

export const phoneNumberSchema = z
  .string()
  .regex(
    new RegExp('^\\+373(\\d{2,3})?\\d{5,6}$'),
    'Phone number must be in format +373xxxxxxxx'
  )
