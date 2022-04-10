import { Appointment } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import IAppointmentRepository from '@repositories/appointment/IAppointmentRepository';
import moment from 'moment';
import IUpdateAppointmentDTO from './updateAppointmentDTO';

@injectable()
export default class UpdateAppointmentUseCase {
  constructor(
    @inject('AppointmentRepository')
    private appointmentRepository: IAppointmentRepository
  ) {}

  async execute(
    id: string,
    appointment: IUpdateAppointmentDTO
  ): Promise<Appointment | null> {
    const updatedAppointment = await this.appointmentRepository.update(id, {
      ...appointment,
      date: moment(appointment.date).toDate(),
    });

    return updatedAppointment;
  }
}
