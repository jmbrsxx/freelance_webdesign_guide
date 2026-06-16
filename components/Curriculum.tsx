import React from 'react'
import ModuleCard from './ModuleCard'

const sample = [
  {
    id: 'm1',
    title: 'Module 1 — Mindset & Market Reality',
    color: '#e6f9f0',
    lessons: [
      { number: 1, title: 'Why Freelancing Works — and Why Most Fail', desc: 'Mindset, system, and income phases', free: true },
      { number: 2, title: 'Choosing Your Stack & Specialization', desc: 'Tool paths and position', free: true },
      { number: 3, title: 'Picking Your Niche — The $10K/Month Decision', desc: 'Niche selection framework', free: true },
      { number: 4, title: 'Setting Goals & Building Your 90-Day Plan', desc: 'Revenue targets and weekly plan', free: true }
    ]
  },
  {
    id: 'm2',
    title: 'Module 2 — Skills, Tools & Tech Stack',
    color: '#fff7e6',
    lessons: [
      { number: 5, title: 'The Minimal Viable Tech Stack', desc: 'Choose the essential tools', free: true },
      { number: 6, title: 'Design Fundamentals for Non-Designers', desc: 'Contrast, typography, spacing', free: true },
      { number: 7, title: "The Modern Web Designer's Workflow", desc: 'Discovery to delivery process', free: true },
      { number: 8, title: 'AI Tools That Will Double Your Speed', desc: 'How to use AI effectively', free: true },
      { number: 9, title: 'Build Your First Demo Site', desc: 'Publish your first live demo', free: true }
    ]
  },
  {
    id: 'm3',
    title: 'Module 3 — Portfolio That Converts',
    color: '#eef2ff',
    lessons: [
      { number: 10, title: 'Portfolio Strategy — Most Freelancers Get This Wrong', desc: 'Problem-process-result case studies', free: true },
      { number: 11, title: 'Creating Portfolio Work Without Real Clients', desc: 'Spec projects and redesigns', free: true },
      { number: 12, title: 'Writing Case Studies That Sell', desc: 'Template for converting case studies', free: true },
      { number: 13, title: 'Building Your Portfolio Website', desc: 'The five essential pages', free: true },
      { number: 14, title: 'The Portfolio Review Checklist', desc: '10-point pre-send review', free: true }
    ]
  }
]

export default function Curriculum() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-10">Table of Contents</h2>
        
        <div className="space-y-8">
          {/* Module 1 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-md">[FREE]</span>
              <h3 className="text-2xl font-bold text-slate-900">MODULE 1 — Mindset & Market Reality</h3>
            </div>
            <ul className="space-y-2 ml-4 text-slate-700">
              <li className="text-sm">1.1 Why Freelancing Works — and Why Most Fail</li>
              <li className="text-sm">1.2 Choosing Your Stack & Specialization</li>
              <li className="text-sm">1.3 Picking Your Niche — The $10K/Month Decision</li>
              <li className="text-sm">1.4 Setting Goals & Building Your 90-Day Plan</li>
            </ul>
          </div>

          {/* Module 2 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-md">[FREE]</span>
              <h3 className="text-2xl font-bold text-slate-900">MODULE 2 — Skills, Tools & Tech Stack</h3>
            </div>
            <ul className="space-y-2 ml-4 text-slate-700">
              <li className="text-sm">2.1 The Minimal Viable Tech Stack</li>
              <li className="text-sm">2.2 Design Fundamentals for Non-Designers</li>
              <li className="text-sm">2.3 The Modern Web Designer's Workflow</li>
              <li className="text-sm">2.4 AI Tools That Will Double Your Speed</li>
              <li className="text-sm">2.5 Build Your First Demo Site</li>
            </ul>
          </div>

          {/* Module 3 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-md">[FREE]</span>
              <h3 className="text-2xl font-bold text-slate-900">MODULE 3 — Portfolio That Converts</h3>
            </div>
            <ul className="space-y-2 ml-4 text-slate-700">
              <li className="text-sm">3.1 Portfolio Strategy — Most Freelancers Get This Wrong</li>
              <li className="text-sm">3.2 Creating Portfolio Work Without Real Clients</li>
              <li className="text-sm">3.3 Writing Case Studies That Sell</li>
              <li className="text-sm">3.4 Building Your Portfolio Website</li>
              <li className="text-sm">3.5 The Portfolio Review Checklist</li>
            </ul>
          </div>

          {/* Module 4 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-md">[PAID]</span>
              <h3 className="text-2xl font-bold text-slate-900">MODULE 4 — Pricing: What to Charge & How to Say It</h3>
            </div>
            <ul className="space-y-2 ml-4 text-slate-700">
              <li className="text-sm">4.1 The 3 Pricing Models and When to Use Each</li>
              <li className="text-sm">4.2 How to Set Your Rates — The Real Formula</li>
              <li className="text-sm">4.3 Packaging Your Services</li>
              <li className="text-sm">4.4 The Pricing Conversation</li>
              <li className="text-sm">4.5 Raising Rates & Eliminating Low-Budget Clients</li>
            </ul>
          </div>

          {/* Module 5 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-md">[PAID]</span>
              <h3 className="text-2xl font-bold text-slate-900">MODULE 5 — Finding Clients: The Full System</h3>
            </div>
            <ul className="space-y-2 ml-4 text-slate-700">
              <li className="text-sm">5.1 The Client Acquisition Matrix</li>
              <li className="text-sm">5.2 Warm Outreach & Network Activation</li>
              <li className="text-sm">5.3 Cold Outreach That Gets Responses</li>
              <li className="text-sm">5.4 Freelance Platforms — The Smart Way</li>
              <li className="text-sm">5.5 Content Marketing & Inbound (The Long Game)</li>
              <li className="text-sm">5.6 Partnerships & Referral Networks</li>
            </ul>
          </div>

          {/* Module 6 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-md">[PAID]</span>
              <h3 className="text-2xl font-bold text-slate-900">MODULE 6 — Sales: From Lead to Signed Contract</h3>
            </div>
            <ul className="space-y-2 ml-4 text-slate-700">
              <li className="text-sm">6.1 The Discovery Call Framework</li>
              <li className="text-sm">6.2 Writing Proposals That Win</li>
              <li className="text-sm">6.3 Handling Objections Like a Pro</li>
              <li className="text-sm">6.4 Contracts: Protect Yourself Before Work Starts</li>
              <li className="text-sm">6.5 Invoicing & Getting Paid on Time</li>
            </ul>
          </div>

          {/* Module 7 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-md">[PAID]</span>
              <h3 className="text-2xl font-bold text-slate-900">MODULE 7 — Client Management & Project Delivery</h3>
            </div>
            <ul className="space-y-2 ml-4 text-slate-700">
              <li className="text-sm">7.1 The Client Onboarding System</li>
              <li className="text-sm">7.2 Communication Protocols That Prevent 95% of Problems</li>
              <li className="text-sm">7.3 Managing Revisions Without Losing Your Mind</li>
              <li className="text-sm">7.4 Project Delivery & Launch</li>
              <li className="text-sm">7.5 Retaining Clients for Monthly Revenue</li>
            </ul>
          </div>

          {/* Module 8 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-md">[PAID]</span>
              <h3 className="text-2xl font-bold text-slate-900">MODULE 8 — Scaling: From Freelancer to Business</h3>
            </div>
            <ul className="space-y-2 ml-4 text-slate-700">
              <li className="text-sm">8.1 Business Foundations & Legal Setup</li>
              <li className="text-sm">8.2 Building Systems That Scale</li>
              <li className="text-sm">8.3 Building Your Personal Brand</li>
              <li className="text-sm">8.4 Hiring, Outsourcing & Building a Team</li>
              <li className="text-sm">8.5 Income Diversification & Passive Revenue</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
