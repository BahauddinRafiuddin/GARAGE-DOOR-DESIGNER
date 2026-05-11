type AccessoryItem = {
  id: string
  name: string
  image: string
}

export const createAccessoryRegistry = (
  modules: Record<
    string,
    {
      default: string
    }
  >
): AccessoryItem[] => {
  return Object.entries(modules).map(
    ([path, module]) => {
      const fileName =
        path
          .split('/')
          .pop()
          ?.replace('.png', '') || ''

      return {
        id: fileName,

        name: fileName
          .replaceAll('-', ' ')
          .replace(/\b\w/g, (char) =>
            char.toUpperCase()
          ),

        image: module.default,
      }
    }
  )
}