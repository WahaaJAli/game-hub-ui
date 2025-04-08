import { IGameQuery } from '../../server/GameService'
import { ReactNode, useReducer } from 'react'
import GameQueryContext from '../contexts/GameQueryContext'
import GameReducer from '../reducers/GameReducer'

interface Props {
  children: ReactNode
}

const GameQueryProvider = ({ children }: Props) => {
  const [gameQuery, dispatch] = useReducer(GameReducer, {} as IGameQuery)

  return (
    <GameQueryContext.Provider value={{gameQuery, dispatch}}>
    {children}
    </GameQueryContext.Provider>
  )
}

export default GameQueryProvider