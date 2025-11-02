import { Zap, Shield, Sparkles } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(1200px_600px_at_50%_-40%,rgba(59,130,246,0.15),rgba(255,255,255,0))]"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium ring-1 ring-blue-100">
              <Sparkles size={14} /> AI-assisted developer workspace
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Build, iterate, and ship in minutes
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              A sleek React + FastAPI starter where you can prototype full-stack ideas, preview instantly, and refine with an AI coding buddy.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-blue-600 text-white font-medium shadow hover:bg-blue-700">
                Start building
              </a>
              <a href="#features" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-white text-gray-900 font-medium ring-1 ring-gray-200 hover:bg-gray-50">
                Explore features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Shield size={16} className="text-green-600" /> Secure by design</div>
              <div className="flex items-center gap-2"><Zap size={16} className="text-yellow-500" /> Instant preview</div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="h-full w-full grid md:grid-cols-2">
                <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200">
                  <p className="text-xs text-gray-500">Frontend</p>
                  <h3 className="mt-2 font-semibold text-gray-900">React + Tailwind</h3>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600 list-disc pl-5">
                    <li>Vite development server</li>
                    <li>Shadcn/UI + Lucide icons</li>
                    <li>Framer Motion available</li>
                  </ul>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-500">Backend</p>
                  <h3 className="mt-2 font-semibold text-gray-900">FastAPI + MongoDB</h3>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600 list-disc pl-5">
                    <li>Typed Pydantic models</li>
                    <li>Ready-made CRUD helpers</li>
                    <li>.env-based configuration</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl"></div>
            <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
