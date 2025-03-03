import useData from './useData'
import { IGenre } from './useGenres'

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

const useGames = (selectedGenre: IGenre | null, selectedPlatform: IPlatform | null) => useData<IGame>('/games', {params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id}}, [selectedGenre?.id, selectedPlatform?.id])

export default useGames