import { FiMenu } from 'react-icons/fi'

type MobileHeaderProps = {
  onMenuClick: () => void
}

const MobileHeader = ({ onMenuClick }: MobileHeaderProps) => {
  return (
    <header className="flex items-center justify-between border-b border-slate-700 bg-slate-900 p-4 md:hidden">
      <h1 className="text-lg font-semibold">Garage Designer</h1>

      <button
        onClick={onMenuClick}
        className="rounded bg-slate-700 p-2"
      >
        <FiMenu size={20} />
      </button>
    </header>
  )
}

export default MobileHeader