import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { container } from 'tsyringe';
import UpdateAppointmentUseCase from './updateAppointmentUseCase';

export default class UpdateAppointmentController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const updateAppointmentUseCase = container.resolve(
        UpdateAppointmentUseCase
      );

      const { id } = request.params;

      const {
        medicId,
        description,
        patientId,
        specializationId,
        statusEnum,
        result,
        date,
      } = request.body;

      const appointmentUpdated = await updateAppointmentUseCase.execute(id, {
        medicId,
        description,
        patientId,
        specializationId,
        statusEnum,
        result,
        date,
      });

      return response.status(StatusCodes.OK).json(appointmentUpdated);
    } catch (error) {
      return next(error);
    }
  }
}
