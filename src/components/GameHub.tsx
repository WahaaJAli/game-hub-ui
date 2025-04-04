import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react"
import { IGameQuery } from "../server/GameService"
import { JSX, useReducer } from "react"
import GameGrid from "./GameGrid"
import GameHeading from "./GameHeading"
import GameReducer from "./reducers/GameReducer"
import GenreList from "./GenreList"
import NavBar from "./NavBar"
import PlatformSelector from "./PlatformSelector"
import SortSelector from "./SortSelector"

const GameHub = (): JSX.Element => {
  const [gameQuery, dispatch] = useReducer(GameReducer, {} as IGameQuery)

  return (
    <>
      <Grid templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: '1fr', lg: '230px 1fr' }} 
        px={4} marginBottom={4}>
        
        <GridItem area='nav'>
          <NavBar onSearch={searchText => dispatch({ type: 'SEARCH_TEXT', searchText })} ></NavBar>
        </GridItem>

        <Show above="lg">
          <GridItem area='aside'>
            <GenreList selectedGenreId={gameQuery.genreId} onSelectGenre={genreId => dispatch({ type: 'GENRE_ID', genreId })}/>
          </GridItem>
        </Show>

        <GridItem area='main'>
          <GameHeading gameQuery={gameQuery} />
          <Flex>
            <Box mr={2}>
              <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectPlatformId={platformId => dispatch({ type: 'PLATFORM_ID', platformId })}/>
            </Box>
            <SortSelector selectedSortOrder={gameQuery.sortOrder} onSelectSortOrder={sortOrder => dispatch({ type: 'SORT_ORDER', sortOrder })}/>
          </Flex>
          <GameGrid gameQuery={gameQuery} ></GameGrid>
        </GridItem>
      </Grid>
    </>
  )
}

export default GameHub