import React from 'react'

export default function PricingSplit() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white card p-6 flex items-center justify-center border-green-400">
          <div className="w-full text-center">
            <div className="text-sm font-semibold text-green-700">Free Access</div>
            <div className="mt-3 text-lg font-semibold">Limited course access — no cost</div>
            <div className="mt-4 text-sm text-gray-500">Includes first 3 modules, select lessons, and templates.</div>
          </div>
        </div>
        <div className="bg-white card p-6 flex items-center justify-center border-orange-400">
          <div className="w-full text-center">
            <div className="text-sm font-semibold text-orange-700">Paid Access</div>
            <div className="mt-3 text-lg font-semibold">Full course + bonus templates</div>
            <div className="mt-4 text-sm text-gray-500">Includes complete modules, downloadable assets, and community access.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
