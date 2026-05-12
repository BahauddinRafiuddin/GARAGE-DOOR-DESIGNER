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
  const imageRef =
    useRef<any>(null)

  const transformerRef =
    useRef<any>(null)

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

  const windowScale =
    useEditorStore(
      (state) =>
        state.windowScale
    )

  const setWindowScale =
    useEditorStore(
      (state) =>
        state.setWindowScale
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

  const [windowImage] = useImage(
    selectedWindow || ''
  )

  useEffect(() => {
    if (
      activeTransformId ===
        'window' &&
      transformerRef.current &&
      imageRef.current
    ) {
      transformerRef.current.nodes([
        imageRef.current,
      ])

      transformerRef.current
        .getLayer()
        ?.batchDraw()
    }
  }, [activeTransformId])

  if (!selectedWindow || !windowImage) {
    return null
  }

  const overlayWidth =
    width *
    0.7 *
    windowScale.x

  const overlayHeight =
    height *
    0.18 *
    windowScale.y

  return (
    <>
      <KonvaImage
        ref={imageRef}
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

        onClick={() =>
          setActiveTransformId(
            'window'
          )
        }

        onTap={() =>
          setActiveTransformId(
            'window'
          )
        }

        onDragEnd={(event) => {
          const localX =
            (event.target.x() -
              x) /
            width

          const localY =
            (event.target.y() -
              y) /
            height

          setWindowPosition({
            x: localX,
            y: localY,
          })
        }}

        onTransformEnd={() => {
          const node =
            imageRef.current

          setWindowScale({
            x: node.scaleX(),
            y: node.scaleY(),
          })

          node.scaleX(1)
          node.scaleY(1)
        }}
      />

      {activeTransformId ===
        'window' && (
        <Transformer
          ref={transformerRef}
          rotateEnabled={false}
        />
      )}
    </>
  )
}

export default GarageWindowOverlay