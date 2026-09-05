# Testing Guide (TESTING.md)

This repository enforces invariant validation using Vitest. Our tests verify content structure, navigation integrity, and metadata correctness to protect BAE School from accidental regressions.

## Running Tests

To run the entire suite locally:
```bash
npm test
```

## Watch Mode

While developing new tests or writing content:
```bash
npm run test:watch
```

## Typecheck

Tests do not replace type checking. Run TypeScript validation:
```bash
npm run typecheck
```

## Production Build

To verify Docusaurus compiles everything:
```bash
npm run build
```

## Continuous Integration (CI)

Our CI pipeline (`quality.yml`) runs on GitHub Actions.

### PR Validation
Every Pull Request targeting `main` must pass:
1. `npm test`
2. `npm run typecheck`
3. `npm run build`

### Main Branch Validation
Pushing or merging into `main` independently executes the exact same pipeline to protect production.

### Auto-Merge Relationship
The `auto-merge-on-success.yml` workflow listens for the `Quality` workflow to complete. It will **only** approve and merge if the `Quality` workflow finished successfully on a Pull Request. Do not attempt to bypass the quality gate.
