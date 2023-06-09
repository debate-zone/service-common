import { Schema } from 'mongoose';

export const baseSchema: Schema = new Schema(
    {
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    },
);
