import { Request, Response } from 'express';
import { container } from 'tsyringe';
import SelectUsersPaginatedUseCase from './selectUsersPaginatedUseCase';

export default class SelectUserPaginatedController {
  async handle(request: Request, response: Response): Promise<Response> {
    const selectUsersPaginated = await container.resolve(
      SelectUsersPaginatedUseCase
    );

    const { orderBy, offset, limit, search } = request.params;

    const users = await selectUsersPaginated.execute({
      orderBy,
      offset: Number(offset),
      limit: Number(limit),
      search,
    });

    return response.status(200).json(users);
  }
}
