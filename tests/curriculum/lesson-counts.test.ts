import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

function getMdxFiles(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getMdxFiles(filePath, fileList);
    } else if (filePath.endsWith('.mdx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

describe('Lesson Counts Tests', () => {
  const docsDir = path.resolve(__dirname, '../../docs/school');
  const indexPagePath = path.resolve(__dirname, '../../src/pages/index.tsx');

  it('G: Total active lesson count is exactly 381', () => {
    // Only count actual MDX lesson files
    const allFiles = getMdxFiles(docsDir);
    const lessonFiles = allFiles.filter(f => !f.endsWith('design.md'));

    expect(lessonFiles.length, `Expected exactly 381 lessons in the repository`).toBe(381);
  });

  it('G: Homepage displays the correct 381 lesson count', () => {
    expect(fs.existsSync(indexPagePath), `Homepage index.tsx missing`).toBe(true);
    const content = fs.readFileSync(indexPagePath, 'utf8');
    
    // Look for the 381 value in the stats grid
    expect(content, `Homepage does not display the verified 381 lessons`).toMatch(/<span className={styles\.statValue}>381<\/span>\s*<span className={styles\.statLabel}>Lessons<\/span>/);
  });
});
