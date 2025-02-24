import { Box, HStack, Image, Text } from '@chakra-ui/react'
import { JSX } from 'react'
import logo from '../../svgs/aveda.svg'
import ColorModeSwitch from '../ColorModeSwitch/ColorModeSwitch'

const NavBar = (): JSX.Element => {
  return (
    <>
      <HStack justifyContent='space-between' padding='10px'>
        <Box display='flex' alignItems='center'>
          <Image src={logo} width='10%' marginRight='10px' ></Image>
          <Text fontSize='xl'>AQSH GAME HUB</Text>
        </Box>
        <ColorModeSwitch/>
      </HStack>
    </>
  )
}

export default NavBar