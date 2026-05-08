import type { ImageBounds } from '../../../types/image.types'

export const normalizePoint = (
  x: number,
  y: number,
  bounds: ImageBounds
) => {
  return {
    x: (x - bounds.x) / bounds.width,
    y: (y - bounds.y) / bounds.height,
  }
}