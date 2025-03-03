import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'

import GameHub from './components/GameHub'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.initialColorMode} />
      <GameHub />
    </ChakraProvider>
  </StrictMode>
)