import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { container } from 'tsyringe';
import DeleteUserUseCase from './deleteUserUseCase';

export default class DeleteUserController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const deleteUserUseCase = container.resolve(DeleteUserUseCase);
      const { id } = request.params;

      await deleteUserUseCase.execute({ id });

      return response
        .status(StatusCodes.OK)
        .json({ message: `User with id: ${id}successfully deleted` });
    } catch (error) {
      return next(error);
    }
  }
}
