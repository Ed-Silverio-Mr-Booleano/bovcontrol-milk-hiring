import express, { Request, Response } from 'express'
import { GetMilkVolumeDayUseCase } from '../../../domain/interfaces/use-cases/milkhiring/get-milk-volume-day'
import { CreateMilkHiringUseCase } from '../../../domain/interfaces/use-cases/milkhiring/create-milkhiring-use-case'
export default function FarmersRouter (
  createMilkHiringUseCase: CreateMilkHiringUseCase,
  getMilkVolumeDayUseCase: GetMilkVolumeDayUseCase
): express.Router {
  const router = express.Router()

  router.get('/', async (request: Request, response: Response) => {
    try {
      const milkVolume = await getMilkVolumeDayUseCase.execute()
      response.send(milkVolume)
    } catch (error) {
      console.log(error.message)
      response.status(500).send()
    }
  })

  router.post('/', async (request: Request, response: Response) => {
    try {
      createMilkHiringUseCase.execute(request.body)
      response.status(201).json({ message: 'Created' })
    } catch (error) {
      console.log(error.message)
      response.status(500).send({ message: 'Error saving data' })
    }
  })

  return router
}
