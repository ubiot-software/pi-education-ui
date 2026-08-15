import { Link } from 'react-router-dom'
import { Code, ArrowRight, CheckCircle2, Clock, Award, BookOpen } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { HTDP_LEVELS } from '../data/htdpLessons'
import { SEO } from '../components/layout/SEO'

export function HTDPIndex() {
  return (
    <div className="space-y-12 pb-16">
      <SEO
        title="¿Cómo Diseñar Programas? — Educación Pi"
        description="Diseña programas de forma estructurada con Racket y la Receta de Diseño HTDP."
        url="https://educacion.pi.com.ve/programas/"
        type="course"
      />

      {/* Header Banner */}
      <section className="border-b border-slate-200 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 py-12 text-white dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold">
            <Code className="h-5 w-5" />
            <span>Curso de Programación Estructurada</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            ¿Cómo Diseñar Programas?
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-3xl leading-relaxed">
            Aprende un método sistemático para resolver problemas con programación. Basado en el aclamado enfoque HTDP (How to Design Programs) y el lenguaje Racket.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-1.5 text-xs bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <Clock className="h-4 w-4 text-blue-300" />
              <span>Duración aprox: 12 Horas</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <Award className="h-4 w-4 text-amber-300" />
              <span>3 Niveles Progresivos</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <BookOpen className="h-4 w-4 text-emerald-300" />
              <span>Contenido Directo en la Web</span>
            </div>
          </div>
        </div>
      </section>

      {/* Levels Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-4 dark:border-slate-800">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Niveles del Curso
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Haz clic en cualquier nivel para acceder al material de estudio y ejercicios.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HTDP_LEVELS.map((level) => (
            <Card key={level.id} className="flex flex-col justify-between group hover:border-blue-500/60 transition-all duration-300">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant={level.difficulty === 'Principiante' ? 'default' : level.difficulty === 'Intermedio' ? 'amber' : 'indigo'}>
                    {level.difficulty}
                  </Badge>
                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {level.estimatedHours}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {level.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {level.subtitle}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 flex items-center justify-center border border-slate-100 dark:border-slate-800">
                  <img
                    src={level.image}
                    alt={level.title}
                    className="h-28 object-contain transition-transform duration-200 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>

                <div className="space-y-1.5">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Objetivos principales:
                  </p>
                  <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-300">
                    {level.objectives.slice(0, 2).map((obj, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Button asChild className="w-full justify-between">
                  <Link to={`/programas/${level.id}`}>
                    <span>Entrar a la Lección</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
