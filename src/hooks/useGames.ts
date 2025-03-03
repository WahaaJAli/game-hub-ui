import useData from './useData'

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

const useGames = () => useData<IGame>('/games')

export default useGames