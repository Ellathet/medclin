import { Request, Response } from 'express';
import { container } from 'tsyringe';
import SelectSpecializationsPaginatedUseCase from './selectSpecializationsPaginatedUseCase';

export default class SelectSpecializationsPaginatedController {
  async handle(request: Request, response: Response): Promise<Response> {
    const selectSpecializationsPaginated = await container.resolve(
      SelectSpecializationsPaginatedUseCase
    );

    const { orderBy, offset, limit, search } = request.params;

    const specializations = await selectSpecializationsPaginated.execute({
      orderBy,
      offset: Number(offset),
      limit: Number(limit),
      search,
    });

    return response.status(200).json(specializations);
  }
}
