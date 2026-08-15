import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { HTDPIndex } from './pages/HTDPIndex'
import { HTDPLesson } from './pages/HTDPLesson'
import { MicrobitIndex } from './pages/MicrobitIndex'
import { MicrobitLesson } from './pages/MicrobitLesson'
import { NotFound } from './pages/NotFound'

export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-blue-500 selection:text-white">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/programas" element={<HTDPIndex />} />
              <Route path="/programas/:levelId" element={<HTDPLesson />} />
              <Route path="/microbit" element={<MicrobitIndex />} />
              <Route path="/microbit/:levelId" element={<MicrobitLesson />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
