import { readFileSync, writeFileSync, appendFileSync } from "fs"
import { join, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, "..")

// ── Normalization map: different inputs → same tag slug ──────────
// Authors
const AUTHOR_MAP = {
  "C. S. Lewis": "C-S-Lewis",
  "C.S. Lewis": "C-S-Lewis",
  "J. R. R. Tolkien": "JRR-Tolkien",
  "J.R.R Tolkien": "JRR-Tolkien",
  "Fiódor Dostoiévski": "Fiodor-Dostoievski",
  "Fyodor Dostoievsky": "Fiodor-Dostoievski",
  "Frank Hebert": "Frank-Herbert",
  "Nigel PoultonNigel Poulton": "Nigel-Poulton",
  "Tsugami Ohba, Takeshi Obata": "Tsugami-Ohba Takeshi-Obata",
  "Machado de Assis, Joaquim Maria Machado de Assis": "Machado-de-Assis",
}

const AUTHOR_MAP_KEYS = Object.keys(AUTHOR_MAP)

// Publishers
const PUBLISHER_MAP = {
  "LP&M": "LPM",
  "L&PM": "LPM",
  "L&PM Editores": "LPM",
  "L&PM Pocket": "LPM-Pocket",
  "HarperCollins Brasil": "HarperCollins-Brasil",
  "Harper Collins Brasil": "HarperCollins-Brasil",
  "Penguin Companhia": "Penguin-Companhia",
  "Penguin-Companhia": "Penguin-Companhia",
  "Companhia das Letras": "Companhia-das-Letras",
  "Companhia Das Letras": "Companhia-das-Letras",
  "Editora Companhia das Letras": "Companhia-das-Letras",
  "Editora Schwarcz - Companhia das Letras": "Companhia-das-Letras",
  "Editora Record": "Record",
  "Record Ltda": "Record",
  "Suma de Letras": "Suma",
  "José Olympio": "Jose-Olympio",
  "Livraria José Olympio Editora": "Jose-Olympio",
  "Editora América do Sul": "Editora-America-do-Sul",
  "L&PM editores": "LPM",
}

const PUBLISHER_MAP_KEYS = Object.keys(PUBLISHER_MAP)

function slugify(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[®™,.]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

// eslint-disable-next-line no-unused-vars
function log(_msg) {
  /* quiet by default */
}

// ── leitura.md ────────────────────────────────────────────────────
function migrateLeitura() {
  const filepath = join(ROOT, "content", "projetos", "leitura.md")
  let content = readFileSync(filepath, "utf-8")
  const lines = content.split("\n")
  const report = []

  const output = lines.map((line, idx) => {
    // ── Prose line with [[Victor Hugo]] (line 24) ──
    if (line.includes("[[Victor Hugo]]") && !line.startsWith("|")) {
      report.push(`  L${idx + 1}: [[Victor Hugo]] → #autor/Victor-Hugo (prose)`)
      return line.replace("[[Victor Hugo]]", "#autor/Victor-Hugo")
    }

    // ── Table rows ──
    if (!line.startsWith("|") || line.startsWith("|---")) return line

    const cells = line.split("|")
    // cells: [0]='', [1]=Title, [2]=Authors, [3]=Publisher, [4]=Pages, [5]=''

    const origAuthor = cells[2]
    const origPublisher = cells[3]

    if (origAuthor) {
      // Detect wikilinks in the author cell
      cells[2] = origAuthor.replace(/(?<!!)\[\[([^\]]+)\]\]/g, (_m, inner) => {
        const trimmed = inner.trim()

        // Check map first
        if (AUTHOR_MAP_KEYS.includes(trimmed)) {
          const slug = AUTHOR_MAP[trimmed]
          if (slug.includes(" ")) {
            const tags = slug
              .split(/\s+/)
              .map((s) => `#autor/${s}`)
              .join(" ")
            report.push(`  L${idx + 1}: [[${trimmed}]] → ${tags} (map)`)
            return tags
          }
          report.push(`  L${idx + 1}: [[${trimmed}]] → #autor/${slug} (map)`)
          return `#autor/${slug}`
        }

        // Split multi-author on comma
        const parts = trimmed
          .split(",")
          .map((p) => p.trim())
          .filter(Boolean)
        if (parts.length > 1) {
          const tags = parts.map((p) => `#autor/${slugify(p)}`).join(" ")
          report.push(`  L${idx + 1}: [[${trimmed}]] → ${tags} (split)`)
          return tags
        }

        const slug = slugify(trimmed)
        report.push(`  L${idx + 1}: [[${trimmed}]] → #autor/${slug}`)
        return `#autor/${slug}`
      })
    }

    if (origPublisher) {
      cells[3] = origPublisher.replace(/(?<!!)\[\[([^\]]+)\]\]/g, (_m, inner) => {
        const trimmed = inner.trim()

        if (PUBLISHER_MAP_KEYS.includes(trimmed)) {
          const slug = PUBLISHER_MAP[trimmed]
          report.push(`  L${idx + 1}: [[${trimmed}]] → #editora/${slug} (map)`)
          return `#editora/${slug}`
        }

        const slug = slugify(trimmed)
        report.push(`  L${idx + 1}: [[${trimmed}]] → #editora/${slug}`)
        return `#editora/${slug}`
      })
    }

    return cells.join("|")
  })

  writeFileSync(filepath, output.join("\n"))
  return report
}

// ── Generic replacement in non-leitura files ──────────────────────
function migrateFile(relPath, replacements) {
  const filepath = join(ROOT, relPath)
  let content = readFileSync(filepath, "utf-8")
  const report = []

  for (const [from, to] of replacements) {
    if (!content.includes(from)) {
      report.push(`  WARN: "${from}" not found in ${relPath}`)
      continue
    }
    content = content.replaceAll(from, to)
    report.push(`  ${from} → ${to}`)
  }

  writeFileSync(filepath, content)
  return report
}

// ── Main ─────────────────────────────────────────────────────────
function main() {
  const allReports = []

  // ── leitura.md ──
  console.log("\n=== leitura.md ===")
  const leituraReport = migrateLeitura()
  allReports.push(...leituraReport.map((r) => `leitura.md: ${r}`))
  console.log(`  ${leituraReport.length} replacements`)

  // ── Dates: conquistas e lembranças.md ──
  console.log("\n=== conquistas e lembranças.md (dates) ===")
  const conquistasDates = [
    ["[[2014]]", "#2014"],
    ["[[2020]]", "#2020"],
    ["[[2015]]", "#2015"],
    ["[[2022-10-10]]", "#2022/10/10"],
    ["[[1911]]", "#1911"],
    ["[[1770]]", "#1770"],
  ]
  const cqReport = migrateFile("content/sobre/conquistas e lembranças.md", conquistasDates)
  allReports.push(...cqReport)
  cqReport.forEach((r) => console.log(`  ${r}`))

  // ── Dates: gaia.md ──
  console.log("\n=== gaia.md (dates) ===")
  const gaiaDates = [
    ["[[2024-05-10]]", "#2024/05/10"],
    ["[[2024-08-12]]", "#2024/08/12"],
  ]
  const gaiaReport = migrateFile("content/sobre/gaia.md", gaiaDates)
  allReports.push(...gaiaReport)
  gaiaReport.forEach((r) => console.log(`  ${r}`))

  // ── Date: formacao.md ──
  console.log("\n=== formacao.md (date) ===")
  const formDate = [["[[2014-05-13]]", "#2014/05/13"]]
  const formDateReport = migrateFile("content/sobre/formacao.md", formDate)
  allReports.push(...formDateReport)
  formDateReport.forEach((r) => console.log(`  ${r}`))

  // ── Shows: bands ──
  console.log("\n=== shows.md (bands) ===")
  const showsReplacements = [
    ["[[Dream Theater]]", "#banda/Dream-Theater"],
    ["[[Sepultura]]", "#banda/Sepultura"],
  ]
  const showsReport = migrateFile("content/sobre/shows.md", showsReplacements)
  allReports.push(...showsReport)
  showsReport.forEach((r) => console.log(`  ${r}`))

  // ── ia.md ──
  console.log("\n=== ia.md (tool) ===")
  const iaReplacements = [["[[opencode]]", "#ferramenta/opencode"]]
  const iaReport = migrateFile("content/ferramentas/ia.md", iaReplacements)
  allReports.push(...iaReport)
  iaReport.forEach((r) => console.log(`  ${r}`))

  // ── homelab.md ──
  console.log("\n=== homelab.md (hardware) ===")
  const homelabReplacements = [["[[Raspberry Pies]]", "#hardware/Raspberry-Pi"]]
  const homelabReport = migrateFile("content/projetos/homelab.md", homelabReplacements)
  allReports.push(...homelabReport)
  homelabReport.forEach((r) => console.log(`  ${r}`))

  // ── formacao.md (concepts) ──
  console.log("\n=== formacao.md (concepts) ===")
  const formConcepts = [
    ["[[Winter Challenge]]", "#projeto/Winter-Challenge"],
    ["[[Robô Seguidor de Linha]]", "#projeto/Robo-Seguidor-de-Linha"],
  ]
  const formConceptsReport = migrateFile("content/sobre/formacao.md", formConcepts)
  allReports.push(...formConceptsReport)
  formConceptsReport.forEach((r) => console.log(`  ${r}`))

  // ── conquistas e lembranças.md (places / orgs / concepts) ──
  console.log("\n=== conquistas e lembranças.md (places/orgs) ===")
  const conquistasPlaces = [
    ["[[Chile]]", "#lugar/Chile"],
    ["[[Ilha de Páscoa Rapa Nui - Chile]]", "#lugar/Ilha-de-Pascoa-Rapa-Nui"],
    ["[[Peru]]", "#lugar/Peru"],
    ["[[Bolívia]]", "#lugar/Bolivia"],
    ["[[Cabo Verde]]", "#lugar/Cabo-Verde"],
    ["[[Luxemburgo]]", "#lugar/Luxemburgo"],
    ["[[Singapura]]", "#lugar/Singapura"],
    ["[[São Paulo]]", "#lugar/Sao-Paulo"],
    ["[[Andes]]", "#lugar/Andes"],
    ["[[Venezuela]]", "#lugar/Venezuela"],
    ["[[Países Baixo, (Holanda)]]", "#lugar/Paises-Baixo"],
    ["[[Ilhas Caribe]]", "#lugar/Ilhas-Caribe"],
    ["[[Salvador]]", "#lugar/Salvador"],
    ["[[UNESCO]]", "#org/UNESCO"],
    ["[[7 Maravilhas do Mundo Moderno]]", "#org/7-Maravilhas-do-Mundo-Moderno"],
    ["[[Canibal]]", "#conceito/Canibal"],
    ["[[IPHAN]]", "#org/IPHAN"],
    ["[[Guinness Book]]", "#org/Guinness-Book"],
  ]
  const conquistasReport = migrateFile("content/sobre/conquistas e lembranças.md", conquistasPlaces)
  allReports.push(...conquistasReport)
  conquistasReport.forEach((r) => console.log(`  ${r}`))

  // ── index.md ──
  console.log("\n=== index.md ===")
  const indexReplacements = [["[[Sepultura]]", "#banda/Sepultura"]]
  const indexReport = migrateFile("content/index.md", indexReplacements)
  allReports.push(...indexReport)
  indexReport.forEach((r) => console.log(`  ${r}`))

  // ── Write audit report ──
  const audit = [
    "# Wikilink → Tag Migration Report\n",
    `Date: ${new Date().toISOString()}\n`,
    "---\n",
    ...allReports.map((r) => `${r}\n`),
  ]
  const auditPath = join(ROOT, "scripts", "migration-report.md")
  writeFileSync(auditPath, audit.join(""))
  console.log(`\nReport written to scripts/migration-report.md`)
}

main()
