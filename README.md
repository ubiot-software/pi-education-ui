# Pi Store | Education Frontend (v2)

Plataforma pública oficial de aprendizaje de **Educación Pi** (Agropezim Group C.A.), desarrollada con **React 19**, **Vite 7**, **TypeScript**, **Tailwind CSS v4** (paleta Azul), **Lucide Icons**, visor de lecciones directas en la web y suite completa de **SEO en producción**.

---

## 🚀 Tech Stack

- **Core**: React 19 (`react` & `react-dom`) + TypeScript 5.8
- **Bundler**: Vite 7 (`@vitejs/plugin-react-swc`)
- **Enrutamiento**: `react-router-dom` v7
- **Sistema de Diseño**: Tailwind CSS v4 (`@theme` con variables HSL para paleta Azul y Slate, modo oscuro/claro con persistencia `useTheme`) + `@tailwindcss/typography`
- **Iconografía & UI**: `lucide-react`, `clsx`, `tailwind-merge` (función auxiliar `cn()`)
- **Visor de Código**: Componente `CodeBlock` con numeración de líneas y botón de copia rápida de 1-click
- **SEO & Metadatos**: `react-helmet-async` + Hook `useSEO` + OpenGraph / Twitter Cards
- **Despliegue en GitHub Pages**: Script de `postbuild` que genera automáticamente `sitemap.xml`, `robots.txt`, `dist/404.html` (SPA fallback) y `dist/CNAME` (`educacion.pi.com.ve`)

---

## 📚 Cursos y Lecciones Directas

La plataforma permite a los estudiantes aprender y consultar código directamente sin salir de la web:

1. **¿Cómo Diseñar Programas? (HTDP / Racket)**:
   - `/programas/nivel-1`: Datos Sencillos, Expresiones, Receta de Diseño de Funciones y Pruebas Unitarias (`check-expect`).
   - `/programas/nivel-2`: Estructuras Compuestas (`define-struct`), Listas y Recursividad Estructural.
   - `/programas/nivel-3`: Abstracción y Funciones de Orden Superior (`map`, `filter`, `foldr`).

2. **Micro:bit (Robótica & Electrónica)**:
   - `/microbit/basico`: Primeros pasos, Matriz LED 5x5, Botones A/B y MakeCode Python/Bloques.
   - `/microbit/medio`: Sensores de Temperatura/Luz y Transmisión por Radio Inalámbrica.

---

## 📁 Estructura del Proyecto

```
education-frontend/
├── public/                 # Assets estáticos y CNAME
│   ├── favicon.ico         # Favicon principal
│   ├── CNAME               # Dominio personalizado educacion.pi.com.ve
│   └── imagenes/           # Diagramas e imágenes de los cursos
├── scripts/
│   └── generate-sitemap.js # Script postbuild para sitemap.xml, robots.txt, 404.html y CNAME
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx  # Navbar con menú responsive, logo e indicador de tema
│   │   │   ├── Footer.tsx  # Pie de página institucional y RIF
│   │   │   └── ThemeToggle.tsx # Selector de Modo Claro / Oscuro
│   │   └── ui/
│   │       ├── button.tsx  # Botón adaptable con opción asChild
│   │       ├── card.tsx    # Contenedores con sombra elevable
│   │       ├── badge.tsx   # Insignias de nivel y dificultad
│   │       └── code-block.tsx # Visor de código con botón de copia
│   ├── data/
│   │   ├── htdpLessons.ts     # Lecciones estructuradas del curso HTDP
│   │   └── microbitLessons.ts # Lecciones estructuradas del curso Micro:bit
│   ├── hooks/
│   │   ├── useTheme.ts     # Control y persistencia de tema claro/oscuro
│   │   └── useSEO.ts       # Inyección dinámica de meta-tags y OpenGraph
│   ├── lib/
│   │   └── utils.ts        # Función auxiliar cn()
│   ├── pages/
│   │   ├── Home.tsx            # Portada principal de Educación Pi
│   │   ├── HTDPIndex.tsx       # Índice del curso HTDP
│   │   ├── HTDPLesson.tsx      # Visor de lecciones HTDP
│   │   ├── MicrobitIndex.tsx   # Índice del curso Micro:bit
│   │   ├── MicrobitLesson.tsx  # Visor de lecciones Micro:bit
│   │   └── NotFound.tsx        # Página de error 404
│   ├── App.tsx             # Rutas, HelmetProvider y Layout global
│   ├── index.css           # Tema Tailwind v4 (Azul) y keyframes
│   └── main.tsx            # Punto de entrada principal
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions para despliegue automático en GitHub Pages
├── CNAME
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🛠️ Comandos de Desarrollo y Compilación

### Instalación de dependencias
```bash
npm install
```

### Servidor de Desarrollo
```bash
npm run dev
```

### Verificación de Tipos (TypeScript)
```bash
npm run typecheck
```

### Compilación para Producción
```bash
npm run build
```
> **Nota**: El comando `npm run build` ejecuta la compilación con `tsc` y `vite build`, y automáticamente dispara el script `postbuild` para generar `dist/sitemap.xml`, `dist/robots.txt`, `dist/404.html` y `dist/CNAME`.

### Previsualización de la Compilación
```bash
npm run preview
```

---

## 🌐 Despliegue en GitHub Pages

El proyecto incluye el archivo de automatización [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Cada vez que se realiza un `push` a la rama `main`, GitHub Actions se encarga de compilar el proyecto y desplegar el bundle estático a GitHub Pages con el dominio `https://educacion.pi.com.ve`.
