import { Rect } from 'react-konva'

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
  const windowWidth = width * 0.18

  const windowHeight = height * 0.12

  const gap = width * 0.04

  const startX =
    x +
    width / 2 -
    ((windowWidth * 4 + gap * 3) / 2)

  const topY = y + height * 0.12

  return (
    <>
      {[0, 1, 2, 3].map((index) => (
        <Rect
          key={index}
          x={
            startX +
            index *
              (windowWidth + gap)
          }
          y={topY}
          width={windowWidth}
          height={windowHeight}
          fill="#dbeafe"
          stroke="#1e293b"
          strokeWidth={2}
          cornerRadius={4}
          opacity={0.8}
        />
      ))}
    </>
  )
}

export default GarageWindowOverlay