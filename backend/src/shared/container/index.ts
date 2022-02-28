import { container } from 'tsyringe';
import PrismaSpecializationRepository from '../../repositories/specialization/implementations/PrismaISpecializationRepository';
import ISpecializationRepository from '../../repositories/specialization/ISpecializationRepository';
import PrismaUserRepository from '../../repositories/user/implementations/PrismaUserRepository';
import IUserRepository from '../../repositories/user/IUserRepository';
import IHashService from '../../services/hash/IHashService';
import Argon2Implementations from '../../services/hash/implementations/Argon2Implementations';

container.registerSingleton<IUserRepository>(
  'UserRepository',
  PrismaUserRepository
);

container.registerSingleton<ISpecializationRepository>(
  'SpecializationRepository',
  PrismaSpecializationRepository
);

container.registerSingleton<IHashService>('HashService', Argon2Implementations);
