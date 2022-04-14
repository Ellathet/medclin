import { NextFunction, Request, Response } from 'express';

const unauthorizedCodes = {
  credentials_bad_scheme:
    'O formato do header deve ser: Authorization: Bearer [token]',
  credentials_bad_format:
    'O formato do header deve ser: Authorization: Bearer [token]',
  credentials_required: 'Token necessário para acessar esta url',
  invalid_token: 'Token inválido',
  revoked_token: 'O token enviado foi revogado',
};

// eslint-disable-next-line no-unused-vars
const genericErrorHandler =
  () =>
  (error: any, request: Request, response: Response, next: NextFunction) => {
    console.error(error.code);

    if (error.response) {
      console.log('HANDLED_ERROR:', error.name);
      return error.response();
    }

    if (error.name === 'ValidationError' && error.value) {
      console.log('HANDLED_ERROR:', error.name);
      return response.status(400).json({
        message: `Ocorreram ${error.errors.length} erros de validação. Corrija-os e tente novamente.`,
        detail: {
          errors: error.inner,
          messages: error.errors,
        },
      });
    }

    if (error.name === 'UnauthorizedError') {
      console.log('HANDLED_ERROR:', 'UnauthorizedError');
      return response.status(401).json({
        message:
          // unauthorizedCodes[error.code] ||
          'Não foi possível autenticar esta requisição',
        detail: {
          hostname: request.hostname,
          originalUrl: request.originalUrl,
          method: request.method,
        },
      });
    }

    console.log('UNHANDLED_ERROR:', error.name);
    return response.status(500).json({
      detail: {
        name: error.name,
        message: error.message,
      },
    });
  };

export default genericErrorHandler;
