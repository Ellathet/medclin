import { Request, Response } from 'express';
import { container } from 'tsyringe';
import SelectAppointmentsPaginatedUseCase from './selectAppointmentsPaginatedUseCase';

export default class SelectAppointmentsPaginatedController {
  async handle(request: Request, response: Response): Promise<Response> {
    const selectAppointmentPaginated = await container.resolve(
      SelectAppointmentsPaginatedUseCase
    );

    const { orderBy, offset, limit, search } = request.params;

    const appointments = await selectAppointmentPaginated.execute({
      orderBy,
      offset: Number(offset),
      limit: Number(limit),
      search,
    });

    return response.status(200).json(appointments);
  }
}
