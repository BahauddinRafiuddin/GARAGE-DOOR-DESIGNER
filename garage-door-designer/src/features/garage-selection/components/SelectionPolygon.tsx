import { Line } from 'react-konva'

import type { Point } from '../../../types/canvas.types'

type SelectionPolygonProps = {
  points: Point[]
}

const SelectionPolygon = ({
  points,
}: SelectionPolygonProps) => {
  if (points.length < 2) return null

  const flatPoints = points.flatMap((point) => [
    point.x,
    point.y,
  ])

  return (
    <Line
      points={flatPoints}
      stroke="#3b82f6"
      strokeWidth={3}
      closed={points.length === 4}
      fill="rgba(59,130,246,0.2)"
    />
  )
}

export default SelectionPolygon