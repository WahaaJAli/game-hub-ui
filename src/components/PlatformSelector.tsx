import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Icons from '../icons/Icons'
import IconsMap from '../icons/IconsMap'
import Prompt from './Prompt'
import usePlatforms from '../hooks/usePlatforms'

interface PlatformSelectorProps {
  selectedPlatformId?: number
  onSelectPlatformId: (platformId: number) => void
}

const PlatformSelector = ({ selectedPlatformId, onSelectPlatformId }: PlatformSelectorProps) => {
  const { data: platforms, error, isLoading } = usePlatforms()
  const platformsAvailable: boolean = platforms?.count !== 0
  const selectedPlatformName = platforms.results.find(platform => platform.id === selectedPlatformId)?.name
  return (
    <>
      {(!platformsAvailable && !isLoading && !error) && (<Prompt>No item(s) found!</Prompt>)}
      {error && null}

      {platformsAvailable &&
        <Menu>
          <MenuButton as={Button} rightIcon={<Icons.ChevronDown />} >{selectedPlatformName || 'Platforms'}</MenuButton>
          <MenuList>
            {platforms?.results.map(platform => {
              const MenuIcon = IconsMap[platform.slug] || Icons.GameController
              return <MenuItem onClick={() => onSelectPlatformId(platform.id)} key={platform.id} icon={<MenuIcon />} >{platform.name}</MenuItem>
            })
            }
          </MenuList>
        </Menu>
      }
    </>
  )
}

export default PlatformSelector