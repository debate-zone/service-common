import { BaseModel } from '../types/baseTypes';
import { Model, FilterQuery } from 'mongoose';

export class BaseDbController<M extends BaseModel> {
    protected model: Model<any>;

    constructor(model: Model<any>) {
        this.model = model;
    }

    async create(item: Partial<M>): Promise<M> {
        const createdObject = await this.model.create(item);
        return createdObject.toObject();
    }

    save(filter: FilterQuery<M>, item: Partial<M>): Promise<M | null> {
        return this.model
            .findOneAndUpdate(filter, item, {
                new: true,
            })
            .lean()
            .exec();
    }

    delete(id: string, filter?: FilterQuery<M>): Promise<M | null> {
        return this.model
            .findOneAndUpdate(
                {
                    _id: id,
                    ...filter,
                },
                {
                    isDeleted: true,
                },
                {
                    new: true,
                },
            )
            .lean()
            .exec();
    }

    findOne(filter: FilterQuery<M>): Promise<M | null> {
        const query: FilterQuery<M> = { isDeleted: false, ...filter };
        return this.model.findOne(query, {}).lean().exec();
    }

    findAll(
        filter: FilterQuery<M>,
        arg?: { [key: string]: 'asc' | 'desc' },
    ): Promise<M[]> {
        const query: FilterQuery<M> = { isDeleted: false, ...filter };
        return this.model.find(query).sort(arg).lean().exec();
    }
}
