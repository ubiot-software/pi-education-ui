import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, Lightbulb, ChevronDown, ChevronUp, BookOpen, Code } from 'lucide-react'
import { HTDP_LEVELS } from '../data/htdpLessons'
import { CodeBlock } from '../components/ui/code-block'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { useSEO } from '../hooks/useSEO'

export function HTDPLesson() {
  const { levelId } = useParams<{ levelId: string }>()
  const levelIndex = HTDP_LEVELS.findIndex((l) => l.id === levelId)

  const [expandedSolutions, setExpandedSolutions] = useState<Record<number, boolean>>({})

  if (levelIndex === -1) {
    return <Navigate to="/programas" replace />
  }

  const currentLevel = HTDP_LEVELS[levelIndex]
  const prevLevel = levelIndex > 0 ? HTDP_LEVELS[levelIndex - 1] : null
  const nextLevel = levelIndex < HTDP_LEVELS.length - 1 ? HTDP_LEVELS[levelIndex + 1] : null

  useSEO({
    title: `${currentLevel.title} — Educación Pi`,
    description: currentLevel.subtitle
  })

  const toggleSolution = (index: number) => {
    setExpandedSolutions((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
        <Link to="/programas" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
          <ArrowLeft className="h-4 w-4" />
          <span>Volver a HTDP</span>
        </Link>
        <span>/</span>
        <span className="font-semibold text-slate-900 dark:text-white">{currentLevel.title}</span>
      </nav>

      {/* Hero Header */}
      <header className="space-y-4 border-b border-slate-200 pb-8 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="indigo">Racket / HTDP</Badge>
          <Badge variant="outline">{currentLevel.difficulty}</Badge>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Tiempo estimado: {currentLevel.estimatedHours}
          </span>
        </div>

        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
          {currentLevel.title}
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {currentLevel.subtitle}
        </p>
      </header>

      {/* Overview & Prerequisites Card */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 dark:border-slate-800 dark:bg-slate-900/50 space-y-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span>Visión General de la Lección</span>
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
                  <span className="text-blue-500 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Lo que lograrás:</h3>
            <ul className="text-sm space-y-1.5 text-slate-600 dark:text-slate-400">
              {currentLevel.objectives.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Recipe Steps Block (if present) */}
      {currentLevel.recipeSteps && (
        <section className="rounded-xl border border-blue-200 bg-blue-50/60 p-6 dark:border-blue-900/60 dark:bg-blue-950/40 space-y-3">
          <h3 className="text-base font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span>Receta de Diseño de Funciones (HTDP)</span>
          </h3>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-blue-950 dark:text-blue-100">
            {currentLevel.recipeSteps.map((step, i) => (
              <li key={i} className="p-2.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-blue-100 dark:border-slate-800">
                {step}
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Lesson Sections */}
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

            {section.codeSnippet && (
              <CodeBlock
                code={section.codeSnippet}
                language={section.codeLanguage || 'scheme'}
                title={`Ejemplo Racket — ${section.title}`}
              />
            )}

            {section.tips && (
              <div className="rounded-lg border border-amber-200 bg-amber-50/70 p-4 dark:border-amber-900/50 dark:bg-amber-950/30 text-sm text-amber-900 dark:text-amber-200 space-y-2">
                <div className="flex items-center gap-2 font-bold">
                  <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  <span>Consejos Pro:</span>
                </div>
                <ul className="list-disc list-inside space-y-1 pl-1 text-amber-800 dark:text-amber-300">
                  {section.tips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Exercises Section */}
      {currentLevel.exercises.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Retos Prácticos
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Pon a prueba lo aprendido resolviendo estos ejercicios en tu entorno DrRacket.
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
                  <Badge variant="secondary">Reto #{idx + 1}</Badge>
                </div>

                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {ex.problemStatement}
                </p>

                {ex.hint && (
                  <p className="text-xs text-amber-600 dark:text-amber-400 font-medium">
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
                    <span>{expandedSolutions[idx] ? 'Ocultar Solución' : 'Ver Solución Sugerida'}</span>
                    {expandedSolutions[idx] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>

                  {expandedSolutions[idx] && (
                    <div className="mt-3">
                      <CodeBlock
                        code={ex.solutionCode}
                        language="scheme"
                        title="Solución Racket"
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
            <Link to={`/programas/${prevLevel.id}`}>
              <ArrowLeft className="h-4 w-4" />
              <span>{prevLevel.title}</span>
            </Link>
          </Button>
        ) : (
          <div />
        )}

        {nextLevel ? (
          <Button asChild className="gap-2">
            <Link to={`/programas/${nextLevel.id}`}>
              <span>{nextLevel.title}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <Button asChild variant="secondary" className="gap-2">
            <Link to="/programas">
              <span>Finalizar Módulo HTDP</span>
            </Link>
          </Button>
        )}
      </footer>
    </div>
  )
}
