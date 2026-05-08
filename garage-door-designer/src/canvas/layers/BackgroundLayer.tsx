import { Layer, Rect } from 'react-konva'
import { useEditorStore } from '../../store/editorStore'
import HouseImage from '../nodes/HouseImage'

type BackgroundLayerProps = {
  stageWidth: number
  stageHeight: number
}

const BackgroundLayer = ({
  stageWidth,
  stageHeight,
}: BackgroundLayerProps) => {
  const houseImage = useEditorStore(
    (state) => state.houseImage
  )

  return (
    <Layer>
      <Rect
        width={stageWidth}
        height={stageHeight}
        fill="#111827"
      />

      {houseImage && (
        <HouseImage
          imageUrl={houseImage}
          stageWidth={stageWidth}
          stageHeight={stageHeight}
        />
      )}
    </Layer>
  )
}

export default BackgroundLayer