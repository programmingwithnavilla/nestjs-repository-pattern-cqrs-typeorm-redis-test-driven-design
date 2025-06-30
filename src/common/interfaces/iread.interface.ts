export interface IRead<T> {
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T>;
}
