import { Circle } from 'react-konva'

type SelectionPointProps = {
  x: number
  y: number
  onDragMove: (
    x: number,
    y: number
  ) => void
}

const SelectionPoint = ({
  x,
  y,
  onDragMove,
}: SelectionPointProps) => {
  return (
    <Circle
      x={x}
      y={y}
      radius={14}
      fill="#3b82f6"
      stroke="white"
      strokeWidth={2}
      draggable
      shadowColor="#3b82f6"
      dragBoundFunc={(pos) => pos}
      shadowBlur={10}
      onMouseEnter={(e) => {
        const container =
          e.target
            .getStage()
            ?.container()

        if (container) {
          container.style.cursor = 'grab'
        }
      }}
      onMouseLeave={(e) => {
        const container =
          e.target
            .getStage()
            ?.container()

        if (container) {
          container.style.cursor =
            'default'
        }
      }}
      onDragMove={(e) => {
        onDragMove(
          e.target.x(),
          e.target.y()
        )
      }}
    />
  )
}

export default SelectionPoint