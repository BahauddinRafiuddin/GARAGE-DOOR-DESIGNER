type GetImageFitSizeParams = {
  imageWidth: number
  imageHeight: number
  containerWidth: number
  containerHeight: number
}

const FIT_PADDING = 40

export const getImageFitSize = ({
  imageWidth,
  imageHeight,
  containerWidth,
  containerHeight,
}: GetImageFitSizeParams) => {
  const availableWidth =
    containerWidth - FIT_PADDING * 2

  const availableHeight =
    containerHeight - FIT_PADDING * 2

  const widthRatio =
    availableWidth / imageWidth

  const heightRatio =
    availableHeight / imageHeight

  const scale = Math.min(
    widthRatio,
    heightRatio
  )

  return {
    width: imageWidth * scale,
    height: imageHeight * scale,
    scale,
  }
}