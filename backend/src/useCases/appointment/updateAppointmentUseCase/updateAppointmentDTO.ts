import { Appointment } from '@prisma/client';

type IUpdateAppointmentDTO = Partial<Appointment> & {
  date?: Date | string;
};

export default IUpdateAppointmentDTO;
