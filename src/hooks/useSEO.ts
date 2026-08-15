import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  ogImage?: string
  canonicalUrl?: string
}

export function useSEO({
  title = 'Educación Pi — Plataforma de Aprendizaje',
  description = 'Aprende programación estructurada con Racket (HTDP) y electrónica divertida con Micro:bit.',
  ogImage = 'https://www.pi.com.ve/assets/logo-cea72424.svg',
  canonicalUrl
}: SEOProps = {}) {
  useEffect(() => {
    document.title = title

    const updateMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let el = document.querySelector(selector) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        if (isProperty) {
          el.setAttribute('property', name)
        } else {
          el.setAttribute('name', name)
        }
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    updateMeta('description', description)
    updateMeta('og:title', title, true)
    updateMeta('og:description', description, true)
    updateMeta('og:image', ogImage, true)

    if (canonicalUrl) {
      let linkEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
      if (!linkEl) {
        linkEl = document.createElement('link')
        linkEl.setAttribute('rel', 'canonical')
        document.head.appendChild(linkEl)
      }
      linkEl.setAttribute('href', canonicalUrl)
    }
  }, [title, description, ogImage, canonicalUrl])
}
