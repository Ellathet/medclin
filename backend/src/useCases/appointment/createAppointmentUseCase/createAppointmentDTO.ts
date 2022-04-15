import { Appointment } from '@prisma/client';

type ICreateAppointmentDTO = Omit<
  Appointment,
  'id' | 'date' | 'createdAt' | 'updatedAt'
> & {
  date: Date | string;
};

export default ICreateAppointmentDTO;
