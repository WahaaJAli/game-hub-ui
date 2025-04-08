import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Icons from '../icons/Icons'
import IconsMap from '../icons/IconsMap'
import Prompt from './Prompt'
import useGameQuery from '../hooks/useGameQuery'
import usePlatform from '../hooks/usePlatform'
import usePlatforms from '../hooks/usePlatforms'

const PlatformSelector = () => {
  const { data: platforms, error, isLoading } = usePlatforms()
  const { gameQuery, dispatch } = useGameQuery()
  const selectedPlatformName = usePlatform(gameQuery.platformId)
  
  const platformsAvailable: boolean = platforms?.count !== 0

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
              return (
                <MenuItem key={platform.id} icon={<MenuIcon />} 
                  onClick={() => dispatch({ type: 'PLATFORM_ID', platformId: platform.id })} >{platform.name}
                </MenuItem>
              )
            })
            }
          </MenuList>
        </Menu>
      }
    </>
  )
}

export default PlatformSelector