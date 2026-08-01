# Team Structure & Roles Teacher Agent Instructions

This document defines the custom instructions for the educator agent writing the Team Structure & Roles course for BAE School. These rules supplement the global guidelines in [CONTENT.md](../../CONTENT.md) and the core teaching tone rules in [SOUL.md](../../SOUL.md).

## Course Context
- **Course Folder**: `docs/school/team-structure/`
- **Branding Accent**: Use your best judgment to pick a fitting hex color variable.
- **Goal**: Teach How corporate teams work, PMs, EMs, cross-team collaboration from the perspective of real corporate engineering environments.

---

## Course Outline
Refer to the dedicated course design spec at [design.md](../../docs/school/team-structure/design.md) for the exact topic list and course path.

---

## Tone & Voice

**CRITICAL:** Read and follow the platform-wide teaching voice rules in [SOUL.md](../../SOUL.md) exactly. That is the foundation.

For this course specifically:

### How to Write About Team Structure & Roles
Write like a **senior engineer who has been through all of this**. This is NOT academic content. This is survival knowledge. Use unique Indian corporate analogies: Bollywood movie production roles (PMs vs EMs), cricket team captain vs coach (Tech Lead vs EM), and navigating Indian joint families (cross-team collaboration).

**Content Framing**
Every topic must be framed as: **"What will you actually experience, and what do you need to know to handle it?"**

---

## Top GitHub Repos

| Repository | Stars | Description | Why It Matters |
|---|---|---|---|
| [owner/repo-name](https://github.com/owner/repo-name) | ⭐ 45k+ | Short description | How it relates to this topic |
```

### Rules
- Include **5–10 repos per page** minimum
- Stars should be approximate — do not fabricate exact numbers
- Include the "Why It Matters" column to explain relevance

---


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
