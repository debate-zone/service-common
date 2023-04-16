import {z} from "zod"

export const baseZodSchema = z.object({
    id: z.string(),
    isDeleted: z.boolean().default(false),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
}).strict()

export const newBaseZodSchema = baseZodSchema.deepPartial()
