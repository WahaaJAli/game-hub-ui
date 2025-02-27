import { Card, CardBody, Heading, HStack, Img } from '@chakra-ui/react'
import { IGame } from '../server/GameService'
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
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} ></PlatformIconsList>
          <CriticScore metacritic={game.metacritic} ></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard