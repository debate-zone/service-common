import { baseZodSchema, newBaseZodSchema } from '../zod/baseZodSchema';
import { z } from 'zod';

export type BaseModel = z.infer<typeof baseZodSchema>;
export type NewBaseModel = Partial<z.infer<typeof newBaseZodSchema>>;
