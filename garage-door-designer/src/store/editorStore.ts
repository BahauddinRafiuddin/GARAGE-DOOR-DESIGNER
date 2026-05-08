import { create } from 'zustand'

import type { Point } from '../types/canvas.types'
import type { ImageBounds } from '../types/image.types'

type EditorStore = {
  houseImage: string | null

  polygonPoints: Point[]

  imageBounds: ImageBounds | null

  isSelectingGarage: boolean

  selectedGarageDoor: string | null

  setHouseImage: (
    image: string | null
  ) => void

  setPolygonPoints: (
    points: Point[]
  ) => void

  setIsSelectingGarage: (
    value: boolean
  ) => void

  setImageBounds: (
    bounds: ImageBounds
  ) => void

  resetSelection: () => void

  setSelectedGarageDoor: (
    door: string | null
  ) => void
}

export const useEditorStore =
  create<EditorStore>((set) => ({
    houseImage: null,

    polygonPoints: [],

    imageBounds: null,

    isSelectingGarage: false,
    selectedGarageDoor: null,

    setHouseImage: (image) =>
      set({
        houseImage: image,
      }),

    setPolygonPoints: (points) =>
      set({
        polygonPoints: points,
      }),

    setIsSelectingGarage: (value) =>
      set({
        isSelectingGarage: value,
      }),

    resetSelection: () =>
      set({
        polygonPoints: [],
        isSelectingGarage: false,
      }),

    setImageBounds: (bounds) =>
      set({
        imageBounds: bounds,
      }),

    setSelectedGarageDoor: (door) =>
      set({
        selectedGarageDoor: door,
      }),
  }))