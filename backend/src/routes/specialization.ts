import { Router } from 'express';
import authenticator from '../middlewares/authenticator';
import SelectSpecializationsPaginatedController from '../useCases/specialization/selectSpecializationsPaginatedUseCase/selectSpecializationsPaginatedController';

const routes = Router();

const selectSpecializationsPaginatedUseCase =
  new SelectSpecializationsPaginatedController();

routes.get('/', selectSpecializationsPaginatedUseCase.handle, authenticator);

export default routes;
