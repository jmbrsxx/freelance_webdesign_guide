import React from 'react'
import Link from 'next/link'
import MaterialIcon from '../components/MaterialIcon'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-slate-900">Freelance Business Course</h1>
          <Link href="/free-course" className="text-blue-600 hover:text-blue-700 font-medium">
            Start Learning
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Hero Section */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-100 rounded-full">
                <MaterialIcon name="school" className="text-2xl align-middle" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Build a Profitable Freelance Business
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              A complete, actionable system for going from zero clients to a six-figure freelance business. 96 pages, 47 lessons, proven frameworks.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 mb-12">
            <div className="bg-white border border-slate-200 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
              <div className="text-sm text-slate-600">Complete Modules</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">96</div>
              <div className="text-sm text-slate-600">Pages of Content</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">47</div>
              <div className="text-sm text-slate-600">Practical Lessons</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/paid-course">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-lg hover:shadow-xl">
                View Full Course ($27)
              </button>
            </Link>
            <Link href="/free-course">
              <button className="px-8 py-4 bg-white border border-slate-300 hover:border-slate-400 text-slate-900 font-semibold rounded-lg transition">
                Free Preview (Modules 1-3)
              </button>
            </Link>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What You'll Learn</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: "lightbulb", title: "Mindset & Market Reality", desc: "Understand the real landscape and why most freelancers fail" },
              { icon: "settings", title: "Tech Stack & Portfolio", desc: "Build your foundation and create work that attracts clients" },
              { icon: "trending_up", title: "Pricing Strategy", desc: "Calculate rates confidently and eliminate underpricing" },
              { icon: "person_add", title: "Client Acquisition", desc: "Master 5 proven channels to find consistent, high-paying clients" },
              { icon: "handshake", title: "Sales & Contracts", desc: "Close deals with confidence and protect yourself legally" },
              { icon: "assessment", title: "Scaling & Systems", desc: "Build recurring revenue and grow beyond hourly work" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-lg p-8 hover:border-blue-300 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg flex-shrink-0">
                    <MaterialIcon name={item.icon} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Inside the Course */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Inside the Course</h2>
          
          <div className="space-y-4">
            {[
              "Practical rate calculator to work backward from income goals",
              "Cold email templates with follow-up sequences",
              "Discovery call framework with 10 key questions",
              "Winning proposal structure and templates",
              "8 essential contract clauses to protect yourself",
              "Project delivery checklist (25 critical points)",
              "Client management systems and templates",
              "Recurring revenue frameworks and examples",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white border border-slate-200 rounded-lg p-4 hover:border-green-300 transition">
                <div className="text-green-600 flex-shrink-0">
                  <MaterialIcon name="check_circle" />
                </div>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Who This Is For */}
        <section className="mb-20 bg-slate-100 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Who This Is For</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Freelancers ready to systematize their business",
              "Designers and developers tired of undercharging",
              "Anyone struggling with inconsistent client flow",
              "People who want repeatable, proven frameworks",
              "Freelancers wanting to scale beyond hourly rates",
              "Those seeking to build systems that work without them",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <MaterialIcon name="circle" outlined className="text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Why This Works */}
        <section className="mb-20 border-2 border-blue-200 bg-blue-50 rounded-lg p-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <MaterialIcon name="verified" className="text-blue-600" />
            Why This Works
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Most freelancers fail from lack of systems, not lack of skill. This guide organizes everything you need in one place: how to position yourself, price confidently, find clients through multiple channels, close deals, protect yourself with contracts, deliver successfully, and build recurring revenue. Each module builds on the last, creating a complete blueprint.
          </p>
        </section>

        {/* Course Details */}
        <section className="mb-20 grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 rounded-lg p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <MaterialIcon name="info" className="text-blue-600" />
              Free Modules (1-3)
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>✓ Mindset & Market Reality</li>
              <li>✓ Skills, Tools & Tech Stack</li>
              <li>✓ Portfolio That Converts</li>
            </ul>
            <Link href="/free-course">
              <button className="w-full mt-6 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-lg transition">
                Start Free
              </button>
            </Link>
          </div>
          
          <div className="bg-white border-2 border-blue-500 rounded-lg p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <MaterialIcon name="star" className="text-blue-600" />
              Full Course (All 8)
            </h3>
            <p className="text-3xl font-bold text-blue-600 mb-2">$27</p>
            <p className="text-slate-600 mb-4">Lifetime access • PDF + Online • All future updates</p>
            <Link href="/paid-course">
              <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
                View Full Course
              </button>
            </Link>
          </div>
        </section>


      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Freelance Business Course</h3>
              <p className="text-sm">A practical guide to building a sustainable, profitable freelance business.</p>
            </div>
            <div className="text-right">
              <Link href="/free-course" className="text-blue-400 hover:text-blue-300 block mb-2">
                Free Course
              </Link>
              <Link href="/paid-course" className="text-blue-400 hover:text-blue-300 block">
                Full Course
              </Link>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-6 text-sm flex justify-between items-center">
            <p>© {new Date().getFullYear()} The Complete Freelance Web Design & Development Course</p>
            <div className="space-x-4">
              <Link href="/terms" className="text-blue-400 hover:text-blue-300">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                Privacy Policy
              </Link>
              <Link href="/refund" className="text-blue-400 hover:text-blue-300">
                Refund Policy
              </Link>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300">
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
