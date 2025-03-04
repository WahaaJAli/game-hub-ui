import { HStack, Icon } from "@chakra-ui/react"
import { IPlatform } from "../hooks/useGames"
import IconsMap from "../icons/IconsMap"

interface PlatformIconsListProps {
  platforms: IPlatform[]
}

const PlatformIconsList = ({ platforms }: PlatformIconsListProps) => {
  return (
    <HStack>
      {platforms?.map(platform => <Icon as={IconsMap[platform.slug]} color='gray.100' key={platform.id} ></Icon>)}
    </HStack>
  )
}

export default PlatformIconsList