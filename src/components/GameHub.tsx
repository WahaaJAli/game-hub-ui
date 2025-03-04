import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react"
import { JSX, useState } from "react"
import NavBar from "./NavBar"
import GameGrid from "./GameGrid"
import GenreList from "./GenreList"
import { IGenre } from "../hooks/useGenres"
import PlatformSelector from "./PlatformSelector"
import { IPlatform } from "../hooks/useGames"
import SortSelector from "./SortSelector"

export interface IGameQuery {
  genre: IGenre | null
  platform: IPlatform | null
  sortOrder: string
  searchText: string
}

const GameHub = (): JSX.Element => {
  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery)

  return (
    <>
      <Grid templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: '1fr', lg: '230px 1fr' }} 
        paddingX={4} marginBottom={4}>
        
        <GridItem area='nav'>
          <NavBar onSearch={searchText => setGameQuery({...gameQuery, searchText})} ></NavBar>
        </GridItem>

        <Show above="lg">
          <GridItem area='aside'>
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={genre => setGameQuery({...gameQuery, genre})}/>
          </GridItem>
        </Show>

        <GridItem area='main'>
          <Flex>
            <Box marginRight={2}>
              <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={platform => setGameQuery({...gameQuery, platform})}/>
            </Box>
            <SortSelector selectedSortOrder={gameQuery.sortOrder} onSelectSortOrder={sortOrder => setGameQuery({...gameQuery, sortOrder})}/>
          </Flex>
          <GameGrid gameQuery={gameQuery} ></GameGrid>
        </GridItem>
      </Grid>
    </>
  )
}

export default GameHub