import {z} from "zod"
import {baseZodSchema, newBaseZodSchema} from "../zod/baseZodSchema"

export type BaseModel = z.infer<typeof baseZodSchema>
export type NewBaseModel = Partial<z.infer<typeof newBaseZodSchema>>
