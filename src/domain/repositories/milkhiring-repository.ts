import { MilkHiringDataSource } from '../../data/interfaces/data-source/milkhiring/milkhiring-data-source'
import { MilkHiringRequestEntity } from '../entities/milkhiring'
import { MilkHiringRepository } from '../interfaces/repositories/milkhiring-repository'

export class MilkHiringRespositoryImpl implements MilkHiringRepository {
  milkhiringDataSource: MilkHiringDataSource
  constructor (milkhiringDataSource: MilkHiringDataSource) {
    this.milkhiringDataSource = milkhiringDataSource
  }

  createMilkHiring (milkhiring: MilkHiringRequestEntity): void {
    this.milkhiringDataSource.create(milkhiring)
  }

  async getMilkVolumeDay (farmer: string, month: string): Promise<any[]> {
    const result = await this.milkhiringDataSource.getVolumeDay(farmer, month)
    return result
  }
}
