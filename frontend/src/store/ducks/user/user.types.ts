import { ActionMap } from "../../index.types";

export interface IUser {
  id: string;
  email: string;
  name: string;
  username: string;
  rg: string;
  cpf: string;
  birthday: Date;
  password: string;
  roleEnum: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserState {
  user: IUser | null;
  users: IUser[];
}

export enum ActionsUserTypes {
  CREATE_USER = "@user/CREATE_USER",
  DELETE_USER = "@user/DELETE_USER",
}

export interface IUserPayload {
  [ActionsUserTypes.CREATE_USER]: IUser;
  [ActionsUserTypes.DELETE_USER]: {
    id: string;
  };
}

export type IUserActions =
  ActionMap<IUserPayload>[keyof ActionMap<IUserPayload>];
