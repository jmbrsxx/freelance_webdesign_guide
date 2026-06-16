import React from 'react'

interface TableProps {
  headers: string[]
  rows: (string | number)[][]
}

export default function TableComponent({ headers, rows }: TableProps) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-900 text-white">
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="px-4 py-3 text-left font-bold text-sm border-b-2 border-slate-700"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={`border-b border-slate-200 ${
                rowIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'
              }`}
            >
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className="px-4 py-3 text-sm text-slate-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
