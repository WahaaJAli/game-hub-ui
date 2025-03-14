import { IGameQuery } from '../components/GameHub'
import { IPlatform } from './usePlatforms'
import useData from './useData'
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

const useGames = (gameQuery: IGameQuery) => {
  return useData<IGame>('/games', {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
    }
  }, [gameQuery])
}

export default useGames