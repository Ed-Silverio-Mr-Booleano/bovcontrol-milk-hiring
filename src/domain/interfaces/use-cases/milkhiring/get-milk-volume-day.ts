
export interface GetMilkVolumeDayUseCase {
  execute(farmer: string, month: string): Promise<any[] | null>
}
