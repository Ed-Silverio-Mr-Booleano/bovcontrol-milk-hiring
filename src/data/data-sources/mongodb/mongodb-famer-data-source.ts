import { FarmerEntity } from '../../../domain/entities/farmer'
import { FarmerDataSource } from '../../interfaces/data-source/farmer/farmer-data-source'
import { NoSQLDatabaseWrapper } from '../../interfaces/data-source/farmer/nosql-database-data-source'

export class MongoDBFarmerDataSource implements FarmerDataSource {
  private readonly db: NoSQLDatabaseWrapper
  constructor (db: NoSQLDatabaseWrapper) {
    this.db = db
  }

  async getAll (): Promise<FarmerEntity[]> {
    const resul = await this.db.find({})
    return resul.map(item => ({
      id: item._id.toString(),
      farmer: item.farmer,
      farm: item.farm,
      distance_from_factory: item.distance_from_factory
    }))
  }

  create (farmer: FarmerEntity): void {
    this.db.insertOne(farmer)
  }
}
