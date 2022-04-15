import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { container } from 'tsyringe';
import RevokeTokensUseCase from './revokeTokensUseCase';

export default class RevokeTokensController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const revokeTokensUseCase = container.resolve(RevokeTokensUseCase);

      const { userId } = request.params;

      revokeTokensUseCase.execute(userId);

      return response.status(StatusCodes.OK).json({
        message: `User token with id: ${userId}successfully deleted`,
      });
    } catch (error) {
      return next(error);
    }
  }
}
