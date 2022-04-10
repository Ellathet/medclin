import { Appointment } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import IAppointmentRepository from '@repositories/appointment/IAppointmentRepository';
import ISelectAppointmentDTO from './selectAppointmentDTO';

@injectable()
export default class SelectAppointmentUseCase {
  constructor(
    @inject('AppointmentRepository')
    private appointmentRepository: IAppointmentRepository
  ) {}

  async execute({ id }: ISelectAppointmentDTO): Promise<Appointment | null> {
    const selectedAppointment = await this.appointmentRepository.getById(id);

    return selectedAppointment;
  }
}
