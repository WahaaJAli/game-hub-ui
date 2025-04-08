import { HStack, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'
import { JSX, useContext, useEffect, useRef } from 'react'
import GameQueryContext from './contexts/GameQueryContext'
import Icons from '../icons/Icons'

const SearchInput = (): JSX.Element => {
  const { dispatch } = useContext(GameQueryContext)
  const ref = useRef<HTMLInputElement>(null)
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.altKey && event.key === 'Enter') ref.current?.focus()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => { document.removeEventListener('keydown', handleKeyDown) }
  }, [])

  const submitHandler = ((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (ref.current) dispatch({ type: 'SEARCH_TEXT', searchText: ref.current.value })
  })

  return (
    <form onSubmit={event => submitHandler(event)} >
      <InputGroup>
        <InputLeftElement children={<Icons.Search/>} />
        <Input ref={ref} borderRadius={20} placeholder='Search 882,071 games' variant={'filled'} />
        <InputRightElement pr={16} >
          <HStack spacing={1} fontSize="xs" color="gray.400">
            <Text border='1px' borderRadius={4} px={2}>alt</Text>
            <Text>+</Text>
            <Text border='1px' borderRadius={4} px={2}>enter</Text>
          </HStack>
        </InputRightElement>
      </InputGroup>
    </form>
  )
}

export default SearchInput