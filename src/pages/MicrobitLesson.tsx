import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Cpu, ExternalLink } from 'lucide-react'
import { MICROBIT_LEVELS } from '../data/microbitLessons'
import { CodeBlock } from '../components/ui/code-block'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { SEO } from '../components/layout/SEO'

export function MicrobitLesson() {
  const { levelId } = useParams<{ levelId: string }>()
  const levelIndex = MICROBIT_LEVELS.findIndex((l) => l.id === levelId)

  const [expandedSolutions, setExpandedSolutions] = useState<Record<number, boolean>>({})

  if (levelIndex === -1) {
    return <Navigate to="/microbit" replace />
  }

  const currentLevel = MICROBIT_LEVELS[levelIndex]
  const prevLevel = levelIndex > 0 ? MICROBIT_LEVELS[levelIndex - 1] : null
  const nextLevel = levelIndex < MICROBIT_LEVELS.length - 1 ? MICROBIT_LEVELS[levelIndex + 1] : null

  // Ensure title is <= 60 chars
  const pageTitle = `${currentLevel.title} — Educación Pi`.length > 60
    ? `${currentLevel.title.substring(0, 42)}... — Educación Pi`
    : `${currentLevel.title} — Educación Pi`

  const pageUrl = `https://educacion.pi.com.ve/microbit/${currentLevel.id}/`

  const toggleSolution = (index: number) => {
    setExpandedSolutions((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <SEO
        title={pageTitle}
        description={currentLevel.subtitle}
        url={pageUrl}
        type="article"
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
        <Link to="/microbit" className="flex items-center gap-1 hover:text-sky-600 dark:hover:text-sky-400">
          <ArrowLeft className="h-4 w-4" />
          <span>Volver a Micro:bit</span>
        </Link>
        <span>/</span>
        <span className="font-semibold text-slate-900 dark:text-white">{currentLevel.title}</span>
      </nav>

      {/* Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8 dark:border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="sky">Micro:bit</Badge>
            <Badge variant="outline">{currentLevel.difficulty}</Badge>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Tiempo estimado: {currentLevel.estimatedHours}
            </span>
          </div>

          <a
            href="https://makecode.microbit.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-sky-700 transition-colors"
          >
            <span>Abrir Simulador MakeCode</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
          {currentLevel.title}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {currentLevel.subtitle}
        </p>
      </header>

      {/* Overview Card */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 dark:border-slate-800 dark:bg-slate-900/50 space-y-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
            <Cpu className="h-5 w-5 text-sky-600 dark:text-sky-400" />
            <span>Visión General del Nivel</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            {currentLevel.overview}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Prerrequisitos:</h3>
            <ul className="text-sm space-y-1.5 text-slate-600 dark:text-slate-400">
              {currentLevel.prerequisites.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-sky-500 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Lo que aprenderás a hacer:</h3>
            <ul className="text-sm space-y-1.5 text-slate-600 dark:text-slate-400">
              {currentLevel.objectives.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="space-y-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 pb-3 dark:border-slate-800">
          Contenido de la Lección
        </h2>

        {currentLevel.sections.map((section, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {section.title}
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {section.content}
            </p>

            {section.hardwareItems && (
              <div className="rounded-xl border border-sky-200 bg-sky-50/50 p-4 dark:border-sky-900/50 dark:bg-sky-950/30 text-sm space-y-2">
                <p className="font-bold text-sky-900 dark:text-sky-200">Componentes Clave:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 dark:text-slate-300">
                  {section.hardwareItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 bg-white/70 dark:bg-slate-900/70 p-2 rounded-md border border-sky-100 dark:border-slate-800">
                      <span className="text-sky-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {section.codeSnippet && (
              <CodeBlock
                code={section.codeSnippet}
                language={section.codeLanguage || 'python'}
                title={`Código Micro:bit — ${section.title}`}
              />
            )}
          </div>
        ))}
      </section>

      {/* Exercises Section */}
      {currentLevel.exercises.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Proyectos Prácticos
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Implementa este proyecto en MakeCode e inténtalo en tu simulador.
            </p>
          </div>

          <div className="space-y-6">
            {currentLevel.exercises.map((ex, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {ex.title}
                  </h3>
                  <Badge variant="sky">Proyecto #{idx + 1}</Badge>
                </div>

                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {ex.problemStatement}
                </p>

                {ex.hint && (
                  <p className="text-xs text-sky-600 dark:text-sky-400 font-medium">
                    💡 Pista: {ex.hint}
                  </p>
                )}

                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleSolution(idx)}
                    className="gap-2 text-xs"
                  >
                    <span>{expandedSolutions[idx] ? 'Ocultar Código Sugerido' : 'Ver Código Sugerido'}</span>
                    {expandedSolutions[idx] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>

                  {expandedSolutions[idx] && (
                    <div className="mt-3">
                      <CodeBlock
                        code={ex.makecodePythonCode}
                        language="python"
                        title="Código Python para MakeCode"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Pagination Footer */}
      <footer className="flex items-center justify-between pt-8 border-t border-slate-200 dark:border-slate-800">
        {prevLevel ? (
          <Button asChild variant="outline" className="gap-2">
            <Link to={`/microbit/${prevLevel.id}`}>
              <ArrowLeft className="h-4 w-4" />
              <span>{prevLevel.title}</span>
            </Link>
          </Button>
        ) : (
          <div />
        )}

        {nextLevel ? (
          <Button asChild className="gap-2 bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600">
            <Link to={`/microbit/${nextLevel.id}`}>
              <span>{nextLevel.title}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <Button asChild variant="secondary" className="gap-2">
            <Link to="/microbit">
              <span>Finalizar Módulo Micro:bit</span>
            </Link>
          </Button>
        )}
      </footer>
    </div>
  )
}
