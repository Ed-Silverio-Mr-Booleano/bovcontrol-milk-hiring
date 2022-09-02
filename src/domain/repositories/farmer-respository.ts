import { FarmerDataSource } from '../../data/interfaces/data-source/farmer/farmer-data-source'
import { FarmerEntity } from '../entities/farmer'
import { FarmerRepository } from '../interfaces/repositories/farmer-repository'

export class FarmerRespositoryImpl implements FarmerRepository {
  farmerDataSource: FarmerDataSource
  constructor (farmerDataSource: FarmerDataSource) {
    this.farmerDataSource = farmerDataSource
  }

  createFarmer (farmer: FarmerEntity): void {
    this.farmerDataSource.create(farmer)
  }

  async getFarmers (): Promise<FarmerEntity[]> {
    const result = await this.farmerDataSource.getAll()
    return result
  }
}
