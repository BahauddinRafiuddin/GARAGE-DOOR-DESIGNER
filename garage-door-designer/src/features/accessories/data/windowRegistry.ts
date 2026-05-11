import { createAccessoryRegistry } from '../utils/createAccessoryRegistry'

const windowModules =
  import.meta.glob<{
    default: string
  }>(
    '../../../assets/accessories/windows/*.png',
    {
      eager: true,
    }
  )

export const windowRegistry =
  createAccessoryRegistry(
    windowModules
  )