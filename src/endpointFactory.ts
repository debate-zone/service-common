import { createMiddleware, defaultEndpointsFactory } from 'express-zod-api';
import { z } from 'zod';

// export const authMiddleware = createMiddleware({
//     input: z.object({}),
//     middleware: async ({ input: {}, request, logger }) => {
//         const userId = request.headers['x-user-id'] as string;
//         const userRole = request.headers['x-user-role'] as string;
//
//         return {
//             userId,
//             userRole,
//         };
//     },
// });
//
// export const endpointsFactory =
//     defaultEndpointsFactory.addMiddleware(authMiddleware);
