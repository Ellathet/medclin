import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { container } from 'tsyringe';
import RegisterUserUseCase from './registerUserUseCase';

export default class RegisterUserUseController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const registerUserUseCase = container.resolve(RegisterUserUseCase);

      const { email, name, username, rg, cpf, birthday, password, roleEnum } =
        request.body;

      const registerTokens = await registerUserUseCase.execute({
        email,
        name,
        username,
        rg,
        cpf,
        birthday,
        password,
        roleEnum,
      });

      return response.status(StatusCodes.CREATED).json(registerTokens);
    } catch (error) {
      return next(error);
    }
  }
}
