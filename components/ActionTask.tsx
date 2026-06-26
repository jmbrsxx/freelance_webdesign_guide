import React from 'react'

interface ActionTaskProps {
  title: string
  children: React.ReactNode
  variant?: 'action' | 'milestone'
}

export default function ActionTask({ title, children, variant = 'action' }: ActionTaskProps) {
  return (
    <div className={`my-8 border-2 border-black p-6 ${variant === 'action' ? 'bg-red-700' : 'bg-black'} text-white shadow-[8px_8px_0_#0a0a0a]`}>
      <h3 className="text-lg font-black uppercase mb-4 text-white">{title}</h3>
      <div className="space-y-2 text-sm leading-relaxed">
        {typeof children === 'string' ? (
          <div className="whitespace-pre-line">
            {children.split('\n').map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  )
}
