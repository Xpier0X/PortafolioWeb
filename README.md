# Piero Leon — Portafolio

Portafolio personal de Piero Daniel Leon Yaipen, Desarrollador Frontend.

## Stack

- [Astro](https://astro.build) — Framework web
- [Tailwind CSS v4](https://tailwindcss.com) — Estilos utilitarios
- [Vercel Analytics](https://vercel.com/analytics) — Analíticas y rendimiento

## Comandos

| Comando             | Acción                             |
| :------------------ | :--------------------------------- |
| `pnpm install`      | Instalar dependencias              |
| `pnpm dev`          | Servidor local en `localhost:4321` |
| `pnpm build`        | Build de producción en `./dist/`   |
| `pnpm preview`      | Vista previa del build local       |
| `pnpm check`        | Validar tipos y componentes Astro  |
| `pnpm format`       | Formatear el proyecto              |
| `pnpm format:check` | Comprobar el formato               |
| `pnpm check:links`  | Validar enlaces del build          |
| `pnpm test:a11y`    | Ejecutar pruebas de accesibilidad  |

## Estructura

```
src/
├── components/sections/   # Componentes por sección
├── data/                  # Datos tipados (proyectos, experiencia, skills, site)
├── layouts/               # Layout principal con meta tags SEO
├── pages/                 # Páginas de Astro
├── styles/                # CSS global con Tailwind
├── scripts/               # Validaciones auxiliares del build
└── tests/                 # Pruebas Playwright y axe
```

El workflow de calidad en `.github/workflows/quality.yml` ejecuta formato, validación de tipos,
build, enlaces y accesibilidad en cada push o pull request. Para verificar enlaces externos en
local, usa `CHECK_EXTERNAL_LINKS=1 pnpm check:links`.
