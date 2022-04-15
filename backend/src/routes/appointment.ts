import { Router } from 'express';
import CreateAppointmentController from '@useCases/appointment/createAppointmentUseCase/createAppointmentController';
import SelectAppointmentController from '@useCases/appointment/selectAppointmentUseCase/selectAppointmentController';
import UpdateAppointmentController from '@useCases/appointment/updateAppointmentUseCase/updateAppointmentController';
import DeleteAppointmentController from '@useCases/appointment/deleteAppointmentUseCase/deleteAppointmentController';
import SelectAppointmentsController from '@useCases/appointment/selectAppointmentsPaginatedUseCase/selectAppointmentsPaginatedController';
import validator from '../middlewares/validator';
import createAppointmentSchema from '../useCases/appointment/createAppointmentUseCase/createAppointmentSchema';
import updateAppointmentSchema from '../useCases/appointment/updateAppointmentUseCase/updateAppointmentSchema';
import authenticator from '../middlewares/authenticator';

const routes = Router();

const createAppointmentController = new CreateAppointmentController();
const selectAppointmentUseController = new SelectAppointmentController();
const selectAppointmentsUseController = new SelectAppointmentsController();
const updateAppointmentController = new UpdateAppointmentController();
const deleteAppointmentController = new DeleteAppointmentController();

routes.post(
  '/',
  validator(createAppointmentSchema),
  authenticator,
  createAppointmentController.handle
);
routes.get('/', selectAppointmentsUseController.handle, authenticator);
routes.get('/:id', selectAppointmentUseController.handle, authenticator);
routes.put(
  '/:id',
  validator(updateAppointmentSchema),
  authenticator,
  updateAppointmentController.handle
);
routes.delete('/:id', deleteAppointmentController.handle, authenticator);

export default routes;
