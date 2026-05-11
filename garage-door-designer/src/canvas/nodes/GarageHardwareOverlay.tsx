import { Image as KonvaImage } from 'react-konva'

import useImage from 'use-image'

import { useEditorStore } from '../../store/editorStore'

type GarageHardwareOverlayProps = {
  x: number
  y: number
  width: number
  height: number
}

const GarageHardwareOverlay = ({
  x,
  y,
  width,
  height,
}: GarageHardwareOverlayProps) => {
  const handlePosition =
    useEditorStore(
      (state) =>
        state.handlePosition
    )

  const setHandlePosition =
    useEditorStore(
      (state) =>
        state.setHandlePosition
    )

  const selectedHandle =
    useEditorStore(
      (state) =>
        state.selectedHandle
    )

  const selectedHinge =
    useEditorStore(
      (state) =>
        state.selectedHinge
    )

  const [handleImage] = useImage(
    selectedHandle || ''
  )

  const [hingeImage] = useImage(
    selectedHinge || ''
  )

  const handleWidth =
    width * 0.16

  const handleHeight =
    height * 0.16

  return (
    <>
      {/* Handle */}
      {selectedHandle &&
        handleImage && (
          <KonvaImage
            image={handleImage}
            x={
              x +
              width *
                handlePosition.x
            }
            y={
              y +
              height *
                handlePosition.y
            }
            width={handleWidth}
            height={handleHeight}
            draggable

            onDragEnd={(event) => {
              // Convert absolute canvas position
              // into normalized garage-relative position

              const localX =
                (event.target.x() -
                  x) /
                width

              const localY =
                (event.target.y() -
                  y) /
                height

              // Prevent dragging outside garage

              const clampedX =
                Math.max(
                  0,
                  Math.min(
                    localX,
                    1 -
                      handleWidth /
                        width
                  )
                )

              const clampedY =
                Math.max(
                  0,
                  Math.min(
                    localY,
                    1 -
                      handleHeight /
                        height
                  )
                )

              setHandlePosition({
                x: clampedX,
                y: clampedY,
              })
            }}
          />
        )}

      {/* Hinges */}
      {selectedHinge &&
        hingeImage &&
        [0, 1, 2].map(
          (index) => (
            <KonvaImage
              key={index}
              image={hingeImage}
              x={
                x +
                width * 0.03
              }
              y={
                y +
                height *
                  (0.2 +
                    index *
                      0.25)
              }
              width={
                width * 0.08
              }
              height={
                height * 0.08
              }
            />
          )
        )}
    </>
  )
}

export default GarageHardwareOverlay