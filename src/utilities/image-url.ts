import placeholder from '../../assets/images/no-image-placeholder.jpg'

const getCroppedImageURL = (url: string): string => {
  if (!url) return placeholder
  
  const target = 'media/'
  const index = url.indexOf(target) + target.length
  return `${url.slice(0, index)}crop/600/400/${url.slice(index)}`
}

export default getCroppedImageURL