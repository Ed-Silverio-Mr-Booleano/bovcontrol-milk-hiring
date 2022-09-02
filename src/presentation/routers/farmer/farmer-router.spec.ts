import request from 'supertest'
import { GetAllFarmersUseCase } from '../../../domain/interfaces/use-cases/farmer/get-all-farmers-use-case'
import { CreateFarmerUseCase } from '../../../domain/interfaces/use-cases/farmer/create-farmer-use-case'
import FarmersRouter from './farmer-router'
import server from '../../../server'
import { FarmerEntity } from '../../../domain/entities/farmer'

class MockGetAllFarmersUseCase implements GetAllFarmersUseCase {
  async execute (): Promise<FarmerEntity[]> {
    throw new Error('Method not implemented')
  }
}
class MockCreateFarmerUseCase implements CreateFarmerUseCase {
  execute (farmer: FarmerEntity): void {
    throw new Error('Method not implemented')
  }
}
describe('Farmer Router', () => {
  let mockCreateFarmerUseCase: CreateFarmerUseCase
  let mockGetAllFarmersUseCase: GetAllFarmersUseCase

  beforeAll(() => {
    mockCreateFarmerUseCase = new MockCreateFarmerUseCase()
    mockGetAllFarmersUseCase = new MockGetAllFarmersUseCase()
    server.use('/farmers', FarmersRouter(mockCreateFarmerUseCase, mockGetAllFarmersUseCase))
  })
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('GET /farmers', () => {
    test('should return 200 with data', async () => {
      const ExpectedData = [{ id: '1', farmer: 'Jhon Doe', farm: 'Legacy Vegetable', distance_from_factory: 85 }]
      jest.spyOn(mockGetAllFarmersUseCase, 'execute').mockImplementation(async () => await Promise.resolve(ExpectedData))

      const response = await request(server).get('/farmers')

      expect(response.status).toBe(200)
      expect(mockGetAllFarmersUseCase.execute).toBeCalledTimes(1)
      expect(response.body).toStrictEqual(ExpectedData)
    })
  })
})
