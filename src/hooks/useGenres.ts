import { useQuery } from '@tanstack/react-query'
import GenreService, { FetchResponse, IGenre } from '../server/GenreService'
import genres from '../data/genres'

const ONE_DAY = 24 * 60 * 60 * 1000

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: GenreService.get<FetchResponse<IGenre>>,
  staleTime: ONE_DAY,
  initialData: { count: genres.length, results: genres }
})

export default useGenres