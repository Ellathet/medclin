import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { container } from 'tsyringe';
import SelectAppointmentUseCase from './selectAppointmentUseCase';

export default class SelectAppointmentController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const selectedAppointmentUseCase = container.resolve(
        SelectAppointmentUseCase
      );

      const { id } = request.params;

      const user = await selectedAppointmentUseCase.execute({ id });

      return response.status(StatusCodes.OK).json(user);
    } catch (error) {
      return next(error);
    }
  }
}
