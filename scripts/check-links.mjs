import { readFile } from "node:fs/promises"
import { resolve } from "node:path"

const html = await readFile(resolve("dist/index.html"), "utf8")
const links = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1])
const failures = []

for (const link of new Set(links)) {
  if (link.startsWith("#")) {
    const id = link.slice(1)
    if (!new RegExp(`(?:id|name)=["']${id}["']`).test(html)) {
      failures.push(`${link} (ancla inexistente)`)
    }
    continue
  }

  if (link.startsWith("/") && !link.startsWith("//")) {
    const path = link.split(/[?#]/)[0]
    if (path && path !== "/") {
      try {
        await readFile(resolve("dist", path.slice(1)))
      } catch {
        failures.push(`${link} (recurso local inexistente)`)
      }
    }
    continue
  }

  if (!link.startsWith("http")) continue
  if (process.env.CHECK_EXTERNAL_LINKS !== "1") continue

  try {
    let response = await fetch(link, { method: "HEAD", redirect: "follow" })
    if (response.status === 405) {
      response = await fetch(link, { method: "GET", redirect: "follow" })
    }
    if (response.status >= 400) failures.push(`${link} (${response.status})`)
  } catch (error) {
    failures.push(`${link} (${error.message})`)
  }
}

if (failures.length) {
  console.error("Enlaces inválidos encontrados:")
  failures.forEach((failure) => console.error(`- ${failure}`))
  process.exit(1)
}

const externalNote =
  process.env.CHECK_EXTERNAL_LINKS === "1"
    ? ""
    : " (enlaces externos omitidos; usa CHECK_EXTERNAL_LINKS=1 para verificarlos)"
console.log(`✓ ${new Set(links).size} enlaces y recursos verificados${externalNote}`)
