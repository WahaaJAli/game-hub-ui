import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react"
import { JSX } from "react"
import GameGrid from "./GameGrid"
import GameHeading from "./GameHeading"
import GameQueryProvider from "./providers/GameQueryProvider"
import GenreList from "./GenreList"
import NavBar from "./NavBar"
import PlatformSelector from "./PlatformSelector"
import SortSelector from "./SortSelector"

const GameHub = (): JSX.Element => {
  return (
    <GameQueryProvider>
      <Grid templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: '1fr', lg: '230px 1fr' }} 
        px={4} marginBottom={4}>
        
        <GridItem area='nav'>
          <NavBar />
        </GridItem>

        <Show above="lg">
          <GridItem area='aside'>
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area='main'>
          <GameHeading />
          <Flex>
            <Box mr={2}> <PlatformSelector /> </Box>
            <SortSelector />
          </Flex>
          <GameGrid />
        </GridItem>

      </Grid>
    </GameQueryProvider>
  )
}

export default GameHub