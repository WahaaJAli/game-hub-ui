import platforms from "../data/platforms"

export interface IPlatform {
  id: number
  name: string
  slug: string
}

// const usePlatforms = () => useData<IPlatform>('/platforms/lists/parents')
const usePlatforms = () => ({ data: platforms, isLoading: false, error: null })

export default usePlatforms