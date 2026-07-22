import { test, expect } from "@playwright/test"
import AxeBuilder from "@axe-core/playwright"

test("la página no tiene violaciones de accesibilidad críticas", async ({ page }) => {
  await page.goto("/")
  const results = await new AxeBuilder({ page }).exclude(".bleed-num").analyze()
  expect(results.violations).toEqual([])
})

test("el tema y los enlaces de navegación son operables", async ({ page }) => {
  await page.goto("/")

  const themeButton = page.locator("[data-theme-toggle]").first()
  await expect(themeButton).toHaveAttribute("aria-pressed", "false")
  await themeButton.click()
  await expect(page.locator("html")).toHaveClass(/dark/)
  await expect(themeButton).toHaveAttribute("aria-pressed", "true")

  await page.locator('[data-scroll-link][href="#contacto"]').first().click()
  await expect(page).toHaveURL(/#contacto$/)
})
