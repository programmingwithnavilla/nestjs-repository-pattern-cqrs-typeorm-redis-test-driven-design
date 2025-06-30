export interface IBaseEntity {
  readonly id: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  archivedAt: Date | null;
}
