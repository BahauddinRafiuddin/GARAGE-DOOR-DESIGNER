import { useMemo } from 'react'

import { useEditorStore } from '../../../store/editorStore'

import { garageDoorRegistry } from '../data/garageDoorRegistry'

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

  const activeGarageCategory =
    useEditorStore(
      (state) =>
        state.activeGarageCategory
    )

  const setActiveGarageCategory =
    useEditorStore(
      (state) =>
        state.setActiveGarageCategory
    )

  const filteredDoors = useMemo(() => {
    if (activeGarageCategory === 'all') {
      return garageDoorRegistry
    }

    return garageDoorRegistry.filter(
      (door) =>
        door.category ===
        activeGarageCategory
    )
  }, [activeGarageCategory])

  return (
    <div className="mt-6 rounded border border-slate-700 bg-slate-900 p-4">
      <h3 className="mb-4 text-sm font-semibold">
        Garage Doors
      </h3>

      {/* Category Filters */}
      <div className="mb-4 flex flex-wrap gap-2">
        {[
          'all',
          'black',
          'white',
          'wood',
          'almond',
        ].map((category) => (
          <button
            key={category}
            onClick={() =>
              setActiveGarageCategory(
                category as any
              )
            }
            className={`
              rounded px-3 py-1 text-xs font-medium capitalize transition-colors

              ${
                activeGarageCategory ===
                category
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Garage Door Grid */}
      <div className="grid grid-cols-1 gap-3">
        {filteredDoors.map((door) => (
          <button
            key={door.id}
            onClick={() =>
              setSelectedGarageDoor(
                door.image
              )
            }
            className={`
              overflow-hidden rounded border transition-all

              ${
                selectedGarageDoor ===
                door.image
                  ? 'border-blue-500 ring-2 ring-blue-500/40'
                  : 'border-slate-700 hover:border-slate-500'
              }
            `}
          >
            <img
              src={door.thumbnail}
              alt={door.name}
              className="h-24 w-full object-cover"
              loading="lazy"
            />

            <div className="flex items-center justify-between p-2">
              <div className="text-left text-sm capitalize text-slate-200">
                {door.name}
              </div>

              <div className="rounded bg-slate-700 px-2 py-1 text-[10px] uppercase text-slate-300">
                {door.category}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Empty State */}
      {filteredDoors.length === 0 && (
        <div className="rounded border border-dashed border-slate-700 p-4 text-center text-sm text-slate-400">
          No garage doors found
        </div>
      )}
    </div>
  )
}

export default GarageDoorPanel