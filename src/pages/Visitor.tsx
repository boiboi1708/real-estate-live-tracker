import { Building2, Search, Heart, User } from 'lucide-react'

export default function Visitor() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Full-screen Map Container - simulated with light gray background */}
      <div className="absolute inset-0 bg-slate-200" />

      {/* Floating Header with Glassmorphism */}
      <header className="absolute top-0 left-0 right-0 z-50 p-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-4 rounded-2xl bg-white/80 backdrop-blur-md px-6 py-4 shadow-lg">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-amber-500" strokeWidth={2} />
              <span className="hidden text-lg font-bold text-slate-800 sm:block">
                NZ Real Estate
              </span>
            </div>

            {/* Search Bar */}
            <div className="flex flex-1 items-center gap-3 rounded-xl bg-white px-4 py-2 shadow-sm">
              <Search className="h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search location, price, or property type..."
                aria-label="Search properties by location, price, or type"
                className="flex-1 border-none bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Floating Bottom Navigation Bar */}
      <nav className="absolute bottom-0 left-0 right-0 z-50 p-4">
        <div className="mx-auto max-w-md">
          <div className="flex items-center justify-around rounded-2xl bg-white/80 backdrop-blur-md px-6 py-4 shadow-lg">
            {/* Search Button */}
            <button 
              className="flex flex-col items-center gap-1 transition-colors hover:text-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500 rounded-lg"
              aria-label="Search properties"
            >
              <Search className="h-6 w-6" />
              <span className="text-xs font-medium">Search</span>
            </button>

            {/* Saved Button */}
            <button 
              className="flex flex-col items-center gap-1 transition-colors hover:text-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500 rounded-lg"
              aria-label="View saved properties"
            >
              <Heart className="h-6 w-6" />
              <span className="text-xs font-medium">Saved</span>
            </button>

            {/* Profile Button */}
            <button 
              className="flex flex-col items-center gap-1 transition-colors hover:text-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-500 rounded-lg"
              aria-label="View profile"
            >
              <User className="h-6 w-6" />
              <span className="text-xs font-medium">Profile</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}
