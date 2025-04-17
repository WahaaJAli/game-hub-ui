import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Icons from '../icons/Icons'
import IconsMap from '../icons/IconsMap'
import Prompt from './Prompt'
import useGameQueryStore from './store/store'
import usePlatform from '../hooks/usePlatform'
import usePlatforms from '../hooks/usePlatforms'

const PlatformSelector = () => {
  const { data: platforms, error, isLoading } = usePlatforms()
  const platformsAvailable: boolean = platforms?.count !== 0

  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)
  const selectedPlatformName = usePlatform(selectedPlatformId)

  const setSelectedPlatformId = useGameQueryStore(s => s.setSelectedPlatformId)

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
                  onClick={() => setSelectedPlatformId(platform.id)} >{platform.name}
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