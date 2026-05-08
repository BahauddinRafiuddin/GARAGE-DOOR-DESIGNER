type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-900">
      {children}
    </div>
  )
}

export default MainLayout