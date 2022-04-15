import { Request, Response } from 'express';
import { container } from 'tsyringe';
import RefreshTokenUseCase from './refreshTokenUseCase';

export default class RefreshTokenController {
  async handle(request: Request, response: Response) {
    const refreshTokenUseCase = container.resolve(RefreshTokenUseCase);

    const { refreshToken } = request.body;

    const refreshTokens = await refreshTokenUseCase.execute(refreshToken);

    return response.status(201).json(refreshTokens);
  }
}
