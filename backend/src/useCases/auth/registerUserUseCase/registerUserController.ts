import { Request, Response } from 'express';
import { container } from 'tsyringe';
import RegisterUserUseCase from './registerUserUseCase';

export default class RegisterUserUseController {
  async handle(request: Request, response: Response): Promise<Response> {
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

    return response.status(201).json(registerTokens);
  }
}
