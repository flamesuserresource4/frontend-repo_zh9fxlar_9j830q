function CTA() {
  return (
    <section id="get-started" className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="px-8 py-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">Spin up your next idea today</h3>
              <p className="mt-2 text-white/80">Use this workspace to design APIs, craft UIs, and preview everything live — all in one place.</p>
            </div>
            <div className="flex md:justify-end gap-3">
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-gray-900 font-medium hover:bg-white/90 shadow">
                Learn more
              </a>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-gray-900/20 ring-1 ring-white/30 text-white font-medium hover:bg-gray-900/30">
                Open sandbox
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
