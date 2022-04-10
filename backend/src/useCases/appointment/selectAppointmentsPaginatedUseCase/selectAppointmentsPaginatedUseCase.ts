import { Appointment } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import IAppointmentRepository from '../../../repositories/appointment/IAppointmentRepository';
import ISelectAppointmentsPaginatedDTO from './selectAppointmentsPaginatedDTO';

@injectable()
export default class SelectAppointmentsPaginatedUseCase {
  constructor(
    @inject('AppointmentRepository')
    private appointmentsRepository: IAppointmentRepository
  ) {}

  async execute(
    params: ISelectAppointmentsPaginatedDTO
  ): Promise<Appointment[]> {
    const { offset, limit } = params;

    const appointments = await this.appointmentsRepository.getPaginated({
      offset: offset || 0,
      limit: limit || 10,
    });

    return appointments;
  }
}
