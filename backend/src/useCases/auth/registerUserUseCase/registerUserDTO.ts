import ICreateUserDTO from '../../user/createUserUseCase/createUserDTO';

export interface IAddRefreshTokenToWhiteListDTO {
  id: string;
  refreshToken: string;
  userId: string;
}

export type IRegisterUserDTO = ICreateUserDTO;
