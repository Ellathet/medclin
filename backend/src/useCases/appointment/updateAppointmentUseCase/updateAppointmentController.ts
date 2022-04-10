import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UpdateAppointmentUseCase from './updateAppointmentUseCase';

export default class UpdateAppointmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateAppointmentUseCase = container.resolve(
      UpdateAppointmentUseCase
    );

    const { id } = request.params;

    const {
      medicId,
      description,
      patientId,
      specializationId,
      statusId,
      result,
      date,
    } = request.body;

    const appointmentUpdated = await updateAppointmentUseCase.execute(id, {
      medicId,
      description,
      patientId,
      specializationId,
      statusId,
      result,
      date,
    });

    return response.status(200).json(appointmentUpdated);
  }
}
