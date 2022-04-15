import { NextFunction, Request, Response } from 'express';

// eslint-disable-next-line no-unused-vars
const genericErrorHandler = (
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  console.error(error);

  return response.json({ error, response: error.message });
};

export default genericErrorHandler;
