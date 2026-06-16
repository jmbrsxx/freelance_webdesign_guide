import React from 'react'

interface ActionTaskProps {
  title: string
  children: React.ReactNode
  variant?: 'action' | 'milestone'
}

export default function ActionTask({ title, children, variant = 'action' }: ActionTaskProps) {
  return (
    <div className={`my-8 p-6 rounded-lg ${variant === 'action' ? 'bg-blue-600' : 'bg-blue-600'} text-white`}>
      <h3 className="text-lg font-bold mb-4 text-white">{title}</h3>
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
