import React from 'react'

export default function SolutionSection() {
  const topics = [
    'How to pick a niche (and why it matters more than you think)',
    'How to build a portfolio before you have paying clients',
    'Three different pricing models and when to use each one',
    'How to calculate a rate that actually covers your needs',
    'Multiple channels for finding clients (and which are worth your time)',
    'How to run a discovery call that uncovers real client needs',
    'How to write a proposal that positions you as strategic, not cheap',
    'Contract clauses that protect you from common freelance problems',
    'A project delivery system that prevents scope creep',
    'How to build recurring revenue through retainers and care plans',
    'How to transition from solo freelancer to something more scalable'
  ]

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">What This Guide Covers</h2>
        <p className="text-lg text-slate-600 mb-12">
          A practical 96-page guide to the business side of freelance web design.
        </p>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-slate-900 mb-8">You'll learn:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topics.map((topic, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                  ✓
                </div>
                <p className="text-slate-700">{topic}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-8 rounded-lg">
          <p className="text-lg text-slate-800">
            This is <span className="font-bold">systems and frameworks</span>, not hype or income promises.
          </p>
        </div>
      </div>
    </section>
  )
}
