export type GarageDoorCategory =
  | 'black'
  | 'white'
  | 'wood'
  | 'almond'

export type GarageDoorAsset = {
  id: string
  name: string
  category: GarageDoorCategory
  image: string
  thumbnail: string
}