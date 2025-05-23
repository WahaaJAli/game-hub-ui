import { extendTheme, ThemeOverride } from "@chakra-ui/react"

const theme: ThemeOverride = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  colors: {
    gray: {
      50: '#f9f9f9',
      100: '#ededed',
      200: '#d3d3d3',
      300: '#b3b3b3',
      400: '#a0a0a0',
      500: '#898989',
      600: '#6c6c6c',
      700: '#202020',
      800: '#121212',
      900: '#111',
    }
  },
  styles: {
    global: {
      '::-webkit-scrollbar': {
        display: 'none',
      },
      '::selection': {
        background: 'gray.600',
        color: 'white',
        WebkitTextFillColor: 'white',
      },
      'form': {
        width: '100%'
      }
    },
  },
})

export default theme