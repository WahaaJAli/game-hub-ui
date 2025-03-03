import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import usePlatforms from '../hooks/usePlatforms'
import Prompt from './Prompt'
import Icons from '../icons/Icons'
import { IconType } from 'react-icons/lib'
import { IPlatform } from '../hooks/useGames'

interface PlatformSelectorProps {
  selectedPlatform: IPlatform | null
  onSelectPlatform: (platform: IPlatform) => void
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: PlatformSelectorProps) => {
  const { 
    Android: android,
    Apple: mac,
    Atari: atari,
    Commodore: commodoreamiga,
    Globe: web,
    Iphone: ios,
    Linux: linux,
    Neovim: neogeo,
    Nintendo: nintendo,
    Nintendo3D: _3do,
    Playstation: playstation,
    Sega: sega,
    Windows: pc,
    Xbox: xbox,
  } = Icons

  const IconsMap: { [key: string]: IconType } = { 
    android,
    atari,
    commodoreamiga,
    ios,
    linux,
    mac,
    neogeo,
    nintendo,
    pc,
    playstation,
    sega,
    web,
    xbox,
  }

  const { data: platforms, error, isLoading } = usePlatforms()
  const platformsAvailable: boolean = platforms?.length !== 0

  return (
    <>
      {(!platformsAvailable && !isLoading && !error) && (<Prompt>No item(s) found!</Prompt>)}
      {error && null}

      {platformsAvailable &&
        <Menu>
          <MenuButton as={Button} rightIcon={<Icons.ChevronDown />} >{selectedPlatform?.name || 'Platforms'}</MenuButton>
          <MenuList>
            {platforms?.map(platform => {
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