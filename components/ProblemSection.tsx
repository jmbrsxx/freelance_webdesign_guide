import React from 'react'

export default function ProblemSection() {
  const problems = [
    {
      title: 'No system for getting clients.',
      description: 'You post on Instagram, message people, then wait. Nothing happens.'
    },
    {
      title: 'Pricing anxiety.',
      description: "You're not sure what to charge, so you undercharge. Projects that take 40 hours pay $200."
    },
    {
      title: 'Portfolio catch-22.',
      description: "You want real clients, but real clients want to see your work first."
    },
    {
      title: 'Freelance platform trap.',
      description: 'You\'re competing on price with thousands of people globally. Low rates, high frustration.'
    },
    {
      title: 'No pipeline.',
      description: 'One project ends, you scramble. Then the cycle repeats.'
    },
    {
      title: 'Scope creep and revisions.',
      description: 'No contract. No boundaries. Projects that should take 20 hours take 60.'
    }
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Why Most Freelancers Struggle</h2>
        <p className="text-lg text-slate-600 mb-12">(And What Actually Helps)</p>

        <p className="text-lg text-slate-700 mb-8">
          You can design or code. That's not the problem.
        </p>
        <p className="text-lg text-slate-700 mb-12">
          The problem is everything else:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="p-6 border border-slate-200 rounded-lg bg-slate-50 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900 mb-2 text-lg">{problem.title}</h3>
              <p className="text-slate-600">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <p className="text-lg text-slate-800">
            The difference between freelancers who build sustainable businesses and those who quit isn't technical skill. It's <span className="font-bold">having a system.</span>
          </p>
          <p className="text-lg text-slate-700 mt-4">
            This guide walks you through building one.
          </p>
        </div>
      </div>
    </section>
  )
}
