import { FarmerEntity } from '../../entities/farmer'
import { FarmerRepository } from '../../interfaces/repositories/farmer-repository'
import { GetAllFarmersUseCase } from '../../interfaces/use-cases/farmer/get-all-farmers-use-case'

export class GetAllFramers implements GetAllFarmersUseCase {
  famerRepository: FarmerRepository
  constructor (farmerRepository: FarmerRepository) {
    this.famerRepository = farmerRepository
  }

  async execute (): Promise<FarmerEntity[]> {
    const result = await this.famerRepository.getFarmers()
    return result
  }
}
