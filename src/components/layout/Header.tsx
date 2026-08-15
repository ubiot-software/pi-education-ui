import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, GraduationCap, Code, Cpu } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const navLinks = [
    { path: '/', label: 'Inicio', icon: GraduationCap },
    { path: '/programas', label: '¿Cómo Diseñar Programas?', icon: Code },
    { path: '/microbit', label: 'Micro:bit', icon: Cpu }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20 transition-transform duration-200 group-hover:scale-105 dark:bg-blue-500">
            <img
              src="https://www.pi.com.ve/assets/logo-cea72424.svg"
              alt="Logo Pi"
              className="h-6 w-6 brightness-0 invert"
              onError={(e) => {
                // Fallback to GraduationCap icon if SVG fails to load
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
              Educación <span className="text-blue-600 dark:text-blue-400">Pi</span>
            </span>
            <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 -mt-1">
              Plataforma de Aprendizaje
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon
            const active = isActive(link.path)
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${
                  active
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 font-semibold'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                }`}
              >
                <Icon className={`h-4 w-4 ${active ? 'text-blue-600 dark:text-blue-400' : ''}`} />
                <span>{link.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 md:hidden"
            aria-label="Abrir menú"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pt-2 pb-4 shadow-lg dark:border-slate-800 dark:bg-slate-900 md:hidden animate-slide-down">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon
              const active = isActive(link.path)
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                    active
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span>{link.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
