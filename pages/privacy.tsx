import React from 'react'
import Link from 'next/link'
import BrandShell from '../components/BrandShell'

export default function Privacy() {
  return (
    <BrandShell>
      <article className="max-w-4xl border-2 border-black bg-white p-6 shadow-[10px_10px_0_#b91c1c] md:p-10">
        <p className="mb-3 inline-flex border border-red-700 bg-red-700 px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-white">
          Privacy
        </p>
        <h1 className="mb-4 text-4xl font-black uppercase tracking-tight text-black">Privacy Policy</h1>
        <p className="mb-8 text-zinc-600"><strong>Last updated: 06/17/2026</strong></p>

        <div className="space-y-6 leading-7 text-zinc-700">
          <p>digitalsolutions.io ("we," "us," or "our") respects your privacy. This Privacy Policy explains what information we collect when you visit this Site or purchase the "Freelance Web Design & Development Course," and how we use it.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">1. Information We Collect</h2>
          <p>We collect the following information when you make a purchase or interact with our Site:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Checkout information:</strong> name, email address, and payment details, collected during checkout. Payment details are processed directly by our payment provider and are not stored on our servers.</li>
            <li><strong>Email address:</strong> collected at checkout, which may also be used to send you the product download link, order confirmations, and, if you do not opt out, occasional emails about updates, tips, or related offers.</li>
            <li><strong>Basic usage data:</strong> such as browser type, device, and pages visited, which may be collected automatically through standard analytics tools.</li>
          </ul>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Deliver the Product you purchased (via download link and email)</li>
            <li>Process payments and send order confirmations</li>
            <li>Respond to support requests</li>
            <li>Send occasional emails related to the Product or our services, where applicable</li>
            <li>Improve our Site and offerings</li>
          </ul>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">3. Email Communications</h2>
          <p>By providing your email at checkout, you agree to receive transactional emails (such as your purchase confirmation and download link). If you also opt in to marketing emails, you may unsubscribe at any time using the link provided in those emails.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">4. Sharing of Information</h2>
          <p>We do not sell or rent your personal information. We may share information with trusted third-party service providers strictly to operate our business, such as:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Payment processors (to process transactions)</li>
            <li>Email service providers (to deliver your purchase and any newsletter communications)</li>
          </ul>
          <p>These providers only access the information necessary to perform their service.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">5. Data Storage and Security</h2>
          <p>We take reasonable measures to protect your personal information against unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">6. Your Rights</h2>
          <p>Depending on your location, you may have rights to access, correct, or request deletion of your personal data. To exercise these rights, contact us <Link href="/contact" className="font-bold text-red-700 hover:text-black">Here.</Link> If you are located in Brazil, these rights are provided in accordance with the Lei Geral de ProteÃ§Ã£o de Dados (LGPD).</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">7. Cookies</h2>
          <p>Our Site may use cookies or similar technologies to improve your browsing experience and understand Site traffic. You can control cookies through your browser settings.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">8. Children's Privacy</h2>
          <p>This Site and Product are not directed at individuals under 18. We do not knowingly collect personal information from minors.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">10. Contact</h2>
          <p>For privacy-related questions, contact us through our <Link href="/contact" className="font-bold text-red-700 hover:text-black">Contact page</Link>.</p>
        </div>
      </article>
    </BrandShell>
  )
}
