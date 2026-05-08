import { garageDoors } from '../data/garageDoors'

import { useEditorStore } from '../../../store/editorStore'

const GarageDoorPanel = () => {
  const selectedGarageDoor =
    useEditorStore(
      (state) =>
        state.selectedGarageDoor
    )

  const setSelectedGarageDoor =
    useEditorStore(
      (state) =>
        state.setSelectedGarageDoor
    )

  return (
    <div className="mt-6 rounded border border-slate-700 bg-slate-900 p-4">
      <h3 className="mb-4 text-sm font-semibold">
        Garage Doors
      </h3>

      <div className="grid grid-cols-1 gap-3">
        {garageDoors.map((door) => (
          <button
            key={door.id}
            onClick={() =>
              setSelectedGarageDoor(
                door.image
              )
            }
            className={`
              overflow-hidden rounded border

              ${
                selectedGarageDoor ===
                door.image
                  ? 'border-blue-500'
                  : 'border-slate-700'
              }
            `}
          >
            <img
              src={door.thumbnail}
              alt={door.name}
              className="h-24 w-full object-cover"
              loading="lazy"
            />

            <div className="p-2 text-sm">
              {door.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default GarageDoorPanel