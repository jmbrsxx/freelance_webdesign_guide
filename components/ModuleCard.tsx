import React from 'react'

type Lesson = {
  number: number
  title: string
  desc?: string
  free?: boolean
}

type Module = {
  id: string
  title: string
  color?: string
  lessons: Lesson[]
}

export default function ModuleCard({ module }: { module: Module }) {
  return (
    <div className="card overflow-hidden">
      <div className="px-6 py-4" style={{ background: module.color || '#eef2ff' }}>
        <div className="font-semibold">{module.title}</div>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
          {module.lessons.map((l) => (
            <li key={l.number} className="flex items-start gap-4">
              <div className="text-sm font-mono text-gray-600 w-10">{l.number}</div>
              <div className="flex-1">
                <div className="font-medium">{l.title}</div>
                {l.desc && <div className="text-sm text-gray-500 mt-1">{l.desc}</div>}
              </div>
              <div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${l.free ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'}`}>
                  {l.free ? 'FREE' : 'PAID'}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
