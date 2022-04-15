import { ReasonPhrases } from 'http-status-codes';
import { inject, injectable } from 'tsyringe';
import { v4 } from 'uuid';
import IRefreshTokenRepository from '../../../repositories/refreshToken/IRefreshTokenRepository';
import IUserRepository from '../../../repositories/user/IUserRepository';
import IHashService from '../../../services/hash/IHashService';
import IJwtService from '../../../services/jwt/IJwtService';

@injectable()
export default class LoginUserUseCase {
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

  async execute(email: string, password: string, username: string) {
    const existingUser = await this.userRepository.getBy({ email, username });
    const validPassword = await this.hashService.verify(
      existingUser ? existingUser.password : undefined,
      password
    );

    if (!existingUser || !validPassword) {
      throw new Error(ReasonPhrases.UNAUTHORIZED);
    }

    const jti = v4();

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.generateAccessToken(existingUser.id),
      this.jwtService.generateRefreshToken(existingUser.id, jti),
    ]);

    await this.refreshTokenRepository.save(
      await this.hashService.encrypt(refreshToken),
      jti,
      existingUser.id
    );

    return {
      accessToken,
      refreshToken,
      user: existingUser,
    };
  }
}
