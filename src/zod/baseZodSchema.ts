import {z} from "zod"

export const baseZodSchema = z.object({
    // convert to string from ObjectId
    _id: z.any().transform((val) => val.toString()).optional(),
    __v: z.number().optional(),
    isDeleted: z.boolean().default(false),
    createdAt: z.date(),
    updatedAt: z.date().optional(),
}).strict()

export const newBaseZodSchema = baseZodSchema.deepPartial()
