import { Stage } from 'react-konva'


import BackgroundLayer from '../layers/BackgroundLayer'
import DoorLayer from '../layers/DoorLayer'
import WindowLayer from '../layers/WindowLayer'
import HardwareLayer from '../layers/HardwareLayer'
import SelectionLayer from '../layers/SelectionLayer'

import { useEditorStore } from '../../store/editorStore'
import { getPointerPosition } from '../utils/getPointerPosition'
import { normalizePoint } from '../../features/garage-selection/utils/normalizePoint'

type GarageDesignerStageProps = {
  width: number
  height: number
}

const GarageDesignerStage = ({
  width,
  height,
}: GarageDesignerStageProps) => {

  const polygonPoints = useEditorStore(
    (state) => state.polygonPoints
  )

  const setPolygonPoints = useEditorStore(
    (state) => state.setPolygonPoints
  )

  const houseImage = useEditorStore(
    (state) => state.houseImage
  )

  const isSelectingGarage =
    useEditorStore(
      (state) => state.isSelectingGarage
    )

  const setIsSelectingGarage =
    useEditorStore(
      (state) => state.setIsSelectingGarage
    )

  const imageBounds = useEditorStore(
    (state) => state.imageBounds
  )

  const handlePointerInteraction = (
    event: any
  ) => {
    if (!houseImage) return

    if (!isSelectingGarage) return

    if (polygonPoints.length === 4) return

    const pointer =
      getPointerPosition(event)

    if (!pointer) return

    const updatedPoints = [
      ...polygonPoints,
      normalizePoint(
        pointer.x,
        pointer.y,
        imageBounds!
      )
    ]

    setPolygonPoints(updatedPoints)

    if (updatedPoints.length === 4) {
      setIsSelectingGarage(false)
    }
  }

  return (
    <Stage
      width={width}
      height={height}
      onClick={handlePointerInteraction}
      onTouchStart={handlePointerInteraction}
      style={{
        cursor: isSelectingGarage
          ? 'crosshair'
          : 'default',
      }}
    >
      <BackgroundLayer
        stageWidth={width}
        stageHeight={height}
      />

      <DoorLayer />

      <WindowLayer />

      <HardwareLayer />

      <SelectionLayer />
    </Stage>
  )
}

export default GarageDesignerStage