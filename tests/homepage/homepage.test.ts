import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Homepage Tests', () => {
  const indexPagePath = path.resolve(__dirname, '../../src/pages/index.tsx');

  it('H: Homepage does not contain obsolete claims', () => {
    expect(fs.existsSync(indexPagePath), `Homepage index.tsx missing`).toBe(true);
    const content = fs.readFileSync(indexPagePath, 'utf8');

    expect(content, `Homepage contains obsolete claim: Winter 2024 Cohort`).not.toContain('Winter 2024 Cohort');
    expect(content, `Homepage contains obsolete claim: 10k+ Students`).not.toContain('10k+ Students');
    expect(content, `Homepage contains obsolete claim: 98% Placement`).not.toContain('98% Placement');
  });

  it('H: Homepage contains verified platform claims', () => {
    const content = fs.readFileSync(indexPagePath, 'utf8');

    expect(content, `Homepage is missing claim: 381 Lessons`).toContain('381');
    expect(content, `Homepage is missing claim: 16 Courses`).toContain('16');
  });
});
