import { Heading } from '@chakra-ui/react'
import useGameQuery from '../hooks/useGameQuery'
import useGenre from '../hooks/useGenre'
import usePlatform from '../hooks/usePlatform'


const GameHeading = () => {
  const { gameQuery: { genreId, platformId } } = useGameQuery()

  const selectedGenreName = useGenre(genreId)
  const selectedPlatformName = usePlatform(platformId)

  const isValidGameQuery = selectedPlatformName || selectedGenreName
  const heading: string = isValidGameQuery ? `${selectedPlatformName || ''} ${selectedGenreName || ''} Games` : 'All Games'

  return (
    <Heading as='h1' fontSize='7xl' mb={5} >{heading}</Heading>
  )
}

export default GameHeading