import { MilkHiringRequestEntity } from '../../../../domain/entities/milkhiring'

export interface MilkHiringDataSource {
  create(milkhiring: MilkHiringRequestEntity): void
  getVolumeDay(farmer: string, month: string): Promise<any[] | null>
}
