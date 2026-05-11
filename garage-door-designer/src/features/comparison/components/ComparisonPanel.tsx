import { useEditorStore } from '../../../store/editorStore'

const ComparisonPanel = () => {
  const comparisonMode =
    useEditorStore(
      (state) =>
        state.comparisonMode
    )

  const setComparisonMode =
    useEditorStore(
      (state) =>
        state.setComparisonMode
    )

  const comparisonPosition =
    useEditorStore(
      (state) =>
        state.comparisonPosition
    )

  const setComparisonPosition =
    useEditorStore(
      (state) =>
        state.setComparisonPosition
    )

  return (
    <div className="mt-6 rounded border border-slate-700 bg-slate-900 p-4">
      <h3 className="mb-4 text-sm font-semibold">
        Comparison
      </h3>

      {/* Toggle */}
      <div className="flex items-center justify-between">
        <span className="text-sm">
          Before / After
        </span>

        <input
          type="checkbox"
          checked={comparisonMode}
          onChange={(e) =>
            setComparisonMode(
              e.target.checked
            )
          }
        />
      </div>

      {/* Slider */}
      {comparisonMode && (
        <div className="mt-5">
          <p className="mb-2 text-xs text-slate-400">
            Comparison Position
          </p>

          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={comparisonPosition}
            onChange={(e) =>
              setComparisonPosition(
                Number(
                  e.target.value
                )
              )
            }
            className="w-full"
          />
        </div>
      )}
    </div>
  )
}

export default ComparisonPanel