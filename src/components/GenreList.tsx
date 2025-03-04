import { Button, Heading, HStack, Image, List, ListItem } from '@chakra-ui/react'
import useGenres, { IGenre } from '../hooks/useGenres'
import getCroppedImageURL from '../utilities/image-url'
import Prompt from './Prompt'
import GenreListSkeleton from './GenreListSkeleton'

interface GenreListProps {
  selectedGenre: IGenre | null
  onSelectGenre: (genre: IGenre) => void
}

const GenreList = ({ selectedGenre, onSelectGenre }: GenreListProps) => {
  const { data: genres, isLoading, error } = useGenres()
  const genresAvailable: boolean = genres?.length !== 0

  const getFontWeight = (genreId: number): string => genreId === selectedGenre?.id ? 'bold' : 'normal' 

  return (
    <>
      { (!genresAvailable && !isLoading && !error) && (<Prompt>No item(s) found!</Prompt>) }
      { error && null }
      
      { genresAvailable &&
        <>
          <Heading as='h4' fontSize='2xl' marginBottom={3} >Genres</Heading>
          <List>
            { isLoading && [...Array(16)].map((_, index) => <GenreListSkeleton key={index} />) }
            {genres?.map(genre => 
              <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                  <Image src={getCroppedImageURL(genre.image_background)} boxSize='32px' borderRadius={3} objectFit='cover' />
                  <Button fontWeight={getFontWeight(genre.id)} onClick={() => onSelectGenre(genre)} fontSize='16px' variant='unstyled'>{genre.name}</Button>
                </HStack>
              </ListItem>
            )}
          </List>
        </>
      }
    </>
  )
}

export default GenreList