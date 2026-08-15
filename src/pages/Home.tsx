import { Link } from 'react-router-dom'
import { Code, Cpu, ArrowRight, BookOpen, Sparkles, CheckCircle2, Rocket } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { SEO } from '../components/layout/SEO'

export function Home() {
  return (
    <div className="space-y-16 pb-16">
      <SEO
        title="Educación Pi — Cursos de Programación y Electrónica"
        description="Explora nuestros cursos interactivos de programación estructurada con Racket (HTDP) y electrónica con Micro:bit."
        url="https://educacion.pi.com.ve/"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-blue-50/50 via-white to-transparent py-16 dark:border-slate-800/80 dark:from-slate-900/50 dark:via-slate-950 dark:to-transparent sm:py-24">
        <div className="absolute top-1/2 left-1/2 -z-10 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-600/15" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700 shadow-sm dark:border-blue-900/50 dark:bg-blue-950/60 dark:text-blue-300">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span>Aprende Programación y Electrónica Directamente</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight">
            Bienvenidos a <span className="text-blue-600 dark:text-blue-400">Educación Pi</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explora nuestros cursos interactivos diseñados para enseñarte a pensar computacionalmente, diseñar programas estructurados y crear proyectos electrónicos con sensores y LEDs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button asChild size="lg" className="rounded-xl shadow-lg shadow-blue-600/20">
              <Link to="/programas">
                <Code className="h-5 w-5 mr-1" />
                ¿Cómo Diseñar Programas?
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-xl">
              <Link to="/microbit">
                <Cpu className="h-5 w-5 mr-1 text-blue-600 dark:text-blue-400" />
                Curso Micro:bit
              </Link>
            </Button>
          </div>

          {/* Quick Stat badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8">
            <div className="rounded-xl border border-slate-200 bg-white/60 p-4 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Cursos Principales</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white/60 p-4 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">5+</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Niveles de Lección</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white/60 p-4 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">100%</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Acceso Directo</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white/60 p-4 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">Gratis</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Para la Comunidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Courses Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Cursos Disponibles
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Selecciona un módulo para acceder a las lecciones paso a paso, ejercicios prácticos y guías interactivas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Curso HTDP Card */}
          <Card className="group relative overflow-hidden border-2 border-slate-200/80 hover:border-blue-500/50 transition-all duration-300 dark:border-slate-800 dark:hover:border-blue-500/50 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code className="h-32 w-32 text-blue-600 dark:text-blue-400" />
            </div>

            <CardHeader className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="indigo" className="text-xs px-3 py-1">
                  Racket / HTDP
                </Badge>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  3 Niveles
                </span>
              </div>
              <CardTitle className="text-2xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                ¿Cómo Diseñar Programas?
              </CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Aprende a diseñar programas de forma estructurada, lógica y sistemática utilizando el lenguaje Racket y la Receta de Diseño de Funciones. Ideal para fundamentar tus bases de programación.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center justify-center p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
                <img
                  src="/imagenes/Racket2.png"
                  alt="Curso Cómo Diseñar Programas Racket"
                  className="h-36 object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                  Lo que aprenderás:
                </p>
                <ul className="text-sm space-y-1.5 text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span>Nivel 1: Datos Sencillos y Pruebas Unitarias</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span>Nivel 2: Estructuras compuestas y Recursividad</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <span>Nivel 3: Abstracción y Funciones de Orden Superior</span>
                  </li>
                </ul>
              </div>
            </CardContent>

            <CardFooter className="pt-4 border-t border-slate-100 dark:border-slate-800/60">
              <Button asChild className="w-full justify-between group-hover:bg-blue-700">
                <Link to="/programas">
                  <span>Ver Curso de Programación</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Curso Microbit Card */}
          <Card className="group relative overflow-hidden border-2 border-slate-200/80 hover:border-blue-500/50 transition-all duration-300 dark:border-slate-800 dark:hover:border-blue-500/50 flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cpu className="h-32 w-32 text-sky-600 dark:text-sky-400" />
            </div>

            <CardHeader className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="sky" className="text-xs px-3 py-1">
                  Micro:bit / MakeCode
                </Badge>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  2 Niveles
                </span>
              </div>
              <CardTitle className="text-2xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Micro:bit
              </CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Comienza tu viaje de aprendizaje en programación y electrónica interactiva con la tarjeta Micro:bit. Diviértete creando proyectos con pantalla LED, botones y sensores.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center justify-center p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
                <img
                  src="/imagenes/microbit2.png"
                  alt="Curso Microbit"
                  className="h-36 object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                  Lo que aprenderás:
                </p>
                <ul className="text-sm space-y-1.5 text-slate-600 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sky-600 dark:text-sky-400 flex-shrink-0" />
                    <span>Nivel Básico: Matriz LED, Botones y Bloques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sky-600 dark:text-sky-400 flex-shrink-0" />
                    <span>Nivel Medio: Sensores de Luz/Temp y Radio Inalámbrica</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-sky-600 dark:text-sky-400 flex-shrink-0" />
                    <span>Proyectos Guiados y Simulador Online</span>
                  </li>
                </ul>
              </div>
            </CardContent>

            <CardFooter className="pt-4 border-t border-slate-100 dark:border-slate-800/60">
              <Button asChild className="w-full justify-between bg-sky-600 hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600">
                <Link to="/microbit">
                  <span>Ver Curso Micro:bit</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Why Choose Educación Pi */}
      <section className="bg-slate-50 py-16 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              ¿Por qué aprender en Educación Pi?
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Metodología enfocada en construir bases sólidas y poner en práctica tus conocimientos desde el primer minuto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Acceso Directo</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Sin registros ni redirecciones complejas. Lee las lecciones y copia código de ejemplo directamente en la plataforma.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Receta de Diseño</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Aprende el estándar HTDP para descomponer problemas complejos en pasos pequeños y probados con testing riguroso.
              </p>
            </div>

            <div className="space-y-3 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Proyectos Reales</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Aplica lo aprendido construyendo juegos, termómetros interactivos y comunicadores inalámbricos con Micro:bit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
