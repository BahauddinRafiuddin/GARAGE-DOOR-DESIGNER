import {
  Image as KonvaImage,
  Transformer,
} from 'react-konva'

import {
  useEffect,
  useRef,
} from 'react'

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
  const handleRef =
    useRef<any>(null)

  const transformerRef =
    useRef<any>(null)

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

  const handleScale =
    useEditorStore(
      (state) =>
        state.handleScale
    )

  const setHandleScale =
    useEditorStore(
      (state) =>
        state.setHandleScale
    )

  const hingePositions =
    useEditorStore(
      (state) =>
        state.hingePositions
    )

  const setHingePositions =
    useEditorStore(
      (state) =>
        state.setHingePositions
    )

  const activeTransformId =
    useEditorStore(
      (state) =>
        state.activeTransformId
    )

  const setActiveTransformId =
    useEditorStore(
      (state) =>
        state.setActiveTransformId
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

  useEffect(() => {
    if (
      activeTransformId ===
        'handle' &&
      transformerRef.current &&
      handleRef.current
    ) {
      transformerRef.current.nodes([
        handleRef.current,
      ])

      transformerRef.current
        .getLayer()
        ?.batchDraw()
    }
  }, [activeTransformId])

  const handleWidth =
    width *
    0.16 *
    handleScale.x

  const handleHeight =
    height *
    0.16 *
    handleScale.y

  const hingeWidth =
    width * 0.08

  const hingeHeight =
    height * 0.08

  return (
    <>
      {/* Handle */}
      {selectedHandle &&
        handleImage && (
          <>
            <KonvaImage
              ref={handleRef}
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

              onClick={() =>
                setActiveTransformId(
                  'handle'
                )
              }

              onTap={() =>
                setActiveTransformId(
                  'handle'
                )
              }

              onDragEnd={(
                event
              ) => {
                const localX =
                  (event.target.x() -
                    x) /
                  width

                const localY =
                  (event.target.y() -
                    y) /
                  height

                setHandlePosition(
                  {
                    x: localX,
                    y: localY,
                  }
                )
              }}

              onTransformEnd={() => {
                const node =
                  handleRef.current

                setHandleScale({
                  x:
                    node.scaleX(),
                  y:
                    node.scaleY(),
                })

                node.scaleX(1)
                node.scaleY(1)
              }}
            />

            {activeTransformId ===
              'handle' && (
              <Transformer
                ref={
                  transformerRef
                }
                rotateEnabled={
                  false
                }
              />
            )}
          </>
        )}

      {/* Hinges */}
      {selectedHinge &&
        hingeImage &&
        hingePositions.map(
          (
            hinge,
            index
          ) => (
            <KonvaImage
              key={index}
              image={hingeImage}
              x={
                x +
                width *
                  hinge.x
              }
              y={
                y +
                height *
                  hinge.y
              }
              width={hingeWidth}
              height={hingeHeight}
              draggable

              onDragEnd={(
                event
              ) => {
                const localX =
                  (event.target.x() -
                    x) /
                  width

                const localY =
                  (event.target.y() -
                    y) /
                  height

                const updated =
                  [
                    ...hingePositions,
                  ]

                updated[index] =
                  {
                    x: localX,
                    y: localY,
                  }

                setHingePositions(
                  updated
                )
              }}
            />
          )
        )}
    </>
  )
}

export default GarageHardwareOverlay