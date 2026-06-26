import React from 'react'
import Link from 'next/link'
import BrandShell from '../components/BrandShell'

export default function Refund() {
  return (
    <BrandShell>
      <article className="max-w-4xl border-2 border-black bg-white p-6 shadow-[10px_10px_0_#b91c1c] md:p-10">
        <p className="mb-3 inline-flex border border-red-700 bg-red-700 px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-white">
          Policy
        </p>
        <h1 className="mb-4 text-4xl font-black uppercase tracking-tight text-black">Refund Policy</h1>
        <p className="mb-8 text-zinc-600"><strong>Last updated: 06/17/2026</strong></p>

        <div className="space-y-6 leading-7 text-zinc-700">
          <h2 className="pt-4 text-2xl font-black uppercase text-black">All Sales Are Final</h2>
          <p>The "Freelance Web Design & Development Course" is a digital product delivered instantly as a downloadable PDF. Due to the nature of digital goods, once access has been granted and the download link has been sent, the purchase is non-refundable.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">Why We Don't Offer Refunds</h2>
          <p>Because the Product is delivered immediately and can be downloaded, saved, and accessed in full upon purchase, we are unable to verify non-use after the fact. For this reason, we do not offer refunds, exchanges, or cancellations once a purchase is completed.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">Before You Buy</h2>
          <p>We encourage you to review the product description, table of contents, and any preview material available on our Site carefully before purchasing, to make sure the Product fits your needs.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">Purchase Issues</h2>
          <p>If you experience a technical problem, such as not receiving your download link, a broken file, or a duplicate/accidental charge, please contact us <Link href="/contact" className="font-bold text-red-700 hover:text-black">Here</Link>. We're happy to help resolve issues related to access or delivery.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">Questions</h2>
          <p>If you have any questions about this policy before purchasing, reach out via our <Link href="/contact" className="font-bold text-red-700 hover:text-black">Contact page</Link>.</p>
        </div>
      </article>
    </BrandShell>
  )
}
