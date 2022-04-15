import jwt from 'jsonwebtoken';
import env from '@utils/env';
import IJwtService from '../IJwtService';

export default class JWTImplementations implements IJwtService {
  generateAccessToken(userId: string): any {
    return jwt.sign(
      {
        userId,
      },
      env().JWT_TOKEN_SECRET,
      {
        expiresIn: `${env().JWT_TOKEN_EXPIRES_MINUTES || 5}m`,
      }
    );
  }

  generateRefreshToken(userId: string, jti: any): any {
    return jwt.sign(
      {
        userId,
        jti,
      },
      env().JWT_REFRESH_SECRET,
      {
        expiresIn: `${env().JWT_REFRESH_TOKEN_EXPIRES_MINUTES || 480}m`,
      }
    );
  }

  verify(refreshToken: string, refreshSecret: string) {
    return jwt.verify(refreshToken, refreshSecret);
  }
}
