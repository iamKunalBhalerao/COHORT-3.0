import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full opacity-30 group-hover:opacity-50 blur transition duration-500"></div>
          
          {/* Main navbar */}
          <div className="relative bg-white/90 backdrop-blur-xl rounded-full shadow-2xl border border-gray-200/50">
            <div className="flex items-center justify-between px-6 py-3">
              {/* Logo */}
              <div className="flex items-center gap-3 group/logo">
                <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl blur-sm opacity-75 group-hover/logo:opacity-100 transition"></div>
                  <div className="relative w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                </div>
                <span className="font-bold text-lg bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">ExcaliDraw</span>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-1">
                <a href="#" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100/70 rounded-full transition-all duration-200">
                  Features
                </a>
                <a href="#" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100/70 rounded-full transition-all duration-200">
                  Docs
                </a>
                <a href="#" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100/70 rounded-full transition-all duration-200">
                  Pricing
                </a>
                <a href="#" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100/70 rounded-full transition-all duration-200 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>

              {/* CTA Button */}
              <div className="flex items-center gap-3">
                <button className="hidden md:block px-5 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                  Sign In
                </button>
                <button className="relative group/btn">
                  <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 to-purple-600 rounded-full blur opacity-60 group-hover/btn:opacity-100 transition"></div>
                  <div className="relative px-6 py-2.5 bg-linear-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2">
                    Get Started
                    <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar