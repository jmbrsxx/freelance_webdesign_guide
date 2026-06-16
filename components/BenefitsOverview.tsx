import React from 'react'

export default function BenefitsOverview() {
  const phases = [
    {
      title: 'After Module 1–3 (Foundation)',
      benefits: [
        'A specific positioning statement (who you help, how you help them)',
        'A portfolio site with 2–3 projects',
        'Clarity on your technical direction'
      ]
    },
    {
      title: 'After Module 4 (Pricing)',
      benefits: [
        'Understanding of what you should charge',
        'A simple rate calculation',
        'Pricing models you can offer clients'
      ]
    },
    {
      title: 'After Module 5 (Finding Clients)',
      benefits: [
        'Multiple channels you\'re aware of',
        'A cold email template and outreach approach',
        'A system for tracking outreach'
      ]
    },
    {
      title: 'After Module 6 (Sales)',
      benefits: [
        'Templates for proposals and contracts',
        'Scripts for common sales conversations',
        'Clarity on how to handle objections'
      ]
    },
    {
      title: 'After Module 7 (Delivery)',
      benefits: [
        'An onboarding system',
        'Communication protocols with clients',
        'A pre-launch checklist',
        'Understanding of how to offer ongoing work'
      ]
    },
    {
      title: 'After Module 8 (Scaling)',
      benefits: [
        'Systems documentation',
        'Ideas for delegation and outsourcing',
        'Thoughts on building recurring revenue'
      ]
    }
  ]

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">What You'll Have After Working Through This</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {phases.map((phase, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">{phase.title}</h3>
              <ul className="space-y-2">
                {phase.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex gap-3 text-slate-700">
                    <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-lg">
          <p className="text-lg text-slate-800 font-semibold">
            The guide gives you frameworks. What you do with them determines your results.
          </p>
        </div>
      </div>
    </section>
  )
}
