export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Hello World
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Welcome to your first Next.js application! This is a simple hello world page built with modern web technologies.
        </p>
        <div className="inline-block px-8 py-3 bg-white rounded-full shadow-lg border border-gray-200">
          <p className="text-sm font-medium text-gray-700">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  )
}