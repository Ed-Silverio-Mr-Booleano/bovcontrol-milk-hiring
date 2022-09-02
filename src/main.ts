import server from './server'
import FarmersRouter from './presentation/routers/farmer/farmer-router'
import { GetAllFramers } from './domain/use-cases/farmer/get-all-farmers-use-case'
import { FarmerRespositoryImpl } from './domain/repositories/farmer-respository'
import { CreateFarmer } from './domain/use-cases/farmer/create-farmer-use-case'
import { MongoClient } from 'mongodb'
import { NoSQLDatabaseWrapper } from './data/interfaces/data-source/farmer/nosql-database-data-source'
import { MongoDBFarmerDataSource } from './data/data-sources/mongodb/mongodb-famer-data-source'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3333

async function getMongoDS (): Promise<MongoDBFarmerDataSource> {
  const client: MongoClient = new MongoClient(process.env.URI)
  await client.connect()
  const db = client.db(process.env.DB)

  const farmerDatabase: NoSQLDatabaseWrapper = {
    find: (query) => db.collection(process.env.COLLECTION1).find(query).toArray(),
    insertOne: (doc) => db.collection(process.env.COLLECTION1).insertOne(doc)
  }
  return new MongoDBFarmerDataSource(farmerDatabase)
}
(async () => {
  const dataSource = await getMongoDS()

  const farmerMiddleware = FarmersRouter(
    new CreateFarmer(new FarmerRespositoryImpl(dataSource)),
    new GetAllFramers(new FarmerRespositoryImpl(dataSource))
  )
  server.use('/farmers', farmerMiddleware)
  server.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`))
})()
