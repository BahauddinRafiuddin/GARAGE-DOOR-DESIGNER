import { useEditorStore } from '../../../store/editorStore'

import { hingeRegistry } from '../data/hingeRegistry'

const HingePanel = () => {
  const selectedHinge =
    useEditorStore(
      (state) =>
        state.selectedHinge
    )

  const setSelectedHinge =
    useEditorStore(
      (state) =>
        state.setSelectedHinge
    )

  return (
    <div className="mt-6 rounded border border-slate-700 bg-slate-900 p-4">
      <h3 className="mb-4 text-sm font-semibold">
        Hinges
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {hingeRegistry.map((hinge) => (
          <button
            key={hinge.id}
            onClick={() =>
              setSelectedHinge(
                hinge.image
              )
            }
            className={`
              overflow-hidden rounded border

              ${
                selectedHinge ===
                hinge.image
                  ? 'border-blue-500'
                  : 'border-slate-700'
              }
            `}
          >
            <img
              src={hinge.image}
              alt={hinge.name}
              className="h-20 w-full object-contain bg-slate-800 p-2"
              loading="lazy"
            />

            <div className="p-2 text-xs">
              {hinge.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default HingePanel