import { HStack, Icon } from "@chakra-ui/react"
import { IPlatform } from "../hooks/useGames"
import { IconType } from "react-icons/lib"
import Icons from '../icons/Icons'


interface PlatformIconsListProps {
  platforms: IPlatform[]
}

const PlatformIconsList = ({ platforms }: PlatformIconsListProps) => {
  const { Android: android, Apple: mac, Globe: web, Iphone: ios, Linux: linux, Nintendo: nintendo, Playstation: playstation, Windows: pc, Xbox: xbox } = Icons
  const IconsMap: { [key: string]: IconType } = { web, android, mac, linux, playstation, pc, xbox, ios, nintendo }

  return (
    <HStack marginTop={2} >
      {platforms?.map(platform => <Icon as={IconsMap[platform.slug]} color='gray.500' key={platform.id} ></Icon>)}
    </HStack>
  )
}

export default PlatformIconsList