import { IGameQuery } from '../server/GameService'
import { SimpleGrid } from '@chakra-ui/react'
import Error from './Error'
import GameCard from './GameCard'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkeleton'
import Prompt from './Prompt'
import useGames from '../hooks/useGames'

interface GameGridProps {
  gameQuery: IGameQuery
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
	const { data: games, error, isLoading } = useGames(gameQuery)

  return (
    <>
      { (games?.count === 0 && !isLoading && !error) && (<Prompt>No item(s) found!</Prompt>) }
      { error && <Error>{error.message}</Error> }
      
      { (games?.count !== 0 ) &&
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={6} py={4}>
          { isLoading && [...Array(6)].map((_, index) => 
            <GameCardContainer key={index}>
              <GameCardSkeleton/>
            </GameCardContainer>)
          }
          
          { games?.results.map(game => 
            <GameCardContainer key={game.id}>
              <GameCard game={game}></GameCard>
            </GameCardContainer>)
          }
        </SimpleGrid>
      }
    </>
  )
}

export default GameGrid