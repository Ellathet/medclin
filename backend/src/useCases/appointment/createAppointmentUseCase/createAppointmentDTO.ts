import { Appointment } from '@prisma/client';

type ICreateAppointmentDTO = Omit<Appointment, 'id' | 'date'> & {
  date: Date | string;
};

export default ICreateAppointmentDTO;
