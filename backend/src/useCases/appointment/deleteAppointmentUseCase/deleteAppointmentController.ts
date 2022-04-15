import { NextFunction, Request, Response } from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { container } from 'tsyringe';
import DeleteAppointmentUseCase from './deleteAppointmentUseCase';

export default class DeleteAppointmentController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const deleteAppointmentUseCase = container.resolve(
        DeleteAppointmentUseCase
      );
      const { id } = request.params;

      await deleteAppointmentUseCase.execute({ id });

      return response.status(StatusCodes.OK).json({
        message: `Id query: ${id}successfully deleted `,
      });
    } catch (error) {
      return next(error);
    }
  }
}
