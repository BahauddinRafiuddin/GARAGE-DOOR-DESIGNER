import type { ImageBounds } from '../../../types/image.types'

export const denormalizePoint = (
  x: number,
  y: number,
  bounds: ImageBounds
) => {
  return {
    x: bounds.x + x * bounds.width,
    y: bounds.y + y * bounds.height,
  }
}