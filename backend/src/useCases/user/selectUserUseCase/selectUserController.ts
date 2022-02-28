import { User } from '@prisma/client';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import SelectUserUseCase from './selectUserUseCase';

export default class SelectUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const selectUserUseCase = container.resolve(SelectUserUseCase);

    const { id } = request.params;

    const user = await selectUserUseCase.execute({ id });

    return response.status(200).json(user);
  }
}
