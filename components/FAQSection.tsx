import React, { useState } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: "I have some experience but I'm not sure if this is still useful for me.",
      a: 'If you\'re consistently landing clients and know how to price yourself, probably not. If you\'re inconsistent, undercharging, or struggling with business fundamentals (pricing, contracts, positioning), this will likely help regardless of technical skill level.'
    },
    {
      q: 'Will this work for my specific situation? (I use [tool/niche/location])',
      a: 'The principles apply broadly. We use WordPress and Webflow as examples because they\'re common, but the business frameworks (pricing, discovery calls, proposals, contracts) apply to any service. You\'ll adapt the examples to your specific situation.'
    },
    {
      q: 'How long is this actually?',
      a: '96 pages. At typical reading speed, 6–8 hours if you read straight through. Most people read 2–3 lessons per week while trying to implement them, so 4–6 weeks of active use.'
    },
    {
      q: 'Is this just theory, or are there actual templates/frameworks I can use?',
      a: 'Both. Each module includes frameworks, formulas (like the rate calculator), and templates you can adapt. The guide is designed to be referenced repeatedly — you\'ll go back to Module 4 on pricing or Module 6 on contracts multiple times.'
    },
    {
      q: 'What if I get stuck or have questions while using this?',
      a: 'This is a self-paced guide, not a coaching program. The PDF is designed to be clear and complete enough that you shouldn\'t get stuck. Every lesson has a concrete action task. If you need personalized feedback or coaching, that\'s beyond the scope of a $27 guide.'
    },
    {
      q: 'Can I share this with my team?',
      a: 'Personal purchase = one person. If multiple team members want it, each should purchase their own copy. This keeps the price accessible for individuals while respecting the work that went into it.'
    },
    {
      q: 'How is this different from free resources online?',
      a: 'Most free advice is fragmented — different people saying different things about pricing, or outdated strategies for finding clients. This guide is a **complete, cohesive system** where each module builds on the last. Module 1 (niche) informs Module 4 (pricing), which informs Module 5 (who you reach out to). It\'s one integrated approach, not scattered tips.'
    },
    {
      q: 'Is this written by someone who actually freelances?',
      a: 'Yes. The guide is based on frameworks and approaches that work in actual freelance web design practice, not theory or speculation.'
    }
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">Questions We Get</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-start gap-4 p-6 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="text-2xl text-blue-500 flex-shrink-0 mt-1">
                  {openIndex === index ? '−' : '+'}
                </span>
                <h3 className="text-lg font-semibold text-slate-900 flex-1">{faq.q}</h3>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 bg-slate-50 border-t border-slate-200">
                  <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
