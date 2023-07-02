import { createMiddleware, defaultEndpointsFactory } from 'express-zod-api';
import { z } from 'zod';
import { AuthOptions } from '../../types/auth';

const authMiddleware = createMiddleware({
    input: z.object({}),
    middleware: async ({ input: {}, request, logger }) => {
        const userId = request.headers['x-user-id'] as string;
        const userRole = request.headers['x-user-role'] as string;
        const userFullName = request.headers['x-user-full-name'] as string;
        const userEmail = request.headers['x-user-email'] as string;

        return {
            userId,
            userRole,
            userFullName,
            userEmail,
        } as AuthOptions;
    },
});

export const endpointsFactory =
    defaultEndpointsFactory.addMiddleware(authMiddleware);
