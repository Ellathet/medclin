import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserUseCase from './createUserUseCase';

export default class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
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

    return response.status(201).json(user);
  }
}
