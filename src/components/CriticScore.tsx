import { Badge } from '@chakra-ui/react'

interface CriticScoreProps {
  metacritic: number
}

const CriticScore = ({ metacritic }: CriticScoreProps) => {
  const color: string = metacritic > 75 ? 'green' : metacritic > 60 ? 'yellow' : 'red'

  return (
    <Badge borderRadius='4px' colorScheme={color} fontSize='14px' paddingX={2} >{metacritic}</Badge>
  )
}

export default CriticScore