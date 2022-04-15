import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { container } from 'tsyringe';
import RefreshTokenUseCase from './refreshTokenUseCase';

export default class RefreshTokenController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const refreshTokenUseCase = container.resolve(RefreshTokenUseCase);

      const { refreshToken } = request.body;

      const refreshTokens = await refreshTokenUseCase.execute(refreshToken);

      return response.status(StatusCodes.OK).json(refreshTokens);
    } catch (error) {
      return next(error);
    }
  }
}
