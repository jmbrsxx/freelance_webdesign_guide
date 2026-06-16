import React, { useState } from 'react'

export default function ObjectionHandlers() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const objections = [
    {
      title: 'Why should I pay for this when there\'s free content everywhere?',
      answer: [
        'There IS free content. YouTube has videos, Reddit has threads, Medium has articles. The free stuff is often high quality.',
        '',
        'But here\'s the difference: this guide is one integrated system rather than scattered information. Each lesson builds on the last. Module 1 (niche) informs Module 4 (pricing). Module 5 (finding clients) feeds into Module 6 (sales). You get a complete framework, not isolated tips.',
        '',
        'It\'s also designed to be referenced repeatedly — you\'ll bookmark Module 4 on pricing, Module 6 on contracts, Module 7 on project management and come back to them as you work.',
        '',
        '$27 is a low-risk way to get a complete system organized in one place.'
      ]
    },
    {
      title: 'I\'m worried this won\'t help me specifically.',
      answer: [
        'This will help if:',
        '• You do the work (frameworks are only useful if you apply them)',
        '• You work in web design/development',
        '• You\'re in the early-to-intermediate stage (0–2 years in)',
        '• You\'re willing to adapt examples to your situation',
        '',
        'This probably won\'t help if you don\'t actually implement anything, or if you\'re looking for personalized coaching.',
        '',
        'The guide is a tool. The results depend on how you use it.'
      ]
    },
    {
      title: 'I don\'t have money for this right now.',
      answer: [
        'That\'s fine. Save it for when you land your first project or have $27 to spare. The guide will still be there. It\'s not going anywhere.'
      ]
    },
    {
      title: 'What if I don\'t like it?',
      answer: [
        'Reasonable concern. You\'re taking a risk. That\'s fair. All I can tell you is: if you think it looks potentially useful, $27 is a pretty low-risk experiment. If it\'s not for you, you\'ve lost $27. If it is, it becomes a reference you use for years.'
      ]
    }
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">Common Objections (And Real Answers)</h2>

        <div className="space-y-4">
          {objections.map((objection, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full flex items-start gap-4 p-6 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="text-2xl text-blue-500 flex-shrink-0 mt-1">
                  {expandedIndex === index ? '−' : '+'}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 flex-1">{objection.title}</h3>
              </button>

              {expandedIndex === index && (
                <div className="px-6 pb-6 bg-slate-50 border-t border-slate-200">
                  <div className="text-slate-700 leading-relaxed space-y-3">
                    {objection.answer.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
