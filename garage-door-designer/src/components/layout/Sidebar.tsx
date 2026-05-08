import ImageUploader from '../../features/image-upload/components/ImageUploader'

import GarageSelectionPanel from '../../features/garage-selection/components/GarageSelectionPanel'

type SidebarProps = {
  isOpen: boolean
  onClose: () => void
}

const Sidebar = ({
  isOpen,
  onClose,
}: SidebarProps) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          h-full w-72
          bg-slate-800
          border-r border-slate-700
          p-4
          transition-transform duration-300

          ${isOpen
            ? 'translate-x-0'
            : '-translate-x-full'
          }

          md:translate-x-0
        `}
      >
        <h2 className="text-lg font-semibold">
          Controls
        </h2>

        <ImageUploader />

        <GarageSelectionPanel />
      </aside>
    </>
  )
}

export default Sidebar