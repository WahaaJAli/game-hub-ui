import { Grid, GridItem, Show } from "@chakra-ui/react"
import { JSX } from "react"
import NavBar from "./NavBar"
import GameGrid from "./GameGrid"
import GenreList from "./GenreList"

const GameHub = (): JSX.Element => {

  return (
    <>
      <Grid templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
        templateColumns={{ base: '1fr', lg: '230px 1fr' }} 
        paddingX={4} marginBottom={4}>
        
        <GridItem area='nav'>
          <NavBar></NavBar>
        </GridItem>

        <Show above="lg">
          <GridItem area='aside'>
            <GenreList/>
          </GridItem>
        </Show>

        <GridItem area='main'>
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  )
}

export default GameHub