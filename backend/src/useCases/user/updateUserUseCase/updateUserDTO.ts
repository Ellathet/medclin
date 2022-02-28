import { User } from '@prisma/client';

type IUpdateUserDTO = Partial<User>;

export default IUpdateUserDTO;
