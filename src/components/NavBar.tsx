import { HStack, Image } from '@chakra-ui/react'
import { JSX } from 'react'
import ColorModeSwitch from './ColorModeSwitch'
import logo from '../svgs/aveda.svg'
import SearchInput from './SearchInput'

const NavBar = (): JSX.Element => {
  return (
    <>
      <HStack py={6}>
        <Image src={logo} width='10%' mr='10px' />
        {/* <Text whiteSpace='nowrap' fontSize='xl'>AQSH GAME HUB</Text> */}
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  )
}

export default NavBar