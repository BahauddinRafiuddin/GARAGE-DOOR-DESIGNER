import { create } from 'zustand'

import type { Point } from '../types/canvas.types'
import type { ImageBounds } from '../types/image.types'
import type { GarageDoorCategory } from '../features/garage-overlay/types/garageDoor.types'

type EditorStore = {
  houseImage: string | null

  polygonPoints: Point[]

  imageBounds: ImageBounds | null

  isSelectingGarage: boolean

  selectedGarageDoor: string | null

  activeGarageCategory:
  | GarageDoorCategory
  | 'all'

  garageDoorColor: string

  garageDoorOpacity: number

  showGarageWindows: boolean

  showGarageHardware: boolean

  comparisonMode: boolean

  comparisonPosition: number

  isExporting: boolean

  stageRef: any

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

  setActiveGarageCategory: (
    category:
      | GarageDoorCategory
      | 'all'
  ) => void

  setGarageDoorColor: (
    color: string
  ) => void

  setGarageDoorOpacity: (
    opacity: number
  ) => void

  setShowGarageWindows: (
    value: boolean
  ) => void

  setShowGarageHardware: (
    value: boolean
  ) => void

  setComparisonMode: (
    enabled: boolean
  ) => void

  setComparisonPosition: (
    position: number
  ) => void

  setIsExporting: (
    exporting: boolean
  ) => void

  setStageRef: (
    ref: any
  ) => void

}

export const useEditorStore =
  create<EditorStore>((set) => ({
    houseImage: null,

    polygonPoints: [],

    imageBounds: null,

    isSelectingGarage: false,
    selectedGarageDoor: null,
    activeGarageCategory: 'all',
    garageDoorColor: '#ffffff',

    garageDoorOpacity: 1,

    showGarageWindows: true,

    showGarageHardware: true,

    comparisonMode: false,

    comparisonPosition: 0.5,

    isExporting: false,

    stageRef: null,

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

    setActiveGarageCategory: (
      category
    ) =>
      set({
        activeGarageCategory:
          category,
      }),

    setGarageDoorColor: (
      color
    ) =>
      set({
        garageDoorColor: color,
      }),

    setGarageDoorOpacity: (
      opacity
    ) =>
      set({
        garageDoorOpacity:
          opacity,
      }),

    setShowGarageWindows: (
      value
    ) =>
      set({
        showGarageWindows:
          value,
      }),

    setShowGarageHardware: (
      value
    ) =>
      set({
        showGarageHardware:
          value,
      }),

    setComparisonMode: (
      enabled
    ) =>
      set({
        comparisonMode:
          enabled,
      }),

    setComparisonPosition: (
      position
    ) =>
      set({
        comparisonPosition:
          position,
      }),

    setIsExporting: (
      exporting
    ) =>
      set({
        isExporting:
          exporting,
      }),

    setStageRef: (
      ref
    ) =>
      set({
        stageRef: ref,
      }),
  }))