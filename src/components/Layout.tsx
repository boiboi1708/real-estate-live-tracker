import { Outlet, useLocation } from 'react-router-dom'
import { Building2 } from 'lucide-react'

export default function Layout() {
  const location = useLocation()
  const isVisitorPage = location.pathname === '/visitor'

  // For visitor page, render without header (map-first design with floating header)
  if (isVisitorPage) {
    return <Outlet />
  }

  // For other pages, keep the original header
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-slate-900 text-white py-4 px-6 shadow-lg">
        <div className="flex flex-col items-center gap-2">
          <Building2
            className="w-20 h-20 sm:w-24 sm:h-24 text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]"
            strokeWidth={1.25}
            aria-hidden
          />
          <h1 className="text-2xl font-bold tracking-tight">
            NZ Real Estate Tracker
          </h1>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
