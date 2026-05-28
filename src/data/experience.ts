export interface Experience {
  company: string
  role: string
  startDate: string
  endDate: string
  location: string
  description: string
}

export const experiences: Experience[] = [
  {
    company: "El Diario del VRAEM",
    role: "Frontend Developer (WordPress) · Remoto",
    startDate: "Feb 2026",
    endDate: "Abr 2026",
    location: "Remoto",
    description:
      "Diseño y desarrollo del portal de noticias con WordPress y Elementor. Implementé plantillas dinámicas para publicación de artículos. Optimicé la experiencia de lectura reduciendo la tasa de abandono en un 15 %. Apliqué SEO on-page mejorando rankings en Google.",
  },
  {
    company: "Turquesa Travel",
    role: "Frontend Developer (WordPress) · Remoto",
    startDate: "Jul 2025",
    endDate: "Oct 2025",
    location: "Remoto",
    description:
      "Diseño y desarrollo del sitio web corporativo con WordPress y Elementor. Implementé catálogo de servicios (15+) y formularios de contacto (3 tipos). Optimicé rendimiento reduciendo tiempo de carga en un 30 %. Aumenté tráfico orgánico en un 25 % con SEO on-page.",
  },
  {
    company: "Claro Advisor IT",
    role: "Soporte Técnico · Santa Anita",
    startDate: "Ago 2025",
    endDate: "Sep 2025",
    location: "Santa Anita",
    description:
      "Mantenimiento preventivo y correctivo de equipos de cómputo. Soporte técnico a usuarios con tiempo promedio de resolución de 4 horas. Instalé y configuré software/hardware en 50+ estaciones de trabajo.",
  },
  {
    company: "Universidad Privada del Norte",
    role: "Soporte Técnico · Breña",
    startDate: "Jul 2025",
    endDate: "Ago 2025",
    location: "Breña",
    description:
      "Mantenimiento integral en salas de cómputo, laboratorios y aulas (100+ equipos). Documenté procedimientos creando un manual de mantenimiento. Identifiqué 15 oportunidades de optimización.",
  },
]
