import { Router } from 'express';
import SelectStatusPaginatedController from '@useCases/status/selectStatusPaginatedUseCase/selectStatusPaginatedController';

const routes = Router();

const selectStatusPaginatedUseCase = new SelectStatusPaginatedController();

routes.get('/', selectStatusPaginatedUseCase.handle);

export default routes;
