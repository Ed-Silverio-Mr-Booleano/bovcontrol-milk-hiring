import { FarmerEntity } from '../../entities/farmer'

export interface FarmerRepository {
  createFarmer(farmer: FarmerEntity): void
  getFarmers(): Promise<FarmerEntity[] | null>
}
