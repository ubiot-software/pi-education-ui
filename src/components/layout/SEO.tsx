import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  imageAlt?: string
  url?: string
  type?: 'website' | 'article' | 'course'
}

export function SEO({
  title = 'Educación Pi — Cursos de Programación y Electrónica',
  description = 'Aprende programación estructurada con Racket (HTDP) y electrónica interactiva con Micro:bit en Educación Pi.',
  keywords = 'Educación Pi, Racket, HTDP, Microbit, Programación, Electrónica, Cursos, Venezuela, MakeCode',
  image = 'https://educacion.pi.com.ve/og-image.png',
  imageAlt = 'Educación Pi — Cursos de Programación y Electrónica',
  url = 'https://educacion.pi.com.ve/',
  type = 'website'
}: SEOProps) {
  const formattedTitle = title.length > 60 ? title.substring(0, 57) + '...' : title
  const absoluteImageUrl = image.startsWith('http')
    ? image
    : `https://educacion.pi.com.ve${image.startsWith('/') ? '' : '/'}${image}`
  const canonicalUrl = url.endsWith('/') || url.includes('?') ? url : `${url}/`

  // Generate Schema.org JSON-LD Structured Data for Education/Course
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type === 'course' ? 'Course' : 'EducationalOrganization',
    name: title,
    description: description,
    url: canonicalUrl,
    image: absoluteImageUrl,
    provider: {
      '@type': 'Organization',
      name: 'Educación Pi — Agropezim Group C.A.',
      url: 'https://educacion.pi.com.ve',
      logo: 'https://educacion.pi.com.ve/logo.svg'
    }
  }

  return (
    <Helmet>
      {/* Basic Title & Description */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="theme-color" content="#2563eb" />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type === 'course' ? 'website' : type} />
      <meta property="og:site_name" content="Educación Pi" />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="es_VE" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@PiStoreVe" />
      <meta name="twitter:creator" content="@PiStoreVe" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* JSON-LD Schema.org Structured Data */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  )
}
