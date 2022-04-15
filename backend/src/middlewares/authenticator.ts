import { NextFunction, Request, Response } from 'express';
import JWTImplementations from '../services/jwt/implementations/JWTImplementations';
import env from '../utils/env';

const authenticator = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { authorization } = request.headers;

  try {
    if (!authorization) {
      response.status(401);
      throw new Error('Un-Authorized');
    }

    const token = authorization.split(' ')[1];
    const jWTImplementations = new JWTImplementations();
    const payload = await jWTImplementations.verify(
      token,
      env().JWT_REFRESH_SECRET
    );

    request.user = payload;
  } catch (error: any) {
    response.status(401);

    if (error.name === 'TokenExpiredError') {
      throw new Error(error.name);
    }

    throw new Error('Un-Authorized');
  }

  return next();
};

export default authenticator;
