import Service from './service'

export interface IGames {
  id: number
  name: string
  rating: number
  released: string
  slug: string
  updated: string
}

export default Service('/games')