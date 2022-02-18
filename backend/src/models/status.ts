import IAppointmentEntity from './appointment';

export default interface IStatusEntity {
  id: string;
  status: string;
  statusEnum: number;
  appointments: IAppointmentEntity[];
}
