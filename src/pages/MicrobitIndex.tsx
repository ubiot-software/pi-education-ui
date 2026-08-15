import { Link } from 'react-router-dom'
import { Cpu, ArrowRight, CheckCircle2, Clock, Award, ExternalLink } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { MICROBIT_LEVELS } from '../data/microbitLessons'
import { SEO } from '../components/layout/SEO'

export function MicrobitIndex() {
  return (
    <div className="space-y-12 pb-16">
      <SEO
        title="Curso Micro:bit — Educación Pi"
        description="Aprende programación visual y electrónica con Micro:bit y MakeCode."
        url="https://educacion.pi.com.ve/microbit/"
        type="course"
      />

      {/* Header Banner */}
      <section className="border-b border-slate-200 bg-gradient-to-r from-sky-900 via-blue-900 to-slate-900 py-12 text-white dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 text-sky-300 text-sm font-semibold">
            <Cpu className="h-5 w-5" />
            <span>Curso de Robótica & Electrónica Educativa</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Micro:bit
          </h1>
          <p className="text-sky-100 text-base sm:text-lg max-w-3xl leading-relaxed">
            Aprende a programar tarjetas electrónicas con sensores, matrices LED y comunicación inalámbrica por radio. ¡Usa el simulador en línea o tu propia placa!
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <div className="flex items-center gap-1.5 text-xs bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <Clock className="h-4 w-4 text-sky-300" />
              <span>Duración aprox: 6 Horas</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
              <Award className="h-4 w-4 text-amber-300" />
              <span>2 Niveles Guiados</span>
            </div>
            <a
              href="https://makecode.microbit.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs bg-sky-500/30 hover:bg-sky-500/40 text-sky-200 px-3 py-1.5 rounded-lg transition-colors border border-sky-400/30"
            >
              <span>Abrir Editor MakeCode</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Levels Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-4 dark:border-slate-800">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Niveles de Micro:bit
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Selecciona un nivel para comenzar con las lecciones y tutoriales prácticos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {MICROBIT_LEVELS.map((level) => (
            <Card key={level.id} className="flex flex-col justify-between group hover:border-sky-500/60 transition-all duration-300">
              <CardHeader className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="sky">{level.difficulty}</Badge>
                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {level.estimatedHours}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
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
                    className="h-32 object-contain transition-transform duration-200 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>

                <div className="space-y-1.5">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Objetivos clave:
                  </p>
                  <ul className="text-xs space-y-1 text-slate-600 dark:text-slate-300">
                    {level.objectives.slice(0, 3).map((obj, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Button asChild className="w-full justify-between bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600">
                  <Link to={`/microbit/${level.id}`}>
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
