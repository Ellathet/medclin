import { container, inject, injectable } from 'tsyringe';
import IRefreshTokenRepository from '@repositories/refreshToken/IRefreshTokenRepository';
import { v4 } from 'uuid';
import IUserRepository from '../../../repositories/user/IUserRepository';
import { IRegisterUserDTO } from './registerUserDTO';
import CreateUserUseCase from '../../user/createUserUseCase/createUserUseCase';
import IJwtService from '../../../services/jwt/IJwtService';
import IHashService from '../../../services/hash/IHashService';

@injectable()
export default class RegisterUserUseCase {
  constructor(
    @inject('RefreshTokenRepository')
    private refreshTokenRepository: IRefreshTokenRepository,

    @inject('HashService')
    private hashService: IHashService,

    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('IJwtService')
    private jwtService: IJwtService
  ) {}

  async execute(user: IRegisterUserDTO): Promise<any> {
    const usernameIsAlreadyBeingUsed = await this.userRepository.getBy({
      username: user.username,
    });
    const cpfIsAlreadyBeingUsed = await this.userRepository.getBy({
      cpf: user.cpf,
    });
    const rgIsAlreadyBeingUsed = await this.userRepository.getBy({
      rg: user.rg,
    });
    const emailIsAlreadyBeingUsed = await this.userRepository.getBy({
      email: user.email,
    });

    if (emailIsAlreadyBeingUsed) {
      throw new Error('This email is already being used');
    }
    if (rgIsAlreadyBeingUsed) {
      throw new Error('This rg is already being used');
    }
    if (cpfIsAlreadyBeingUsed) {
      throw new Error('This cpf is already being used');
    }
    if (usernameIsAlreadyBeingUsed) {
      throw new Error('This username is already being used');
    }

    const createUserUseCase = container.resolve(CreateUserUseCase);
    const createdUser = await createUserUseCase.execute(user);
    const jti = v4();

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.generateAccessToken(createdUser.id),
      this.jwtService.generateRefreshToken(createdUser.id, jti),
    ]);

    const hashedToken = await this.hashService.encrypt(refreshToken);

    await this.refreshTokenRepository.save(hashedToken, jti, createdUser.id);

    return {
      accessToken,
      refreshToken,
      user: createdUser,
    };
  }
}
