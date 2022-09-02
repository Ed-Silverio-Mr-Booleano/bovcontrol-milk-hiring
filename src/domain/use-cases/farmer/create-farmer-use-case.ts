import { FarmerEntity } from '../../entities/farmer'
import { FarmerRepository } from '../../interfaces/repositories/farmer-repository'
import { CreateFarmerUseCase } from '../../interfaces/use-cases/farmer/create-farmer-use-case'

export class CreateFarmer implements CreateFarmerUseCase {
  farmerRepository: FarmerRepository
  constructor (FarmerRepository: FarmerRepository) {
    this.farmerRepository = FarmerRepository
  }

  execute (farmer: FarmerEntity): void {
    this.farmerRepository.createFarmer(farmer)
  }
}
