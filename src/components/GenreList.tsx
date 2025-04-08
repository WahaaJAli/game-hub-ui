import { Button, Heading, HStack, Image, List, ListItem } from '@chakra-ui/react'
import { JSX } from 'react'
import GenreListSkeleton from './GenreListSkeleton'
import getCroppedImageURL from '../utilities/image-url'
import Prompt from './Prompt'
import useGameQuery from '../hooks/useGameQuery'
import useGenres from '../hooks/useGenres'

const GenreList = ():JSX.Element => {
  const { data: genres, isLoading, error } = useGenres()
  const { gameQuery, dispatch } = useGameQuery()
  const isGenreList: boolean = genres?.count !== 0

  const getFontWeight = (genreId: number): string => genreId === gameQuery.genreId ? 'bold' : 'normal' 

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
                  <Button fontWeight={getFontWeight(genre.id)} fontSize='16px' variant='unstyled'
                    onClick={() => dispatch({ type: 'GENRE_ID', genreId: genre.id})} >{genre.name}</Button>
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