import type { GarageDoorAsset, GarageDoorCategory } from "../types/garageDoor.types"


const garageDoorModules =
  import.meta.glob(
    '/src/assets/garage-doors/**/*.{png,jpg,jpeg,webp}',
    {
      eager: true,
      import: 'default',
    }
  )

export const createGarageDoorRegistry =
  (): GarageDoorAsset[] => {
    return Object.entries(
      garageDoorModules
    ).map(([path, image]) => {
      const parts = path.split('/')

      const filename =
        parts[parts.length - 1]

      const category =
        parts[
          parts.length - 2
        ] as GarageDoorCategory

      const cleanName = filename
        .split('.')[0]
        .replace(/-/g, ' ')

      return {
        id: filename,
        name: cleanName,
        category,
        image: image as string,
        thumbnail: image as string,
      }
    })
  }