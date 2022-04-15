import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { container } from 'tsyringe';
import UpdateUserUseCase from './updateUserUseCase';

export default class UpdateUserController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const updateUserUseCase = container.resolve(UpdateUserUseCase);

      const { email, name, username, rg, cpf, birthday, password, roleEnum } =
        request.body;
      const { id } = request.params;

      const userUpdated = await updateUserUseCase.execute(id, {
        email,
        name,
        username,
        rg,
        cpf,
        birthday,
        password,
        roleEnum,
      });

      return response.status(StatusCodes.OK).json(userUpdated);
    } catch (error) {
      return next(error);
    }
  }
}
