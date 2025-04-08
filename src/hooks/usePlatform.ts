import usePlatforms from "./usePlatforms"

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatforms()
  return platforms?.results.find(platform => platform.id === id)?.name
}

export default usePlatform