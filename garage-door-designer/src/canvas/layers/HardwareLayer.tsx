import { Group, Layer } from 'react-konva'
import { useEditorStore } from '../../store/editorStore'

import { denormalizePoint } from '../../features/garage-selection/utils/denormalizePoint'

import { getPolygonBounds } from '../../features/garage-overlay/utils/getPolygonBounds'

import GarageHardwareOverlay from '../nodes/GarageHardwareOverlay'

const HardwareLayer = () => {
  const polygonPoints = useEditorStore(
    (state) => state.polygonPoints
  )

  const imageBounds = useEditorStore(
    (state) => state.imageBounds
  )

  const showGarageHardware =
    useEditorStore(
      (state) =>
        state.showGarageHardware
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
    !showGarageHardware
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
      {/* Normal */}
      {!comparisonMode && (
        <GarageHardwareOverlay
          x={bounds.x}
          y={bounds.y}
          width={bounds.width}
          height={bounds.height}
        />
      )}

      {/* Comparison */}
      {comparisonMode && (
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
          <GarageHardwareOverlay
            x={bounds.x}
            y={bounds.y}
            width={bounds.width}
            height={bounds.height}
          />
        </Group>
      )}
    </Layer>
  )
}

export default HardwareLayer