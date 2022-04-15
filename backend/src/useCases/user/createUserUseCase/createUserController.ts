import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { container } from 'tsyringe';
import CreateUserUseCase from './createUserUseCase';

export default class CreateUserController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const createUserUseCase = container.resolve(CreateUserUseCase);

      const { email, name, username, rg, cpf, birthday, password, roleEnum } =
        request.body;

      const user = await createUserUseCase.execute({
        email,
        name,
        username,
        rg,
        cpf,
        birthday,
        password,
        roleEnum,
      });

      return response.status(StatusCodes.CREATED).json(user);
    } catch (error) {
      next(error);
    }
  }
}
