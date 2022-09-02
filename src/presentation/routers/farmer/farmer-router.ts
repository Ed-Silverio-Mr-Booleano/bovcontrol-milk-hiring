import express, { Request, Response } from 'express'
import { GetAllFarmersUseCase } from '../../../domain/interfaces/use-cases/farmer/get-all-farmers-use-case'
import { CreateFarmerUseCase } from '../../../domain/interfaces/use-cases/farmer/create-farmer-use-case'
export default function FarmersRouter (
  createFarmerUseCase: CreateFarmerUseCase,
  getAllFarmersUseCase: GetAllFarmersUseCase
): express.Router {
  const router = express.Router()

  router.get('/', async (request: Request, response: Response) => {
    try {
      const farmer = await getAllFarmersUseCase.execute()
      response.send(farmer)
    } catch (error) {
      console.log(error.message)
      response.status(500).send()
    }
  })

  router.post('/', async (request: Request, response: Response) => {
    try {
      await createFarmerUseCase.execute(request.body)
      response.status(201).json({ message: 'Created' })
    } catch (error) {
      console.log(error.message)
      response.status(500).send({ message: 'Error saving data' })
    }
  })

  return router
}
