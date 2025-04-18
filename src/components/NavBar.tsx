import { HStack, Image, useColorModeValue } from '@chakra-ui/react'
import { JSX } from 'react'
import ColorModeSwitch from './ColorModeSwitch'
import logo from '../svgs/aveda.svg'
import SearchInput from './SearchInput'

const NavBar = (): JSX.Element => {
  const filter = useColorModeValue('invert(0)', 'invert(1)')

  return (
    <>
      <HStack py={6}>
        <Image src={logo} width='10%' mr='10px' filter={filter} />
        {/* <Text whiteSpace='nowrap' fontSize='xl'>AQSH GAME HUB</Text> */}
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  )
}

export default NavBar