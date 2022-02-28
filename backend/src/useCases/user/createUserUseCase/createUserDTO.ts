import { User } from '@prisma/client';

type Modify<T, R> = Omit<T, keyof R> & R;

type ICreateUserDTO = Modify<Omit<User, 'id'>, { birthday: string | Date }>;

export default ICreateUserDTO;
