import axios from 'axios';
import { OutputDecodedToken } from '../types/auth';

export const verify = async (token: string) => {
    try {
        const response = await axios.get<{ data: OutputDecodedToken }>(
            `${process.env.USER_MICRO_SERVICE_URL}/v1/auth/verify`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );

        return response.data.data;
    } catch (error: any) {
        throw new Error(error);
    }
};
