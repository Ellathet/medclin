import { RefreshToken } from '@prisma/client';

export default interface IRefreshTokenRepository {
  save(hashedToken: string, jti: string, userId: string): Promise<RefreshToken>;
  getById(id: string): Promise<RefreshToken | null>;
  delete(id: string): Promise<void>;
  revokeTokens(userId: string): Promise<void>;
}
