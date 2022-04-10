import { User } from '@prisma/client';

type IUpdateUserDTO = Partial<User> & {
  birthday?: Date | string;
};

export default IUpdateUserDTO;
