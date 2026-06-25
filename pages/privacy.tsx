import React from 'react'
import Link from 'next/link'

export default function Privacy() {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-600 mb-8"><strong>Last updated: 06/17/2026</strong></p>

          <p className="mb-6">digitalsolutions.io ("we," "us," or "our") respects your privacy. This Privacy Policy explains what information we collect when you visit this Site or purchase the "Freelance Web Design & Development Course," and how we use it.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">We collect the following information when you make a purchase or interact with our Site:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li><strong>Checkout information:</strong> name, email address, and payment details, collected during checkout. Payment details are processed directly by our payment provider and are not stored on our servers.</li>
            <li><strong>Email address:</strong> collected at checkout, which may also be used to send you the product download link, order confirmations, and, if you do not opt out, occasional emails about updates, tips, or related offers.</li>
            <li><strong>Basic usage data:</strong> such as browser type, device, and pages visited, which may be collected automatically through standard analytics tools.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Deliver the Product you purchased (via download link and email)</li>
            <li>Process payments and send order confirmations</li>
            <li>Respond to support requests</li>
            <li>Send occasional emails related to the Product or our services, where applicable</li>
            <li>Improve our Site and offerings</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Email Communications</h2>
          <p className="mb-6">By providing your email at checkout, you agree to receive transactional emails (such as your purchase confirmation and download link). If you also opt in to marketing emails, you may unsubscribe at any time using the link provided in those emails.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Sharing of Information</h2>
          <p className="mb-4">We do not sell or rent your personal information. We may share information with trusted third-party service providers strictly to operate our business, such as:</p>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>Payment processors (to process transactions)</li>
            <li>Email service providers (to deliver your purchase and any newsletter communications)</li>
          </ul>
          <p className="mb-6">These providers only access the information necessary to perform their service.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Data Storage and Security</h2>
          <p className="mb-6">We take reasonable measures to protect your personal information against unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Your Rights</h2>
          <p className="mb-6">Depending on your location, you may have rights to access, correct, or request deletion of your personal data. To exercise these rights, contact us <Link href="/contact" className="text-blue-600 hover:text-blue-700">Here.</Link> If you are located in Brazil, these rights are provided in accordance with the Lei Geral de Proteção de Dados (LGPD).</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Cookies</h2>
          <p className="mb-6">Our Site may use cookies or similar technologies to improve your browsing experience and understand Site traffic. You can control cookies through your browser settings.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Children's Privacy</h2>
          <p className="mb-6">This Site and Product are not directed at individuals under 18. We do not knowingly collect personal information from minors.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Changes to This Policy</h2>
          <p className="mb-6">We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">10. Contact</h2>
          <p className="mb-6">For privacy-related questions, contact us through our <Link href="/contact" className="text-blue-600 hover:text-blue-700">Contact page</Link>.</p>
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
