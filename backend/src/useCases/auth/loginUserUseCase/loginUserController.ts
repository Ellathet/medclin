import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { container } from 'tsyringe';
import LoginUserUseCase from './loginUserUseCase';

export default class LoginUserController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const loginUserUseCase = container.resolve(LoginUserUseCase);

      const { email, password, username } = request.body;

      const registerTokens = await loginUserUseCase.execute(
        email,
        password,
        username
      );

      return response.status(StatusCodes.OK).json(registerTokens);
    } catch (error) {
      return next(error);
    }
  }
}
