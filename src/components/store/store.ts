import { create } from 'zustand'

export interface IGameQuery {
  genreId?: number
  platformId?: number
  sortOrder?: string
  searchText?: string
}

interface GameQueryStore {
  gameQuery: IGameQuery
  setSelectedGenreId: (genreId: number) => void
  setSelectedPlatformId: (platformId: number) => void
  setSearchText: (searchText: string) => void
  setSelectedSortOrder: (sortOrder: string) => void
}

const useGameQueryStore = create<GameQueryStore>(set => ({
  gameQuery: {},
  setSelectedGenreId: (genreId) => set(store => ({gameQuery: { ...store.gameQuery, genreId }})),
  setSelectedPlatformId: (platformId) => set(store => ({gameQuery: { ...store.gameQuery, platformId }})),
  setSearchText: (searchText) => set(() => ({gameQuery: { searchText } })),
  setSelectedSortOrder: (sortOrder) => set(store => ({gameQuery: { ...store.gameQuery, sortOrder }})),
}))

export default useGameQueryStore