const supportedFormats = [
  'image/jpeg',
  'image/png',
  'image/webp',
]

export const validateImage = (file: File) => {
  return supportedFormats.includes(file.type)
}