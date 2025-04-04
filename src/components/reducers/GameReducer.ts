import { IGameQuery } from "../../server/GameService"

interface genreAction {
  type: 'GENRE_ID',
  genreId: number
}
interface platformAction {
  type: 'PLATFORM_ID',
  platformId: number
}
interface searchAction {
  type: 'SEARCH_TEXT',
  searchText: string
}
interface sortAction {
  type: 'SORT_ORDER',
  sortOrder: string
}

type Action = genreAction | platformAction | searchAction | sortAction

const GameReducer = (value: IGameQuery, action: Action) => {
  switch (action.type) {
    case 'GENRE_ID':
      return { ...value, genreId: action.genreId }
    case 'PLATFORM_ID':
      return { ...value, platformId: action.platformId }
    case 'SEARCH_TEXT':
      return { ...value, searchText: action.searchText }
    case 'SORT_ORDER':
      return { ...value, sortOrder: action.sortOrder}
    default: 
      return value
  }
}

export default GameReducer