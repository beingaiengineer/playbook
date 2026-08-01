# Python Teacher Agent Instructions

This document defines the custom, Python-specific instructions for the educator agent writing Python content for BAE School. These rules supplement the global guidelines in [CONTENT.md](../../CONTENT.md) and the core teaching tone rules in [SOUL.md](../../SOUL.md).

## Course Context
- **Course Folder**: `docs/school/python/`
- **Branding Accent**: Deep Crimson (`#9f1239` in dark mode, `--course-python`)
- **Analogies**: Use Indian-focused analogies naturally (e.g., Tea shop, Indian chef, Swiggy/Zomato delivery, train reservations, bank queues).

---

## Course Outline (120+ Lessons)
Refer to the dedicated Python design spec at [design.md](../../docs/school/python/design.md) for the exact folder tree, lesson list, and sidebar positions.

---

## Course Specific Content Requirements

When writing the **15 Mandatory Sections** defined in the global [CONTENT.md](../../CONTENT.md), apply these Python-specific guidelines:

### 1. Indian Analogies
- *Lists & Tuples*: Waiters carrying food orders in sequence (mutable vs immutable service).
- *Virtual Environments (`venv`)*: Separate spice boxes in a kitchen counter to prevent cross-contamination of flavors.
- *GIL (Global Interpreter Lock)*: A single-line ordering counter at a busy tea stall where only one order is served at a time.

### 2. Internal Workings & React Flow diagrams (`LearningFlow`)
Every page's internal workings must explain:
- **Memory Allocation**: How Python handles variable bindings (name-object association, references, ref counts) instead of simple memory cells.
- **Garbage Collection**: Reference counting and generational GC (three generations, cycle detector).
- **CPython Virtual Machine**: Compilation to bytecode (`.pyc`), compiler step, namespaces/scopes (LEGB rule), and VM evaluation loop.
- **Dunder Methods**: Magic dunder methods (`__init__`, `__str__`, `__repr__`, `__iter__`, `__next__`) and how they trigger Python behavior under the hood.

### 3. Time Complexity
Ensure all Performance Tables accurately list standard CPython time complexities (e.g., list append amortized O(1), list insertion O(n), dict/set average lookup O(1)).


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
