import { Image } from 'react-konva'

import useImage from 'use-image'

type GarageDoorImageProps = {
  imageUrl: string
  x: number
  y: number
  width: number
  height: number
}

const GarageDoorImage = ({
  imageUrl,
  x,
  y,
  width,
  height,
}: GarageDoorImageProps) => {
  const [image] = useImage(imageUrl)

  if (!image) return null

  return (
    <Image
      image={image}
      x={x}
      y={y}
      width={width}
      height={height}
      opacity={0.9}
    />
  )
}

export default GarageDoorImage