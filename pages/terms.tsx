import React from 'react'
import Link from 'next/link'

const MaterialIcon = ({ name }: { name: string }) => (
  <span className="material-icons text-2xl align-middle">{name}</span>
)

export default function Terms() {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms & Conditions</h1>
          <p className="text-slate-600 mb-8"><strong>Last updated: 06/17/2026</strong></p>

          <p className="mb-6">Welcome to digitalsolutions.io. These Terms & Conditions ("Terms") govern your purchase and use of the "Freelance Web Design & Development Course" (the "Product"), sold through this website (the "Site"). By purchasing or accessing the Product, you agree to these Terms.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. About the Product</h2>
          <p className="mb-6">The Product is a digital guide delivered as a PDF. Upon completing your purchase, you will receive instant access to download the PDF, and a copy of the download link will also be sent to the email address you provide at checkout.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. License to Use</h2>
          <p className="mb-6">When you purchase the Product, you are granted a personal, non-transferable, non-exclusive license to use the PDF for your own individual learning and reference. You may not resell, redistribute, share, publicly post, or otherwise make the Product available to any third party, in whole or in part, without prior written permission.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Payment</h2>
          <p className="mb-6">All prices are listed in dollars and are processed securely through our third-party payment provider. By completing a purchase, you confirm that you are authorized to use the payment method provided.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Delivery</h2>
          <p className="mb-6">Access to the Product is provided digitally and immediately after successful payment. If you do not receive your download link by email within a reasonable time, please contact us at <a href="mailto:contact@freelancewebdesign.store" className="text-blue-600 hover:text-blue-700">contact@freelancewebdesign.store</a> so we can assist you.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. No Professional Guarantee</h2>
          <p className="mb-6">The Product is an educational guide based on the creator's knowledge and experience in freelance web design. It does not constitute professional, legal, financial, or business advice, and no specific income, client, or career results are guaranteed. Your results depend on your own effort, market conditions, and other factors outside our control.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Refunds</h2>
          <p className="mb-6">All sales are final. Please see our Refund Policy for full details.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Intellectual Property</h2>
          <p className="mb-6">All content within the Product, including text, structure, design, and materials, is the intellectual property of digitalsolutions.io and is protected by copyright law. Unauthorized reproduction or distribution is prohibited.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Limitation of Liability</h2>
          <p className="mb-6">To the maximum extent permitted by law, digitalsolutions.io is not liable for any indirect, incidental, or consequential damages arising from the use or inability to use the Product.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Changes to These Terms</h2>
          <p className="mb-6">We may update these Terms from time to time. Continued use of the Site or Product after changes are posted constitutes acceptance of the revised Terms.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">10. Governing Law</h2>
          <p className="mb-6">These Terms are governed by the laws of the Federative Republic of Brazil. Any disputes shall be resolved under Brazilian jurisdiction.</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">11. Contact</h2>
          <p className="mb-6">Questions about these Terms can be sent to <a href="mailto:contact@freelancewebdesign.store" className="text-blue-600 hover:text-blue-700">contact@freelancewebdesign.store</a> or through our <Link href="/contact" className="text-blue-600 hover:text-blue-700">Contact page</Link>.</p>
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
