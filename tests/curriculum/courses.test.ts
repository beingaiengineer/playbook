import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Course Inventory Tests', () => {
  const docsDir = path.resolve(__dirname, '../../docs/school');

  it('E: Expected active courses exist and contain lessons', () => {
    const activeCourses = [
      'python',
      'agentic-frameworks',
      'data-structures',
      'fastapi-concepts',
      'app-security',
      'cicd-pipelines',
      'git-workflows',
      'incident-management',
      'observability',
      'oop-patterns',
      'release-deployment',
      'requirements-estimation',
      'sdlc-agile',
      'sli-slo',
      'software-testing',
      'team-structure'
    ];

    activeCourses.forEach(course => {
      const courseDir = path.join(docsDir, course);
      expect(fs.existsSync(courseDir), `Active course directory missing: ${course}`).toBe(true);

      const getMdxFiles = (dir: string, fileList: string[] = []): string[] => {
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
      };

      const mdxFiles = getMdxFiles(courseDir);
      
      // Filter out design.md (which shouldn't end in .mdx anyway, but just to be sure)
      const lessonFiles = mdxFiles.filter(f => !f.endsWith('design.md'));
      
      expect(lessonFiles.length, `Course ${course} has no actual lessons`).toBeGreaterThan(0);
    });
  });
});
