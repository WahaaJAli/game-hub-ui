import { Grid, GridItem, Show } from "@chakra-ui/react"
import { JSX } from "react"
import NavBar from "../NavBar/NavBar"
import GameGrid from "../GameGrid"

const GameHub = (): JSX.Element => {
  return (
    <>
      <Grid templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}>
        <GridItem area='nav'>
          <NavBar></NavBar>
        </GridItem>

        <Show above="lg">
          <GridItem area='aside'>Aside</GridItem>
        </Show>

        <GridItem area='main'>
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  )
}

export default GameHub