import MainLayout from '../components/layout/MainLayout'

import Sidebar from '../components/layout/Sidebar'
import MobileHeader from '../components/layout/MobileHeader'

import CanvasContainer from '../canvas/stage/CanvasContainer'
import { useSidebar } from '../canvas/hooks/useSidebar'


const DesignerPage = () => {
  const {
    isSidebarOpen,
    toggleSidebar,
    closeSidebar,
  } = useSidebar()

  return (
    <MainLayout>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />

      <div className="flex h-full w-full flex-col md:pl-72">
        {/* Mobile Header */}
        <MobileHeader
          onMenuClick={toggleSidebar}
        />

        {/* Canvas Area */}
        <main className="relative flex-1 overflow-hidden bg-slate-950">
          <CanvasContainer />
        </main>
      </div>
    </MainLayout>
  )
}

export default DesignerPage