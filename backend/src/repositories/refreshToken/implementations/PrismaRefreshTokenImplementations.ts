import { RefreshToken } from '@prisma/client';
import prisma from '../../../../prisma/client';
import IRefreshTokenRepository from '../IRefreshTokenRepository';

export default class PrismaRefreshTokenImplementations
  implements IRefreshTokenRepository
{
  async save(
    hashedToken: string,
    jti: string,
    userId: string
  ): Promise<RefreshToken> {
    const newRefreshToken = await prisma.refreshToken.create({
      data: {
        hashedToken,
        id: jti,
        userId,
      },
    });

    return newRefreshToken;
  }

  async getById(id: string): Promise<RefreshToken | null> {
    const refreshToken = await prisma.refreshToken.findUnique({
      where: { id },
    });

    return refreshToken;
  }

  async delete(id: string): Promise<void> {
    await prisma.refreshToken.update({
      where: {
        id,
      },
      data: {
        revoked: true,
      },
    });
  }

  async revokeTokens(userId: string): Promise<void> {
    await prisma.refreshToken.updateMany({
      where: {
        userId,
      },
      data: {
        revoked: true,
      },
    });
  }
}
