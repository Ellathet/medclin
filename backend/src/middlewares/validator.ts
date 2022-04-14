import { NextFunction, Request, Response } from 'express';

const validator =
  (schema: any) =>
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      await schema.validate({
        body: request.body,
        query: request.query,
        params: request.params,
      });
      return next();
    } catch (error) {
      return response.status(500).json({
        type: (error as Error).name,
        message: (error as Error).message,
      });
    }
  };

export default validator;
