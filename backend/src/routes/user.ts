import { Router } from 'express';
import authenticator from '../middlewares/authenticator';
import validator from '../middlewares/validator';
import CreateUserController from '../useCases/user/createUserUseCase/createUserController';
import createUserSchema from '../useCases/user/createUserUseCase/createUserSchema';
import DeleteUserController from '../useCases/user/deleteUserUseCase/deleteUserController';
import SelectUsersPaginatedController from '../useCases/user/selectUsersPaginatedUseCase/selectUsersPaginatedController';
import SelectUserController from '../useCases/user/selectUserUseCase/selectUserController';
import UpdateUserController from '../useCases/user/updateUserUseCase/updateUserController';
import updateUserSchema from '../useCases/user/updateUserUseCase/updateUserSchema';

const routes = Router();

const createUserController = new CreateUserController();
const selectUserUseController = new SelectUserController();
const selectUsersPaginatedController = new SelectUsersPaginatedController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

routes.post(
  '/',
  authenticator,
  validator(createUserSchema),
  createUserController.handle
);
routes.get('/:id', authenticator, selectUserUseController.handle);
routes.get('/', authenticator, selectUsersPaginatedController.handle);
routes.put(
  '/:id',
  authenticator,
  validator(updateUserSchema),
  updateUserController.handle
);
routes.delete('/:id', authenticator, deleteUserController.handle);

export default routes;
