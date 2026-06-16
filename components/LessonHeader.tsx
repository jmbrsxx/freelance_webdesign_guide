import React from 'react'

interface LessonHeaderProps {
  module: string
  lessonNumber: string
  title: string
  subtitle: string
}

export default function LessonHeader({ module, lessonNumber, title, subtitle }: LessonHeaderProps) {
  return (
    <div className="bg-slate-900 text-white rounded-t-lg p-8">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">{module}</span>
        <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">{lessonNumber}</span>
      </div>
      <h2 className="text-3xl font-bold mb-3 leading-tight text-white">{title}</h2>
      <p className="text-slate-300 text-sm">{subtitle}</p>
    </div>
  )
}
