import ImageUploader from '../../features/image-upload/components/ImageUploader'

import GarageSelectionPanel from '../../features/garage-selection/components/GarageSelectionPanel'

import GarageDoorPanel from '../../features/garage-overlay/components/GarageDoorPanel'
import GarageCustomizationPanel from '../../features/garage-overlay/components/GarageCustomizationPanel'
import ComparisonPanel from '../../features/comparison/components/ComparisonPanel'
import ExportPanel from '../../features/export/components/ExportPanel'
import WindowPanel from '../../features/accessories/components/WindowPanel'
import HandlePanel from '../../features/accessories/components/HandlePanel'
import HingePanel from '../../features/accessories/components/HingePanel'

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
          flex h-full w-72 flex-col
          border-r border-slate-700
          bg-slate-800
          transition-transform duration-300

          ${
            isOpen
              ? 'translate-x-0'
              : '-translate-x-full'
          }

          md:translate-x-0
        `}
      >
        {/* Fixed Header */}
        <div className="border-b border-slate-700 p-4">
          <h2 className="text-lg font-semibold">
            Controls
          </h2>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <ImageUploader />

          <GarageSelectionPanel />

          <GarageDoorPanel />

          <WindowPanel/>
          <HandlePanel/>
          <HingePanel/>

          <GarageCustomizationPanel/>

          <ComparisonPanel/>

          <ExportPanel/>
        </div>
      </aside>
    </>
  )
}

export default Sidebar