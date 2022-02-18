import ISpecializationEntity from './specialization';
import IStatusEntity from './status';
import IUserEntity from './user';

export default interface IAppointmentEntity {
  id: string;
  medic: IUserEntity[];
  medicId: string;
  patient: IUserEntity[];
  patientId: string;
  description?: string;
  specialization: ISpecializationEntity;
  specializationId: string;
  status: IStatusEntity;
  statusId: string;
  result: string;
  data: Date;
}
