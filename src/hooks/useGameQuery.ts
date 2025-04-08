import { useContext } from "react"
import GameQueryContext from "../components/contexts/GameQueryContext"

const useGameQuery = () => useContext(GameQueryContext)

export default useGameQuery