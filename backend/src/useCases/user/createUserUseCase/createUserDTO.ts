import { User } from '@prisma/client';

type ICreateUserDTO = Omit<User, 'id' | 'birthday'> & {
  birthday: Date | string;
};

export default ICreateUserDTO;
