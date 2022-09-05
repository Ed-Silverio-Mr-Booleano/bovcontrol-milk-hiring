import { MilkHiringRequestEntity } from '../../../domain/entities/milkhiring'
import { MilkHiringDataSource } from '../../interfaces/data-source/milkhiring/milkhiring-data-source'
import { MilkHiringNoSQLDatabaseWrapper } from '../../interfaces/data-source/milkhiring/nosql-daya-source'

export class MongoDBMilkHiringDataSource implements MilkHiringDataSource {
  private readonly db: MilkHiringNoSQLDatabaseWrapper
  constructor (db: MilkHiringNoSQLDatabaseWrapper) {
    this.db = db
  }

  async getVolumeDay (farmer: string, month: string): Promise<any[]> {
    const result = await this.db.agregrate([], farmer, month)
    return result
  }

  create (milkhiring: MilkHiringRequestEntity): void {
    this.db.insertOne(milkhiring)
  }
}
