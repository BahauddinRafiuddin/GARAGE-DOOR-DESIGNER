import type { Point } from '../../../types/canvas.types'

export const getPolygonBounds = (
  points: Point[]
) => {
  const xs = points.map((p) => p.x)

  const ys = points.map((p) => p.y)

  const minX = Math.min(...xs)
  const maxX = Math.max(...xs)

  const minY = Math.min(...ys)
  const maxY = Math.max(...ys)

  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY,
  }
}