import {
  useEffect,
  useRef,
  useState,
} from 'react'

import GarageDesignerStage from './GarageDesignerStage'

const CanvasContainer = () => {
  const containerRef =
    useRef<HTMLDivElement | null>(null)

  const [size, setSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const resizeObserver =
      new ResizeObserver(() => {
        if (!containerRef.current)
          return

        setSize({
          width:
            containerRef.current.clientWidth,
          height:
            containerRef.current
              .clientHeight,
        })
      })

    if (containerRef.current) {
      resizeObserver.observe(
        containerRef.current
      )
    }

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden"
    >
      {size.width > 0 &&
        size.height > 0 && (
          <GarageDesignerStage
            width={size.width}
            height={size.height}
          />
        )}
    </div>
  )
}

export default CanvasContainer