# BAE School Content Standards (CONTENT.md)

This is the canonical source for all educational content standards in BAE School. Every lesson in every course MUST derive its structure from this file.

## 1. Research-First Policy & Topic Coverage Philosophy

- **Deep, opinionated research** is required for every topic.
- Consider: community sentiment (Reddit, HackerNews), GitHub metrics, production adoption, documentation quality, and ecosystem fit.
- **Leave no concept uncovered.** Each topic page must be exhaustive: cover every sub-concept, variant, and edge case.
- Show what happens when things go wrong, not just when they work.
- Include both the "happy path" and failure modes.

## 2. Mandatory 18-Section Lesson Template

Every topic page MUST follow this exact 18-section structure, answering these questions in order: 
1) Why should I care? 2) What production problem exists? 3) Engineering Story 4) Indian Analogy 5) How does it work? 6) Why is it designed this way? 7) How is it implemented? 8) How is it used in production? 9) What mistakes do engineers make? 10) What do interviewers ask?

### 1. Quick Summary
Standard summary table at the top:
| Area | Details |
|---|---|
| Topic | Core concept name |
| Difficulty | Beginner / Intermediate / Advanced |
| Used For | Description of practical use cases |
| Common Mistake | Typical developer gotcha / trap |
| Performance | Time/Space complexity summary |

### 2. Engineering Story
A short, 100–200 word story before the analogy.
- **Purpose**: Explain why the concept exists, introduce a realistic engineering problem, build curiosity, and connect theory to production. It must transition smoothly into the analogy.
- **Rules**: Must be technically plausible, production-focused, vendor-neutral, concise, memorable, and educational. Avoid fantasy, motivational speeches, religious parables, or superhero narratives.
- **Themes**: Production outages, performance bottlenecks, deployment failures, security incidents, banking systems, e-commerce scale, debugging sessions, team collaboration failures, etc.

### 3. Real-World Analogy
Explain the concept using a practical, relatable analogy. Open this section with a relatable scenario that maps components of the technical concept to real-world equivalents using a table. (See `SOUL.md` for analogy rules). The story builds curiosity; the analogy builds intuition.

### 4. Concept Explanation
Explain what it is, why it exists, when to use it, and when NOT to use it. Keep explanations clear, concise, and focused.

### 5. Syntax Table
Provide key syntax options and usage patterns in a clean table format.

### 6. Beginner Example
A minimal, clear code snippet showing basic usage. Keep it direct and easy to read.

### 7. Real-World Engineering Example
Show production-style code representing actual system scenarios (such as retry queues, task scheduling, API batching, log processing, or connection management).

### 8. Internal Working
Explain how the runtime, engine, compile process, or VM handles this concept under the hood. 
*Crucial*: Must be accompanied by a custom, unique React Flow diagram using the `<LearningFlow>` component.

### 9. Performance Table
List time/space complexity of common operations, lookup behaviors, or resource consumption.

### 10. Top Interview Questions
Provide at least 5 interview Q&As in a table. Include beginner, intermediate, and advanced/tricky questions. Focus on practical scenarios rather than rote memorization.

### 11. Tricky Questions & Edge Cases
Include tricky conceptual questions, compiler/runtime quirks, and code snippets that produce unexpected outputs.

### 12. Real-World Usage
Describe where and why top-tier tech companies apply this concept in their production stacks.

### 13. Best Practices
Use structured DO and DON'T tables.

### 14. Production Notes
Include a warning box or callout block explaining high-scale operational considerations (e.g., memory leaks, threading issues, serialization speed).

### 15. Common Mistakes
A table of common developer traps, bad habits, and their exact corrected code blocks.

### 16. Related Topics
List relevant internal linking topics.

### 17. Top GitHub Repositories (Optional but Highly Recommended)
Provide a table of 5–10 top-starred GitHub repos related to the topic.
| Repository | Stars | Description | Why It Matters |
|---|---|---|---|
| [owner/repo](https://github.com/owner/repo) | ⭐ 45k+ | Short description | How it relates |

### 18. AI Agent Instructions

*This section provides machine-readable directives for AI coding agents (Jules, Claude, Cursor, etc.) that read this topic as context for code generation or repository tasks.*

Every topic page MUST end with a table of agent-facing rules specific to the concept being taught. These rules tell an AI agent HOW to apply the concept correctly when generating code, debugging, or refactoring in a production codebase.

| Column | Purpose |
|---|---|
| **Directive** | A short label for the rule (e.g., "Code Generation", "Error Handling", "Testing"). |
| **Instruction** | The precise, imperative rule the agent must follow when working with this concept. |
| **Rationale** | Why this rule exists — the production failure or FDE constraint it prevents. |

**Example (for a Hash Maps / Dictionaries topic):**

| Directive | Instruction | Rationale |
|---|---|---|
| Key Selection | Always use immutable, deterministic keys (`str`, `int`, `tuple`). Never use mutable objects as dict keys. | Mutable keys cause silent hash corruption and are undetectable in client debugging sessions. |
| Default Values | Use `dict.get(key, default)` instead of raw `dict[key]` access in all generated code. | Client data is messy. Missing keys cause `KeyError` crashes in production integrations. |
| Serialization | When serializing dicts to JSON for client APIs, always use `json.dumps(data, default=str)` to handle non-serializable values gracefully. | FDE deployments frequently encounter unexpected data types from legacy client systems. |
| Cache Invalidation | When using dicts as caches, always implement a TTL or LRU eviction strategy. Never use unbounded dicts as caches. | Unbounded caches cause OOM kills on constrained client infrastructure. |

## 3. Diagram Rules (LearningFlow API)

Every concept page **MUST** include a unique, clean React Flow diagram using the `<LearningFlow>` component.

- **Purpose**: Visualize concepts using real-world engineering flows or system architecture.
- **Node Kinds**:
  - `core`: Primary object or runtime component.
  - `process`: Actions, compilations, or transformations.
  - `data`: Files, arrays, or configurations.
  - `tool`: External software, helper scripts, or commands.
  - `warning`: Error paths, traps, or conflict areas.
  - `output`: Final result objects, terminal output, or logs.
- **Edge Types & Animation**: Use suitable types (`smoothstep`, `step`, `straight`). Set `animated: true` when tracing active execution paths.
- **Edge Labels**: Use meaningful, descriptive edge labels (e.g., "binds", "imports", "compiles to").
- **Layouts**: Avoid generic linear layouts unless the process is strictly linear.

## 4. Frontmatter Rules

Every MDX file must have valid Docusaurus frontmatter:
```md
---
sidebar_position: 1
sidebar_label: "Topic Title"
---
```
Ensure `sidebar_position` is correct relative to the course's `design.md`.

## 5. SEO & Code Snippet Rules

- **SEO Headings**: Headings must be descriptive, searchable, and beginner-friendly (e.g., "Python List vs Tuple" instead of "Understanding Collection Behaviors").
- **Code Standards**: Snippets must be minimal, clean, formatted, executable, and reflect production standards (e.g., using guard clauses, proper logs, and avoiding fake complex patterns).
