import IUserEntity from './user';

export default interface IRoleEntity {
  id: string;
  roleEnum: number;
  role: string;
  users: IUserEntity[];
}
