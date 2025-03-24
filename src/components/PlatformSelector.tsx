import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Icons from '../icons/Icons'
import IconsMap from '../icons/IconsMap'
import Prompt from './Prompt'
import { IPlatform } from '../server/PlatformService'
import usePlatforms from '../hooks/usePlatforms'

interface PlatformSelectorProps {
  selectedPlatform: IPlatform | null
  onSelectPlatform: (platform: IPlatform) => void
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: PlatformSelectorProps) => {
  const { data: platforms, error, isLoading } = usePlatforms()
  const platformsAvailable: boolean = platforms?.count !== 0

  return (
    <>
      {(!platformsAvailable && !isLoading && !error) && (<Prompt>No item(s) found!</Prompt>)}
      {error && null}

      {platformsAvailable &&
        <Menu>
          <MenuButton as={Button} rightIcon={<Icons.ChevronDown />} >{selectedPlatform?.name || 'Platforms'}</MenuButton>
          <MenuList>
            {platforms?.results.map(platform => {
              const MenuIcon = IconsMap[platform.slug] || Icons.GameController
              return <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id} icon={<MenuIcon />} >{platform.name}</MenuItem>
            })
            }
          </MenuList>
        </Menu>
      }
    </>
  )
}

export default PlatformSelector