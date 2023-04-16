import {Schema} from "mongoose"

export const baseSchema: Schema = new Schema({
    isDeleted: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true,
    toJSON: {
        minimize: true,
        virtuals: true,
        transform: (doc, ret) => {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }
    },
    toObject: {
        minimize: true,
        virtuals: true,
        transform: (doc, ret) => {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }
    },
})
