import React from 'react'

type Props = {
  title: string
  eyebrow?: string
  description?: string
}

export default function Hero({ title, eyebrow, description }: Props) {
  return (
    <section className="bg-navy text-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {eyebrow && <div className="text-sm text-gray-300 uppercase tracking-wider mb-4">{eyebrow}</div>}
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight">{title}</h1>
        {description && <p className="mt-6 text-gray-300 max-w-3xl mx-auto">{description}</p>}
      </div>
    </section>
  )
}
