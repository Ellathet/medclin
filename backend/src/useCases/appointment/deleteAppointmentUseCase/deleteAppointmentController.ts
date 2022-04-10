import { Request, Response } from 'express';
import { container } from 'tsyringe';
import DeleteAppointmentUseCase from './deleteAppointmentUseCase';

export default class DeleteAppointmentController {
  async handle(request: Request, response: Response): Promise<Response> {
    const deleteAppointmentUseCase = container.resolve(
      DeleteAppointmentUseCase
    );
    const { id } = request.params;

    await deleteAppointmentUseCase.execute({ id });

    return response.status(200);
  }
}
