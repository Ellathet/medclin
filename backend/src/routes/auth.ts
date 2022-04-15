import { Router } from 'express';
import authenticator from '../middlewares/authenticator';
import validator from '../middlewares/validator';
import LoginUserController from '../useCases/auth/loginUserUseCase/loginUserController';
import loginUserSchema from '../useCases/auth/loginUserUseCase/loginUserSchema';
import RefreshTokenController from '../useCases/auth/refreshTokenUseCase/refreshTokenController';
import refreshTokenSchema from '../useCases/auth/refreshTokenUseCase/refreshTokenSchema';
import RegisterUserUseController from '../useCases/auth/registerUserUseCase/registerUserController';
import registerUserSchema from '../useCases/auth/registerUserUseCase/registerUserSchema';
import RevokeTokensController from '../useCases/auth/revokeTokensUseCase/revokeTokensController';

const routes = Router();

const loginUserController = new LoginUserController();
const registerUserUseController = new RegisterUserUseController();
const revokeTokensController = new RevokeTokensController();
const refreshTokenController = new RefreshTokenController();

routes.post('/login', validator(loginUserSchema), loginUserController.handle);

routes.post(
  '/register',
  validator(registerUserSchema),
  registerUserUseController.handle
);

routes.post(
  '/revoke-tokens/:userId',
  revokeTokensController.handle,
  authenticator
);

routes.post(
  '/refresh-token',
  validator(refreshTokenSchema),
  refreshTokenController.handle
);

export default routes;
