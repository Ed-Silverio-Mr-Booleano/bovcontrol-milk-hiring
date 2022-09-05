import { MilkHiringRequestEntity } from '../../../entities/milkhiring'

export interface CreateMilkHiringUseCase {
  execute(milkhiring: MilkHiringRequestEntity): void
}
