import { NextFunction, Request, Response } from 'express';
import { container } from 'tsyringe';
import { StatusCodes } from 'http-status-codes';
import CreateAppointmentUseCase from './createAppointmentUseCase';

export default class CreateAppointmentController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const createAppointmentUseCase = container.resolve(
        CreateAppointmentUseCase
      );

      const {
        medicId,
        description,
        patientId,
        specializationId,
        statusEnum,
        result,
        date,
      } = request.body;

      const appointment = await createAppointmentUseCase.execute({
        medicId,
        description,
        patientId,
        specializationId,
        statusEnum,
        result,
        date,
      });

      return response.status(StatusCodes.CREATED).json(appointment);
    } catch (error) {
      return next(error);
    }
  }
}
