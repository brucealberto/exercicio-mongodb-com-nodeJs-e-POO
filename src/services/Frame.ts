import { ErrorTypes } from '../errors/catalog';
import IFrame, { FrameZodSchema } from '../interfaces/IFrame';
import IModel from '../interfaces/IModel';
import IService from '../interfaces/IService';

export default class FrameService implements IService<IFrame> {
  private _frame: IModel<IFrame>;
  constructor(model: IModel<IFrame>) {
    this._frame = model;
  }

  public async create(obj: IFrame): Promise<IFrame> {
    const parsed = FrameZodSchema.safeParse(obj);

    if (!parsed.success) throw parsed.error;

    return this._frame.create(obj);
  }

  public async readOne(_id: string): Promise<IFrame> {
    const frame = await this._frame.readOne(_id);

    if (!frame) throw new Error(ErrorTypes.EntityNotFound);

    return frame;
  }
}
