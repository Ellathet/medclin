import { Appointment } from '@prisma/client';
import prisma from '../../../../prisma/client';
import ICreateAppointmentDTO from '../../../useCases/appointment/createAppointmentUseCase/createAppointmentDTO';
import ISelectAppointmentsPaginatedDTO from '../../../useCases/appointment/selectAppointmentsPaginatedUseCase/selectAppointmentsPaginatedDTO';
import IAppointmentRepository from '../IAppointmentRepository';

export default class PrismaAppointmentRepository
  implements IAppointmentRepository
{
  async save(appointment: ICreateAppointmentDTO): Promise<Appointment> {
    const newAppointment = await prisma.appointment.create({
      data: appointment,
    });

    return newAppointment;
  }

  async getById(id: string): Promise<Appointment | null> {
    const appointment = await prisma.appointment.findUnique({
      where: { id },
      include: {
        medic: true,
        patient: true,
        specialization: true,
        status: true,
      },
    });

    return appointment;
  }

  async getPaginated(
    parameters: ISelectAppointmentsPaginatedDTO
  ): Promise<Appointment[]> {
    const appointments = await prisma.appointment.findMany({
      skip: parameters.offset,
      take: parameters.limit,
      include: {
        medic: true,
        patient: true,
        specialization: true,
        status: true,
      },
    });

    return appointments;
  }

  async update(
    id: string,
    appointment: Partial<Appointment>
  ): Promise<Appointment> {
    const appointmentUpToDate = await prisma.appointment.update({
      where: { id },
      data: appointment,
    });

    return appointmentUpToDate;
  }

  async delete(id: string): Promise<void> {
    await prisma.appointment.delete({
      where: { id },
    });
  }
}
