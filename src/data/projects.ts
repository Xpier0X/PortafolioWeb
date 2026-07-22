export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  title: string
  description: string
  tags: string[]
  links: ProjectLink[]
  label: string
  featured?: boolean
  thumbIcon?: string
  thumbLabel?: string
}

export const projects: Project[] = [
  {
    title: "DelVraem",
    label: "Destacado",
    description:
      "Portal de noticias desarrollado en WordPress con Elementor. Arquitectura de categorías, etiquetas y jerarquía de contenido para navegación editorial clara. Plantillas dinámicas reutilizables para artículos. SEO on-page con estructura de encabezados, metadatos y URLs amigables.",
    tags: ["WordPress", "Elementor", "SEO"],
    links: [{ label: "Visitar sitio", url: "https://Delvraem.pe" }],
    featured: true,
    thumbIcon: "📰",
    thumbLabel: "En curso",
  },
  {
    title: "GLOBTECx",
    label: "Frontend",
    description:
      "Refactorización de la arquitectura frontend de la plataforma web. Reestructuración de carpetas y organización del código para una base escalable. Detección y eliminación de componentes duplicados, refactorizándolos en componentes reutilizables. Definición de estándares de estructura y convenciones de código para el equipo.",
    tags: ["TypeScript", "Frontend", "Refactoring"],
    links: [{ label: "Visitar sitio", url: "https://globtecx.com/" }],
  },
  {
    title: "Type-CLI",
    label: "CLI",
    description:
      "CLI interactiva para gestión de tareas con interfaz tipo UI en terminal. Sistema CRUD completo con persistencia en SQLite y eliminación lógica de registros. Arquitectura basada en separación de responsabilidades (componentes, servicios, constantes).",
    tags: ["TypeScript", "React (Ink)", "SQLite"],
    links: [{ label: "Código", url: "https://github.com/Xpier0X/type-cli" }],
  },
]
