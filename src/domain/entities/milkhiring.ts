export interface MilkHiringRequestEntity {
  id?: string
  day: string
  month: string
  year: string
  milk_quantity: number
  farmer_id: string
}

export interface MilkHiringResponseEntity {
  id: string
  date: Date
  milk_quantity: number
  farmer_id: object
}
