import { useState } from 'react'
import { Check, Copy, Code2 } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

export function CodeBlock({ code, language = 'scheme', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.trim().split('\n')

  return (
    <div className="my-4 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-lg font-mono text-sm">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/80 px-4 py-2.5">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
          <Code2 className="h-4 w-4 text-blue-400" />
          <span>{title || language.toUpperCase()}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
          title="Copiar código"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">¡Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>

      {/* Code Container */}
      <div className="overflow-x-auto p-4 text-slate-100 leading-relaxed">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, index) => (
              <tr key={index} className="hover:bg-slate-900/50">
                <td className="w-8 select-none pr-4 text-right text-xs text-slate-600">
                  {index + 1}
                </td>
                <td className="whitespace-pre font-mono text-sm">{line}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
