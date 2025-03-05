import { HStack, Icon } from "@chakra-ui/react"
import IconsMap from "../icons/IconsMap"
import { IPlatform } from "../hooks/usePlatforms"

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