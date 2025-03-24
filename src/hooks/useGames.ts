import { CACHE_KEY_GAMES, ONE_MINUTE } from '../data/Constants'
import { FetchResponse } from '../server/api'
import { useQuery } from '@tanstack/react-query'
import GameService, { IGame, IGameQuery } from '../server/GameService'

const useGames = (gameQuery: IGameQuery) => {
  return useQuery({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: () => GameService.get<FetchResponse<IGame>>({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText
      }
    }),
    staleTime: ONE_MINUTE
  })
}

export default useGames