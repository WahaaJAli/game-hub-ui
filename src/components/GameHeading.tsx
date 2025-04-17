import { Heading } from '@chakra-ui/react'
import useGameQueryStore from './store/store'
import useGenre from '../hooks/useGenre'
import usePlatform from '../hooks/usePlatform'

const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId)
  const genreName = useGenre(genreId)
  
  const platformId = useGameQueryStore(s => s.gameQuery.platformId)
  const platformName = usePlatform(platformId)

  const isFilterSelected: boolean = !!(platformName || genreName)
  const heading: string = isFilterSelected ? `${platformName || ''} ${genreName || ''} Games` : 'All Games'

  return (
    <Heading as='h1' fontSize='7xl' mb={5} >{heading}</Heading>
  )
}

export default GameHeading