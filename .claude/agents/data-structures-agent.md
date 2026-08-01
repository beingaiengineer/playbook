# Data Structures Teacher Agent Instructions

This document defines the custom, Data Structures-specific instructions for the educator agent writing Applied Data Structures content for BAE School. These rules supplement the global guidelines in [CONTENT.md](../../CONTENT.md) and the core teaching tone rules in [SOUL.md](../../SOUL.md).

## Course Context
- **Course Folder**: `docs/school/data-structures/`
- **Branding Accent**: Emerald Green (`#059669` in dark mode, `--course-data-structures`)
- **Analogies**: Use Indian-focused analogies naturally (e.g., Mumbai local train queues, Aadhaar lookup systems, IRCTC booking hashes, post office sorting, dabbawala routing graphs).

---

## Course Outline (14 Lessons)
Refer to the dedicated Data Structures design spec at [design.md](../../docs/school/data-structures/design.md) for the exact folder tree, lesson list, and sidebar positions.

---

## Course Specific Content Requirements

When writing the **18 Mandatory Sections** defined in the global [CONTENT.md](../../CONTENT.md), apply these Data Structures-specific guidelines:

### 1. Forward Deployed Engineer (FDE) Focus
- Every topic MUST be framed through an FDE deployment scenario. Do not write generic DSA textbook content.
- Engineering Stories must involve a real client integration problem that this data structure solves.
- Examples: caching slow client APIs (hash maps), protecting fragile client DBs (bloom filters), navigating client org hierarchies (trees), verifying data integrity in air-gapped deployments (merkle trees).

### 2. Indian Analogies
- *Hash Maps*: Aadhaar card number → citizen record instant lookup vs searching through every file in a government office.
- *B-Trees*: IRCTC reservation system indexes — how the system finds your PNR among millions in milliseconds.
- *Bloom Filters*: The bouncer at a Mumbai nightclub with a guest list scanner — instantly blocking duplicate entries.
- *Graphs*: Mumbai local train route map — finding shortest path between stations with transfers.
- *Priority Queues*: Hospital emergency triage — critical patients (high priority) get served before walk-ins regardless of arrival order.

### 3. Internal Workings & React Flow diagrams (`LearningFlow`)
Every page's internal workings must explain:
- **Memory Layout**: How the data structure is physically stored in memory (contiguous vs pointer-based, cache-line implications).
- **Algorithmic Complexity**: Big-O for all operations with real benchmarks where possible.
- **Language Implementation**: How Python/CPython implements this structure internally (e.g., `dict` uses open addressing, `list` uses dynamic arrays).

### 4. AI Agent Instructions (Section 18)
Every topic MUST include a Section 18 table with at least 4 agent-facing directives specific to the data structure. These directives must be actionable rules an AI coding agent can follow when generating production code using that data structure.

### 5. Time Complexity
Ensure all Performance Tables compare:
- Average case vs worst case
- Memory overhead
- Real-world benchmarks (e.g., "10M key dict lookup: ~50ns" where applicable)


---

## FDE + Section 18 Retrofit Instructions

When processing **BAE-FDE-*** tasks, follow these rules strictly:

### What to ADD:
1. **FDE Engineering Story Enhancement**: If Section 2 (Engineering Story) exists, enhance it with an FDE deployment scenario. If it doesn't exist, add it after Section 1. The story must involve a realistic client integration challenge specific to the topic (e.g., legacy API constraints, compliance requirements, hostile production environments).
2. **Section 18 (AI Agent Instructions)**: Append at the very end of the MDX file, before any closing tags. Must contain a table with at least 4 rows following this format:

`markdown
## 18. AI Agent Instructions

*This section provides machine-readable directives for AI coding agents operating in production codebases.*

| Directive | Instruction | Rationale |
|---|---|---|
| [Label] | [Imperative rule for the agent] | [The FDE/production failure this prevents] |
`

### What NOT to do:
- **DO NOT** delete or rewrite any existing content.
- **DO NOT** change section numbering of existing sections.
- **DO NOT** modify code examples, analogies, or interview questions.
- These are **additive-only** changes.
