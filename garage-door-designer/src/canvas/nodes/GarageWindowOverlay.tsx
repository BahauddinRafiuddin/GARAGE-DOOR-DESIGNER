import { Image as KonvaImage } from 'react-konva'

import useImage from 'use-image'

import { useEditorStore } from '../../store/editorStore'

type GarageWindowOverlayProps = {
  x: number
  y: number
  width: number
  height: number
}

const GarageWindowOverlay = ({
  x,
  y,
  width,
  height,
}: GarageWindowOverlayProps) => {
  const selectedWindow =
    useEditorStore(
      (state) =>
        state.selectedWindow
    )

  const windowPosition =
    useEditorStore(
      (state) =>
        state.windowPosition
    )

  const setWindowPosition =
    useEditorStore(
      (state) =>
        state.setWindowPosition
    )

  const [windowImage] = useImage(
    selectedWindow || ''
  )

  if (!selectedWindow || !windowImage) {
    return null
  }

  const overlayWidth =
    width * 0.7

  const overlayHeight =
    height * 0.18

  return (
    <KonvaImage
      image={windowImage}
      x={
        x +
        width *
          windowPosition.x
      }
      y={
        y +
        height *
          windowPosition.y
      }
      width={overlayWidth}
      height={overlayHeight}
      draggable

      onDragEnd={(event) => {
        const localX =
          (event.target.x() -
            x) /
          width

        const localY =
          (event.target.y() -
            y) /
          height

        // Keep window inside garage

        const clampedX =
          Math.max(
            0,
            Math.min(
              localX,
              1 -
                overlayWidth /
                  width
            )
          )

        const clampedY =
          Math.max(
            0,
            Math.min(
              localY,
              1 -
                overlayHeight /
                  height
            )
          )

        setWindowPosition({
          x: clampedX,
          y: clampedY,
        })
      }}
    />
  )
}

export default GarageWindowOverlay