import { JSX, ReactNode } from "react"
import Prompt from "./Prompt"

interface ErrorProps {
  children: ReactNode
}

const Error = ({ children }: ErrorProps): JSX.Element => {
  return (
    <>
      <Prompt colorScheme='red' >{children}</Prompt>
    </>
  )
}

export default Error