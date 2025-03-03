import { SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import Error from './Error'
import Prompt from './Prompt'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import { IGenre } from '../hooks/useGenres'

interface GameGridProps {
  selectedGenre: IGenre | null
}

const GameGrid = ({ selectedGenre }: GameGridProps) => {
	const { data: games, error, isLoading } = useGames(selectedGenre)

  return (
    <>
      { (games?.length === 0 && !isLoading && !error) && (<Prompt>No item(s) found!</Prompt>) }
      { error && <Error>{error}</Error> }
      
      { (games?.length !== 0 ) &&
        <SimpleGrid columns={3} gap={4} >
          { isLoading && [...Array(6)].map((_, index) => 
            <GameCardContainer key={index}>
              <GameCardSkeleton/>
            </GameCardContainer>)
          }
          
          { games?.map(game => 
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