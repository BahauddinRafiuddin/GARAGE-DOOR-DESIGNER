import { Image, Rect } from 'react-konva'

import useImage from 'use-image'

type GarageDoorImageProps = {
  imageUrl: string
  x: number
  y: number
  width: number
  height: number
  opacity: number
  color: string
}

const GarageDoorImage = ({
  imageUrl,
  x,
  y,
  width,
  height,
  opacity,
  color,
}: GarageDoorImageProps) => {
  const [image] = useImage(imageUrl)

  if (!image) return null

  return (
    <>
      {/* Base Door */}
      <Image
        image={image}
        x={x}
        y={y}
        width={width}
        height={height}
        opacity={opacity}
      />

      {/* Color Overlay */}
      <Rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={color}
        opacity={0.15}
        globalCompositeOperation="multiply"
      />
    </>
  )
}

export default GarageDoorImage