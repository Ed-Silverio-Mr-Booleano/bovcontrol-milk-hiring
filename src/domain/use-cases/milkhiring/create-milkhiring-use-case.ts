import { MilkHiringRequestEntity } from '../../entities/milkhiring'
import { MilkHiringRepository } from '../../interfaces/repositories/milkhiring-repository'
import { CreateMilkHiringUseCase } from '../../interfaces/use-cases/milkhiring/create-milkhiring-use-case'

export class CreateMilkHiring implements CreateMilkHiringUseCase {
  milkhiringRepository: MilkHiringRepository
  constructor (milkhiringRepository: MilkHiringRepository) {
    this.milkhiringRepository = milkhiringRepository
  }

  execute (milkhiring: MilkHiringRequestEntity): void {
    this.milkhiringRepository.createMilkHiring(milkhiring)
  }
}
