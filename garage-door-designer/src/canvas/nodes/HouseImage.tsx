import { useEffect } from 'react'

import { Image } from 'react-konva'

import useImage from 'use-image'

import { getImageFitSize } from '../utils/getImageFitSize'

import { useEditorStore } from '../../store/editorStore'

type HouseImageProps = {
  imageUrl: string
  stageWidth: number
  stageHeight: number
}

const HouseImage = ({
  imageUrl,
  stageWidth,
  stageHeight,
}: HouseImageProps) => {
  const [image] = useImage(imageUrl)

  const setImageBounds = useEditorStore(
    (state) => state.setImageBounds
  )

  const fittedSize = image
    ? getImageFitSize({
        imageWidth: image.width,
        imageHeight: image.height,
        containerWidth: stageWidth,
        containerHeight: stageHeight,
      })
    : {
        width: 0,
        height: 0,
      }

  const x =
    (stageWidth - fittedSize.width) / 2

  const y =
    (stageHeight - fittedSize.height) / 2

  useEffect(() => {
    if (!image) return

    setImageBounds({
      x,
      y,
      width: fittedSize.width,
      height: fittedSize.height,
    })
  }, [
    image,
    x,
    y,
    fittedSize.width,
    fittedSize.height,
    setImageBounds,
  ])

  if (!image) return null

  return (
    <Image
      image={image}
      x={x}
      y={y}
      width={fittedSize.width}
      height={fittedSize.height}
    />
  )
}

export default HouseImage