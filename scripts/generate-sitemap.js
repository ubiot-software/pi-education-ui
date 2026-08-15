import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const DOMAIN = 'https://educacion.pi.com.ve'

function generateSitemapAndRobots() {
  const today = new Date().toISOString().split('T')[0]

  const urls = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/programas', priority: '0.9', changefreq: 'weekly' },
    { url: '/programas/nivel-1', priority: '0.8', changefreq: 'monthly' },
    { url: '/programas/nivel-2', priority: '0.8', changefreq: 'monthly' },
    { url: '/programas/nivel-3', priority: '0.8', changefreq: 'monthly' },
    { url: '/microbit', priority: '0.9', changefreq: 'weekly' },
    { url: '/microbit/basico', priority: '0.8', changefreq: 'monthly' },
    { url: '/microbit/medio', priority: '0.8', changefreq: 'monthly' }
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (item) => `  <url>
    <loc>${DOMAIN}${item.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  const robots = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`

  const distDir = path.resolve(__dirname, '../dist')
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true })
  }

  const sitemapPath = path.join(distDir, 'sitemap.xml')
  const robotsPath = path.join(distDir, 'robots.txt')

  fs.writeFileSync(sitemapPath, xml, 'utf8')
  fs.writeFileSync(robotsPath, robots, 'utf8')

  // Copy dist/index.html to dist/404.html for GitHub Pages SPA client-side routing fallback
  const indexPath = path.join(distDir, 'index.html')
  const fallback404Path = path.join(distDir, '404.html')
  if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, fallback404Path)
    console.log(`✅ GitHub Pages SPA fallback 404.html generated successfully`)
  }

  // Ensure CNAME file is present in dist/
  const cnameDist = path.join(distDir, 'CNAME')
  const cnamePublic = path.resolve(__dirname, '../public/CNAME')
  const cnameRoot = path.resolve(__dirname, '../CNAME')

  if (!fs.existsSync(cnameDist)) {
    if (fs.existsSync(cnamePublic)) {
      fs.copyFileSync(cnamePublic, cnameDist)
    } else if (fs.existsSync(cnameRoot)) {
      fs.copyFileSync(cnameRoot, cnameDist)
    }
    console.log(`✅ CNAME file copied to dist/CNAME`)
  }

  console.log(`✅ Sitemap successfully generated at ${sitemapPath} (${urls.length} URLs)`)
  console.log(`✅ Robots.txt successfully generated at ${robotsPath}`)
}

generateSitemapAndRobots()
