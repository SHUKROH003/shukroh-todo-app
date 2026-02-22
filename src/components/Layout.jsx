import { Outlet, NavLink } from "react-router-dom"

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col text-gray-800">
      
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">

          {/* Logo / Brand */}
          <NavLink
            to="/"
            className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition"
          >
            Shukroh Todo
          </NavLink>

          {/* Navigation */}
          <nav className="flex items-center gap-6" aria-label="Main navigation">
            
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm transition ${
                  isActive
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-600"
                }`
              }
            >
              Tasks
            </NavLink>

            <NavLink
              to="/error-test"
              className={({ isActive }) =>
                `text-sm transition ${
                  isActive
                    ? "text-blue-600 font-medium"
                    : "text-gray-600 hover:text-blue-600"
                }`
              }
            >
              Test Error
            </NavLink>

          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main
        id="main-content"
        className="flex-1 max-w-4xl mx-auto w-full px-4 py-6"
      >
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4 border-t bg-white">
        © {new Date().getFullYear()} Shukroh
      </footer>
    </div>
  )
}