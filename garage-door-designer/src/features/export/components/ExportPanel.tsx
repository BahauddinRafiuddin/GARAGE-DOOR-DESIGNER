import { useEditorStore } from '../../../store/editorStore'
import { exportStage } from '../utils/exportStage'

const ExportPanel = () => {
  const setIsExporting =
    useEditorStore(
      (state) =>
        state.setIsExporting
    )

  const stageRef =
    useEditorStore(
      (state) => state.stageRef
    )
  const handleExport = async (
    type: 'png' | 'jpeg'
  ) => {
    if (!stageRef.current) return

    setIsExporting(true)

    await new Promise((resolve) =>
      setTimeout(resolve, 300)
    )

    exportStage({
      stage: stageRef.current,
      fileName: `garage-design.${type}`,
      mimeType:
        type === 'png'
          ? 'image/png'
          : 'image/jpeg',
    })

    setIsExporting(false)
  }

  return (
    <div className="mt-6 rounded border border-slate-700 bg-slate-900 p-4">
      <h3 className="mb-4 text-sm font-semibold">
        Export
      </h3>

      <div className="flex gap-3">
        <button
          onClick={() =>
            handleExport('png')
          }
          className="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
        >
          Export PNG
        </button>

        <button
          onClick={() =>
            handleExport('jpeg')
          }
          className="rounded bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600"
        >
          Export JPEG
        </button>
      </div>
    </div>
  )
}

export default ExportPanel