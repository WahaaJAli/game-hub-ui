import { CACHE_KEY_PLATFORMS, ONE_DAY } from "../data/Constants"
import { useQuery } from "@tanstack/react-query"
import platforms from "../data/platforms"
import PlatformService from "../server/PlatformService"

const usePlatforms = () => {
  return useQuery({
    queryKey: [CACHE_KEY_PLATFORMS],
    queryFn: PlatformService.get,
    staleTime: ONE_DAY,
    initialData: { count: platforms.length, results: platforms}
  })
}

export default usePlatforms