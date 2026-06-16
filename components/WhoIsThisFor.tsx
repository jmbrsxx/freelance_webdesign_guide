import React from 'react'

export default function WhoIsThisFor() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">Who This Is For</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* This guide is useful if */}
          <div>
            <h3 className="text-2xl font-bold text-green-600 mb-6">This Guide Is Useful If:</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-2xl text-green-600">✓</span>
                <p className="text-slate-700">You're learning freelance web design and want a roadmap beyond just learning tools</p>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl text-green-600">✓</span>
                <p className="text-slate-700">You've built some freelance work but aren't sure how to position yourself or price</p>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl text-green-600">✓</span>
                <p className="text-slate-700">You're undercharging and want to understand how to raise rates</p>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl text-green-600">✓</span>
                <p className="text-slate-700">You're interested in the business side of freelancing, not just the technical side</p>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl text-green-600">✓</span>
                <p className="text-slate-700">You want systems and frameworks you can reference repeatedly</p>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl text-green-600">✓</span>
                <p className="text-slate-700">You're tired of hearing contradictory advice and want one cohesive approach</p>
              </li>
            </ul>
          </div>

          {/* This guide is probably not for you */}
          <div>
            <h3 className="text-2xl font-bold text-red-600 mb-6">This Guide Is Probably Not For You If:</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-2xl text-red-600">✗</span>
                <p className="text-slate-700">You're looking for video tutorials on Webflow, WordPress, or code (this is business/systems focused)</p>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl text-red-600">✗</span>
                <p className="text-slate-700">You want personalized coaching or feedback (this is a self-paced guide)</p>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl text-red-600">✗</span>
                <p className="text-slate-700">You're already making consistent, sustainable income from freelance web work</p>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl text-red-600">✗</span>
                <p className="text-slate-700">You're skeptical about executing on the frameworks yourself</p>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl text-red-600">✗</span>
                <p className="text-slate-700">You need hand-holding or a community (this is a PDF guide, not a membership)</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
