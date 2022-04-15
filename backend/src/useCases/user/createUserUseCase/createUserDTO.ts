import { User } from '@prisma/client';

type ICreateUserDTO = Omit<
  User,
  'id' | 'birthday' | 'createdAt' | 'updatedAt'
> & {
  birthday: Date | string;
};

export default ICreateUserDTO;
