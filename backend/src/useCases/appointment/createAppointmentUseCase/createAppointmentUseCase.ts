import { Appointment } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import IAppointmentRepository from '@repositories/appointment/IAppointmentRepository';
import { DateTime } from 'luxon';
import moment from 'moment';
import ICreateAppointmentDTO from './createAppointmentDTO';

@injectable()
export default class CreateAppointmentUseCase {
  constructor(
    @inject('AppointmentRepository')
    private appointmentRepository: IAppointmentRepository
  ) {}

  async execute(appointment: ICreateAppointmentDTO): Promise<Appointment> {
    const createdAppointment = await this.appointmentRepository.save({
      ...appointment,
      date: moment(appointment.date).toDate(),
    });

    return createdAppointment;
  }
}
