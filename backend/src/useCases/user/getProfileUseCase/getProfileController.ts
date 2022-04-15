import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { container } from 'tsyringe';
import GetProfileUseCase from './getProfileUseCase';

export default class GetProfileController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const getProfileUseCase = await container.resolve(GetProfileUseCase);

      const { userId } = request.user;

      const user = await getProfileUseCase.execute(userId);

      return response.status(StatusCodes.OK).json(user);
    } catch (error) {
      return next(error);
    }
  }
}
