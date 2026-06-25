import React from 'react'
import Link from 'next/link'

export default function Refund() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-xl font-bold text-slate-900 cursor-pointer hover:text-slate-700">
              Freelance Business Course
            </h1>
          </Link>
          <Link href="/free-course" className="text-blue-600 hover:text-blue-700 font-medium">
            Start Learning
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-sm max-w-none">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Refund Policy</h1>
          <p className="text-slate-600 mb-8"><strong>Last updated: 06/17/2026</strong></p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">All Sales Are Final</h2>
          <p className="mb-6">The "Freelance Web Design & Development Course" is a digital product delivered instantly as a downloadable PDF. Due to the nature of digital goods, once access has been granted and the download link has been sent, the purchase is non-refundable.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Why We Don't Offer Refunds</h2>
          <p className="mb-6">Because the Product is delivered immediately and can be downloaded, saved, and accessed in full upon purchase, we are unable to verify non-use after the fact. For this reason, we do not offer refunds, exchanges, or cancellations once a purchase is completed.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Before You Buy</h2>
          <p className="mb-6">We encourage you to review the product description, table of contents, and any preview material available on our Site carefully before purchasing, to make sure the Product fits your needs.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Purchase Issues</h2>
          <p className="mb-6">If you experience a technical problem, such as not receiving your download link, a broken file, or a duplicate/accidental charge, please contact us <Link href="/contact" className="text-blue-600 hover:text-blue-700">Here</Link>. We're happy to help resolve issues related to access or delivery.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Questions</h2>
          <p className="mb-6">If you have any questions about this policy before purchasing, reach out via our <Link href="/contact" className="text-blue-600 hover:text-blue-700">Contact page</Link>.</p>
        </div>
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
                Terms
              </Link>
              <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                Privacy
              </Link>
              <Link href="/refund" className="text-blue-400 hover:text-blue-300">
                Refund Policy
              </Link>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
