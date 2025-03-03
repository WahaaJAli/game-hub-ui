import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageURL from '../utilities/image-url'
import Prompt from './Prompt'
import GenreListSkeleton from './GenreListSkeleton'

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres()
  
  const genresAvailable: boolean = genres?.length !== 0
  const skeletons: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

  return (
    <>
      { (!genresAvailable && !isLoading && !error) && (<Prompt>No item(s) found!</Prompt>) }
      { error && null }
      
      { genresAvailable &&
        <List>
          { isLoading && skeletons.map(skeleton => <GenreListSkeleton key={skeleton} />) }

          {genres?.map(genre => <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image src={getCroppedImageURL(genre.image_background)} boxSize='32px' borderRadius={3} />
              <Text fontSize='16px'>{genre.name}</Text>
            </HStack>
          </ListItem>)}
        </List>
      }
    </>
  )
}

export default GenreList