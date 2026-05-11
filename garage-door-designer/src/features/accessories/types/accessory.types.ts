export type AccessoryType =
  | 'window'
  | 'handle'
  | 'hinge'

export type AccessoryAsset = {
  id: string
  name: string
  type: AccessoryType
  image: string
}