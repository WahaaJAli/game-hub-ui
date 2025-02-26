import Service from './service'

export interface IPlatform {
  id: number
  name: string
  slug: string
}
export interface IGame {
  id: number
  background_image: string
  metacritic: number
  name: string
  parent_platforms: { platform: IPlatform }[]
  rating: number
  released: string
  slug: string
  updated: string
}

export default Service('/games')