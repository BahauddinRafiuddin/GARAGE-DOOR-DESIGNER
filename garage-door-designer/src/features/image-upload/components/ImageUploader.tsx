import type { ChangeEvent } from 'react'

import { useEditorStore } from '../../../store/editorStore'

import { validateImage } from '../utils/validateImage'

const ImageUploader = () => {
  const setHouseImage = useEditorStore(
    (state) => state.setHouseImage
  )

  const handleUpload = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]

    if (!file) return

    const isValid = validateImage(file)

    if (!isValid) {
      alert('Only JPG, PNG, and WebP supported')
      return
    }

    const imageUrl = URL.createObjectURL(file)

    setHouseImage(imageUrl)
  }

  return (
    <div className="mt-4">
      <label className="mb-2 block text-sm font-medium">
        Upload House Image
      </label>

      <input
        type="file"
        accept="image/png,image/jpeg,image/webp"
        onChange={handleUpload}
        className="w-full rounded border border-slate-600 bg-slate-700 p-2 text-sm"
      />
    </div>
  )
}

export default ImageUploader