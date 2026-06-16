import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            💼 The Complete Freelance Web Design & Development Course
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-semibold mb-6">
            96-Page System for Going from Zero Clients to a Working Freelance Business
          </p>
        </div>

        {/* Opening Statement */}
        <div className="mb-8 space-y-6">
          <p className="text-lg text-gray-800">Stop posting on Instagram hoping for clients. <strong>This is the actual system.</strong></p>
          <p className="text-gray-700 leading-relaxed">
            A complete guide covering everything you need to know about the business side of freelance web design — from picking a niche to pricing your work, finding clients, closing deals, delivering projects, and scaling to recurring revenue.
          </p>
        </div>

        {/* What's Inside */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            🧠 What's Inside:
          </h2>
          
          <div className="space-y-8">
            {/* 8 Modules */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                ✅ 8 Modules, 47 Lessons, 96 Pages:
              </h3>
              <ul className="space-y-2 ml-6 text-gray-700">
                <li>• Module 1: Mindset & Niche Selection</li>
                <li>• Module 2: Tech Stack & Building Your First Portfolio</li>
                <li>• Module 3: Portfolio Strategy & Case Studies</li>
                <li>• Module 4: Pricing Models & Rate Calculation</li>
                <li>• Module 5: Client Acquisition (5 Different Channels)</li>
                <li>• Module 6: Sales, Proposals & Contracts</li>
                <li>• Module 7: Client Management & Project Delivery</li>
                <li>• Module 8: Scaling, Systems & Recurring Revenue</li>
              </ul>
            </div>

            {/* Practical Frameworks */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                ✅ Practical frameworks you'll actually use:
              </h3>
              <ul className="space-y-2 ml-6 text-gray-700">
                <li>• Rate calculator (work backward from income goal)</li>
                <li>• Pricing decision tree (hourly vs. project vs. retainer)</li>
                <li>• Cold email template + follow-up sequence</li>
                <li>• Discovery call framework (10 key questions)</li>
                <li>• Proposal structure (what wins deals)</li>
                <li>• 8 essential contract clauses</li>
                <li>• Pre-launch checklist (25 points)</li>
              </ul>
            </div>

            {/* No Theory */}
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                ✅ Templates, scripts, checklists — not theory. No filler.
              </h3>
            </div>
          </div>
        </div>

        {/* Why It Works */}
        <div className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            🔍 Why It Works:
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Most freelancers fail from lack of systems, not lack of skill. This guide organizes everything in one place: how to position yourself, price confidently, find clients through multiple channels, close deals, protect yourself with contracts, deliver successfully, and build recurring revenue. Each module builds on the last.
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

        {/* Details */}
        <div className="mb-12 bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            🛠️ Details:
          </h2>
          <p className="text-lg text-gray-800 font-semibold">
            One-time payment ($27). Lifetime access. PDF + online reading. Updates included.
          </p>
        </div>

        {/* CTA */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 mb-6 flex items-center gap-2">
            👉 Get the guide. Reference it for years. Build a real business.
          </p>
          <Link href="/free-course">
            <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition">
              Get the Guide
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-3xl mx-auto px-6 py-12 text-sm text-gray-500 border-t border-gray-200 mt-12">
        <div className="mb-4">© {new Date().getFullYear()} The Complete Freelance Web Design & Development Course</div>
        <p className="text-xs text-gray-400">Built for freelancers. Designed to help you build a sustainable business.</p>
      </footer>
    </div>
  )
}
