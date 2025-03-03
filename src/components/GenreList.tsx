import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageURL from '../utilities/image-url'

const GenreList = () => {
  const { data: genres } = useGenres()

  return (
    <List>
      {genres?.map(genre => <ListItem key={genre.id} paddingY='5px'>
        <HStack>
          <Image src={getCroppedImageURL(genre.image_background)} boxSize='32px' borderRadius={3} />
          <Text fontSize='16px'>{genre.name}</Text>
        </HStack>
      </ListItem>)}
    </List>
  )
}

export default GenreList