import { Link } from 'react-router-dom'
import { GraduationCap, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className='border-t border-slate-200 bg-white py-12 text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {/* Col 1: Brand */}
          <div className='space-y-3'>
            <div className='flex items-center gap-2 font-bold text-slate-900 dark:text-white'>
              <GraduationCap className='h-6 w-6 text-blue-600 dark:text-blue-400' />
              <span className='text-lg'>Educación Pi</span>
            </div>
            <p className='text-sm text-slate-500 dark:text-slate-400'>
              Cursos interactivos de programación estructurada y electrónica
              educativa para formar creadores de tecnología.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className='space-y-3'>
            <h4 className='text-sm font-semibold tracking-wider text-slate-900 uppercase dark:text-white'>
              Cursos & Lecciones
            </h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  to='/programas'
                  className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                >
                  ¿Cómo Diseñar Programas? (HTDP)
                </Link>
              </li>
              <li>
                <Link
                  to='/microbit'
                  className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                >
                  Programación y Electrónica con Micro:bit
                </Link>
              </li>
              <li>
                <Link
                  to='/programas/nivel-1'
                  className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                >
                  Nivel 1: Datos Sencillos en Racket
                </Link>
              </li>
              <li>
                <Link
                  to='/microbit/basico'
                  className='hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                >
                  Micro:bit Nivel Básico
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal / Corporate info */}
          <div className='space-y-3'>
            <h4 className='text-sm font-semibold tracking-wider text-slate-900 uppercase dark:text-white'>
              Agropezim Group C.A.
            </h4>
            <p className='text-sm text-slate-500 dark:text-slate-400'>
              RIF: J-404095969
            </p>
            <p className='text-xs text-slate-400 dark:text-slate-500'>
              Todos los derechos reservados © {new Date().getFullYear()} Pi
              Store & Educación Pi.
            </p>
          </div>
        </div>

        <div className='mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4'>
          <p>Educación Pi — Tecnología para Aprender Creando</p>
          <p className='flex items-center justify-center gap-1'>
            Desarrollado con{' '}
            <Heart className='h-3.5 w-3.5 text-red-500 fill-red-500 inline' />{' '}
            para estudiantes.
          </p>
        </div>
      </div>
    </footer>
  )
}
