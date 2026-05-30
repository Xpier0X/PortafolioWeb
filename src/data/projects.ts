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
    tags: ["WordPress", "Elementor", "SEO", "2026"],
    links: [{ label: "Visitar sitio", url: "https://Delvraem.pe" }],
    featured: true,
    thumbLabel: "En curso",
  },
  {
    title: "Type-CLI",
    label: "CLI",
    description:
      "CLI interactiva para gestión de tareas con interfaz tipo UI en terminal. Sistema CRUD completo con persistencia en SQLite y eliminación lógica de registros. Arquitectura basada en separación de responsabilidades (componentes, servicios, constantes).",
    tags: ["TypeScript", "React (Ink)", "SQLite", "2026"],
    links: [{ label: "Código", url: "https://github.com/Xpier0X/type-cli" }],
  },
  {
    title: "Tria",
    label: "Web",
    description:
      "Plataforma web de consulta académica universitaria con IA. Prototipo en Figma, desarrollo en Tailwind CSS y TypeScript. Integración de chatbot con Gemini API para respuestas académicas precisas.",
    tags: ["Tailwind CSS", "Gemini API", "Figma", "2024"],
    links: [{ label: "Código", url: "https://https://github.com/Apo-Theddy/tria" }],
  },

]
