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

  selectedWindow: string | null

  selectedHandle: string | null

  selectedHinge: string | null

  windowPosition: {
    x: number
    y: number
  }

  handlePosition: {
    x: number
    y: number
  }

  activeTransformId: string | null

  windowScale: {
    x: number
    y: number
  }

  handleScale: {
    x: number
    y: number
  }

  hingePositions: {
    x: number
    y: number
  }[]

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

  setSelectedWindow: (
    image: string | null
  ) => void

  setSelectedHandle: (
    image: string | null
  ) => void

  setSelectedHinge: (
    image: string | null
  ) => void

  setWindowPosition: (
    position: {
      x: number
      y: number
    }
  ) => void

  setHandlePosition: (
    position: {
      x: number
      y: number
    }
  ) => void

  setActiveTransformId: (
    id: string | null
  ) => void

  setWindowScale: (
    scale: {
      x: number
      y: number
    }
  ) => void

  setHandleScale: (
    scale: {
      x: number
      y: number
    }
  ) => void

  setHingePositions: (
    positions: {
      x: number
      y: number
    }[]
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
    selectedWindow: null,

    selectedHandle: null,

    selectedHinge: null,

    windowPosition: {
      x: 0.15,
      y: 0.08,
    },

    handlePosition: {
      x: 0.42,
      y: 0.55,
    },

    activeTransformId: null,

    windowScale: {
      x: 1,
      y: 1,
    },

    handleScale: {
      x: 1,
      y: 1,
    },

    hingePositions: [
      { x: 0.03, y: 0.2 },
      { x: 0.03, y: 0.45 },
      { x: 0.03, y: 0.7 },
    ],

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

    setSelectedWindow: (
      image
    ) =>
      set({
        selectedWindow: image,
      }),

    setSelectedHandle: (
      image
    ) =>
      set({
        selectedHandle: image,
      }),

    setSelectedHinge: (
      image
    ) =>
      set({
        selectedHinge: image,
      }),

    setWindowPosition: (
      position
    ) =>
      set({
        windowPosition:
          position,
      }),

    setHandlePosition: (
      position
    ) =>
      set({
        handlePosition:
          position,
      }),

    setActiveTransformId: (
      id
    ) =>
      set({
        activeTransformId:
          id,
      }),

    setWindowScale: (
      scale
    ) =>
      set({
        windowScale: scale,
      }),

    setHandleScale: (
      scale
    ) =>
      set({
        handleScale: scale,
      }),

    setHingePositions: (
      positions
    ) =>
      set({
        hingePositions:
          positions,
      }),

  }))