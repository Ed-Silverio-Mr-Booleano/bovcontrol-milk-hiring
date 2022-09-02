import { FarmerEntity } from '../../../entities/farmer'

export interface CreateFarmerUseCase {
  execute(farmer: FarmerEntity): void
}
