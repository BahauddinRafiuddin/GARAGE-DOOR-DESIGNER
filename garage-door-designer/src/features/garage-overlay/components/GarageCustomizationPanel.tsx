import { useEditorStore } from '../../../store/editorStore'

const COLORS = [
  '#ffffff',
  '#111111',
  '#8b5a2b',
  '#d6c2a1',
  '#5c4033',
]

const GarageCustomizationPanel =
  () => {
    const garageDoorColor =
      useEditorStore(
        (state) =>
          state.garageDoorColor
      )

    const setGarageDoorColor =
      useEditorStore(
        (state) =>
          state.setGarageDoorColor
      )

    const garageDoorOpacity =
      useEditorStore(
        (state) =>
          state.garageDoorOpacity
      )

    const setGarageDoorOpacity =
      useEditorStore(
        (state) =>
          state.setGarageDoorOpacity
      )

    const showGarageWindows =
      useEditorStore(
        (state) =>
          state.showGarageWindows
      )

    const setShowGarageWindows =
      useEditorStore(
        (state) =>
          state.setShowGarageWindows
      )

    const showGarageHardware =
      useEditorStore(
        (state) =>
          state.showGarageHardware
      )

    const setShowGarageHardware =
      useEditorStore(
        (state) =>
          state.setShowGarageHardware
      )

    return (
      <div className="mt-6 rounded border border-slate-700 bg-slate-900 p-4">
        <h3 className="mb-4 text-sm font-semibold">
          Customization
        </h3>

        {/* Color Selection */}
        <div>
          <p className="mb-2 text-xs text-slate-400">
            Door Color
          </p>

          <div className="flex gap-2">
            {COLORS.map((color) => (
              <button
                key={color}
                onClick={() =>
                  setGarageDoorColor(
                    color
                  )
                }
                className={`
                  h-8 w-8 rounded-full border-2

                  ${
                    garageDoorColor ===
                    color
                      ? 'border-blue-500'
                      : 'border-slate-600'
                  }
                `}
                style={{
                  backgroundColor:
                    color,
                }}
              />
            ))}
          </div>
        </div>

        {/* Opacity */}
        <div className="mt-5">
          <p className="mb-2 text-xs text-slate-400">
            Opacity
          </p>

          <input
            type="range"
            min={0.2}
            max={1}
            step={0.1}
            value={garageDoorOpacity}
            onChange={(e) =>
              setGarageDoorOpacity(
                Number(
                  e.target.value
                )
              )
            }
            className="w-full"
          />
        </div>

        {/* Windows Toggle */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm">
            Windows
          </span>

          <input
            type="checkbox"
            checked={
              showGarageWindows
            }
            onChange={(e) =>
              setShowGarageWindows(
                e.target.checked
              )
            }
          />
        </div>

        {/* Hardware Toggle */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm">
            Hardware
          </span>

          <input
            type="checkbox"
            checked={
              showGarageHardware
            }
            onChange={(e) =>
              setShowGarageHardware(
                e.target.checked
              )
            }
          />
        </div>
      </div>
    )
  }

export default GarageCustomizationPanel