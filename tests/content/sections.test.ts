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

describe('Section Structure Tests', () => {
  const docsDir = path.resolve(__dirname, '../../docs/school');
  const mdxFiles = getFilesRecursively(docsDir);

  it('C: Lessons have valid section numbering and ordering', () => {
    mdxFiles.forEach(filePath => {
      // Ignore design documents
      if (filePath.endsWith('design.md')) return;

      const content = fs.readFileSync(filePath, 'utf8');
      
      const headingRegex = /^##\s+(\d+)\.\s+(.*)$/gm;
      let match;
      const sectionNumbers: number[] = [];

      while ((match = headingRegex.exec(content)) !== null) {
        sectionNumbers.push(parseInt(match[1], 10));
      }

      // Check for duplicates
      const uniqueNumbers = new Set(sectionNumbers);
      expect(uniqueNumbers.size, `Duplicate section numbers found in ${filePath}`).toBe(sectionNumbers.length);

      // Check for impossible ordering (e.g., 5 then 4)
      for (let i = 1; i < sectionNumbers.length; i++) {
        expect(sectionNumbers[i], `Impossible ordering in ${filePath}: ${sectionNumbers[i-1]} followed by ${sectionNumbers[i]}`).toBeGreaterThan(sectionNumbers[i-1]);
      }
    });
  });
});
