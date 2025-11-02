import { Rocket, Star } from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center shadow-sm">
            <Rocket size={18} />
          </div>
          <span className="font-semibold text-gray-900">Vibe Studio</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#showcase" className="hover:text-gray-900 transition-colors">Showcase</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">
            <Star size={16} /> Star us
          </button>
          <a href="#get-started" className="inline-flex items-center px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium shadow hover:bg-gray-800">
            Get started
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
