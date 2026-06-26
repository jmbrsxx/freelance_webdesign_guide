import React from 'react'

interface TableProps {
  headers: string[]
  rows: (string | number)[][]
}

export default function TableComponent({ headers, rows }: TableProps) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse border-2 border-black">
        <thead>
          <tr className="bg-black text-white">
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="px-4 py-3 text-left font-black uppercase text-sm border-b-2 border-red-700"
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
              className={`border-b border-black ${
                rowIdx % 2 === 0 ? 'bg-white' : 'bg-[#f6f2ec]'
              }`}
            >
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className="px-4 py-3 text-sm text-zinc-700"
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
