import React from 'react';
import Link from 'next/link';

export default function PaidCoursePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-blue-500 hover:text-blue-600 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            💼 The Complete Freelance Web Design & Development Course
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-6">
            96-Page System for Going from Zero Clients to a Working Freelance Business
          </p>
        </div>

        {/* Course Overview */}
        <div className="mb-12 bg-blue-50 p-8 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            ✨ Full Course Access
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Get everything from Module 1 through Module 8 — all 96 pages, 47 lessons, and every practical framework you need to build a profitable freelance web design business.
          </p>
          <Link
            href="/checkout"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 text-lg font-bold text-white transition hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Full Access Now → $49
          </Link>
        </div>

        {/* All 8 Modules */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            📚 All 8 Modules:
          </h2>
          
          <div className="space-y-4">
            {[
              {
                num: 1,
                title: "Mindset & Niche Selection",
                description: "Choose your niche strategically and develop the right mindset for success",
                icon: "🧠"
              },
              {
                num: 2,
                title: "Tech Stack & Building Your First Portfolio",
                description: "Learn which tools to use and create your first portfolio project",
                icon: "⚙️"
              },
              {
                num: 3,
                title: "Portfolio Strategy & Case Studies",
                description: "Structure your portfolio to attract high-paying clients",
                icon: "🎯"
              },
              {
                num: 4,
                title: "Pricing Models & Rate Calculation",
                description: "Calculate rates based on your income goals, not time",
                icon: "💰"
              },
              {
                num: 5,
                title: "Client Acquisition (5 Different Channels)",
                description: "Find clients through proven channels: cold email, referrals, LinkedIn, agencies, and more",
                icon: "🔍"
              },
              {
                num: 6,
                title: "Sales, Proposals & Contracts",
                description: "Close deals with confident proposals and protect yourself with solid contracts",
                icon: "📝"
              },
              {
                num: 7,
                title: "Client Management & Project Delivery",
                description: "Deliver exceptional projects and build long-term client relationships",
                icon: "🤝"
              },
              {
                num: 8,
                title: "Scaling, Systems & Recurring Revenue",
                description: "Build recurring revenue and scale your business beyond hourly work",
                icon: "📈"
              },
            ].map((module) => (
              <div key={module.num} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{module.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">
                      Module {module.num}: {module.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{module.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Frameworks */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            ✅ Practical frameworks included:
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> Rate calculator (work backward from income goal)</li>
            <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> Pricing decision tree (hourly vs. project vs. retainer)</li>
            <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> Cold email template + follow-up sequence</li>
            <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> Discovery call framework (10 key questions)</li>
            <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> Proposal structure (what wins deals)</li>
            <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> 8 essential contract clauses</li>
            <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> Pre-launch checklist (25 points)</li>
            <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> Client management templates</li>
          </ul>
        </div>

        {/* Why This Works */}
        <div className="mb-12 bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg border border-purple-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            🔥 Why This Works:
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Most freelancers fail from lack of systems, not lack of skill. This complete guide organizes everything in one place: how to position yourself, price confidently, find clients through multiple channels, close deals, protect yourself with contracts, deliver successfully, and build recurring revenue. Each module builds on the last.
          </p>
        </div>

        {/* Perfect For */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            📦 Perfect for:
          </h2>
          <ul className="space-y-3 ml-6 text-gray-700">
            <li>• Freelancers learning the business side (0-2 years in)</li>
            <li>• Designers/developers tired of undercharging</li>
            <li>• Anyone struggling to find consistent clients</li>
            <li>• People who want frameworks they can reference repeatedly</li>
            <li>• Creators wanting to understand systems before scaling</li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 p-12 rounded-lg text-center text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Build a Profitable Business?</h2>
          <p className="text-blue-100 mb-6 text-lg">
            Get complete access to all 8 modules, frameworks, templates, and checklists.
          </p>
          <Link
            href="/checkout"
            className="inline-flex items-center justify-center rounded-lg bg-white text-blue-600 px-8 py-4 text-lg font-bold transition hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Purchase Now → $49
          </Link>
          <p className="text-blue-100 mt-6 text-sm">
            Instant access • 30-day money-back guarantee • Lifetime updates
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Questions?</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">How do I access the course?</h3>
              <p className="text-gray-700">After purchase, you'll receive an email with download links for all modules in PDF format.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">Is there a money-back guarantee?</h3>
              <p className="text-gray-700">Yes! 30-day money-back guarantee if you're not satisfied.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-bold text-gray-900 mb-2">Do I get updates?</h3>
              <p className="text-gray-700">Yes! All future updates are included. You get lifetime access.</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center py-12 border-t border-gray-200">
          <p className="text-gray-700 mb-6 text-lg">
            Stop spinning your wheels. Get the complete system today.
          </p>
          <Link
            href="/checkout"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold transition shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Full Access → $49
          </Link>
        </div>
      </div>
    </div>
  );
}
