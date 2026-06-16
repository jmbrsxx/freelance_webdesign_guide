import React from 'react'

export default function LandingPageHero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-lg text-slate-300 uppercase tracking-wider mb-6">The Complete Freelance Web Design & Development Course</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
            The System for Going From Zero Clients to a Working Freelance Web Design Business
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
            A 96-page guide covering everything beginners need to know: picking a niche, building a portfolio, pricing your work, finding clients, closing deals, managing projects, and scaling a real business. Built on frameworks that work.
          </p>
        </div>

        {/* Hero Visual Placeholder */}
        <div className="bg-slate-700 rounded-lg h-64 md:h-80 flex items-center justify-center border-2 border-slate-600">
          <div className="text-center">
            <svg className="w-24 h-24 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
