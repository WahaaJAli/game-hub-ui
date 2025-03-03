import useData from "./useData";
import { IPlatform } from "./useGames";

const usePlatforms = () => useData<IPlatform>('/platforms/lists/parents')

export default usePlatforms