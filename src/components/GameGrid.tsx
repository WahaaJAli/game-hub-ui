import { SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import Error from './Error'
import Prompt from './Prompt'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'


const GameGrid = () => {
	const { games, error, isLoading } = useGames()
  const skeletons: number[] = [1, 2, 3, 4, 5, 6]

  return (
    <>
      { (games?.length === 0 && !isLoading && !error) && (<Prompt>No item(s) found!</Prompt>) }
      { error && <Error>{error}</Error> }
      
      { (games?.length !== 0 ) &&
        <SimpleGrid columns={3} columnGap={2} rowGap={7} >
          { isLoading && skeletons.map(skeleton => 
            <GameCardContainer>
              <GameCardSkeleton key={skeleton}/>
            </GameCardContainer>)
          }
          
          { games?.map(game => 
            <GameCardContainer>
              <GameCard key={game.id} game={game}></GameCard>
            </GameCardContainer>)
          }
        </SimpleGrid>
      }
    </>
  )
}

export default GameGrid