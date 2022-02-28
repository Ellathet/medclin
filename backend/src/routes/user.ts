import { Router } from 'express';
import CreateUserController from '../useCases/user/createUserUseCase/createUserController';
import DeleteUserController from '../useCases/user/deleteUserUseCase/deleteUserController';
import SelectUsersPaginatedController from '../useCases/user/selectUsersPaginatedUseCase/selectUsersPaginatedController';
import SelectUserController from '../useCases/user/selectUserUseCase/selectUserController';
import UpdateUserController from '../useCases/user/updateUserUseCase/updateUserController';

const routes = Router();

const createUserController = new CreateUserController();
const selectUserUseController = new SelectUserController();
const selectUsersPaginatedController = new SelectUsersPaginatedController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

routes.post('/', createUserController.handle);
routes.get('/:id', selectUserUseController.handle);
routes.get('/', selectUsersPaginatedController.handle);
routes.put('/:id', updateUserController.handle);
routes.delete('/:id', deleteUserController.handle);

export default routes;
