import { HStack, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'
import { JSX, useEffect, useRef } from 'react'
import Icons from '../icons/Icons'
import useGameQueryStore from './store/store'

const SearchInput = (): JSX.Element => {
  const setSearchText = useGameQueryStore(s => s.setSearchText)
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
    if (ref.current) setSearchText(ref.current.value)
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