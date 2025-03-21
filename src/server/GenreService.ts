import Service from './service'

export interface FetchResponse<T> {
  results: T[]
  count: number | null
}

export interface IGenre {
  id: number
  image_background: string
  name: string
  slug: string
}

export default new Service<FetchResponse<IGenre>>('/genres')