import useData from './useData'

export interface IGenre {
  id: number
  image_background: string
  name: string
  slug: string
}

const useGenres = () => useData<IGenre>('/genres')

export default useGenres