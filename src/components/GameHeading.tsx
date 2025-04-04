import { Heading } from '@chakra-ui/react'
import { IGameQuery } from '../server/GameService'
import useGenres from '../hooks/useGenres'
import usePlatforms from '../hooks/usePlatforms'

interface GameHeadingProps {
  gameQuery: IGameQuery
}

const GameHeading = ({ gameQuery: { genreId, platformId } }: GameHeadingProps) => {
  const { data: genres } = useGenres()
  const { data: platforms } = usePlatforms()

  const selectedGenreName = genres.results.find(genre => genre.id === genreId)?.name
  const selectedPlatformName = platforms.results.find(platform => platform.id === platformId)?.name

  const isValidGameQuery = selectedPlatformName || selectedGenreName
  const heading: string = isValidGameQuery ? `${selectedPlatformName || ''} ${selectedGenreName || ''} Games` : 'All Games'

  return (
    <Heading as='h1' fontSize='7xl' mb={5} >{heading}</Heading>
  )
}

export default GameHeading