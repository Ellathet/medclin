import { Request, Response } from 'express';
import { container } from 'tsyringe';
import DeleteUserUseCase from './deleteUserUseCase';

export default class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const deleteUserUseCase = container.resolve(DeleteUserUseCase);
    const { id } = request.params;

    await deleteUserUseCase.execute({ id });

    return response.status(200);
  }
}
