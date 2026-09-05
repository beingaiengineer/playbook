# BAE Quality Agent Memory

> **CRITICAL RULE:** This memory is contextual. It is NOT the source of truth.
> `Current executable repository state > Current governance > Current tests > Agent memory`
> If this memory contradicts `QUALITY.md`, `AGENTS.md`, or the Vitest test suite, the repository and tests take precedence.

## 1. Repository Identity
- **Name:** BAE School (Being AI Engineer)
- **Banned Terms:** "Python School Playbook"
- **Banned Tokens:** Legacy crimson colors (`#9f1239`)

## 2. Curriculum Architecture
- **Total Lessons:** 381 strictly enforced lessons.
- **Lesson Structure:** Canonical 18-section standard (`## 1. Quick Summary` through `## 18. AI Agent Instructions`).
- **Legacy Exceptions:** Do NOT automatically rewrite historical lessons simply to resolve missing sections, unless a lesson is explicitly migrated to the 18-section standard. Focus on blocking hard structural corruption (e.g., duplicated numbers, impossible orderings) vs purely informational gaps.

## 3. Component Contracts
- **LearningFlow (`<LearningFlow />`):** 
  - Canonical diagram property must be passed: `diagram={{ nodes: [], edges: [] }}`.
  - Node properties MUST NOT use `type:`, `label:`, or `position:`. They MUST use `kind:`, `title:`, `detail:`, `x:`, and `y:`.
  - Data Structures courses rely heavily on this.

## 4. Testing & Validation (Phase 1B Safety Net)
- **Framework:** Vitest (Node-based invariant tests, highly performant).
- **Execution:** `npm test` checks all invariants dynamically.
- **Type Safety:** `npm run typecheck`
- **Build Validation:** `npm run build`
- **CI Contract:** The `Quality` workflow in `.github/workflows/quality.yml` is the final enforcer. `auto-merge-on-success` depends on it. 

## 5. Architectural Decisions & Exceptions
- **E2E Testing:** Playwright browser testing is intentionally deferred. Do not recommend adding it.
- **Visual Regression:** Intentionally deferred.
- **Test Optimization:** Do not optimize or minimize Vitest files for "cleanliness." They exist as hard structural guardrails.
- **Auto-Fixing PRs:** In Phase 1C, the Quality Agent is strictly an intelligent reviewer (Observe → Reason → Report). It DOES NOT autonomously fix code or merge PRs.
