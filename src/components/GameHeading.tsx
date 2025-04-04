import { Heading } from '@chakra-ui/react'
import { IGameQuery } from '../server/GameService'
import usePlatform from '../hooks/usePlatform'
import useGenre from '../hooks/useGenre'

interface GameHeadingProps {
  gameQuery: IGameQuery
}

const GameHeading = ({ gameQuery: { genreId, platformId } }: GameHeadingProps) => {
  const selectedGenreName = useGenre(genreId)
  const selectedPlatformName = usePlatform(platformId)

  const isValidGameQuery = selectedPlatformName || selectedGenreName
  const heading: string = isValidGameQuery ? `${selectedPlatformName || ''} ${selectedGenreName || ''} Games` : 'All Games'

  return (
    <Heading as='h1' fontSize='7xl' mb={5} >{heading}</Heading>
  )
}

export default GameHeading