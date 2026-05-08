import { Layer } from 'react-konva'

import { useEditorStore } from '../../store/editorStore'

import SelectionPolygon from '../../features/garage-selection/components/SelectionPolygon'
import SelectionPoint from '../../features/garage-selection/components/SelectionPoint'
import { denormalizePoint } from '../../features/garage-selection/utils/denormalizePoint'
import { normalizePoint } from '../../features/garage-selection/utils/normalizePoint'

const SelectionLayer = () => {
  const polygonPoints = useEditorStore(
    (state) => state.polygonPoints
  )

  const setPolygonPoints = useEditorStore(
    (state) => state.setPolygonPoints
  )

  const imageBounds = useEditorStore(
    (state) => state.imageBounds
  )
  const handlePointDrag = (
  index: number,
  x: number,
  y: number
) => {
  const updatedPoints = [
    ...polygonPoints,
  ]

  updatedPoints[index] =
    normalizePoint(
      x,
      y,
      imageBounds!
    )

  setPolygonPoints(updatedPoints)
}
  if (!imageBounds) return null

  const screenPoints = polygonPoints.map(
    (point) =>
      denormalizePoint(
        point.x,
        point.y,
        imageBounds
      )
  )
  return (
    <Layer>
      <SelectionPolygon
        points={screenPoints}
      />

      {polygonPoints.map((_, index) => (
        <SelectionPoint
          key={index}
          x={screenPoints[index].x}
          y={screenPoints[index].y}
          onDragMove={(x, y) =>
            handlePointDrag(index, x, y)
          }
        />
      ))}
    </Layer>
  )
}

export default SelectionLayer