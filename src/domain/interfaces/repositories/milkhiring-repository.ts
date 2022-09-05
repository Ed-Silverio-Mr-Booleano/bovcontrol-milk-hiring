import { MilkHiringRequestEntity } from '../../entities/milkhiring'

export interface MilkHiringRepository {
  createMilkHiring(milkhiring: MilkHiringRequestEntity): void
  getMilkVolumeDay(farmer: string, month: string): Promise<any[] | null>
}
