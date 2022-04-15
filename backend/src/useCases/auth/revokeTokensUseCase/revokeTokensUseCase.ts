import { inject, injectable } from 'tsyringe';
import IRefreshTokenRepository from '../../../repositories/refreshToken/IRefreshTokenRepository';

@injectable()
export default class RevokeTokensUseCase {
  constructor(
    @inject('RefreshTokenRepository')
    private refreshTokenRepository: IRefreshTokenRepository
  ) {}

  async execute(userId: string): Promise<void> {
    await this.refreshTokenRepository.revokeTokens(userId);
  }
}
