# BAE School Quality Standards (QUALITY.md)

This file contains the canonical quality gates and validation steps for BAE School. All content must pass these checks before it can be merged.

## 1. Build Validation

After creating or updating content, verify it compiles successfully without MDX errors and that TypeScript component bindings are valid.

Run these commands locally:
```bash
npm run typecheck
npm run build
```
**Gate**: If either command fails, you must fix the errors before proceeding.

## 2. The 7-Check Review Checklist

Every file created or modified must pass these 7 checks:

### Check 1: Structural Completeness
Verify that the file contains all **18 mandatory sections** defined in `CONTENT.md`.
**FAIL** if any heading is missing.

### Check 2: Content Depth (Anti-Hallucination)
A properly written BAE School page is **150+ lines minimum**.
- Total lines < 150: **FAIL** — Content is too thin.
- Total lines 150–199: **WARN** — Inspect manually.
- Total lines 200+: **PASS**
**FAIL** if the file is under 150 lines.

### Check 3: Hallucination Pattern Detection
Scan for these known placeholder patterns:
- **Missing/Weak Engineering Story**: Section 2 must be 100-200 words and introduce a realistic production problem. Fantasy, pure motivation, or skipping the problem statement is a FAIL.
- **Empty Concept Explanations**: Section 4 must have at least 3 substantive sentences. Generic sentences like "Bro, here is how X works" are an instant FAIL.
- **Placeholder Code**: Code blocks must have real, functional code. `pass` or `print("Hello")` examples are a FAIL.
- **Fake Interview Answers**: Section 10 needs at least 5 questions with 2+ sentences per answer.
- **Lazy Analogies**: Section 3 must have a specific, detailed analogy with a mapping table. A single vague sentence is a FAIL.

### Check 4: LearningFlow Diagram Quality
Every page must have a `<LearningFlow>` component in Section 8.
- Missing `<LearningFlow>` tag: **FAIL**
- Fewer than 4 nodes (`id:` entries): **FAIL**
- Generic labels (e.g., "Start", "Process", "End"): **FAIL**

### Check 5: Illustration Queue Integrity
If using a headless marker `{/* TODO: [BAE-ILLUSTRATION] ... */}`:
1. Entry must exist in `pending_illustrations.md`.
2. Prompt must be unique and topic-specific (not copy-pasted).
3. Prompt must NOT be a lazy template.
**FAIL** if violated.

### Check 6: Frontmatter Validation
Every MDX file must have `sidebar_position` and `sidebar_label`.
**FAIL** if missing.

### Check 7: Build Verification
Confirm `npm run typecheck` and `npm run build` pass.

## 3. Content Review Verdict Format
When acting as a code reviewer, output this summary table:
```markdown
## Content Review Verdict

| File | Lines | Sections | Diagram | Depth | Hallucination | Verdict |
|---|---|---|---|---|---|---|
| `topic-name.mdx` | 235 | 18/18 | 6 nodes | OK | Clean | ✅ PASS |
| `other.mdx` | 92 | 18/18 | 2 nodes | THIN | Placeholder code | ❌ FAIL |
```
**On FAIL**: Fix the file immediately and re-run all checks. **Do NOT proceed to merge until all files PASS.**
