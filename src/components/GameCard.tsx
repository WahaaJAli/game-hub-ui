import { Card, CardBody, Heading, Img } from '@chakra-ui/react'
import { IGame } from '../server/GameService'
import PlatformIconsList from './PlatformIconsList'

interface GameCardProps {
  game: IGame
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card borderRadius={10} overflow='hidden' >
      <Img src={game.background_image}></Img>
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} ></PlatformIconsList>
      </CardBody>
    </Card>
  )
}

export default GameCard