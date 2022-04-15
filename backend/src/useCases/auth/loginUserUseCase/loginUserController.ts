import { Request, Response } from 'express';
import { container } from 'tsyringe';
import LoginUserUseCase from './loginUserUseCase';

export default class LoginUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const loginUserUseCase = container.resolve(LoginUserUseCase);

    const { email, password, username } = request.body;

    const registerTokens = await loginUserUseCase.execute(
      email,
      password,
      username
    );

    return response.status(201).json(registerTokens);
  }
}
