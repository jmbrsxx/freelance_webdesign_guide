import React from 'react'

export default function HonestFraming() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 mb-12">What This Is and Isn't</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* What this is */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">This is:</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">•</span>
                <p className="text-slate-700">A comprehensive guide to the business side of freelance web design</p>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">•</span>
                <p className="text-slate-700">Frameworks, systems, and scripts that are widely used and tested</p>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">•</span>
                <p className="text-slate-700">Tools to help you think through pricing, positioning, and client acquisition</p>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600">•</span>
                <p className="text-slate-700">A reference manual you'll use repeatedly as you build your business</p>
              </li>
            </ul>
          </div>

          {/* What this isn't */}
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded">
            <h3 className="text-2xl font-bold text-red-900 mb-6">This isn't:</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="font-bold text-red-600">•</span>
                <p className="text-slate-700">A magic solution or shortcut</p>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-red-600">•</span>
                <p className="text-slate-700">A guarantee of specific income outcomes</p>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-red-600">•</span>
                <p className="text-slate-700">A substitute for actually doing the work (you have to execute)</p>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-red-600">•</span>
                <p className="text-slate-700">One-size-fits-all advice (you'll adapt frameworks to your situation)</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Results depend on:</h3>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-2xl text-amber-600">★</span>
              <p className="text-slate-700"><span className="font-semibold">Your actual execution and consistency</span></p>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl text-amber-600">★</span>
              <p className="text-slate-700"><span className="font-semibold">Your market and niche</span></p>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl text-amber-600">★</span>
              <p className="text-slate-700"><span className="font-semibold">Your skill level and portfolio quality</span></p>
            </li>
            <li className="flex gap-3">
              <span className="text-2xl text-amber-600">★</span>
              <p className="text-slate-700"><span className="font-semibold">How much effort you put into client acquisition</span></p>
            </li>
          </ul>

          <p className="mt-8 text-slate-800 italic border-t border-amber-200 pt-6">
            People who work through this guide and implement what they learn tend to build more sustainable businesses than those who wing it. But "tend to" is different from "guaranteed."
          </p>
        </div>
      </div>
    </section>
  )
}
