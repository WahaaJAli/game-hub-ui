import { Text, ThemeTypings } from "@chakra-ui/react"
import { JSX, ReactNode } from "react"

interface PromptProps {
  children: ReactNode
  colorScheme?: ThemeTypings["colorSchemes"]
}

const Prompt = ({children}: PromptProps): JSX.Element => {
  return (
    <>
      <Text fontStyle='italic' fontWeight='thin'>{children}</Text>
    </>
  )
}

export default Prompt