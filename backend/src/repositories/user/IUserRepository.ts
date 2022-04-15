import { User } from '@prisma/client';
import ICreateUserDTO from '../../useCases/user/createUserUseCase/createUserDTO';
import ISelectUsersPaginatedDTO from '../../useCases/user/selectUsersPaginatedUseCase/selectUsersPaginatedDTO';
import IUpdateUserDTO from '../../useCases/user/updateUserUseCase/updateUserDTO';

export default interface IUserRepository {
  save(user: ICreateUserDTO): Promise<User>;
  getById(id: string): Promise<User | null>;
  getPaginated(parameters: ISelectUsersPaginatedDTO): Promise<User[]>;
  update(id: string, user: IUpdateUserDTO): Promise<User>;
  delete(id: string): Promise<void>;
  getBy(params: Partial<User>): Promise<User | null>;
}
