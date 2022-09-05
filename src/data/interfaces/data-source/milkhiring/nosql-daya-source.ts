export interface MilkHiringNoSQLDatabaseWrapper {
  agregrate(pipeline: string[], farmer: string, month: string): Promise<any[]>
  insertOne(doc: any): void
}
