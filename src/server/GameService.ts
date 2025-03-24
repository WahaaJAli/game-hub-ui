import { IGenre } from './GenreService'
import { IPlatform } from './PlatformService'
import Service from './service'

export interface IGameQuery {
  genre: IGenre | null
  platform: IPlatform | null
  sortOrder: string
  searchText: string
}

export interface IGame {
  id: number
  background_image: string
  metacritic: number
  name: string
  parent_platforms: { platform: IPlatform }[]
  rating_top: number
  released: string
  slug: string
  updated: string
}

export default new Service<IGame>('/games')