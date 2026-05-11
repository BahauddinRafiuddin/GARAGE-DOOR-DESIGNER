import { useEditorStore } from '../../../store/editorStore'

import { handleRegistry } from '../data/handleRegistry'

const HandlePanel = () => {
  const selectedHandle =
    useEditorStore(
      (state) =>
        state.selectedHandle
    )

  const setSelectedHandle =
    useEditorStore(
      (state) =>
        state.setSelectedHandle
    )

  return (
    <div className="mt-6 rounded border border-slate-700 bg-slate-900 p-4">
      <h3 className="mb-4 text-sm font-semibold">
        Handles
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {handleRegistry.map((handle) => (
          <button
            key={handle.id}
            onClick={() =>
              setSelectedHandle(
                handle.image
              )
            }
            className={`
              overflow-hidden rounded border

              ${
                selectedHandle ===
                handle.image
                  ? 'border-blue-500'
                  : 'border-slate-700'
              }
            `}
          >
            <img
              src={handle.image}
              alt={handle.name}
              className="h-20 w-full object-contain bg-slate-800 p-2"
              loading="lazy"
            />

            <div className="p-2 text-xs">
              {handle.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default HandlePanel