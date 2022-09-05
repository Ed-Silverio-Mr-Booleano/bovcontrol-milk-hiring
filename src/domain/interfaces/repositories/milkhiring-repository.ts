import { MilkHiringRequestEntity } from '../../entities/milkhiring'

export interface MilkHiringRepository {
  createMilkHiring(milkhiring: MilkHiringRequestEntity): void
  getMilkVolumeDay(): Promise<any[] | null>
}
