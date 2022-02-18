import IAppointmentEntity from './appointment';
import IRoleEntity from './role';
import ISpecializationEntity from './specialization';

export default interface IUserEntity {
  id: string;
  email: string;
  name: string;
  username: string;
  rg: string;
  cpf: string;
  birthday: Date;
  password: string;
  patientAppointments: IAppointmentEntity[];
  medicAppointments: IAppointmentEntity[];
  role: IRoleEntity[];
  roleEnum: number;
  specialties: ISpecializationEntity[];
  specialtyId?: string;
}
