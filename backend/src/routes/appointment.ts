import { Router } from 'express';
import CreateAppointmentController from '@useCases/appointment/createAppointmentUseCase/createAppointmentController';
import SelectAppointmentController from '@useCases/appointment/selectAppointmentUseCase/selectAppointmentController';
import UpdateAppointmentController from '@useCases/appointment/updateAppointmentUseCase/updateAppointmentController';
import DeleteAppointmentController from '@useCases/appointment/deleteAppointmentUseCase/deleteAppointmentController';
import SelectAppointmentsController from '@useCases/appointment/selectAppointmentsPaginatedUseCase/selectAppointmentsPaginatedController';

const routes = Router();

const createAppointmentController = new CreateAppointmentController();
const selectAppointmentUseController = new SelectAppointmentController();
const selectAppointmentsUseController = new SelectAppointmentsController();
const updateAppointmentController = new UpdateAppointmentController();
const deleteAppointmentController = new DeleteAppointmentController();

routes.post('/', createAppointmentController.handle);
routes.get('/', selectAppointmentsUseController.handle);
routes.get('/:id', selectAppointmentUseController.handle);
routes.put('/:id', updateAppointmentController.handle);
routes.delete('/:id', deleteAppointmentController.handle);

export default routes;
