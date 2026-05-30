export interface SkillCategory {
  title: string
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Lenguajes",
    items: ["JavaScript", "TypeScript", "Python", "PHP", "SQL (SQL Server, MySQL)"],
  },
  {
    title: "Marcado / Estilo",
    items: ["HTML5", "CSS3"],
  },
  {
    title: "Frameworks",
    items: ["React.js", "Next.js", "Astro", "Tailwind CSS", "Bootstrap", "Flutter"],
  },
  {
    title: "Herramientas",
    items: ["Git / GitHub", "WordPress", "Elementor", "Figma", "Jira", "Trello"],
  },
]
