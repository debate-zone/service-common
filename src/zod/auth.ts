import { z } from 'zod';
import { Role } from '../types/user';

export const outputDecodedTokenSchema = z.object({
    userId: z.string(),
    userRole: z.nativeEnum(Role),
    userEmail: z.string(),
    userFullName: z.string(),
});
