import React from 'react'

const HeroSection = () => {
  return (
    <>
              {/* Hero Section */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 pt-40 bg-linear-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          
          {/* Main Heading with Minimal Badge */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-linear-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-full text-xs font-medium text-blue-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Real-time collaboration • Free forever
            </div>

            <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight">
              <span className="block text-gray-900 mb-2">Simple.</span>
              <span className="block text-gray-900 mb-2">Powerful.</span>
              <span className="block bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Collaborative.
              </span>
            </h1>
          </div>

          {/* Minimal Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto font-light leading-relaxed">
            The minimal whiteboard for your ideas. Draw, sketch, and collaborate in real-time.
          </p>

          {/* Single Prominent CTA */}
          <div className="pt-4">
            <button className="group relative inline-flex items-center gap-3">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative px-12 py-5 bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-base font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3">
                Start Creating
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </button>
          </div>

          {/* Minimal Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-8">
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 shadow-sm">
              ✨ No sign-up required
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 shadow-sm">
              🔒 Privacy first
            </span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 shadow-sm">
              ⚡ Lightning fast
            </span>
          </div>

          {/* Minimal Preview with Floating Cards */}
          <div className="pt-16 relative">
            <div className="relative max-w-4xl mx-auto">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-linear-to-r from-blue-100 via-purple-100 to-pink-100 rounded-3xl blur-3xl opacity-30"></div>
              
              {/* Main canvas mockup */}
              <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 p-12 min-h-[500px]">
                {/* Floating shape elements */}
                <div className="absolute top-12 left-12 w-32 h-32 bg-linear-to-br from-blue-400 to-blue-600 rounded-2xl shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300"></div>
                
                <div className="absolute top-20 right-16 w-40 h-24 bg-linear-to-br from-purple-400 to-purple-600 rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300"></div>
                
                <div className="absolute bottom-24 left-20 w-24 h-24 bg-linear-to-br from-pink-400 to-pink-600 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"></div>
                
                <div className="absolute bottom-20 right-20 w-36 h-36 bg-linear-to-br from-cyan-400 to-cyan-600 rounded-2xl shadow-lg transform rotate-12 hover:rotate-6 transition-transform duration-300"></div>

                {/* Center connection lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                  <line x1="20%" y1="30%" x2="80%" y2="40%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="30%" y1="70%" x2="70%" y2="60%" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default HeroSection