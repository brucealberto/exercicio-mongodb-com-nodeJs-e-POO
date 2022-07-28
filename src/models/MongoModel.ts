// ./src/models/MongoModel.ts

import { isValidObjectId, Model } from 'mongoose';
import IModel from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  public async readOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error('InvalidMongoId');

    return this._model.findOne({ _id }); // poderia ser o findById ?
  }

  public async read(): Promise<T[]> {
    return this._model.find();
  }

  async destroy(_id: string): Promise<T | null> {
    if (!isValidObjectId) throw new Error('InvalidMongoId');
    return this._model.findByIdAndDelete({ _id });
  }
}

export default MongoModel;
