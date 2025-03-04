import { HStack, Skeleton, SkeletonText } from '@chakra-ui/react'

const GenreListSkeleton = () => {
  return (
    <HStack py='5px'>
      <Skeleton boxSize="32px" borderRadius={3} />
      <SkeletonText noOfLines={1} width="100px" />
    </HStack>
  )
}

export default GenreListSkeleton