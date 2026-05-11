import { Circle, Rect } from 'react-konva'

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
  const handleWidth = width * 0.08

  const handleHeight = height * 0.18

  const handleX =
    x + width / 2 - handleWidth / 2

  const handleY =
    y + height * 0.55

  return (
    <>
      {/* Handle */}
      <Rect
        x={handleX}
        y={handleY}
        width={handleWidth}
        height={handleHeight}
        fill="#111827"
        cornerRadius={8}
      />

      {/* Hinges */}
      {[0, 1, 2].map((index) => (
        <Circle
          key={index}
          x={x + width * 0.08}
          y={
            y +
            height * (0.25 + index * 0.25)
          }
          radius={8}
          fill="#111827"
        />
      ))}
    </>
  )
}

export default GarageHardwareOverlay