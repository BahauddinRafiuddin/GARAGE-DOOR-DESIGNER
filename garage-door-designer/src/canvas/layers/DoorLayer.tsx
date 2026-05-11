
import { useEditorStore } from '../../store/editorStore'

import { denormalizePoint } from '../../features/garage-selection/utils/denormalizePoint'

import { getPolygonBounds } from '../../features/garage-overlay/utils/getPolygonBounds'

import GarageDoorImage from '../nodes/GarageDoorImage'
import { Group, Layer, Rect } from 'react-konva'

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

  const garageDoorColor =
    useEditorStore(
      (state) =>
        state.garageDoorColor
    )

  const garageDoorOpacity =
    useEditorStore(
      (state) =>
        state.garageDoorOpacity
    )

  const comparisonMode =
    useEditorStore(
      (state) =>
        state.comparisonMode
    )

  const comparisonPosition =
    useEditorStore(
      (state) =>
        state.comparisonPosition
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
      {/* Normal Rendering */}
      {!comparisonMode && (
        <>
          <GarageDoorImage
            imageUrl={selectedGarageDoor}
            x={bounds.x}
            y={bounds.y}
            width={bounds.width}
            height={bounds.height}
            opacity={garageDoorOpacity}
            color={garageDoorColor}
          />
        </>
      )}

      {/* Comparison Rendering */}
      {comparisonMode && (
        <>
          <Group
            clipX={0}
            clipY={0}
            clipWidth={
              bounds.x +
              bounds.width *
              comparisonPosition
            }
            clipHeight={9999}
          >
            <GarageDoorImage
              imageUrl={selectedGarageDoor}
              x={bounds.x}
              y={bounds.y}
              width={bounds.width}
              height={bounds.height}
              opacity={garageDoorOpacity}
              color={garageDoorColor}
            />
          </Group>

          {/* Divider Line */}
          <Rect
            x={
              bounds.x +
              bounds.width *
              comparisonPosition
            }
            y={bounds.y}
            width={3}
            height={bounds.height}
            fill="#ffffff"
            shadowBlur={6}
          />
        </>
      )}
    </Layer>
  )
}

export default DoorLayer