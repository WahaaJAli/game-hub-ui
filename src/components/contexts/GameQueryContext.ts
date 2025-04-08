import { GameQueryAction } from "../reducers/GameReducer";
import { IGameQuery } from "../../server/GameService";
import React, { Dispatch } from "react";


interface gameQueryContext {
  gameQuery: IGameQuery,
  dispatch: Dispatch<GameQueryAction>
}

const GameQueryContext = React.createContext<gameQueryContext>({} as gameQueryContext)

export default GameQueryContext