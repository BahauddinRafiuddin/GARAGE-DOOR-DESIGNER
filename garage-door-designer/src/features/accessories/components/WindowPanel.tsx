import { useEditorStore } from '../../../store/editorStore'

import { windowRegistry } from '../data/windowRegistry'

const WindowPanel = () => {
  const selectedWindow =
    useEditorStore(
      (state) =>
        state.selectedWindow
    )

  const setSelectedWindow =
    useEditorStore(
      (state) =>
        state.setSelectedWindow
    )

  return (
    <div className="mt-6 rounded border border-slate-700 bg-slate-900 p-4">
      <h3 className="mb-4 text-sm font-semibold">
        Windows
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {windowRegistry.map((window) => (
          <button
            key={window.id}
            onClick={() =>
              setSelectedWindow(
                window.image
              )
            }
            className={`
              overflow-hidden rounded border

              ${
                selectedWindow ===
                window.image
                  ? 'border-blue-500'
                  : 'border-slate-700'
              }
            `}
          >
            <img
              src={window.image}
              alt={window.name}
              className="h-20 w-full object-contain bg-slate-800 p-2"
              loading="lazy"
            />

            <div className="p-2 text-xs">
              {window.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default WindowPanel