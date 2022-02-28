import { Router } from 'express';
import SelectSpecializationsPaginatedController from '../useCases/specialization/selectSpecializationsPaginatedUseCase/selectSpecializationsPaginatedController';

const routes = Router();

const selectSpecializationsPaginatedUseCase =
  new SelectSpecializationsPaginatedController();

routes.get('/', selectSpecializationsPaginatedUseCase.handle);

export default routes;
