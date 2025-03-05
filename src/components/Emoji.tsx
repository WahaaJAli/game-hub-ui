import { Image, ImageProps } from "@chakra-ui/react"
import bullsEye from '../../assets/images/bulls-eye.png'
import meh from '../../assets/images/unamused.png'
import skip from '../../assets/images/skip.png'
import thumbsUp from '../../assets/images/thumbs-up.png'

interface EmojiProps {
  rating: number
}

const Emoji = ({ rating }: EmojiProps) => {
  if (rating < 2) return null

  const EmojiMap: { [key: number]: ImageProps } = {
    2: { src: skip,     alt: 'skip'        },
    3: { src: meh,      alt: 'meh'         },
    4: { src: thumbsUp, alt: 'recommended' },
    5: { src: bullsEye, alt: 'exceptional' },
  }

  return (
    <Image {...EmojiMap[rating]} boxSize={8} ></Image>
  )
}

export default Emoji