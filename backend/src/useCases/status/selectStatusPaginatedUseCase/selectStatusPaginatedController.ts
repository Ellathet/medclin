import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { container } from 'tsyringe';
import SelectStatusPaginatedUseCase from './selectStatusPaginatedUseCase';

export default class SelectStatusPaginatedController {
  async handle(request: Request, response: Response): Promise<Response> {
    const selectStatusPaginated = await container.resolve(
      SelectStatusPaginatedUseCase
    );

    const { orderBy, offset, limit, search } = request.params;

    const status = await selectStatusPaginated.execute({
      orderBy,
      offset: Number(offset),
      limit: Number(limit),
      search,
    });

    return response.status(StatusCodes.OK).json(status);
  }
}
