import { Link } from 'react-router-dom'
import { Home, AlertTriangle } from 'lucide-react'
import { Button } from '../components/ui/button'
import { useSEO } from '../hooks/useSEO'

export function NotFound() {
  useSEO({
    title: 'Página no encontrada — Educación Pi',
    description: 'La página que buscas no existe o ha sido movida.'
  })

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center space-y-6">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400 shadow-xl">
        <AlertTriangle className="h-10 w-10" />
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          404 - Página no encontrada
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
          La lección o sección a la que intentas acceder no existe o fue movida.
        </p>
      </div>

      <Button asChild size="lg" className="rounded-xl gap-2">
        <Link to="/">
          <Home className="h-5 w-5" />
          <span>Volver al Inicio</span>
        </Link>
      </Button>
    </div>
  )
}
