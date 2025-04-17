import { SimpleGrid } from '@chakra-ui/react'
import Error from './Error'
import GameCard from './GameCard'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkeleton'
import InfiniteScroll from 'react-infinite-scroll-component'
import Prompt from './Prompt'
import React from 'react'
import useGames from '../hooks/useGames'

const GameGrid = () => {
	const { data: games, error, isLoading, hasNextPage, fetchNextPage } = useGames()
  const fetchedGamesCount = games?.pages.reduce((total, games) => total + games.results.length, 0) || 0

  return (
    <>
      { (games?.pages.length === 0 && !isLoading && !error) && (<Prompt>No item(s) found!</Prompt>) }
      { error && <Error>{error.message}</Error> }
      
      { (games?.pages.length !== 0 ) &&
        <InfiniteScroll dataLength={fetchedGamesCount} next={() => fetchNextPage()} 
          hasMore={!!hasNextPage} loader={<Prompt>Loading...</Prompt>} >
          
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={6} py={4}>
            { isLoading && [...Array(6)].map((_, index) => 
              <GameCardContainer key={index}>
                <GameCardSkeleton />
              </GameCardContainer>)
            }

            { games?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.results.map(game => (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                ))}
              </React.Fragment>))
            }
          </SimpleGrid>
        </InfiniteScroll>
      }
    </>
  )
}

export default GameGrid