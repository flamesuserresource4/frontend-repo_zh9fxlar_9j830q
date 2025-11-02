function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Vibe Studio. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-900">Docs</a>
          <a href="#" className="hover:text-gray-900">Changelog</a>
          <a href="#" className="hover:text-gray-900">Privacy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
