import React from 'react'

type Stat = {
  label: string
  value: string
}

export default function StatsCard({ label, value }: Stat) {
  return (
    <div className="card p-6 flex flex-col items-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="mt-2 text-sm text-gray-500">{label}</div>
    </div>
  )
}
