import { Appointment } from '@prisma/client';
import ICreateAppointmentDTO from '@useCases/appointment/createAppointmentUseCase/createAppointmentDTO';
import ISelectAppointmentsPaginatedDTO from '@useCases/appointment/selectAppointmentsPaginatedUseCase/selectAppointmentsPaginatedDTO';
import IUpdateAppointmentDTO from '@useCases/appointment/updateAppointmentUseCase/IUpdateAppointmentDTO';

export default interface IAppointmentRepository {
  save(appointment: ICreateAppointmentDTO): Promise<Appointment>;
  getById(id: string): Promise<Appointment | null>;
  getPaginated(
    parameters: ISelectAppointmentsPaginatedDTO
  ): Promise<Appointment[]>;
  update: (
    id: string,
    appointment: IUpdateAppointmentDTO
  ) => Promise<Appointment>;
  delete(id: string): Promise<void>;
}
