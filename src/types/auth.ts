import { outputDecodedTokenSchema } from '../zod/auth';
import { z } from 'zod';

export type JWT = {
    userId: string;
    role: string;
    email: string;
    fullName: string;
};

export type AuthOptions = {
    userId: string;
    userRole: string;
    userFullName: string;
    userEmail: string;
};

export type OutputDecodedToken = z.infer<typeof outputDecodedTokenSchema>;
