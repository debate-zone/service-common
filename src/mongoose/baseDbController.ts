import {BaseModel} from "../types/baseTypes";
import { Model, FilterQuery } from 'mongoose';

export class BaseDbController<M extends BaseModel> {

    private model: Model<any>;

    constructor(model: Model<any>) {
        this.model = model;
    }

    save(filter: FilterQuery<M>, item: M): Promise<M | null> {
        return this.model.updateOne(filter, item, {
            upsert: true,
            new: true,
        }).lean().exec();
    }

    delete(id: string): Promise<M | null> {
        return this.model.updateOne({_id: id}, {
            deleted: true
        }, {
            new: true
        }).lean().exec();
    }

    findOne(filter: FilterQuery<M>): Promise<M | null> {
        const query: FilterQuery<M> = { isDeleted: false, ...filter };
        return this.model.findOne(query, {}).lean().exec();
    }

    findAll(filter: Promise<M>): Promise<M[]> {
        return this.model.find({
            deleted: false,
            ...filter
        }).lean().exec();
    }

}