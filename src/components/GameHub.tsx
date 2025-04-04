import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react"
import { JSX, useState } from "react"
import { IGameQuery } from "../server/GameService"
import GameGrid from "./GameGrid"
import GameHeading from "./GameHeading"
import GenreList from "./GenreList"
import NavBar from "./NavBar"
import PlatformSelector from "./PlatformSelector"
import SortSelector from "./SortSelector"

const GameHub = (): JSX.Element => {
  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery)

  return (
    <>
      <Grid templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: '1fr', lg: '230px 1fr' }} 
        px={4} marginBottom={4}>
        
        <GridItem area='nav'>
          <NavBar onSearch={searchText => setGameQuery({...gameQuery, searchText})} ></NavBar>
        </GridItem>

        <Show above="lg">
          <GridItem area='aside'>
            <GenreList selectedGenreId={gameQuery.genreId} onSelectGenre={genreId => setGameQuery({...gameQuery, genreId})}/>
          </GridItem>
        </Show>

        <GridItem area='main'>
          <GameHeading gameQuery={gameQuery} />
          <Flex>
            <Box mr={2}>
              <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectPlatformId={platformId => setGameQuery({...gameQuery, platformId})}/>
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