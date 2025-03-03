import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height='225px'/>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton