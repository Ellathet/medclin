import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateUserUseCase from './updateUserUseCase';

export default class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    const {
      email,
      name,
      username,
      rg,
      cpf,
      birthday,
      password,
      roleEnum,
      specialtyId,
    } = request.body;
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
      specialtyId,
    });

    return response.status(200).json(userUpdated);
  }
}
