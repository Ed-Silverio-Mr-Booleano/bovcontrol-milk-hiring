import { FarmerEntity } from '../../../../domain/entities/farmer'

export interface FarmerDataSource {
  create(farmer: FarmerEntity): void
  getAll(): Promise<FarmerEntity[] | null>
}
