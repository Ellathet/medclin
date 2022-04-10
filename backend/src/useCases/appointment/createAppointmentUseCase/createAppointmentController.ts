import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateAppointmentUseCase from './createAppointmentUseCase';

export default class CreateAppointmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createAppointmentUseCase = container.resolve(
      CreateAppointmentUseCase
    );

    const {
      medicId,
      description,
      patientId,
      specializationId,
      statusId,
      result,
      date,
    } = request.body;

    const appointment = await createAppointmentUseCase.execute({
      medicId,
      description,
      patientId,
      specializationId,
      statusId,
      result,
      date,
    });

    return response.status(201).json(appointment);
  }
}
