import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { container } from 'tsyringe';
import SelectUsersPaginatedUseCase from './selectUsersPaginatedUseCase';

export default class SelectUserPaginatedController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const selectUsersPaginated = await container.resolve(
        SelectUsersPaginatedUseCase
      );

      const { orderBy, offset, limit, search } = request.params;

      const users = await selectUsersPaginated.execute({
        orderBy,
        offset: Number(offset),
        limit: Number(limit),
        search,
      });

      return response.status(StatusCodes.OK).json(users);
    } catch (error) {
      return next(error);
    }
  }
}
