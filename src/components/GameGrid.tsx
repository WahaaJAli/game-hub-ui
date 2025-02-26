import { SimpleGrid } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'


const GameGrid = () => {
	const { games, error, isLoading, setGames, setError } = useGames()

  return (
    <>
      <SimpleGrid column={{ sm: 1, md: 2, lg: 3, xl: 4}} spacing={5} >
        { games?.map(game => <GameCard key={game.id} game={game}></GameCard>) }
      </SimpleGrid>
    </>
  )
}

export default GameGrid