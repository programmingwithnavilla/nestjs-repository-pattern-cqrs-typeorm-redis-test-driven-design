import { IBaseEntity } from 'src/common/entities/base.entity';

export class User implements IBaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  archivedAt: Date | null;
  constructor(
    public email: string,
    public name: string,
  ) {}
}
