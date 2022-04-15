export default interface IJwtService {
  generateAccessToken(userId: string): string;
  generateRefreshToken(userId: string, jti: string): string;
  verify(refreshToken: string, refreshSecret: string): any;
}
