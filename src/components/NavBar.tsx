import { HStack, Image } from '@chakra-ui/react'
import { JSX } from 'react'
import logo from '../svgs/aveda.svg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface NavBarProps {
  onSearch: (searchText: string) => void
}

const NavBar = ({ onSearch }: NavBarProps): JSX.Element => {
  return (
    <>
      <HStack paddingY={6}>
        <Image src={logo} width='10%' marginRight='10px' />
        {/* <Text whiteSpace='nowrap' fontSize='xl'>AQSH GAME HUB</Text> */}
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  )
}

export default NavBar