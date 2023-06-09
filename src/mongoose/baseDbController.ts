import { BaseModel } from '../types/baseTypes'
import { Model, FilterQuery } from 'mongoose'

export class BaseDbController<M extends BaseModel> {
  private model: Model<any>

  constructor(model: Model<any>) {
    this.model = model
  }

  async create(item: Partial<M>): Promise<M> {
    const createdObject = await this.model.create(item)
    return createdObject.toObject()
  }

  save(filter: FilterQuery<M>, item: Partial<M>): Promise<M | null> {
    return this.model
      .findOneAndUpdate(filter, item, {
        new: true,
        upsert: true,
      })
      .lean()
      .exec()
  }

  delete(id: string): Promise<M | null> {
    return this.model
      .updateOne(
        { _id: id },
        {
          deleted: true,
        },
        {
          new: true,
        }
      )
      .lean()
      .exec()
  }

  findOne(filter: FilterQuery<M>): Promise<M | null> {
    const query: FilterQuery<M> = { isDeleted: false, ...filter }
    return this.model.findOne(query, {}).lean().exec()
  }

  findAll(filter: FilterQuery<M>): Promise<M[]> {
    const query: FilterQuery<M> = { isDeleted: false, ...filter }
    return this.model.find(query).lean().exec()
  }
}
