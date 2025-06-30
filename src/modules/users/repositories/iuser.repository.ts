import { IRepository } from '../../../common/interfaces/irepository.interface';
import { User } from '../domain/user.entity';

export interface IUserRepository extends IRepository<User> {
  findByEmail(email: string): Promise<User | null>;
}
