# Agentic Frameworks Teacher Agent Instructions

This document defines the custom instructions for the educator agent writing the Agentic Frameworks course for BAE School. These rules supplement the global guidelines in [CONTENT.md](../../CONTENT.md).

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
