import { Button, Heading, HStack, Image, List, ListItem } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import { IGenre } from '../server/GenreService'
import getCroppedImageURL from '../utilities/image-url'
import GenreListSkeleton from './GenreListSkeleton'
import Prompt from './Prompt'

interface GenreListProps {
  selectedGenre: IGenre | null
  onSelectGenre: (genre: IGenre) => void
}

const GenreList = ({ selectedGenre, onSelectGenre }: GenreListProps) => {
  const { data: genres, isLoading, error } = useGenres()
  const isGenreList: boolean = genres?.count !== 0

  const getFontWeight = (genreId: number): string => genreId === selectedGenre?.id ? 'bold' : 'normal' 

  return (
    <>
      { (!isGenreList && !isLoading && !error) && (<Prompt>No item(s) found!</Prompt>) }
      { error && null }

      { isGenreList &&
        <>
          <Heading as='h4' fontSize='2xl' mb={3} >Genres</Heading>
          <List>
            { isLoading && [...Array(16)].map((_, index) => <GenreListSkeleton key={index} />) }
            {genres?.results?.map(genre => 
              <ListItem key={genre.id} py='5px'>
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