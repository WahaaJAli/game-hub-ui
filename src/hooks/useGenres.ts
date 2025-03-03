import useData from './useData'

export interface IGenre {
  id: number
  name: string
  slug: string
}

const useGenres = () => useData<IGenre>('/genres')

export default useGenres