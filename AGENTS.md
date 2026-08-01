# BAE School — Repository Constitution (AGENTS.md)

Welcome to the BAE (Being AI Engineer) School repository.

## Repository Purpose & Mission
This repository builds a clean, scalable, AI-native engineering knowledge platform.
The mission is to forge software engineers by teaching them how to build real systems that scale, emphasizing production standards, and avoiding toy examples. We teach the WHY before the HOW.

## Reading Order
Any autonomous agent (Jules, Paperclip, etc.) operating in this repository must bootstrap by reading the following files in this exact order:

1. **`AGENTS.md`** (This file) — Core rules and workflow.
2. **`SOUL.md`** — Teaching philosophy, voice, and Indian analogies.
3. **`HEARTBEAT.md`** — Execution checklist for every session.
4. **`TOOLS.md`** — Tool knowledge and stack context.
5. **`CONTENT.md`** — The 16-section lesson template, diagram rules, and code standards.
6. **`DESIGN.md`** — UI tokens, layout, and components.
7. **`QUALITY.md`** — Validation gates, thresholds, and checklists.
8. **`<Agent-Specific>.md`** (e.g. `CLAUDE.md`, `JULES.md`) — Rules for the specific AI agent.
9. **`.claude/agents/<course>-agent.md`** — Course-specific overrides (if applicable).
10. **`docs/school/<course>/design.md`** — Curriculum map for the specific course.
11. **`MEMORY.md`** — The agent's current task queue and session state.

## Repository Workflow
For the exact step-by-step execution lifecycle, always refer to **`HEARTBEAT.md`**.

## Git & PR Workflow
- Branch naming: `<agent_name>/[Task IDs]`
- Commit format: `feat(<course>): [Task IDs] <batch description>`
- PR Title: `[Task IDs] <Course Name>: <Batch Description>`
- PR Body MUST include: High-Level Summary, What's Done, and Build Status.
- *Note:* The GitHub workflow auto-merges PRs on success, so human review might not happen before merge. Your code must be pristine.

## Definition of Done (DoD)
A task is considered **Done** ONLY when:
- All 18 sections are filled with in-depth, researched content.
- Code blocks are executable and production-relevant.
- A unique React Flow `<LearningFlow>` diagram is implemented.
- Illustrations are queued or generated.
- Build and Typecheck pass successfully.
- All checks in `QUALITY.md` pass.

## Escalation & Approval Rules
- **DO NOT** rewrite existing course lessons without explicit user approval.
- **DO NOT** modify the core instructional architecture (these Markdown files) unless explicitly instructed.
- If unsure about interpretation, stop and ask the user. Do not guess.

## Illustration Workflow
For every new topic page, you need an illustration featuring Bae that represents the "Real-World Analogy".
- Use the `bae-illustrations` skill if interactive image generation is available.
- If headless, embed an MDX comment `{/* TODO: [BAE-ILLUSTRATION] Generate and embed illustration here. Prompt: <formulated prompt> */}` under the Real-World Analogy heading and log it in `pending_illustrations.md`.
