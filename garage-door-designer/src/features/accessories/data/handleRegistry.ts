import { createAccessoryRegistry } from '../utils/createAccessoryRegistry'

const handleModules =
  import.meta.glob<{
    default: string
  }>(
    '../../../assets/accessories/handles/*.png',
    {
      eager: true,
    }
  )

export const handleRegistry =
  createAccessoryRegistry(
    handleModules
  )