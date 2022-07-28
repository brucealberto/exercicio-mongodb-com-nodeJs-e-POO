import IFrame from '../../interfaces/IFrame';

const frameMock: IFrame = {
  material: 'Ouro',
  color: 'Daquele naipe',
};

const frameMockWithId: IFrame & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  material: 'Ouro',
  color: 'Daquele naipe',
};

const frameMockForChange: IFrame = {
  material: 'Prata',
  color: 'Azul',
};

const frameMockForChangeWithId: IFrame & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  material: 'Prata',
  color: 'Azul',
};

export {
  frameMock,
  frameMockWithId,
  frameMockForChange,
  frameMockForChangeWithId,
};
