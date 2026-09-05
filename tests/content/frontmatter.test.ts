import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

function getFilesRecursively(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFilesRecursively(filePath, fileList);
    } else {
      if (filePath.endsWith('.mdx')) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

describe('Frontmatter Tests', () => {
  const docsDir = path.resolve(__dirname, '../../docs/school');
  const mdxFiles = getFilesRecursively(docsDir);

  it('B: Lesson frontmatter is valid', () => {
    mdxFiles.forEach(filePath => {
      // Ignore design documents or generated files if any
      if (filePath.endsWith('design.md') || filePath.includes('node_modules') || filePath.includes('build')) return;

      const content = fs.readFileSync(filePath, 'utf8').trimStart();
      
      expect(content.startsWith('---'), `Missing frontmatter in ${filePath}`).toBe(true);
      
      const endOfFrontmatter = content.indexOf('---', 3);
      expect(endOfFrontmatter, `Unclosed frontmatter in ${filePath}`).toBeGreaterThan(3);

      const frontmatter = content.substring(3, endOfFrontmatter);
      
      // Check sidebar_position
      expect(frontmatter, `Missing sidebar_position in ${filePath}`).toMatch(/sidebar_position\s*:\s*\d+/);
      
      // Check sidebar_label (optional but good to have)
      expect(frontmatter, `Missing sidebar_label in ${filePath}`).toMatch(/sidebar_label\s*:\s*".+"/);
    });
  });
});
