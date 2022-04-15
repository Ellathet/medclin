import { ReasonPhrases } from 'http-status-codes';
import { inject, injectable } from 'tsyringe';
import { v4 } from 'uuid';
import IRefreshTokenRepository from '../../../repositories/refreshToken/IRefreshTokenRepository';
import IUserRepository from '../../../repositories/user/IUserRepository';
import IHashService from '../../../services/hash/IHashService';
import IJwtService from '../../../services/jwt/IJwtService';
import env from '../../../utils/env';

@injectable()
export default class RefreshTokenUseCase {
  constructor(
    @inject('IJwtService')
    private jwtService: IJwtService,

    @inject('HashService')
    private hashService: IHashService,

    @inject('UserRepository')
    private userRepository: IUserRepository,

    @inject('RefreshTokenRepository')
    private refreshTokenRepository: IRefreshTokenRepository
  ) {}

  async execute(refreshToken: string) {
    const payload = this.jwtService.verify(
      refreshToken,
      env().JWT_REFRESH_SECRET
    );

    const savedRefreshToken = await this.refreshTokenRepository.getById(
      payload.jti
    );

    if (!savedRefreshToken || savedRefreshToken.revoked) {
      throw new Error(ReasonPhrases.UNAUTHORIZED);
    }

    const hashedToken = await this.hashService.encrypt(refreshToken);

    if (hashedToken !== savedRefreshToken.hashedToken) {
      throw new Error(ReasonPhrases.UNAUTHORIZED);
    }

    const user = await this.userRepository.getById(payload.userId);

    if (!user) {
      throw new Error(ReasonPhrases.UNAUTHORIZED);
    }

    await this.refreshTokenRepository.delete(savedRefreshToken.id);
    const jti = v4();
    const [accessToken, _refreshToken] = await Promise.all([
      this.jwtService.generateAccessToken(user.id),
      this.jwtService.generateRefreshToken(user.id, jti),
    ]);

    const refreshHashedToken = await this.hashService.encrypt(_refreshToken);

    await this.refreshTokenRepository.save(refreshHashedToken, jti, user.id);

    return {
      accessToken,
      refreshToken: _refreshToken,
      user,
    };
  }
}
