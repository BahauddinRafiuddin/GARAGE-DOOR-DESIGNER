import { createAccessoryRegistry } from '../utils/createAccessoryRegistry'

const hingeModules =
  import.meta.glob<{
    default: string
  }>(
    '../../../assets/accessories/hinges/*.png',
    {
      eager: true,
    }
  )

export const hingeRegistry =
  createAccessoryRegistry(
    hingeModules
  )