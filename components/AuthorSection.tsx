import React from 'react'

export default function AuthorSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">Why Should You Trust This?</h2>

        <div className="bg-white rounded-lg p-8 border border-slate-200 mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">About the Author</h3>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            I've spent the last several years building websites and learning the business side of freelancing.
          </p>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Like most freelancers starting out, I struggled with all of it:
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex gap-4">
              <span className="text-3xl">💰</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Pricing</h4>
                <p className="text-slate-700">I had no idea what to charge. Started at $300 per site. Resented every project.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl">🔍</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Finding clients</h4>
                <p className="text-slate-700">Posted on social media, waited for referrals that never came. Spent months with zero inquiries.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl">🛠️</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Scope creep</h4>
                <p className="text-slate-700">No contracts. No clear expectations. Clients would request endless changes mid-project.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl">📁</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Portfolio building</h4>
                <p className="text-slate-700">Wanted "real clients" before I had work to show. Catch-22.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl">🤔</span>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Imposter syndrome</h4>
                <p className="text-slate-700">Constantly comparing myself to designers with more experience and wondering if I was good enough.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8">
            <p className="text-slate-700 mb-6">
              I'm not a famous designer or someone with a massive following. I'm someone who struggled through the fundamentals, figured some things out through trial and error, collected frameworks that actually worked, and organized them into one place.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-3">What this guide is:</h4>
                <p className="text-slate-700 text-sm">
                  A collection of the frameworks, systems, and lessons I wish I had when I started. Instead of spending years piecing together advice from YouTube, Reddit, blog posts, Stack Overflow, and trial-and-error, you get one organized reference covering the fundamentals.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h4 className="font-bold text-slate-900 mb-3">What this guide isn't:</h4>
                <p className="text-slate-700 text-sm">
                  A get-rich-quick system or a substitute for actually learning your craft and doing the work.
                </p>
              </div>
            </div>

            <p className="text-slate-700 mt-6 leading-relaxed">
              The frameworks in here work because they're based on how freelance businesses actually function — not theory, not hype. They're organized in a way that makes sense: niche → portfolio → pricing → clients → sales → delivery → scaling.
            </p>

            <p className="text-slate-700 mt-4 leading-relaxed">
              You're not paying for my fame or credentials. You're paying for an organized system that took someone years to piece together, now condensed into 96 pages you can reference repeatedly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
