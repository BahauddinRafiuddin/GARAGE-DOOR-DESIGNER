export const getPointerPosition = (
  event: any
) => {
  const stage =
    event.target.getStage()

  if (!stage) return null

  return stage.getPointerPosition()
}