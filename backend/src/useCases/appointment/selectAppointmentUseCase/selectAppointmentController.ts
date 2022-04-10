import { Request, Response } from 'express';
import { container } from 'tsyringe';
import SelectAppointmentUseCase from './selectAppointmentUseCase';

export default class SelectAppointmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const selectedAppointmentUseCase = container.resolve(
      SelectAppointmentUseCase
    );

    const { id } = request.params;

    const user = await selectedAppointmentUseCase.execute({ id });

    return response.status(200).json(user);
  }
}
