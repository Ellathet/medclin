import { inject, injectable } from 'tsyringe';
import IAppointmentRepository from '@repositories/appointment/IAppointmentRepository';
import IDeleteAppointmentDTO from './deleteAppointmentDTO';

@injectable()
export default class DeleteAppointmentUseCase {
  constructor(
    @inject('AppointmentRepository')
    private appointmentRepository: IAppointmentRepository
  ) {}

  async execute({ id }: IDeleteAppointmentDTO): Promise<void> {
    await this.appointmentRepository.delete(id);
  }
}
