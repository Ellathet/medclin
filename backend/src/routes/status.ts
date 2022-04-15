import { Router } from 'express';
import SelectStatusPaginatedController from '@useCases/status/selectStatusPaginatedUseCase/selectStatusPaginatedController';
import authenticator from '../middlewares/authenticator';

const routes = Router();

const selectStatusPaginatedController = new SelectStatusPaginatedController();

routes.get('/', selectStatusPaginatedController.handle, authenticator);

export default routes;
