import { FarmerEntity } from '../../../entities/farmer'

export interface GetAllFarmersUseCase {
  execute(): Promise<FarmerEntity[] | null>
}
