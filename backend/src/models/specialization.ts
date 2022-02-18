import IAppointmentEntity from './appointment';
import UserEntity from './user';

export default interface ISpecializationEntity {
  id: string;
  specialization: string;
  appointments: IAppointmentEntity[];
  users: UserEntity[];
}
