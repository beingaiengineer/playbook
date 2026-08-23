# Project Execution State — App Security Course

## Project Goal

Create a real-world, journey-based course covering **OWASP, IAM, secrets management, security in CI/CD, data protection**. This course simulates a new graduate's or fresher's experience in a real corporate environment.

---

## Course Design & Outline

Below are the topics that make up this course. This list serves as the structural design spec.

**Course Path:** `docs/school/app-security/`

### Topics
- security-mindset.mdx
- threat-modeling.mdx
- owasp-top-10.mdx
- authentication-deep-dive.mdx
- authorization-rbac-abac.mdx
- secrets-management.mdx
- api-security.mdx
- dependency-security.mdx
- security-in-cicd.mdx
- data-protection.mdx

---

## Course Status

- **Status**: Completed
- **Progress**: 10 / 10
- **Next Milestone**: Version 2 improvements

---

## Health

🟢 Healthy
- 100% complete
- Ready for maintenance

---

## Current Focus

Course complete.
Improvements completed.

---

## Execution Board

### TODO
- [x] [BAE-FDE-097] | Retrofit FDE + Section 18: `api-security.mdx`
- [x] [BAE-FDE-098] | Retrofit FDE + Section 18: `authentication-deep-dive.mdx`
- [x] [BAE-FDE-099] | Retrofit FDE + Section 18: `authorization-rbac-abac.mdx`
- [x] [BAE-FDE-100] | Retrofit FDE + Section 18: `data-protection.mdx`
- [x] [BAE-FDE-101] | Retrofit FDE + Section 18: `dependency-security.mdx`
- [x] [BAE-FDE-102] | Retrofit FDE + Section 18: `owasp-top-10.mdx`
- [x] [BAE-FDE-103] | Retrofit FDE + Section 18: `secrets-management.mdx`
- [x] [BAE-FDE-104] | Retrofit FDE + Section 18: `security-in-cicd.mdx`
- [x] [BAE-FDE-105] | Retrofit FDE + Section 18: `security-mindset.mdx`
- [x] [BAE-FDE-106] | Retrofit FDE + Section 18: `threat-modeling.mdx`

### IN PROGRESS
_Empty_

### REVIEW
_Empty_

### DONE
- [x] [BAE-APP-001] | Create `security-mindset.mdx`
- [x] [BAE-APP-002] | Create `threat-modeling.mdx`
- [x] [BAE-APP-003] | Create `owasp-top-10.mdx`
- [x] [BAE-APP-004] | Create `authentication-deep-dive.mdx`
- [x] [BAE-APP-005] | Create `authorization-rbac-abac.mdx`
- [x] [BAE-APP-006] | Create `secrets-management.mdx`
- [x] [BAE-APP-007] | Create `api-security.mdx`
- [x] [BAE-APP-008] | Create `dependency-security.mdx`
- [x] [BAE-APP-009] | Create `security-in-cicd.mdx`
- [x] [BAE-APP-010] | Create `data-protection.mdx`
- [x] [BAE-FDE-097] | Retrofit FDE + Section 18: `api-security.mdx`
- [x] [BAE-FDE-098] | Retrofit FDE + Section 18: `authentication-deep-dive.mdx`
- [x] [BAE-FDE-099] | Retrofit FDE + Section 18: `authorization-rbac-abac.mdx`
- [x] [BAE-FDE-100] | Retrofit FDE + Section 18: `data-protection.mdx`
- [x] [BAE-FDE-101] | Retrofit FDE + Section 18: `dependency-security.mdx`
- [x] [BAE-FDE-102] | Retrofit FDE + Section 18: `owasp-top-10.mdx`
- [x] [BAE-FDE-103] | Retrofit FDE + Section 18: `secrets-management.mdx`
- [x] [BAE-FDE-104] | Retrofit FDE + Section 18: `security-in-cicd.mdx`
- [x] [BAE-FDE-105] | Retrofit FDE + Section 18: `security-mindset.mdx`
- [x] [BAE-FDE-106] | Retrofit FDE + Section 18: `threat-modeling.mdx`

---

## Dependencies

No active dependencies.

---

## Blockers

No active blockers.

---

## Lessons Learned

Fixed broken Docusaurus build links pointing to non-existent markdown files outside the current plugin path by removing invalid links.

---

## Metrics

- Lessons Completed: 10
- Lessons Remaining: 0
- Completion %: 100.0%
- Open Tasks: 10

---

## Backlog
_Empty_

---

## Execution Review

| BAE ID | What's Done (High Level) |
|---|---|
| `[BAE-APP-1]` | Created app-security batch topics (mindset through data protection) |
| `BAE-FDE-097 through BAE-FDE-106` | Retrofitted FDE Scenario into Section 2 and added Section 18 Agent Instructions for all 10 topics in the App Security course. |

---

## Next Improvements

- [ ] Add diagrams
- [ ] Improve engineering story
- [x] Expand interview questions
- [ ] Improve SEO
- [x] Better analogy
- [ ] Add benchmarks

---

## Automation State
- End-of-day reviewer validated course structure and resolved MDX/formatting inconsistencies across recently added modules.

End-of-day autonomous review complete:
- Fixed duplicate interview questions in `security-mindset.mdx` and `threat-modeling.mdx` while preserving formatting.
- Replaced incorrect `## 17. Top GitHub Repos` heading with `## 17. Top GitHub Repositories` in `data-protection.mdx` to follow CONTENT.md conventions.

End-of-day autonomous review complete:
- Generated and embedded illustration prompts in Section 3 for all 10 App Security topics.
- Marked the 'Better analogy' task as complete.

### Next Task
_Empty_

End-of-day autonomous review complete:
- Ensured all mandatory structural headings (Section 1 to Section 18) strictly use Level 2 `##` headings, fixing formatting issues across various documents.
- Verified build and typechecks passed successfully.
