import { CACHE_KEY_GAMES, ONE_DAY } from '../data/Constants'
import useGameQueryStore, { IGameQuery } from '../components/store/store'
import { useInfiniteQuery } from '@tanstack/react-query'
import GameService from '../server/GameService'

const useGames = () => {
  const gameQuery: IGameQuery = useGameQueryStore(s => s.gameQuery)

  return useInfiniteQuery({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam = 1 }) => GameService.get({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
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