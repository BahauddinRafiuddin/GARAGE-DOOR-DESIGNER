import Konva from 'konva'

type ExportStageParams = {
  stage: Konva.Stage
  fileName: string
  mimeType: string
}

export const exportStage = ({
  stage,
  fileName,
  mimeType,
}: ExportStageParams) => {
  const dataURL = stage.toDataURL({
    mimeType,
    pixelRatio: 2,
  })

  const link =
    document.createElement('a')

  link.download = fileName

  link.href = dataURL

  document.body.appendChild(link)

  link.click()

  document.body.removeChild(link)
}