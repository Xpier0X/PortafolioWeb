# Piero Leon — Portafolio

Portafolio personal de Piero Daniel Leon Yaipen, Desarrollador Frontend.

## Stack

- [Astro](https://astro.build) — Framework web
- [Tailwind CSS v4](https://tailwindcss.com) — Estilos utilitarios
- [Vercel Analytics](https://vercel.com/analytics) — Analíticas y rendimiento

## Comandos

| Comando           | Acción                                      |
| :---------------- | :------------------------------------------ |
| `pnpm install`    | Instalar dependencias                       |
| `pnpm dev`        | Servidor local en `localhost:4321`          |
| `pnpm build`      | Build de producción en `./dist/`            |
| `pnpm preview`    | Vista previa del build local                |

## Estructura

```
src/
├── components/sections/   # Componentes por sección
├── data/                  # Datos tipados (proyectos, experiencia, skills, site)
├── layouts/               # Layout principal con meta tags SEO
├── pages/                 # Páginas de Astro
└── styles/                # CSS global con Tailwind
```