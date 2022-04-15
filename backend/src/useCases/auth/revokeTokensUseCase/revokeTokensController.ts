import { Request, Response } from 'express';
import { container } from 'tsyringe';
import RevokeTokensUseCase from './revokeTokensUseCase';

export default class RevokeTokensController {
  async handle(request: Request, response: Response): Promise<Response> {
    const revokeTokensUseCase = container.resolve(RevokeTokensUseCase);

    const { userId } = request.params;

    revokeTokensUseCase.execute(userId);

    return response
      .status(201)
      .json({ message: `Tokens revoked for user with id #${userId}` });
  }
}
