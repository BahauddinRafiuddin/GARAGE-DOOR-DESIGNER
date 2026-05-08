import { useEditorStore } from '../../../store/editorStore'

const GarageSelectionPanel = () => {
  const houseImage = useEditorStore(
    (state) => state.houseImage
  )

  const polygonPoints = useEditorStore(
    (state) => state.polygonPoints
  )

  const isSelectingGarage = useEditorStore(
    (state) => state.isSelectingGarage
  )

  const setIsSelectingGarage =
    useEditorStore(
      (state) => state.setIsSelectingGarage
    )

  const resetSelection = useEditorStore(
    (state) => state.resetSelection
  )

  const handleStartSelection = () => {
    if (!houseImage) return

    resetSelection()

    setIsSelectingGarage(true)
  }

  return (
    <div className="mt-6 rounded border border-slate-700 bg-slate-900 p-4">
      <h3 className="mb-3 text-sm font-semibold">
        Garage Area Selection
      </h3>

      {!houseImage && (
        <p className="text-sm text-slate-400">
          Upload image first
        </p>
      )}

      {houseImage && (
        <>
          <button
            onClick={handleStartSelection}
            className="w-full rounded bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-500"
          >
            Start Selection
          </button>

          <button
            onClick={resetSelection}
            className="mt-3 w-full rounded bg-slate-700 px-4 py-2 text-sm"
          >
            Reset Selection
          </button>

          <div className="mt-3 text-xs text-slate-400">
            Points Selected:
            {' '}
            {polygonPoints.length}
            /4
          </div>

          {polygonPoints.length === 4 && (
            <div className="mt-2 text-xs text-emerald-400">
              Drag points to adjust selection
            </div>
          )}

          {isSelectingGarage && (
            <div className="mt-2 text-xs text-blue-400">
              Click 4 points on garage area
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default GarageSelectionPanel