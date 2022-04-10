import { container } from 'tsyringe';

import PrismaAppointmentRepository from '@repositories/appointment/implementations/PrismaAppointmentRepository';
import IHashService from '@services/hash/IHashService';
import Argon2Implementations from '@services/hash/implementations/Argon2Implementations';
import IAppointmentRepository from '@repositories/appointment/IAppointmentRepository';
import ISpecializationRepository from '@repositories/specialization/ISpecializationRepository';
import IUserRepository from '@repositories/user/IUserRepository';
import PrismaUserRepository from '@repositories/user/implementations/PrismaUserRepository';
import PrismaSpecializationRepository from '@repositories/specialization/implementations/PrismaSpecializationRepository';
import PrismaStatusRepository from '@repositories/status/implementations/PrismaStatusRepository';
import IStatusRepository from '@repositories/status/IStatusRepository';

container.registerSingleton<IUserRepository>(
  'UserRepository',
  PrismaUserRepository
);

container.registerSingleton<ISpecializationRepository>(
  'SpecializationRepository',
  PrismaSpecializationRepository
);

container.registerSingleton<IAppointmentRepository>(
  'AppointmentRepository',
  PrismaAppointmentRepository
);

container.registerSingleton<IStatusRepository>(
  'StatusRepository',
  PrismaStatusRepository
);

container.registerSingleton<IHashService>('HashService', Argon2Implementations);
