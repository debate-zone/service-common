import {z} from "zod";
import {baseZodSchema} from "../zod/baseZodSchema";

export type BaseModel = z.infer<typeof baseZodSchema>
export type NewBaseModel = Partial<z.infer<typeof baseZodSchema>>
