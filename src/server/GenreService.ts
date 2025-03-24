import { FetchResponse } from './api'
import Service from './service'

export interface IGenre {
  id: number
  image_background: string
  name: string
  slug: string
}

export default new Service<FetchResponse<IGenre>>('/genres')