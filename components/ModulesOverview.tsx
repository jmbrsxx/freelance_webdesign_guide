import React from 'react'

export default function ModulesOverview() {
  const modules = [
    {
      number: 1,
      title: 'Mindset & Market Reality',
      description: 'Why freelancers struggle, choosing your technical stack, niche selection, and building your first 90-day plan.',
      lessons: [
        'Why Freelancing Works — and Why Most Fail',
        'Choosing Your Stack & Specialization',
        'Picking Your Niche',
        'Setting Goals & Building Your 90-Day Plan'
      ]
    },
    {
      number: 2,
      title: 'Skills, Tools & Tech Stack',
      description: 'The minimal viable tech stack (zero-cost startup), design fundamentals, workflow, using AI tools effectively, and building your first demo site.',
      lessons: [
        'The Minimal Viable Tech Stack',
        'Design Fundamentals for Non-Designers',
        'The Modern Web Designer\'s Workflow',
        'AI Tools That Will Double Your Speed',
        'Build Your First Demo Site'
      ]
    },
    {
      number: 3,
      title: 'Portfolio That Converts',
      description: 'Portfolio strategy, how to create portfolio work without real clients, writing case studies, building your portfolio site, and a review checklist.',
      lessons: [
        'Portfolio Strategy — Most Freelancers Get This Wrong',
        'Creating Portfolio Work Without Real Clients',
        'Writing Case Studies That Sell',
        'Building Your Portfolio Website',
        'The Portfolio Review Checklist'
      ]
    },
    {
      number: 4,
      title: 'Pricing: What to Charge & How to Say It',
      description: 'Three pricing models, calculating your minimum rate, packaging services into tiers, handling pricing conversations, and raising rates over time.',
      lessons: [
        'The 3 Pricing Models and When to Use Each',
        'How to Set Your Rates — The Real Formula',
        'Packaging Your Services (Basic/Standard/Premium)',
        'The Pricing Conversation',
        'Raising Rates & Eliminating Low-Budget Clients'
      ]
    },
    {
      number: 5,
      title: 'Finding Clients — The Full System',
      description: 'Client acquisition channels, warm outreach, cold email, freelance platforms, content marketing, and partnerships.',
      lessons: [
        'The Client Acquisition Matrix',
        'Warm Outreach & Network Activation',
        'Cold Outreach That Gets Responses',
        'Freelance Platforms — The Smart Way',
        'Content Marketing & Inbound (The Long Game)',
        'Partnerships & Referral Networks'
      ]
    },
    {
      number: 6,
      title: 'Sales: From Lead to Signed Contract',
      description: 'Discovery calls, writing proposals, objection handling, contract essentials, and getting paid on time.',
      lessons: [
        'The Discovery Call Framework',
        'Writing Proposals That Win',
        'Handling Objections Like a Pro',
        'Contracts: Protect Yourself Before Work Starts',
        'Invoicing & Getting Paid on Time'
      ]
    },
    {
      number: 7,
      title: 'Client Management & Project Delivery',
      description: 'Client onboarding, communication protocols, managing revisions, pre-launch checklist, and retaining clients with ongoing work.',
      lessons: [
        'The Client Onboarding System',
        'Communication Protocols That Prevent 95% of Problems',
        'Managing Revisions Without Losing Your Mind',
        'Project Delivery & Launch',
        'Retaining Clients for Monthly Revenue'
      ]
    },
    {
      number: 8,
      title: 'Scaling: From Freelancer to Business',
      description: 'Business structure options, documentation and systems, personal branding, outsourcing and delegation, and building multiple income streams.',
      lessons: [
        'Business Foundations & Legal Setup',
        'Building Systems That Scale',
        'Building Your Personal Brand',
        'Hiring, Outsourcing & Building a Team',
        'Income Diversification & Passive Revenue'
      ]
    }
  ]

  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">What's Inside</h2>
        <p className="text-xl text-slate-600 mb-12">8 Modules, 47 Lessons, 96 Pages</p>

        <div className="space-y-8">
          {modules.map((module) => (
            <div key={module.number} className="border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white font-bold text-lg">
                    {module.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">MODULE {module.number} — {module.title}</h3>
                  <p className="text-slate-600 mb-4">{module.description}</p>
                  <details className="cursor-pointer">
                    <summary className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                      View {module.lessons.length} lessons →
                    </summary>
                    <ul className="mt-3 ml-4 space-y-1 text-sm text-slate-600">
                      {module.lessons.map((lesson, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-slate-400">•</span>
                          <span>{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-green-50 border border-green-200 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">What's Included</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold text-slate-900">96 professionally designed pages</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold text-slate-900">Practical frameworks</p>
                <p className="text-sm text-slate-600">Rate calculator, pricing model decision tree, niche evaluation</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold text-slate-900">Templates and scripts</p>
                <p className="text-sm text-slate-600">Proposal structure, cold email, discovery call questions</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold text-slate-900">Actionable checklists</p>
                <p className="text-sm text-slate-600">Pre-launch, portfolio review, communication protocols</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold text-slate-900">Quick-reference cheat sheet</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-semibold text-slate-900">Lifetime access</p>
                <p className="text-sm text-slate-600">Read online or download</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
