import { FetchResponse } from '../server/api'
import { CACHE_KEY_GENRES, ONE_DAY } from '../data/Constants'
import { useQuery } from '@tanstack/react-query'
import genres from '../data/genres'
import GenreService, { IGenre } from '../server/GenreService'

const useGenres = () => useQuery({
  queryKey: [CACHE_KEY_GENRES],
  queryFn: GenreService.get<FetchResponse<IGenre>>,
  staleTime: ONE_DAY,
  initialData: { count: genres.length, results: genres }
})

export default useGenres