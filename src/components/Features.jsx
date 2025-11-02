import { Code, Server, Layers, Workflow } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Modern UI',
    desc: 'Preconfigured with Tailwind and a component-driven structure to ship beautiful interfaces fast.'
  },
  {
    icon: Server,
    title: 'API First',
    desc: 'Design endpoints with FastAPI and wire them to the UI using a clean separation of concerns.'
  },
  {
    icon: Layers,
    title: 'Composable',
    desc: 'Small, focused components that are easy to reuse and extend as your app grows.'
  },
  {
    icon: Workflow,
    title: 'Developer Flow',
    desc: 'Hot reload, instant previews, and a smooth iteration loop with your AI pair programmer.'
  }
]

function Features() {
  return (
    <section id="features" className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Everything you need to get moving</h2>
          <p className="mt-3 text-gray-600">A curated set of tools that helps you focus on building, not on wiring up boilerplate.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 grid place-items-center">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
