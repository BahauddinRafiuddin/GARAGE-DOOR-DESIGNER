import { Layer } from 'react-konva'

import { useEditorStore } from '../../store/editorStore'

import { denormalizePoint } from '../../features/garage-selection/utils/denormalizePoint'

import { getPolygonBounds } from '../../features/garage-overlay/utils/getPolygonBounds'

import GarageDoorImage from '../nodes/GarageDoorImage'

const DoorLayer = () => {
  const polygonPoints = useEditorStore(
    (state) => state.polygonPoints
  )

  const imageBounds = useEditorStore(
    (state) => state.imageBounds
  )

  const selectedGarageDoor =
    useEditorStore(
      (state) =>
        state.selectedGarageDoor
    )

  if (
    !imageBounds ||
    polygonPoints.length !== 4 ||
    !selectedGarageDoor
  ) {
    return <Layer />
  }

  const screenPoints = polygonPoints.map(
    (point) =>
      denormalizePoint(
        point.x,
        point.y,
        imageBounds
      )
  )

  const bounds =
    getPolygonBounds(screenPoints)

  return (
    <Layer>
      <GarageDoorImage
        imageUrl={selectedGarageDoor}
        x={bounds.x}
        y={bounds.y}
        width={bounds.width}
        height={bounds.height}
      />
    </Layer>
  )
}

export default DoorLayer