import { Heading } from '@chakra-ui/react'
import { IGameQuery } from '../server/GameService'

interface GameHeadingProps {
  gameQuery: IGameQuery
}

const GameHeading = ({ gameQuery: { genre, platform } }: GameHeadingProps) => {
  const isValidGameQuery = platform?.name || genre?.name
  const heading: string = isValidGameQuery ? `${platform?.name || ''} ${genre?.name || ''} Games` : 'All Games'

  return (
    <Heading as='h1' fontSize='7xl' mb={5} >{heading}</Heading>
  )
}

export default GameHeading