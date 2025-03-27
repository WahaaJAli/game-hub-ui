import { CACHE_KEY_GAMES, ONE_DAY } from '../data/Constants'
import { useInfiniteQuery } from '@tanstack/react-query'
import GameService, { IGameQuery } from '../server/GameService'

const useGames = (gameQuery: IGameQuery) => {
  return useInfiniteQuery({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) => GameService.get({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam
      }
    }),
    staleTime: ONE_DAY,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    }
  })
}

export default useGames