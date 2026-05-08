import modernWhite from '../../../assets/garage-doors/modern-white.png'

import blackGlass from '../../../assets/garage-doors/modern-black.png.png'

import woodDoor from '../../../assets/garage-doors/wood-door.png.png'

import type { GarageDoorAsset } from '../types/garageDoor.types'

export const garageDoors: GarageDoorAsset[] =
  [
    {
      id: 'modern-white',
      name: 'Modern White',
      thumbnail: modernWhite,
      image: modernWhite,
    },
    {
      id: 'black-glass',
      name: 'Black Glass',
      thumbnail: blackGlass,
      image: blackGlass,
    },
    {
      id: 'wood-door',
      name: 'Wood Door',
      thumbnail: woodDoor,
      image: woodDoor,
    },
  ]