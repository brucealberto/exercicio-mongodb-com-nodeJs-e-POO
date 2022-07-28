import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Lens from '../../../models/Lens';
import {
  lensMock,
  lensMockForChangeWithId,
  lensMockWithId,
} from '../../mocks/lensMock';

describe('Lens Model', () => {
  const lensModel = new Lens();

  before(() => {
    Sinon.stub(Model, 'create').resolves(lensMockWithId);
    Sinon.stub(Model, 'findOne').resolves(lensMockWithId);
    Sinon.stub(Model, 'find').resolves([lensMockWithId]);
    Sinon.stub(Model, 'findByIdAndDelete').resolves(lensMockForChangeWithId);
  });

  after(() => {
    Sinon.restore();
  });

  describe('creating a lens', () => {
    it('successfully created', async () => {
      const newFrame = await lensModel.create(lensMock);
      expect(newFrame).to.be.deep.eq(lensMockWithId);
    });
  });

  describe('searching a lens', () => {
    it('successfully found', async () => {
      const lensFound = await lensModel.readOne('62cf1fc6498565d94eba52cd');
      expect(lensFound).to.be.deep.eq(lensMockWithId);
    });

    it('_id not found', async () => {
      try {
        await lensModel.readOne('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });

  describe('deleting a lens', () => {
    it('sucessfully deletion', async () => {
      const lensDeleted = await lensModel.destroy('62cf1fc6498565d94eba52cd');
      expect(lensDeleted).to.be.deep.eq(lensMockForChangeWithId);
    });

    it('id not found', async () => {
      try {
        await lensModel.destroy('123ERRADO');
      } catch (error: any) {
        expect(error.message).to.be.eq('InvalidMongoId');
      }
    });
  });
});
