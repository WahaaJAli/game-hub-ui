import genres from '../data/genres'

export interface IGenre {
  id: number
  image_background: string
  name: string
  slug: string
}

// const useGenres = () => useData<IGenre>('/genres')
const useGenres = () => ({ data: genres, isLoading: false, error: null })

export default useGenres