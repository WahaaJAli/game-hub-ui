import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import GameHub from './components/GameHub'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.initialColorMode} />
        <GameHub />
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
)