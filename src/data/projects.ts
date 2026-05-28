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
      "Portal de noticias desarrollado en WordPress enfocado en estructura editorial, rendimiento y experiencia de lectura optimizada. Implementé plantillas dinámicas, SEO on-page y mejoras continuas de rendimiento.",
    tags: ["WordPress", "Elementor", "SEO", "2026"],
    links: [{ label: "Visitar sitio", url: "https://eldiariodelvraem.pe" }],
    featured: true,
    thumbLabel: "En curso",
  },
  {
    title: "Type-CLI",
    label: "CLI",
    description:
      "CLI interactiva para gestión de tareas con interfaz tipo UI en terminal. Sistema CRUD completo con persistencia en SQLite (<50ms por operación). Arquitectura basada en separación de concerns (componentes, servicios, constantes).",
    tags: ["TypeScript", "React (Ink)", "SQLite", "2026"],
    links: [{ label: "Código", url: "https://github.com/Xpier0X/type-cli" }],
  },
  {
    title: "Tria",
    label: "Web",
    description:
      "Plataforma web de consulta académica universitaria con IA. Prototipo en Figma, desarrollo en Tailwind CSS y TypeScript. Integración de chatbot con Gemini API para respuestas académicas.",
    tags: ["Tailwind CSS", "Gemini API", "Figma", "2024"],
    links: [{ label: "Código", url: "https://github.com/Xpier0X/tria" }],
  },
]
