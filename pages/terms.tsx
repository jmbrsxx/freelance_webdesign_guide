import React from 'react'
import Link from 'next/link'
import BrandShell from '../components/BrandShell'

export default function Terms() {
  return (
    <BrandShell>
      <article className="max-w-4xl border-2 border-black bg-white p-6 shadow-[10px_10px_0_#b91c1c] md:p-10">
        <p className="mb-3 inline-flex border border-red-700 bg-red-700 px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-white">
          Legal
        </p>
        <h1 className="mb-4 text-4xl font-black uppercase tracking-tight text-black">Terms & Conditions</h1>
        <p className="mb-8 text-zinc-600"><strong>Last updated: 06/17/2026</strong></p>

        <div className="space-y-6 leading-7 text-zinc-700">
          <p>Welcome to digitalsolutions.io. These Terms & Conditions ("Terms") govern your purchase and use of the "Freelance Web Design & Development Course" (the "Product"), sold through this website (the "Site"). By purchasing or accessing the Product, you agree to these Terms.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">1. About the Product</h2>
          <p>The Product is a digital guide delivered as a PDF. Upon completing your purchase, you will receive instant access to download the PDF, and a copy of the download link will also be sent to the email address you provide at checkout.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">2. License to Use</h2>
          <p>When you purchase the Product, you are granted a personal, non-transferable, non-exclusive license to use the PDF for your own individual learning and reference. You may not resell, redistribute, share, publicly post, or otherwise make the Product available to any third party, in whole or in part, without prior written permission.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">3. Payment</h2>
          <p>All prices are listed in dollars and are processed securely through our third-party payment provider. By completing a purchase, you confirm that you are authorized to use the payment method provided.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">4. Delivery</h2>
          <p>Access to the Product is provided digitally and immediately after successful payment. If you do not receive your download link by email within a reasonable time, please contact us <Link href="/contact" className="font-bold text-red-700 hover:text-black">here</Link> so we can assist you.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">5. No Professional Guarantee</h2>
          <p>The Product is an educational guide based on the creator's knowledge and experience in freelance web design. It does not constitute professional, legal, financial, or business advice, and no specific income, client, or career results are guaranteed. Your results depend on your own effort, market conditions, and other factors outside our control.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">6. Refunds</h2>
          <p>All sales are final. Please see our Refund Policy for full details.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">7. Intellectual Property</h2>
          <p>All content within the Product, including text, structure, design, and materials, is the intellectual property of digitalsolutions.io and is protected by copyright law. Unauthorized reproduction or distribution is prohibited.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">8. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, digitalsolutions.io is not liable for any indirect, incidental, or consequential damages arising from the use or inability to use the Product.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">9. Changes to These Terms</h2>
          <p>We may update these Terms from time to time. Continued use of the Site or Product after changes are posted constitutes acceptance of the revised Terms.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">10. Governing Law</h2>
          <p>These Terms are governed by the laws of the Federative Republic of Brazil. Any disputes shall be resolved under Brazilian jurisdiction.</p>

          <h2 className="pt-4 text-2xl font-black uppercase text-black">11. Contact</h2>
          <p>Questions about these Terms can be sent through our <Link href="/contact" className="font-bold text-red-700 hover:text-black">Contact page</Link>.</p>
        </div>
      </article>
    </BrandShell>
  )
}
