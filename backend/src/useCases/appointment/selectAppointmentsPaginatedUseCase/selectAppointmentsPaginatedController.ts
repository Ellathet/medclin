import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { container } from 'tsyringe';
import SelectAppointmentsPaginatedUseCase from './selectAppointmentsPaginatedUseCase';

export default class SelectAppointmentsPaginatedController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
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

      return response.status(StatusCodes.OK).json(appointments);
    } catch (error) {
      return next(error);
    }
  }
}
