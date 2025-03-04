import { Card, CardBody, Heading, HStack, Img } from '@chakra-ui/react'
import { IGame } from '../hooks/useGames'
import PlatformIconsList from './PlatformIconsList'
import CriticScore from './CriticScore'
import getCroppedImageURL from '../utilities/image-url'

interface GameCardProps {
  game: IGame
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Img src={getCroppedImageURL(game.background_image)}></Img>
      <CardBody>
        <HStack justifyContent='space-between' mb={2} >
          <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} ></PlatformIconsList>
          <CriticScore metacritic={game.metacritic} ></CriticScore>
        </HStack>
        <Heading fontSize='2xl' >{game.name}</Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard