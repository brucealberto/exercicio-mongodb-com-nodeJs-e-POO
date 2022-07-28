import ILens from '../../interfaces/ILens';

const lensMock: ILens = {
  degree: 1,
  antiGlare: true,
  blueLightFilter: true,
};

const lensMockWithId: ILens & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  degree: 1,
  antiGlare: true,
  blueLightFilter: true,
};

const lensMockForChange: ILens = {
  degree: 1,
  antiGlare: false,
  blueLightFilter: false,
};

const lensMockForChangeWithId: ILens & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  degree: 2,
  antiGlare: false,
  blueLightFilter: false,
};

export { lensMock, lensMockWithId, lensMockForChange, lensMockForChangeWithId };
