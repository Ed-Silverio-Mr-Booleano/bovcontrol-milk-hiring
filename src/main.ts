import server from './server'
import FarmersRouter from './presentation/routers/farmer/farmer-router'
// import MilkHiringsRouter from './presentation/routers/milkhiring/milkhiring-router'
import { GetAllFramers } from './domain/use-cases/farmer/get-all-farmers-use-case'
// import { GetAllMilkVolumeDay } from './domain/use-cases/milkhiring/get-milk-volume-day-use-case'
import { FarmerRespositoryImpl } from './domain/repositories/farmer-respository'
// import { MilkHiringRespositoryImpl } from './domain/repositories/milkhiring-repository'
import { CreateFarmer } from './domain/use-cases/farmer/create-farmer-use-case'
// import { CreateMilkHiring } from './domain/use-cases/milkhiring/create-milkhiring-use-case'
import { MongoClient } from 'mongodb'
import { NoSQLDatabaseWrapper } from './data/interfaces/data-source/farmer/nosql-database-data-source'
// import { MilkHiringNoSQLDatabaseWrapper } from './data/interfaces/data-source/milkhiring/nosql-daya-source'
import { MongoDBFarmerDataSource } from './data/data-sources/mongodb/mongodb-famer-data-source'
// import { MongoDBMilkHiringDataSource } from './data/data-sources/mongodb/mongodb-milhiring-data-source'
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

/* async function getMilkHiringMongoDS (): Promise<MongoDBFarmerDataSource> {
  const client: MongoClient = new MongoClient(process.env.URI)
  await client.connect()
  const db = client.db(process.env.DB)

  const milhiringDatabase: MilkHiringNoSQLDatabaseWrapper = {
    insertOne: (doc) => db.collection(process.env.COLLECTION2).insertOne(doc),
    agregrate: (pipeline, farmer, month) => db.collection(process.env.COLLECTION2).aggregate().toArray()
  }
} */

(async () => {
  const dataSource = await getMongoDS()

  const farmerMiddleware = FarmersRouter(
    new CreateFarmer(new FarmerRespositoryImpl(dataSource)),
    new GetAllFramers(new FarmerRespositoryImpl(dataSource))
  )
  server.use('/farmers', farmerMiddleware)
  server.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`))
})()
