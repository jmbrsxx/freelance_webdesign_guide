import React from 'react'

interface LessonHeaderProps {
  module: string
  lessonNumber: string
  title: string
  subtitle: string
}

export default function LessonHeader({ module, lessonNumber, title, subtitle }: LessonHeaderProps) {
  return (
    <div className="bg-black text-white border-2 border-black p-8">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-black text-red-500 uppercase tracking-wide">{module}</span>
        <span className="text-xs font-black text-red-500 uppercase tracking-wide">{lessonNumber}</span>
      </div>
      <h2 className="text-3xl font-black uppercase mb-3 leading-tight text-white">{title}</h2>
      <p className="text-zinc-300 text-sm">{subtitle}</p>
    </div>
  )
}
