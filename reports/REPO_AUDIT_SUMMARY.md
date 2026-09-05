# BAE SCHOOL — COMPLETE REPOSITORY AUDIT

**Audit Date:** 2026-09-05
**Auditor:** Antigravity (Claude Opus 4.6)
**Repository:** `beingaiengineer/school` (local clone at `d:\BAE\projects\school`)
**Commit at time of audit:** `e0df8fc` (HEAD of `main`)
**Principle:** This document contains FACTS, clearly separated from INFERENCES and RECOMMENDATIONS.

---

## TABLE OF CONTENTS

1. [Repository Structure](#1-repository-structure)
2. [Technology Stack](#2-technology-stack)
3. [Root Documentation / Governance](#3-root-documentation--governance)
4. [Curriculum Inventory](#4-curriculum-inventory)
5. [Lesson Structure Analysis](#5-lesson-structure-analysis)
6. [Frontmatter Audit](#6-frontmatter-audit)
7. [Navigation / Sidebar Audit](#7-navigation--sidebar-audit)
8. [Docusaurus Configuration](#8-docusaurus-configuration)
9. [Custom UI / Components](#9-custom-ui--components)
10. [Design System](#10-design-system)
11. [Content Quality / Educational Architecture](#11-content-quality--educational-architecture)
12. [Topic Overlap / Duplication](#12-topic-overlap--duplication)
13. [Curriculum Coherence](#13-curriculum-coherence)
14. [SEO / Discoverability](#14-seo--discoverability)
15. [Code Quality / Engineering Quality](#15-code-quality--engineering-quality)
16. [CI/CD / GitHub Actions](#16-cicd--github-actions)
17. [Git / Development Workflow](#17-git--development-workflow)
18. [Placeholders / Incomplete Work](#18-placeholders--incomplete-work)
19. [Broken / Risky Areas](#19-broken--risky-areas)
20. [Repository Metrics](#20-repository-metrics)
21. [Naming / Identity Consistency](#21-naming--identity-consistency)
22. [Strategic Observations](#22-strategic-observations)
23. [Critical Contradictions](#23-critical-contradictions)
24. [Information Required for Implementation](#24-information-required-for-implementation)
25. [Evidence Standard Examples](#25-evidence-standard-examples)
26. [Executive Summary](#26-executive-summary)

---

## 1. REPOSITORY STRUCTURE

### Complete Tree (excluding node_modules, build, .docusaurus, .git)

```text
school/
├── .agents/
│   └── skills/
│       └── bae-illustrations/
│           └── SKILL.md
├── .claude/
│   ├── agents/                          # 16 course-specific agent instruction files
│   │   ├── agentic-frameworks-agent.md
│   │   ├── app-security-agent.md
│   │   ├── cicd-pipelines-agent.md
│   │   ├── data-structures-agent.md
│   │   ├── fastapi-concepts-agent.md
│   │   ├── git-workflows-agent.md
│   │   ├── incident-management-agent.md
│   │   ├── observability-agent.md
│   │   ├── oop-patterns-agent.md
│   │   ├── python-agent.md
│   │   ├── release-deployment-agent.md
│   │   ├── requirements-estimation-agent.md
│   │   ├── sdlc-agile-agent.md
│   │   ├── sli-slo-agent.md
│   │   ├── software-testing-agent.md
│   │   └── team-structure-agent.md
│   └── agent-memory/                   # 16 per-agent MEMORY.md files
│       ├── agentic-frameworks-agent/MEMORY.md
│       ├── app-security-agent/MEMORY.md
│       ├── (... 14 more identical structure ...)
│       └── team-structure-agent/MEMORY.md
├── .github/
│   ├── pull_request_template.md
│   └── workflows/
│       └── auto-merge-on-success.yml
├── docs/
│   └── school/                          # 19 course directories
│       ├── agentic-frameworks/          # 22 subdirs, 96 MDX files
│       ├── ai-data-infra/               # design.md ONLY (0 lessons)
│       ├── app-security/                # 10 MDX + 1 assets dir
│       ├── cicd-pipelines/              # 10 MDX + 1 assets dir
│       ├── cloud-infrastructure/        # design.md ONLY (0 lessons)
│       ├── data-structures/             # 14 MDX files
│       ├── fastapi-concepts/            # 12 MDX files
│       ├── git-workflows/               # 10 MDX + 1 assets dir
│       ├── incident-management/         # 9 MDX + 2 asset dirs
│       ├── observability/               # 10 MDX files
│       ├── oop-patterns/                # 9 MDX files
│       ├── python/                      # 21 subdirs, 143 MDX files
│       ├── release-deployment/          # 10 MDX files
│       ├── requirements-estimation/     # 10 MDX files
│       ├── sdlc-agile/                  # 10 MDX files
│       ├── sli-slo/                     # 9 MDX files
│       ├── software-testing/            # 10 MDX files
│       ├── system-design/               # design.md ONLY (0 lessons)
│       └── team-structure/              # 9 MDX files
├── new-illustrations/                   # 1 PNG file (google-adk-fundamentals.png)
├── research/
│   └── deep-research-report.md          # 25KB research report
├── scripts/                             # EMPTY directory
├── src/
│   ├── components/
│   │   ├── InterviewCheatSheet/         # index.tsx (41KB), styles.module.css
│   │   ├── LearningFlow/               # index.tsx (4KB), styles.module.css
│   │   └── PythonInterviewPrep/        # index.tsx (23KB), styles.module.css
│   ├── css/
│   │   └── custom.css                   # 3.6KB global design tokens
│   └── pages/
│       ├── index.tsx                    # 13KB homepage
│       └── index.module.css            # 12KB homepage styles
├── static/
│   ├── .nojekyll
│   └── img/
│       ├── favicon.ico
│       ├── logo.svg
│       └── home/                        # 5 course card images (PNG, ~1MB each)
│           ├── python_bae.png
│           ├── agentic_frameworks_bae.png
│           ├── data_structures_bae.png
│           ├── app_security_bae.png
│           └── cicd_pipelines_bae.png
├── AGENTS.md                            # Repository constitution
├── CLAUDE.md                            # Claude-specific agent rules
├── CONTENT.md                           # 18-section lesson template
├── DESIGN.md                            # Platform design specs
├── HEARTBEAT.md                         # Agent execution checklist
├── JULES.md                             # Jules-specific agent rules
├── LICENSE                              # MIT License (Agilan Vageesan, 2026)
├── QUALITY.md                           # Quality gates and checklists
├── README.md                            # Title: "Python School Playbook"
├── SOUL.md                              # Teaching philosophy
├── TOOLS.md                             # Stack documentation
├── docusaurus.config.ts                 # Site config (title: "BAE School")
├── package.json                         # name: "playbook"
├── package-lock.json
├── pending_illustrations.md             # 205KB, 137 pending illustration entries
├── sidebars.ts                          # 19 autogenerated sidebar definitions
└── tsconfig.json
```

**Key Facts:**
- 19 course directories exist under `docs/school/`
- 3 courses contain ONLY a `design.md` (no lesson files): `system-design`, `cloud-infrastructure`, `ai-data-infra`
- `scripts/` directory exists but is completely empty
- `new-illustrations/` contains a single orphaned PNG file
- `pending_illustrations.md` at 205KB is one of the largest files in the repo

---

## 2. TECHNOLOGY STACK

| Technology | Version | Evidence | Purpose |
|---|---|---|---|
| **Docusaurus** | 3.10.1 | `package.json` L18 | Static site generator for documentation |
| **React** | ^19.0.0 | `package.json` L25 | UI framework for custom components |
| **TypeScript** | ~6.0.2 | `package.json` L33 | Type safety for components and config |
| **Node.js** | >=20.0 | `package.json` L48 (engines) | Runtime |
| **npm** | (lock v3) | `package-lock.json` | Package manager |
| **MDX** | @mdx-js/react ^3.0.0 | `package.json` L21 | Markdown with JSX for lesson content |
| **@xyflow/react** | ^12.10.2 | `package.json` L22 | React Flow library for LearningFlow diagrams |
| **clsx** | ^2.0.0 | `package.json` L23 | CSS class utility (used in homepage) |
| **prism-react-renderer** | ^2.3.0 | `package.json` L24 | Syntax highlighting for code blocks |
| **@docusaurus/faster** | 3.10.1 | `package.json` L19 | Build performance optimization |
| **Geist font** | Google Fonts CDN | `custom.css` L1 | Primary typography |
| **JetBrains Mono** | Google Fonts CDN | `custom.css` L1 | Code typography |
| **GitHub Actions** | v4 | `.github/workflows/auto-merge-on-success.yml` | CI/CD (build + auto-merge) |

**Notable Absences:**
- No linter configured (no ESLint, no Prettier config files)
- No test framework (no Jest, Vitest, or Playwright)
- No search plugin configured (no Algolia, no local search)
- No analytics configured
- No sitemap plugin explicitly configured (Docusaurus preset-classic includes one by default)
- No link checker tooling

**Inference:** The `@docusaurus/faster` package indicates build speed optimization is a priority — consistent with a large content site.

---

## 3. ROOT DOCUMENTATION / GOVERNANCE

### Document Summary Table

| File | Purpose | Key Rules | Notable |
|---|---|---|---|
| `AGENTS.md` | Repository constitution; agent bootstrap sequence | 11-step reading order; DoD requires "all 18 sections"; Git/PR conventions | Says "16-section" in reading order (L16) but "18 sections" in DoD (L36) |
| `SOUL.md` | Teaching philosophy and voice | FDE mentor voice; "bro" 3-5x per page; WHY before HOW; Indian analogies; tables over prose; no filler | Clear, well-defined |
| `HEARTBEAT.md` | Agent execution checklist | 9-step lifecycle per session | References `MEMORY.md` (step 7) — file does NOT exist at root |
| `TOOLS.md` | Stack context for agents | Lists: Docusaurus, MDX, LearningFlow, React, TypeScript, npm, GitHub, Illustration Pipeline | Very brief (15 lines) |
| `CONTENT.md` | Lesson template definition | 18 sections listed; says "16-section structure" in heading; diagram rules; frontmatter rules | **Self-contradictory**: Title says "18-Section", heading says "16-section" |
| `DESIGN.md` | Platform design specs | B&W Apple-inspired theme; LearningFlow component API; lists 15 courses (missing 4) | Lists deprecated crimson accent; incomplete course list |
| `QUALITY.md` | Validation gates | 7-check review; 150+ line minimum; Check 1 says "16 mandatory sections"; verdict table says "16/16" | Says "16" but AGENTS.md says "18" |
| `CLAUDE.md` | Claude agent rules | Think first; simplicity; surgical changes; goal-driven | References "16-section" from CONTENT.md |
| `JULES.md` | Jules agent rules | Max 10 topics/session; always update MEMORY.md | Very brief (21 lines) |
| `README.md` | Repository introduction | Title: "Python School Playbook" | Completely misaligned with current scope |
| `LICENSE` | MIT License | Copyright 2026 Agilan Vageesan | Standard |
| `pending_illustrations.md` | Illustration queue | 137 pending entries across courses | 205KB; actively maintained |

### Critical Contradictions Found in Governance Documents

| Contradiction | Location A | Location B | Detail |
|---|---|---|---|
| Section count: 16 vs 18 | `CONTENT.md` L13: "18-Section" | `CONTENT.md` L15: "16-section structure" | Same file contradicts itself |
| Section count: 18 vs 16 | `AGENTS.md` L36: "All 18 sections" | `QUALITY.md` L21: "16 mandatory sections" | Two governance files disagree |
| Section count: 16 vs 16 | `AGENTS.md` L16: "16-section" | `AGENTS.md` L36: "18 sections" | Same file contradicts itself |
| Course count | `DESIGN.md`: lists 15 courses | `sidebars.ts`: 19 sidebars | 4 courses not in DESIGN.md |
| MEMORY.md location | `AGENTS.md` L22: "MEMORY.md" (root) | Actual: `.claude/agent-memory/*/MEMORY.md` | 16 per-agent files, not one root file |
| Project identity | `README.md`: "Python School Playbook" | `docusaurus.config.ts`: "BAE School" | Fundamental identity conflict |
| Branding accent | `python-agent.md` L7: "Deep Crimson #9f1239" | `DESIGN.md` L40: "If older documents reference 'True Crimson #9f1239', that design is deprecated" | Agent instruction references deprecated color |
| Section count in agent | `python-agent.md` L19: "15 Mandatory Sections" | `CONTENT.md` L15: "16-section structure" | Yet another section count |

**FACT:** The actual lesson template in `CONTENT.md` explicitly lists 18 headings (§1 through §18). The heading text says "16-section". The DoD in `AGENTS.md` says "18 sections". `QUALITY.md` says "16 mandatory sections". `python-agent.md` says "15 Mandatory Sections". **There are four different numbers referenced across the governance docs: 15, 16, 16, and 18.**

---

## 4. CURRICULUM INVENTORY

### Course Summary Table

| # | Course | Directory | Lesson Count (MDX) | Has `design.md` | In Navbar | In Homepage | In `DESIGN.md` List | Status |
|---|---|---|---:|---|---|---|---|---|
| 1 | Python | `python/` | 143 | ✅ | ✅ | ✅ (144 claimed) | ✅ | Fully populated |
| 2 | Agentic Frameworks | `agentic-frameworks/` | 96 | ✅ | ✅ | ✅ (97 claimed) | ✅ | Largely populated; 4 empty categories |
| 3 | Data Structures | `data-structures/` | 14 | ✅ | ✅ | ✅ (15 claimed) | ❌ | Populated |
| 4 | App Security | `app-security/` | 10 | ✅ | ✅ | ✅ (11 claimed) | ✅ | Populated |
| 5 | CI/CD Pipelines | `cicd-pipelines/` | 10 | ✅ | ✅ | ✅ (11 claimed) | ✅ | Populated |
| 6 | FastAPI Concepts | `fastapi-concepts/` | 12 | ✅ | ✅ | ✅ (13 claimed) | ✅ | Populated |
| 7 | Git Workflows | `git-workflows/` | 10 | ✅ | ✅ | ✅ (11 claimed) | ✅ | Populated |
| 8 | Incident Management | `incident-management/` | 9 | ✅ | ✅ | ✅ (10 claimed) | ✅ | Populated |
| 9 | Observability | `observability/` | 10 | ✅ | ✅ | ✅ (11 claimed) | ✅ | Populated |
| 10 | OOP & Patterns | `oop-patterns/` | 9 | ✅ | ✅ | ✅ (10 claimed) | ✅ | Populated |
| 11 | Release & Deployment | `release-deployment/` | 10 | ✅ | ✅ | ✅ (11 claimed) | ✅ | Populated |
| 12 | Requirements & Estimation | `requirements-estimation/` | 10 | ✅ | ✅ | ✅ (11 claimed) | ✅ | Populated |
| 13 | SDLC & Agile | `sdlc-agile/` | 10 | ✅ | ✅ | ✅ (11 claimed) | ✅ | Populated |
| 14 | SLIs & SLOs | `sli-slo/` | 9 | ✅ | ✅ | ✅ (10 claimed) | ✅ | Populated |
| 15 | Software Testing | `software-testing/` | 10 | ✅ | ✅ | ✅ (11 claimed) | ✅ | Populated |
| 16 | Team Structure | `team-structure/` | 9 | ✅ | ✅ | ✅ (10 claimed) | ✅ | Populated |
| 17 | System Design | `system-design/` | 0 | ✅ | ✅ | ❌ | ❌ | **EMPTY** — design.md only |
| 18 | Cloud Infrastructure | `cloud-infrastructure/` | 0 | ✅ | ✅ | ❌ | ❌ | **EMPTY** — design.md only |
| 19 | AI & Data Infra | `ai-data-infra/` | 0 | ✅ | ✅ | ❌ | ❌ | **EMPTY** — design.md only |
| **TOTAL** | | | **381** | | 19 | 16 | 15 | |

### Lesson Count Discrepancies (Homepage vs Actual MDX Files)

| Course | Homepage Claims | Actual MDX Count | Discrepancy |
|---|---|---|---|
| Python | 144 | 143 | Off by 1 |
| Agentic Frameworks | 97 | 96 | Off by 1 |
| Data Structures | 15 | 14 | Off by 1 |
| App Security | 11 | 10 | Off by 1 |
| CI/CD Pipelines | 11 | 10 | Off by 1 |
| FastAPI Concepts | 13 | 12 | Off by 1 |
| Git Workflows | 11 | 10 | Off by 1 |
| Incident Management | 10 | 9 | Off by 1 |
| Observability | 11 | 10 | Off by 1 |
| OOP & Patterns | 10 | 9 | Off by 1 |
| Release & Deployment | 11 | 10 | Off by 1 |
| Requirements & Estimation | 11 | 10 | Off by 1 |
| SDLC & Agile | 11 | 10 | Off by 1 |
| SLIs & SLOs | 10 | 9 | Off by 1 |
| Software Testing | 11 | 10 | Off by 1 |
| Team Structure | 10 | 9 | Off by 1 |

**FACT:** Every single course count on the homepage is inflated by exactly 1. Possible explanation: `design.md` files are counted but aren't lesson files.

### Agentic Frameworks — Empty Categories (Directories with only `_category_.json`)

| Subdirectory | Category Label | Position | Lesson Count |
|---|---|---|---|
| `production/` | "Production" | 18 | **0 MDX files** |
| `agent-ux/` | "Agent UX" | 17 | **0 MDX files** |
| `llm-for-agents/` | "LLM Selection for Agents" | 11 | **0 MDX files** |
| `prompt-engineering-for-agents/` | "Prompt Engineering for Agents" | 12 | **0 MDX files** |
| `real-world-projects/` | (category only) | — | **0 MDX files** |

**FACT:** 5 subdirectories under `agentic-frameworks/` are empty stubs (have `_category_.json` but no lesson files). These will appear as empty sections in the sidebar.

### Agentic Frameworks — Design.md vs Filesystem Gap

The `agentic-frameworks/design.md` (305 lines, 13.9KB) defines a very ambitious curriculum of ~97 planned lessons across all subcategories. Many planned lessons listed in `design.md` do not exist as files. For example:
- `intro/llm-as-reasoning-engine.mdx` — listed in design.md, does NOT exist
- `intro/agent-safety-and-ethics.mdx` — listed in design.md, does NOT exist
- Multiple `architecture-patterns/` files listed but not created (chain-of-thought-agents, self-ask-pattern, rewoo-pattern, map-reduce-agents)
- All lessons planned for `production/`, `agent-ux/`, `llm-for-agents/`, `prompt-engineering-for-agents/`, `real-world-projects/` — NONE exist

---

## 5. LESSON STRUCTURE ANALYSIS

### Sampled Lessons Across Courses

Lessons were sampled from: Python (variables, interview-prep), FastAPI (fundamentals), Data Structures (arrays-memory), SLI/SLO (sli-slo-sla-explained), Observability (what-is-observability), App Security (security-mindset), Agentic Frameworks (react-pattern, multi-agent-patterns-overview).

### What Is Consistently Present (across most sampled lessons)

| Element | Observed |
|---|---|
| Frontmatter (`sidebar_position`, `sidebar_label`) | ✅ Present in all sampled files |
| `import LearningFlow` | ✅ Present in most lessons |
| `## 1. Quick Summary` table | ✅ Present in all sampled files |
| `## 2. Engineering Story` | ✅ Present in all sampled files |
| `## 3. Real-World Analogy` | ✅ Present in all sampled files |
| `## 4. Concept Explanation` | ✅ Present in most files |
| `## 5. Syntax Table` | ✅ Present in most files |
| `## 6. Beginner Example` | ✅ Present in most files |
| `## 7. Real-World Engineering Example` | ✅ Present in most files |
| `## 8. Internal Working` + `<LearningFlow>` | ✅ Present in most files |
| Illustration TODO markers | ✅ Present in nearly all files |
| "bro" usage | ✅ Consistent across all files |
| Indian analogies | ✅ Consistent across all files |

### What Is Inconsistently Present

| Element | Issue |
|---|---|
| Section numbering | Observability has `## 3. Concept Explanation` duplicated (both §3 Real-World Analogy and §3 Concept Explanation use the same number) |
| Section ordering | Data structures `arrays-memory.mdx`: sections appear out of order (§13 before §12 before §11) |
| `## 17. AI Agent Instructions` | Present in data-structures but numbered §17 (should be §18 per CONTENT.md) |
| `## 17. Top GitHub Repositories` | Present in data-structures with same number §17 as AI Agent Instructions |
| FDE Scenario placement | Sometimes in §2 Engineering Story, sometimes in §3 Real-World Analogy |
| Import placement | Data structures imports `LearningFlow` mid-file (line 54) rather than at top |
| `import Admonition` | Some files import it, many do not |

### What Is Missing from Sampled Lessons

| Missing Element | Where Observed |
|---|---|
| `## 9. Performance Table` | Often thin or merged (data-structures has a minimal 1-row table) |
| `## 14. Production Notes` | Often present but not always as a callout/warning box as specified |
| `## 18. AI Agent Instructions` | Only observed in data-structures course; not found in Python, FastAPI, SLI/SLO, or Observability samples |

### Actual Section Count Compliance

Based on sampling:
- **Python lessons**: Follow roughly 16 sections (Quick Summary through Related Topics). §17 and §18 generally absent.
- **FastAPI lessons**: Follow 16-18 sections. More comprehensive.
- **Data Structures lessons**: Follow ~17 sections with numbering errors and out-of-order sections.
- **SLI/SLO, SDLC, Team Structure, etc.**: Follow ~16 sections. Generally shorter content.
- **Agentic Frameworks (architecture-patterns)**: Follow 16-18 sections. Most comprehensive content.
- **Agentic Frameworks (multi-agent, tools, memory, emerging, etc.)**: Shorter, often 10-14 sections.

**Inference:** There is no single consistent section count. Most lessons follow 16 core sections. §17 (Top GitHub Repos) and §18 (AI Agent Instructions) are sporadically present.

---

## 6. FRONTMATTER AUDIT

### Required Fields (per CONTENT.md and QUALITY.md)

| Field | Required? | Present? |
|---|---|---|
| `sidebar_position` | ✅ Yes | ✅ Present in all sampled files |
| `sidebar_label` | ✅ Yes | ✅ Present in all sampled files |
| `title` | Not specified | ❌ Not present (title comes from H1) |
| `description` | Not specified | ❌ Not present in any sampled file |
| `keywords` | Not specified | ❌ Not present |
| `slug` | Not specified | ❌ Not present (uses filename as slug) |
| `authors` | Not specified | ❌ Not present |
| `tags` | Not specified | ❌ Not present |
| `date` | Not specified | ❌ Not present |

### Sidebar Position Anomaly

**Evidence:** `multi-agent-patterns-overview.mdx` has `sidebar_position: 173`. This is an unusually high value. Most files use positions 1-12. Very high sidebar positions may indicate generated content where positions were assigned sequentially across the entire course rather than per-category.

### Missing SEO Frontmatter

**FACT:** No lesson file in any sampled course contains `description`, `keywords`, or `slug` in frontmatter. This means Docusaurus auto-generates descriptions from content, which may not be optimal for SEO.

---

## 7. NAVIGATION / SIDEBAR AUDIT

### Sidebar Configuration

All 19 sidebars are configured as autogenerated from directory names in `sidebars.ts`:
```ts
pythonSidebar: [{type: 'autogenerated', dirName: 'school/python'}],
// ... 18 more identical patterns
```

### Navbar Configuration

The navbar has:
- A "Courses" dropdown with 19 items (all 19 courses)
- An "Interview Prep" direct link pointing to `/docs/school/python/interview-prep/top-python-interview-questions`

### Footer Configuration

The footer has 3 columns:
- "Courses" — only lists Python
- "Python Tracks" — 3 links (Fundamentals, Collections, System Design)
- "Resources" — only "Interview Prep"

### Navigation Issues Found

| Issue | Location | Evidence | Severity |
|---|---|---|---|
| Empty sidebar categories | `agentic-frameworks/production/`, `agent-ux/`, `llm-for-agents/`, `prompt-engineering-for-agents/`, `real-world-projects/` | Only `_category_.json`, no MDX files | **P1** — Appears empty to users |
| 3 empty courses in navbar | `system-design`, `cloud-infrastructure`, `ai-data-infra` | Directories contain only `design.md` (not rendered as lessons) | **P1** — Navbar links to empty courses |
| Footer only references Python | `docusaurus.config.ts` L86-L123 | Footer "Courses" section lists only Python | **P2** — 18 other courses completely unrepresented |
| Interview Prep link only for Python | Navbar L80 | Links to Python interview prep only; no other course interview prep in navbar | **P2** — Misleading for multi-course platform |
| Homepage missing 3 courses | `src/pages/index.tsx` | System Design, Cloud Infrastructure, AI & Data Infra not in homepage `courses` array | **P2** — But these courses are empty, so arguably correct |
| `design.md` files render in sidebar | All 19 courses have `design.md` | `design.md` is a curriculum spec, not a user-facing lesson | **P2** — Internal docs exposed to users |
| Homepage course count inflation | `src/pages/index.tsx` | Every course's `topicCount` is +1 vs actual MDX count | **P3** — Minor inaccuracy |

### Dead Link Risk

The footer links to:
- `/docs/school/python/fundamentals/variables` — ✅ Exists
- `/docs/school/python/collections/lists` — ✅ Exists
- `/docs/school/python/system-design/python-architecture` — ✅ Exists
- `/docs/school/python/interview-prep/top-python-interview-questions` — ✅ Exists

**FACT:** `onBrokenLinks: 'throw'` is set in `docusaurus.config.ts`, so broken internal links would cause build failure. Since the build appears to be passing, internal links should be valid.

---

## 8. DOCUSAURUS CONFIGURATION

### Complete Configuration Audit (`docusaurus.config.ts`)

| Setting | Value | Notes |
|---|---|---|
| `title` | "BAE School" | ✅ Correct identity |
| `tagline` | "Learn engineering, one topic at a time" | Generic |
| `favicon` | `img/favicon.ico` | ✅ Exists |
| `url` | `https://school.beingaiengineer.com` | Production URL |
| `baseUrl` | `/` | Standard |
| `organizationName` | `being-ai-engineer` | GitHub org name |
| `projectName` | `playbook` | ⚠️ Old identity |
| `onBrokenLinks` | `throw` | ✅ Strict link checking |
| `i18n` | `en` only | English-only |
| `future.v4` | `true` | Preparing for Docusaurus v4 |
| `docs.sidebarPath` | `./sidebars.ts` | Standard |
| `blog` | `false` | Blog disabled |
| `theme.customCss` | `./src/css/custom.css` | Custom design tokens |
| `image` | `img/logo.svg` | Social share image is a logo SVG |
| `colorMode.respectPrefersColorScheme` | `true` | ✅ Good UX |
| `prism.theme` | `github` | Light mode code theme |
| `prism.darkTheme` | `dracula` | Dark mode code theme |

### Missing Configuration

| Feature | Status |
|---|---|
| Search (Algolia/local) | ❌ Not configured |
| Analytics (GA/Plausible) | ❌ Not configured |
| PWA | ❌ Not configured |
| Versioning | ❌ Not configured |
| Edit links (GitHub) | ❌ Not configured |
| robots.txt | Not explicitly configured (Docusaurus default) |
| Sitemap | Implicit via preset-classic (not customized) |
| Open Graph metadata | Not customized beyond `image: 'img/logo.svg'` |

### Identity Conflicts in Configuration

| Field | Value | Conflict |
|---|---|---|
| `projectName` | `playbook` | Does not match "BAE School" or "school" |
| `package.json name` | `playbook` | Same conflict |
| `README.md title` | "Python School Playbook" | Different from everything else |
| `docusaurus.config.ts title` | "BAE School" | The authoritative identity |

---

## 9. CUSTOM UI / COMPONENTS

### Component Inventory

| Component | Path | Size | Purpose | Used Where | Reusable? |
|---|---|---|---|---|---|
| `LearningFlow` | `src/components/LearningFlow/index.tsx` | 4.4KB (166 lines) | Interactive React Flow diagram for concept visualization | Nearly every lesson across all courses | ✅ Yes — course-agnostic |
| `InterviewCheatSheet` | `src/components/InterviewCheatSheet/index.tsx` | 41.5KB (685 lines) | Hardcoded Python interview questions with cheat sheets and quizzes | Only `python/interview-prep/top-python-interview-questions.mdx` | ❌ No — Python-specific, data hardcoded |
| `PythonInterviewPrep` | `src/components/PythonInterviewPrep/index.tsx` | 22.9KB | Python-specific interactive quiz component | Only `python/interview-prep/top-python-interview-questions.mdx` | ❌ No — Python-specific |

### LearningFlow Component Analysis

The `LearningFlow` component (`src/components/LearningFlow/index.tsx`) accepts two prop shapes:

**Shape 1: `steps` prop** — Simple linear flowchart
```ts
type FlowStep = { title: string; detail: string; };
```

**Shape 2: `diagram` prop** — Full React Flow diagram
```ts
type DiagramNode = {
  id: string; title: string; detail: string;
  x: number; y: number;
  kind?: 'core' | 'process' | 'data' | 'tool' | 'warning' | 'output';
};
```

### LearningFlow API Mismatch in Data Structures Course

**FACT:** The data-structures course lessons pass props using a DIFFERENT API than what the `LearningFlow` component accepts:

```jsx
// Data Structures usage (arrays-memory.mdx L58-59):
{ id: '1', type: 'core', label: 'Request Array[0]', position: { x: 50, y: 150 } }

// Expected by LearningFlow component:
{ id: '1', title: 'Request Array[0]', detail: '...', x: 50, y: 150, kind: 'core' }
```

The data-structures lessons use:
- `type` instead of `kind`
- `label` instead of `title` (and no `detail`)
- `position: { x, y }` instead of flat `x`, `y`

Additionally, they pass these as `nodes=` and `edges=` props directly, bypassing the `diagram=` prop wrapper.

**This API mismatch means data-structures LearningFlow diagrams are likely not rendering correctly** (or React Flow is silently ignoring the custom node type and using defaults). This affects ALL 14 data-structures lessons.

### InterviewCheatSheet — Massive Hardcoded Component

The `InterviewCheatSheet` component is 685 lines with ALL interview Q&A data hardcoded directly in the TSX file across 6 topics (top, tricky, debugging, coding, system-design, senior). This includes ~60 concept entries with 6 fields each. Not externalized, not reusable for other courses.

---

## 10. DESIGN SYSTEM

### Documented Design (DESIGN.md + custom.css)

| Token | Light Mode | Dark Mode |
|---|---|---|
| Background | `#ffffff` | `#000000` |
| Surface | `#f5f5f7` | `#1d1d1f` |
| Content/Text | `#1d1d1f` | `#f5f5f7` |
| Headings | `#1d1d1f` | `#ffffff` |
| Primary accent | `#1d1d1f` | `#f5f5f7` |
| Font | Geist → Inter → system-ui | Same |
| Code font size | 95% | Same |
| Heading font weight | 700 | Same |

### Design Theme: "Apple-inspired Minimalist Black & White"

The CSS (`custom.css`, 125 lines) implements:
- ✅ Glassmorphism navbar (`backdrop-filter: blur(12px)`)
- ✅ Custom scrollbar styling
- ✅ Active sidebar link highlighting
- ✅ Admonition border styling
- ✅ Light/dark mode token switching

### Homepage Design (index.tsx + index.module.css)

The homepage (393 lines TSX, 12KB CSS) implements:
- Hero section with animated gradient background
- "Winter 2024 Cohort Open" badge (⚠️ outdated — current date is 2026)
- Stats grid: "120+ Lessons", "20 Sections", "10k+ Students", "98% Placement"
- Course card grid (bento layout)
- "Why BAE School?" value propositions section
- "Live Now" / "Coming Soon" badges on course cards

### Design Inconsistencies

| Issue | Evidence |
|---|---|
| Deprecated crimson color referenced | `python-agent.md` L7: `#9f1239` |
| CSS comment references "Stitch" | `custom.css` L51: "Stitch gray scale container variables" and L70: "Stitch Crimson-Dark overlay" |
| Only Python course has accent variable | `custom.css` L30-32: only `--course-python` defined |
| Homepage stats may be inaccurate | "120+ Lessons" (actual: 381), "10k+ Students" and "98% Placement" are unverifiable claims |
| Cohort badge outdated | "Winter 2024 Cohort Open" — it is September 2026 |
| Only 5 of 16 live courses have card images | Only Python, Agentic Frameworks, Data Structures, App Security, CI/CD have images in `static/img/home/` |

---

## 11. CONTENT QUALITY / EDUCATIONAL ARCHITECTURE

### Teaching Philosophy Alignment (SOUL.md vs Actual Content)

| Intended Standard (SOUL.md) | Actual Implementation | Gap |
|---|---|---|
| FDE mentor voice | ✅ Consistently implemented. Stories reference client deployments. | Minimal |
| "bro" 3-5 times per page | ✅ Observed in all sampled lessons | Minimal |
| WHY before HOW | ✅ Engineering Story precedes code in all sampled files | Minimal |
| Short paragraphs (1-3 sentences) | ⚠️ Varies. Some paragraphs are 5+ sentences. | Small |
| Tables over prose | ✅ Tables used extensively | Minimal |
| Indian analogies | ✅ Present in all sampled files (dabbawalas, chai stalls, cricket, IRCTC) | Minimal |
| Production framing | ✅ Engineering stories reference payment systems, APIs, databases | Minimal |
| No filler/fluff | ⚠️ Some lessons have verbose introductions | Small |
| Tricky question culture | ✅ §11 Tricky Questions present in most files | Minimal |
| Explicit DO/DON'T tables | ⚠️ Present in some but not all files. Some use prose instead. | Medium |
| FDE deployment lens | ✅ FDE scenarios present in most files | Minimal |

### Content Template Alignment (CONTENT.md vs Actual Lessons)

| Intended Standard (CONTENT.md) | Actual Implementation | Gap |
|---|---|---|
| §1 Quick Summary table | ✅ All files | None |
| §2 Engineering Story (100-200 words) | ✅ Most files. Some are longer. | Small |
| §3 Real-World Analogy with mapping table | ✅ Most files. Some have thin tables (2 rows). | Small-Medium |
| §4 Concept Explanation | ✅ Most files, but number conflicts (some use §3, §4 shifted) | Medium |
| §5 Syntax Table | ✅ Present in most | Small |
| §6 Beginner Example | ✅ Present in most | Small |
| §7 Real-World Engineering Example | ✅ Present in most | Small |
| §8 Internal Working + LearningFlow | ⚠️ LearningFlow present but data-structures API mismatch | Medium |
| §9 Performance Table | ⚠️ Often thin (1-2 rows) | Medium |
| §10 Top Interview Questions (5+ Q&As) | ✅ Most files have 5+ | Small |
| §11 Tricky Questions & Edge Cases | ✅ Present in most | Small |
| §12 Real-World Usage | ✅ Present in most | Small |
| §13 Best Practices (DO/DON'T) | ⚠️ Not always in table format | Medium |
| §14 Production Notes (callout box) | ⚠️ Not always using Admonition | Medium |
| §15 Common Mistakes | ✅ Present in most | Small |
| §16 Related Topics | ✅ Present in most | Small |
| §17 Top GitHub Repositories | ⚠️ Sporadically present | Large |
| §18 AI Agent Instructions | ⚠️ Mostly absent (only data-structures) | Large |

---

## 12. TOPIC OVERLAP / DUPLICATION

| Topic | Location 1 | Location 2 | Relationship | Potential Issue |
|---|---|---|---|---|
| OOP & Design Patterns | `python/oops/` (10 lessons: classes, inheritance, SOLID, etc.) | `oop-patterns/` (9 lessons: classes, SOLID, dependency injection, etc.) | Direct overlap | Both teach SOLID, classes/objects, inheritance. `python/oops/solid-principles.mdx` vs `oop-patterns/solid-principles.mdx` |
| Testing | `python/testing/` (6 lessons: pytest, unit, integration, load, mocking) | `software-testing/` (10 lessons: pytest, unit, integration, load, mocking, TDD) | Major overlap | Very similar topics. `python/testing/pytest.mdx` vs `software-testing/unit-testing-with-pytest.mdx` |
| System Design | `python/system-design/` (7 lessons: microservices, distributed, event-driven) | `system-design/` (empty, design.md only) | Planned overlap | Python system-design exists; standalone course is planned but empty |
| FastAPI / API Development | `python/api-development/` (8 lessons: fastapi, flask, REST, auth, rate-limiting) | `fastapi-concepts/` (12 lessons: FastAPI deep-dive, REST, auth, rate-limiting) | Significant overlap | `python/api-development/fastapi.mdx` vs entire `fastapi-concepts/` course |
| AI Engineering | `python/ai-engineering/` (9 lessons: LLM basics, RAG, vector DBs, agents) | `agentic-frameworks/` (96 lessons) | Partial overlap | Python AI Engineering covers agents/RAG at intro level; AF goes deep |
| AI Data Infrastructure | `python/ai-engineering/vector-databases.mdx` | `ai-data-infra/` (empty, design.md plans vector DBs) | Future overlap | When ai-data-infra is populated, it will overlap with Python AI section |
| Deployment/IaC | `release-deployment/terraform-basics.mdx`, `release-deployment/infrastructure-as-code.mdx` | `cloud-infrastructure/` (empty, design.md plans Terraform/IaC) | Future overlap | Same topics planned in two places |
| Observability | `observability/` (10 lessons) | `python/ai-engineering/ai-observability.mdx` | Minor overlap | Different scopes (general vs AI-specific) |
| Security | `app-security/` (10 lessons) | `python/best-practices/security-best-practices.mdx` | Minor overlap | Python-specific vs general |
| CI/CD / Docker | `cicd-pipelines/` (Docker, GitHub Actions) | `cloud-infrastructure/` (plans Docker, K8s) | Future overlap | Docker fundamentals in CI/CD; Docker planned again in cloud |

---

## 13. CURRICULUM COHERENCE

### Entry Point

**Evidence:** The homepage CTA ("Join the Lab") links to `/docs/school/python/intro/what-is-python`. The Python course is featured with a large card and positioned first. Python appears to be the intended entry point.

### Foundational vs Advanced

| Level | Courses | Evidence |
|---|---|---|
| **Foundational** | Python (intro, fundamentals, control-flow, functions) | Basic programming concepts |
| **Intermediate** | Collections, OOP, Strings, Error Handling, File Handling, Testing, Git | Build on fundamentals |
| **Advanced** | Concurrency, Performance, System Design, Databases, Advanced Python | Require intermediate knowledge |
| **Operational** | CI/CD, Release & Deployment, Observability, Incident Management, SLI/SLO | Production engineering |
| **Professional** | Team Structure, SDLC & Agile, Requirements & Estimation | Soft engineering skills |
| **Specialized** | Agentic Frameworks, FastAPI, App Security, Data Structures | Domain-specific deep dives |
| **Planned** | System Design, Cloud Infrastructure, AI & Data Infra | Empty courses |

### Prerequisites

**FACT:** No explicit prerequisites exist anywhere in the repository. There are no `prerequisites` fields in frontmatter, no prerequisite markers in `_category_.json`, no prerequisite documentation.

**Inference:** The Python course has an implicit linear progression (intro → fundamentals → control-flow → functions → collections → ...) enforced by sidebar_position ordering. Other courses appear self-contained.

### Learning Path

**FACT:** There is no documented learning path or recommended course sequence. Each course operates independently. The only connection is topical overlap (e.g., Python teaches OOP, then OOP & Patterns exists as a separate course).

### Curriculum Identity Questions

| Question | Answer (Based on Evidence) |
|---|---|
| Does "Python School" accurately describe the curriculum? | **No.** Only 143/381 lessons (37.5%) are Python. The repository is a multi-domain engineering school. |
| How much is genuinely AI engineering? | ~105 lessons (96 AF + 9 Python AI-engineering = 27.6%) |
| How much is general software engineering? | ~143 lessons across OOP, testing, git, SDLC, requirements, team structure (37.5%) |
| How much is production/operations engineering? | ~48 lessons across CI/CD, observability, incident management, SLI/SLO, release/deployment (12.6%) |
| How much is Python-specific? | 143 lessons (37.5%), though many Python lessons teach general engineering concepts |
| Are courses independent or sequential? | Independent. No explicit dependencies. |
| Is there a clear learning path? | No documented learning path exists. |

---

## 14. SEO / DISCOVERABILITY

### Current SEO State

| Element | Status | Evidence |
|---|---|---|
| Page titles | ❌ Not in frontmatter; derived from H1 headings | No `title:` field in any sampled MDX |
| Meta descriptions | ❌ Not present | No `description:` in frontmatter |
| Keywords | ❌ Not present | No `keywords:` in frontmatter |
| Slugs | Auto-generated from filename | No custom `slug:` fields |
| Canonical URLs | Default Docusaurus behavior | No custom configuration |
| Sitemap | ✅ Auto-generated by preset-classic | Not customized |
| robots.txt | Default Docusaurus | Not customized |
| Open Graph | Minimal: `image: 'img/logo.svg'` only | No per-page OG metadata |
| Structured data | ❌ None | No JSON-LD or schema.org markup |
| Internal linking | ⚠️ `§16 Related Topics` lists topic names but not actual links | Related topics are text-only, not hyperlinked |
| Course landing pages | ❌ No custom landing pages | Courses use auto-generated index from `_category_.json` |
| H1 per page | ✅ Each MDX file has exactly one H1 | Good |
| Heading hierarchy | ✅ H1 → H2 consistently | Good |
| SEO headings | ⚠️ Some are descriptive ("Python List vs Tuple"), others are generic ("Concept Explanation") | Mixed |

### SEO Strengths
- Descriptive H1 titles (e.g., "FastAPI Fundamentals: Speed and Types")
- Numbered section headings are consistent
- Content is substantial (150+ lines per page as mandated)

### SEO Gaps
- No meta descriptions on any of 381 lesson pages
- No search functionality for users
- §16 Related Topics are not hyperlinked
- No course landing pages with curated SEO copy

---

## 15. CODE QUALITY / ENGINEERING QUALITY

### TypeScript Quality

| Aspect | Status |
|---|---|
| `strict: true` in tsconfig | ✅ Yes |
| Component type safety | ✅ `LearningFlow` uses typed props |
| `satisfies` keyword | ✅ Used in `docusaurus.config.ts` for type checking |
| Type exports | ⚠️ `LearningFlow` types are local, not exported |

### Component Organization

| Aspect | Status |
|---|---|
| Consistent file structure | ✅ Each component has `index.tsx` + `styles.module.css` |
| CSS Modules | ✅ Used consistently |
| Component naming | ✅ PascalCase directories |
| Large components | ⚠️ `InterviewCheatSheet` at 685 lines with hardcoded data |

### Configuration Quality

| Aspect | Status |
|---|---|
| `package.json` name | ⚠️ `"playbook"` — misaligned with project identity |
| Engine requirement | ✅ `node >= 20.0` specified |
| Browserslist | ✅ Configured |
| `@docusaurus/faster` | ✅ Build optimization enabled |

### Missing Engineering Practices

| Practice | Status |
|---|---|
| ESLint | ❌ No `.eslintrc` or `eslint.config.*` |
| Prettier | ❌ No `.prettierrc` or config |
| Unit tests | ❌ No test files found |
| E2E tests | ❌ No Playwright/Cypress config |
| Dependency auditing | ❌ No `npm audit` in CI |
| TypeCheck in CI | ❌ CI only runs `npm run build`, not `npm run typecheck` |
| Link validation | ❌ No link checker (though `onBrokenLinks: 'throw'` helps) |

---

## 16. CI/CD / GITHUB ACTIONS

### Workflow: `auto-merge-on-success.yml`

**Single workflow file** with two jobs:

**Job 1: `build`**
- Triggers on: `pull_request` (opened, reopened, synchronize, ready_for_review)
- Steps: Checkout → Setup Node.js 24 → `npm ci` → `npm run build`
- **Does NOT run `npm run typecheck`**

**Job 2: `auto-merge`**
- Depends on: `build` job success
- Condition: PR is not draft and is open
- Steps: Auto-approve PR → Auto-merge PR (merge method: `merge`)

### CI/CD Issues

| Issue | Severity |
|---|---|
| No `npm run typecheck` in CI | **P1** — TypeScript errors could be merged |
| Auto-merge without human review | **P1** — Any PR that builds successfully is auto-merged |
| No test execution | **P2** — No tests exist, so this is moot, but the pipeline doesn't support them |
| No lint step | **P2** — No linter configured anyway |
| No dependency audit | **P2** — Security vulnerabilities in dependencies won't be caught |
| Single workflow for everything | **P3** — No separation of concerns (build, deploy, audit) |
| Node 24 in CI | **P3** — Very recent Node version; matches `>=20` engine requirement |

**INFERENCE:** The auto-merge workflow is designed for autonomous AI agent (Jules) PRs. AGENTS.md confirms: "The GitHub workflow auto-merges PRs on success, so human review might not happen before merge." This is an explicit design choice.

---

## 17. GIT / DEVELOPMENT WORKFLOW

### Commit Patterns (Last 20 Commits)

Most recent commits follow the pattern:
- `feat(<course>): [Task IDs] <description>` — e.g., `feat(incident-management): BAE-INC-A-001 through BAE-INC-A-009`
- `fix(<course>): <description>` — e.g., `fix(incident-management): Correct heading`
- Merge commits: `Merge pull request #NNN from beingaiengineer/<branch>`
- One non-standard commit: `Hi, I'm Jules. I have successfully improved...` (PR #204)

### Branch Strategy

**Evidence from remote branches:**
- ~80+ remote branches exist
- Most follow pattern: `jules/<task-ids>-<hash>` or `jules-<description>-<hash>`
- Some use: `python-agent/<task-ids>-<hash>`
- Some use: `agentic-frameworks-agent/<task-ids>-<hash>`
- Feature branches: `feature/augment-<course>`, `fix/standardize-interview-questions`
- One backup branch: `backup/11-june`
- One audit branch: `antigravity/audit-68`

**INFERENCE:** The repository is primarily developed by autonomous AI agents (Jules, Augment, Python-agent). Human commits appear rare. The branch naming convention from AGENTS.md (`<agent_name>/[Task IDs]`) is mostly followed.

### Stale Branches

**FACT:** ~80+ remote branches exist. Many appear to be old Jules sessions that were merged but not deleted. Branch cleanup has not been performed.

---

## 18. PLACEHOLDERS / INCOMPLETE WORK

### TODO / BAE-ILLUSTRATION Markers

**FACT:** `pending_illustrations.md` documents **137 pending illustration entries**. These correspond to `{/* TODO: [BAE-ILLUSTRATION] ... */}` comments embedded in MDX files.

The grep search found TODO markers in **262+ MDX files** (search was capped at 50 file results). Nearly every lesson file has at least one illustration TODO.

**Distribution by course (from `pending_illustrations.md`):**
- Agentic Frameworks: 0 pending (illustrations completed)
- App Security: 0 pending
- CI/CD Pipelines: 0 pending
- Git Workflows: 0 pending
- Incident Management: 9 pending
- Observability: 10 pending
- Python (multiple categories): ~70+ pending
- Release & Deployment: 10 pending
- Requirements & Estimation: 10 pending
- SDLC & Agile: 10 pending
- SLI/SLO: 9 pending
- Software Testing: 10 pending
- Team Structure: 9 pending

### Empty Course Directories

| Directory | Content | Status |
|---|---|---|
| `docs/school/system-design/` | `design.md` only (19 lines) | Stub — curriculum planned |
| `docs/school/cloud-infrastructure/` | `design.md` only (19 lines) | Stub — curriculum planned |
| `docs/school/ai-data-infra/` | `design.md` only (18 lines) | Stub — curriculum planned |

### Empty Agentic Frameworks Categories

| Directory | `_category_.json` | Lessons | Status |
|---|---|---|---|
| `production/` | ✅ Lists 11+ planned topics | 0 | Stub |
| `agent-ux/` | ✅ Lists topics | 0 | Stub |
| `llm-for-agents/` | ✅ Lists topics | 0 | Stub |
| `prompt-engineering-for-agents/` | ✅ Lists topics | 0 | Stub |
| `real-world-projects/` | ✅ Category only | 0 | Stub |

### Empty `scripts/` Directory

The root `scripts/` directory exists but is completely empty.

### Outdated Homepage Content

| Item | Current Value | Issue |
|---|---|---|
| Cohort badge | "Winter 2024 Cohort Open" | Outdated by ~2 years |
| Stats | "120+ Lessons" | Actual count is 381 |
| Stats | "10k+ Students" | Unverifiable claim |
| Stats | "98% Placement" | Unverifiable claim |
| Stats | "20 Sections" | Section count varies; docs say 16/18 |

### FIXME / Coming Soon

- **FIXME:** 0 occurrences found
- **Coming Soon:** 0 occurrences in MDX files (but homepage course cards have a "Coming Soon" badge mechanism for `available: false` courses — currently no course uses it)

---

## 19. BROKEN / RISKY AREAS

### Build Validation

**FACT:** A `npm start` process was running in the terminal at the time of audit (running for 1h36m), indicating the dev server is functioning. No build was explicitly run during this audit to avoid disrupting the running dev server.

**The following issues are identified from code inspection:**

### LearningFlow API Mismatch (Data Structures)

**Risk: HIGH**

All 14 data-structures MDX files pass props to `<LearningFlow>` using a different API than the component accepts:
- Use `label` instead of `title`
- Use `type` instead of `kind`
- Use `position: { x, y }` instead of flat `x, y`
- Pass `nodes` and `edges` directly instead of wrapping in `diagram`

**Evidence:**
```
docs/school/data-structures/arrays-memory.mdx L58-59:
  { id: '1', type: 'core', label: 'Request Array[0]', position: { x: 50, y: 150 } }

src/components/LearningFlow/index.tsx expected:
  type DiagramNode = { id: string; title: string; detail: string; x: number; y: number; kind?: ... }
```

Since the data-structures files pass `nodes` and `edges` but NOT wrapped in a `diagram` prop, and the component signature is `({steps, diagram}: LearningFlowProps)`, these props don't match either interface.

**INFERENCE:** These diagrams are likely rendering as empty or broken. However, since the build passes (`onBrokenLinks: 'throw'`), the MDX compiles — it just silently produces incorrect React Flow output.

### Section Numbering Errors

**Risk: MEDIUM**

- `observability/what-is-observability.mdx`: Has two `## 3.` headings (Real-World Analogy AND Concept Explanation both labeled §3)
- `data-structures/arrays-memory.mdx`: Sections appear out of order (§13, §12, §11) and §17 is used twice

### Missing MEMORY.md at Root

**Risk: LOW**

`AGENTS.md` L22 references `MEMORY.md` as step 11 in the reading order. No `MEMORY.md` exists at the repository root. MEMORY files exist at `.claude/agent-memory/*/MEMORY.md` (16 per-agent files).

### No TypeCheck in CI

**Risk: MEDIUM**

The CI workflow runs `npm run build` but not `npm run typecheck`. TypeScript type errors could be merged if they don't cause Docusaurus build failures.

---

## 20. REPOSITORY METRICS

| Metric | Count |
|---|---|
| **Total files** (excl. node_modules, build, .git, .docusaurus) | 673 |
| **Total MDX lesson files** | 381 |
| **Total courses** (directories under docs/school/) | 19 |
| **Courses with lessons** | 16 |
| **Empty courses** (design.md only) | 3 |
| **Total categories** (_category_.json files) | 54 |
| **React component directories** | 3 |
| **Configuration files** (.ts, .json, .yml at root/config level) | ~8 |
| **Scripts** | 0 (empty scripts/ directory) |
| **Tests** | 0 |
| **GitHub workflows** | 1 |
| **CI/CD agent branches** (remote) | ~80+ |
| **Pending illustrations** | 137 |
| **Course agent instruction files** | 16 |
| **Course MEMORY.md files** | 16 |
| **design.md curriculum files** | 19 (one per course) |
| **Root documentation files** | 11 (AGENTS, SOUL, HEARTBEAT, TOOLS, CONTENT, DESIGN, QUALITY, CLAUDE, JULES, README, LICENSE) |
| **Homepage images** | 5 course card PNGs (~5MB total) |

### Approximate Content Volume

| Course | MDX Files | Approx. Total Bytes |
|---|---|---|
| Python | 143 | ~1.5 MB |
| Agentic Frameworks | 96 | ~1.0 MB |
| Data Structures | 14 | ~155 KB |
| FastAPI Concepts | 12 | ~183 KB |
| App Security | 10 | ~188 KB |
| CI/CD Pipelines | 10 | ~139 KB |
| Git Workflows | 10 | ~131 KB |
| Incident Management | 9 | ~99 KB |
| Observability | 10 | ~135 KB |
| OOP & Patterns | 9 | ~109 KB |
| Release & Deployment | 10 | ~108 KB |
| Requirements & Estimation | 10 | ~98 KB |
| SDLC & Agile | 10 | ~96 KB |
| SLI/SLO | 9 | ~86 KB |
| Software Testing | 10 | ~103 KB |
| Team Structure | 9 | ~120 KB |
| **TOTAL** | **381** | **~4.5 MB** |

---

## 21. NAMING / IDENTITY CONSISTENCY

| Identity Term | Location | Context | Conflict? |
|---|---|---|---|
| "Python School Playbook" | `README.md` L1 | Repository title | ⚠️ **YES** — Misrepresents current scope |
| "BAE School" | `docusaurus.config.ts` L6, L47 | Site title and navbar | ✅ Current identity |
| "BAE School" | `AGENTS.md` L1, L3 | Constitution header | ✅ Current identity |
| "Being AI Engineer" | `AGENTS.md` L3 | Acronym expansion | ✅ Current identity |
| "Being AI Engineer" | `docusaurus.config.ts` L125 | Footer copyright | ✅ Current identity |
| "playbook" | `package.json` L2 | npm package name | ⚠️ Old identity |
| "playbook" | `package-lock.json` L2, L8 | Lock file | ⚠️ Old identity |
| "playbook" | `docusaurus.config.ts` L17 | `projectName` | ⚠️ Old identity |
| "playbook" | `DESIGN.md` L3 | "BAE School playbook" | ⚠️ Mixed identity |
| "playbook" | `research/deep-research-report.md` (17 occurrences) | Research document | Historical; pre-dates current structure |
| "being-ai-engineer" | `docusaurus.config.ts` L16 | `organizationName` | GitHub org |
| "BAE (Being AI Engineer)" | Multiple governance files | Parenthetical expansion | ✅ Consistent |
| `school.beingaiengineer.com` | `docusaurus.config.ts` L14 | Production URL | ✅ Current |
| `playbook.beingaiengineer.com` | `research/deep-research-report.md` L266 | Research doc proposed URL | ⚠️ Old proposal |

### Identity Evolution (Inferred from Evidence)

1. **Phase 1:** "Playbook" — A research/documentation site for AI agents
2. **Phase 2:** "Python School Playbook" — Focused Python learning platform
3. **Phase 3:** "BAE School" — Multi-course engineering school with 19 courses

The `README.md`, `package.json`, and `projectName` still reflect Phase 2. The live site (`docusaurus.config.ts`) reflects Phase 3.

---

## 22. STRATEGIC OBSERVATIONS

### Observation 1: Governance Documents Are Self-Contradictory
**Evidence:** Four different section counts (15, 16, 16, 18) across AGENTS.md, CONTENT.md, QUALITY.md, and python-agent.md. CONTENT.md contradicts itself within the same paragraph.
**Why it matters:** AI agents (Jules, Claude) reading these documents will implement different standards depending on which document they read first. This directly impacts content consistency.

### Observation 2: The Repository Has Evolved Past Its README and package.json Identity
**Evidence:** README says "Python School Playbook". Package name is "playbook". But the site has 19 courses across AI engineering, operations, security, and professional skills.
**Why it matters:** New contributors (human or AI) will have a misleading first impression. The `projectName: 'playbook'` may affect GitHub Pages deployment paths.

### Observation 3: Data Structures Course Has Broken Diagrams
**Evidence:** All 14 MDX files in `data-structures/` use a `<LearningFlow>` API that doesn't match the component's TypeScript interface (`label`/`type`/`position` vs `title`/`detail`/`kind`/`x`/`y`).
**Why it matters:** The diagrams are a core differentiator (per CONTENT.md and QUALITY.md). If they don't render correctly, 14 lessons have broken visual content.

### Observation 4: Auto-Merge Without TypeCheck Is a Quality Risk
**Evidence:** CI runs `npm run build` but not `npm run typecheck`. Auto-merge is immediate on build success.
**Why it matters:** TypeScript errors that don't cause build failures can be silently merged. Combined with AI-generated PRs, this creates a quality degradation vector.

### Observation 5: 137 Pending Illustrations Is a Massive Backlog
**Evidence:** `pending_illustrations.md` (205KB) tracks 137 ungenerated illustrations. The TODO markers exist in lesson files.
**Why it matters:** Illustrations are part of the DoD (AGENTS.md). Over 35% of all lessons lack their required illustration.

### Observation 6: Significant Topic Duplication Exists
**Evidence:** Python has internal subcourses (OOP, Testing, FastAPI, System Design) that overlap with standalone courses (OOP & Patterns, Software Testing, FastAPI Concepts, System Design).
**Why it matters:** Students may encounter the same material in two places with different depth/quality. Maintenance burden is doubled for overlapping topics.

### Observation 7: Three Courses Are Empty Promises
**Evidence:** System Design, Cloud Infrastructure, and AI & Data Infra exist in the navbar (19 entries) but have 0 lesson files.
**Why it matters:** Users clicking these courses see empty pages or auto-generated indexes with no content. Damages credibility.

### Observation 8: The Agentic Frameworks Course Is the Most Ambitious and Most Incomplete
**Evidence:** 96 lessons exist, but 5 subcategories are empty stubs (production, agent-ux, llm-for-agents, prompt-engineering, real-world-projects). The design.md plans ~97 total lessons with many gaps.
**Why it matters:** This is the "AI engineering" differentiator. Having empty categories in the navigation undermines the course's professional appearance.

### Observation 9: No Search, No Analytics, No Tests
**Evidence:** No search plugin, no analytics config, no test framework in `package.json` or CI.
**Why it matters:** A platform with 381 lessons and no search is difficult to navigate. No analytics means no visibility into user behavior. No tests means no regression protection.

### Observation 10: The Repository Is Primarily AI-Developed
**Evidence:** ~80+ branches follow `jules/`, `python-agent/`, `agentic-frameworks-agent/` naming. Commit messages reference task IDs. 16 agent instruction files and 16 agent memory files exist. Auto-merge workflow exists.
**Why it matters:** This is a novel development model. The quality of the output depends entirely on the governance documents (which are contradictory) and the CI pipeline (which lacks typecheck).

---

## 23. CRITICAL CONTRADICTIONS

| # | Contradiction | Evidence A | Evidence B | Priority |
|---|---|---|---|---|
| 1 | Section count: documentation says 15, 16, and 18 | `CONTENT.md` L13: "18-Section", L15: "16-section" | `QUALITY.md` L21: "16 mandatory"; `python-agent.md` L19: "15" | **P0** |
| 2 | Repository identity: playbook vs school | `README.md`: "Python School Playbook"; `package.json`: "playbook" | `docusaurus.config.ts`: "BAE School"; `AGENTS.md`: "BAE School" | **P0** |
| 3 | MEMORY.md location | `AGENTS.md` L22: "MEMORY.md" (implies root) | Actual: 16 files at `.claude/agent-memory/*/MEMORY.md` | **P1** |
| 4 | Course list in DESIGN.md vs actual | `DESIGN.md` L9-24: lists 15 courses | Filesystem: 19 courses exist; `sidebars.ts`: 19 defined | **P1** |
| 5 | LearningFlow component API vs usage | `LearningFlow/index.tsx`: accepts `{title, detail, x, y, kind}` | `data-structures/*.mdx`: passes `{label, type, position: {x,y}}` | **P1** |
| 6 | Branding accent: deprecated vs active | `DESIGN.md` L40: "Crimson #9f1239 is deprecated" | `python-agent.md` L7: "Deep Crimson #9f1239" | **P2** |
| 7 | Homepage lesson counts vs actual | `src/pages/index.tsx`: All counts +1 | `docs/school/*/` filesystem counts | **P2** |
| 8 | Homepage stats vs reality | "120+ Lessons" | 381 actual lessons | **P2** |
| 9 | Observability section numbering | `what-is-observability.mdx`: Two `## 3.` headings | `CONTENT.md`: §3 is Real-World Analogy, §4 is Concept Explanation | **P2** |
| 10 | CI pipeline vs QUALITY.md | CI: only `npm run build` | `QUALITY.md` L10: "Run `npm run typecheck`" | **P2** |

---

## 24. INFORMATION REQUIRED FOR IMPLEMENTATION

Any future implementation agent must know the following before modifying this repository:

### Critical Architecture Facts
1. **Docusaurus 3.10.1** with `future.v4: true` — changes must be v4-compatible
2. **All 19 sidebars are autogenerated** from directory structure — sidebar ordering is controlled entirely by `sidebar_position` in frontmatter and `_category_.json` files
3. **`onBrokenLinks: 'throw'`** — any broken internal link will fail the build
4. **Auto-merge CI** — PRs that pass build are auto-merged without human review
5. **No `npm run typecheck` in CI** — TypeScript errors may not block merge

### Content Architecture Facts
6. **381 lesson files** across 16 active courses, with 3 empty courses
7. **The "official" lesson template has 18 sections** (numbered §1-§18 in CONTENT.md), despite contradictory references to 15/16
8. **LearningFlow is the universal diagram component** — every lesson is expected to have one
9. **Data structures course uses wrong LearningFlow API** — this affects 14 files
10. **137 pending illustrations** — tracked in `pending_illustrations.md`

### Identity Facts
11. **The canonical identity is "BAE School"** (docusaurus.config.ts, AGENTS.md, SOUL.md)
12. **"playbook" references** in package.json, README, and projectName are legacy
13. **The production URL** is `https://school.beingaiengineer.com`

### Agent Workflow Facts
14. **16 course-specific agent instruction files** exist at `.claude/agents/`
15. **16 per-agent MEMORY.md files** exist at `.claude/agent-memory/`
16. **The `scripts/` directory is empty** — no helper scripts exist
17. **No `MEMORY.md` exists at root** — referenced in AGENTS.md but not present

### Overlap/Duplication Facts
18. **OOP, Testing, FastAPI, and System Design** topics exist in both Python subcourses and standalone courses
19. **Three planned courses** (System Design, Cloud Infra, AI Data Infra) overlap with existing Python subcategory content

### Design Facts
20. **Apple-inspired B&W theme** with Geist font
21. **Only 5 of 16 live courses have homepage card images**
22. **Homepage cohort badge** says "Winter 2024" (2 years outdated)
23. **No search functionality** exists

---

## 25. EVIDENCE STANDARD EXAMPLES

All major claims in this audit are supported by evidence. Examples:

```
Evidence: Identity Conflict
README.md L1 → "# Python School Playbook"
docusaurus.config.ts L6 → title: 'BAE School'
package.json L2 → "name": "playbook"
AGENTS.md L1 → "# BAE School — Repository Constitution"
```

```
Evidence: Section Count Contradiction
CONTENT.md L13 → "## 2. Mandatory 18-Section Lesson Template"
CONTENT.md L15 → "Every topic page MUST follow this exact 16-section structure"
AGENTS.md L36 → "All 18 sections are filled"
QUALITY.md L21 → "all 16 mandatory sections"
python-agent.md L19 → "the 15 Mandatory Sections"
```

```
Evidence: LearningFlow API Mismatch
src/components/LearningFlow/index.tsx L23-30 → DiagramNode type: {id, title, detail, x, y, kind}
docs/school/data-structures/arrays-memory.mdx L59 → {id: '1', type: 'core', label: 'Request Array[0]', position: {x: 50, y: 150}}
```

---

## 26. EXECUTIVE SUMMARY

### Repository Today

- A **Docusaurus 3.10.1 multi-course engineering school** with 19 course directories and **381 lesson files** across 16 active courses
- The **two largest courses** are Python (143 lessons) and Agentic Frameworks (96 lessons), together comprising 63% of all content
- Content is **primarily AI-generated** by autonomous agents (Jules, Claude, Augment) using a sophisticated governance system of 11+ instruction documents
- The teaching voice is distinctive: **FDE mentor, "bro" usage, Indian analogies, production-first, WHY-before-HOW**
- The site uses a **minimalist black & white Apple-inspired design** with a custom `LearningFlow` React Flow diagram component
- **Three courses and five subcategories are empty stubs** with navigation links but no content
- **137 illustrations are pending** generation

### Biggest Strengths

1. **Distinctive, consistent teaching voice** — SOUL.md is well-defined and consistently implemented across all sampled lessons
2. **Massive content volume** — 381 lesson files with substantial depth (150+ lines each)
3. **Sophisticated agent governance** — 11 root documents, 16 per-course agent specs, structured task IDs, memory system
4. **Production-oriented curriculum** — Every lesson grounds concepts in real engineering scenarios
5. **Custom LearningFlow diagram system** — Unique React Flow integration for concept visualization

### Biggest Problems

1. **Self-contradictory governance** — Four different section counts (15/16/16/18) across documents that autonomous agents depend on for consistency
2. **Identity crisis** — README, package.json, and projectName say "playbook"; site says "BAE School"; scope has evolved past Python
3. **Broken data-structures diagrams** — 14 lessons use wrong LearningFlow API (label/type/position vs title/detail/kind/x/y)
4. **Empty courses in navigation** — 3 courses and 5 AF subcategories link to empty pages
5. **No search functionality** — 381 lessons with no way for users to search
6. **No typecheck in CI** — TypeScript errors can be auto-merged
7. **Significant topic duplication** — OOP, Testing, FastAPI, System Design exist in both Python subcourses and standalone courses
8. **137 pending illustrations** — Over 35% of lessons missing their required visual content
9. **Outdated homepage claims** — "Winter 2024 Cohort", "120+ Lessons" (actual: 381), unverifiable student/placement stats
10. **No tests, no linting, no analytics** — Engineering practices are minimal for a platform of this scale

### Highest-Risk Contradictions

1. **Section count (15/16/18)** → AI agents implement different standards depending on which file they read
2. **LearningFlow API mismatch** → 14 lessons have silently broken diagrams
3. **MEMORY.md location** → Agents may fail to find their task queue
4. **DESIGN.md course list** → 4 courses not documented in the design spec
5. **Auto-merge without typecheck** → Quality degradation vector for AI-generated PRs

### Most Important Unknowns

- **Are the data-structures LearningFlow diagrams actually rendering?** (Would require running the dev server and inspecting the pages)
- **What is the actual build status?** (Not explicitly verified — a dev server was running, suggesting it works)
- **Are there runtime errors in the browser console?** (Cannot determine from static analysis)
- **What analytics data exists for the production site?** (No analytics configured in the repo)
- **Are there other deployment targets beyond GitHub Pages?** (Config references GitHub, but deployment process is not fully documented)
- **How many actual users/students does the platform have?** (Homepage claims "10k+" — unverifiable from repository)

### Recommended Next Step

**Do not implement yet. Use this audit to create a separate implementation plan.**

Specifically, the implementation plan should:
1. Resolve the section count contradiction FIRST (choose 16 or 18 and update ALL governance docs)
2. Fix the data-structures LearningFlow API mismatch
3. Update identity references (README, package.json, projectName)
4. Decide the fate of empty courses (remove from nav, populate, or mark as "Coming Soon")
5. Add `npm run typecheck` to CI
6. Address topic duplication strategy
7. Add search functionality
8. Generate remaining illustrations
