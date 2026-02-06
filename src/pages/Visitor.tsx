import { MapPin } from 'lucide-react'

const MOCK_MARKERS = [
  { id: 1, x: 18, y: 25, price: '$485,000', address: '12 Queen St' },
  { id: 2, x: 55, y: 40, price: '$720,000', address: '45 Victoria Ave' },
  { id: 3, x: 75, y: 60, price: '$389,000', address: '8 Beach Rd' },
  { id: 4, x: 35, y: 70, price: '$1.2M', address: '22 Harbour View' },
  { id: 5, x: 85, y: 30, price: '$550,000', address: '3 Hillcrest Dr' },
  { id: 6, x: 10, y: 55, price: '$612,000', address: '15 Park Lane' },
  { id: 7, x: 60, y: 18, price: '$890,000', address: '7 Bay View' },
]

export default function Visitor() {
  return (
    <div className="relative w-full h-[calc(100vh-8rem)] overflow-hidden">
      {/* Map background - placeholder map style */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23cbd5e1' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='%23f1f5f9'/%3E%3Crect width='100' height='100' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          backgroundColor: '#e2e8f0',
        }}
      />

      {/* Optional: overlay streets/water for more map-like feel */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            linear-gradient(90deg, transparent 0%, transparent 98%, rgba(94, 234, 212, 0.15) 98%, rgba(94, 234, 212, 0.15) 100%),
            linear-gradient(0deg, transparent 0%, transparent 98%, rgba(94, 234, 212, 0.15) 98%, rgba(94, 234, 212, 0.15) 100%)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Price markers */}
      {MOCK_MARKERS.map((marker) => (
        <div
          key={marker.id}
          className="absolute transform -translate-x-1/2 -translate-y-full cursor-pointer group"
          style={{
            left: `${marker.x}%`,
            top: `${marker.y}%`,
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
        >
          <div className="flex flex-col items-center">
            <div className="bg-amber-500 text-white px-3 py-1.5 rounded-lg font-semibold text-sm shadow-lg border-2 border-white whitespace-nowrap group-hover:bg-amber-600 transition-colors">
              {marker.price}
            </div>
            <MapPin className="w-6 h-6 text-amber-600 -mt-1 drop-shadow-md" />
          </div>
          {/* Tooltip on hover */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-16 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
            <div className="bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              {marker.address}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
