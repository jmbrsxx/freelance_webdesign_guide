import React from 'react'

export default function PricingSection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">Pricing</h2>
        <p className="text-slate-300 mb-12">One-Time Payment</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
          {/* Price Card */}
          <div className="col-span-1 md:col-span-2 bg-white text-slate-900 rounded-lg p-8 shadow-xl">
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-bold">$27</span>
            </div>

            <h3 className="text-2xl font-bold mb-8">Includes:</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3">
                <span className="text-2xl text-green-500">✓</span>
                <p>All 8 modules (47 lessons, 96 pages)</p>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl text-green-500">✓</span>
                <p>Lifetime access</p>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl text-green-500">✓</span>
                <p>PDF download + online reading</p>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl text-green-500">✓</span>
                <p>All future updates to the guide</p>
              </li>
            </ul>

            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-lg transition-colors text-lg">
              GET THE GUIDE — $27
            </button>
          </div>

          {/* What you get */}
          <div className="bg-slate-700 rounded-lg p-8">
            <h4 className="text-xl font-bold mb-4">What you get:</h4>
            <ul className="space-y-3 text-slate-200">
              <li className="flex gap-2">
                <span>✓</span>
                <span>All 8 modules</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>47 lessons, 96 pages</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Templates, frameworks, checklists</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Lifetime access</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Updates as the guide evolves</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-700 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Not sure yet?</h3>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Read through the lesson summaries above or check out the table of contents. The guide is thorough but straightforward. It's either useful to you or it's not.
          </p>
        </div>
      </div>
    </section>
  )
}
