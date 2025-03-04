import { extendTheme, ThemeOverride } from "@chakra-ui/react"

const theme: ThemeOverride = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  styles: {
    global: {
      '::-webkit-scrollbar': {
        display: 'none',
      },
      'form': {
        width: '100%'
      }
    },
  },
})

export default theme