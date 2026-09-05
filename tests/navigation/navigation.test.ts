import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

function getMdxFiles(dir: string, fileList: string[] = []): string[] {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getMdxFiles(filePath, fileList);
    } else if (filePath.endsWith('.mdx') || filePath.endsWith('.md')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

describe('Navigation Tests', () => {
  const root = path.resolve(__dirname, '../../');
  const docsDir = path.join(root, 'docs/school');

  it('F: Empty courses are not exposed in navbar', () => {
    const docusaurusConfigPath = path.join(root, 'docusaurus.config.ts');
    expect(fs.existsSync(docusaurusConfigPath)).toBe(true);

    const content = fs.readFileSync(docusaurusConfigPath, 'utf8');

    const emptyCourses = [
      'systemDesignSidebar',
      'cloudInfrastructureSidebar',
      'aiDataInfraSidebar'
    ];

    emptyCourses.forEach(sidebar => {
      // The sidebar ID should not be present in the config (it was removed in phase 1)
      expect(content, `Empty course sidebar ${sidebar} is exposed in config`).not.toContain(`sidebarId: '${sidebar}'`);
    });
  });

  it('L: Lightweight internal link validation', () => {
    const allDocs = getMdxFiles(docsDir);

    allDocs.forEach(filePath => {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Match markdown links: [text](./path) or [text](/path) or [text](../path)
      // We will only look at relative local markdown file links for simplicity in this lightweight test
      const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
      let match;

      while ((match = linkRegex.exec(content)) !== null) {
        let linkPath = match[2];
        
        // Ignore anchors, external http/https URLs, and root-relative ambiguous routes for now
        // Also ignore code snippets that look like links (e.g. containing spaces or quotes)
        if (
          linkPath.startsWith('http') || 
          linkPath.startsWith('#') || 
          linkPath.startsWith('/') ||
          linkPath.includes(' ') ||
          linkPath.includes("'") ||
          linkPath.includes('"') ||
          !linkPath.includes('/') && !linkPath.includes('.') // Must look like a file path
        ) {
          continue;
        }
        
        // Strip out anchors from the file path
        if (linkPath.includes('#')) {
          linkPath = linkPath.split('#')[0];
        }

        if (linkPath === '') continue;

        // Resolve path relative to the current file
        const resolvedPath = path.resolve(path.dirname(filePath), linkPath);
        
        // Validate it exists (or exists with .mdx / .md extension)
        const exists = fs.existsSync(resolvedPath) || 
                       fs.existsSync(resolvedPath + '.mdx') || 
                       fs.existsSync(resolvedPath + '.md') ||
                       fs.existsSync(resolvedPath + '/index.mdx');
        
        expect(exists, `Broken internal link in ${filePath}: ${match[2]} resolves to missing ${resolvedPath}`).toBe(true);
      }
    });
  });
});
