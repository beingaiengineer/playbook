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

describe('LearningFlow Regression Tests', () => {
  const dsDir = path.resolve(__dirname, '../../docs/school/data-structures');
  const dsFiles = getFilesRecursively(dsDir);

  it('D3: Exactly 14 Data Structures files exist with LearningFlow', () => {
    let flowCount = 0;
    dsFiles.forEach(filePath => {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('<LearningFlow')) {
        flowCount++;
      }
    });
    expect(flowCount, `Expected exactly 14 Data Structures lessons to have LearningFlow`).toBe(14);
  });

  it('D1 & D2: LearningFlow uses canonical API without legacy schema', () => {
    dsFiles.forEach(filePath => {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('<LearningFlow')) {
        
        // Look inside the LearningFlow block
        const flowMatch = content.match(/<LearningFlow([\s\S]*?)\/>/);
        if (flowMatch) {
          const props = flowMatch[1];
          // Extract the nodes array from the diagram prop
          const nodesMatch = props.match(/nodes:\s*\[([\s\S]*?)\]\s*,/);
          if (nodesMatch) {
            const nodesContent = nodesMatch[1];
            expect(nodesContent, `LearningFlow regression in ${filePath}: uses legacy 'label' inside nodes`).not.toMatch(/label\s*:/);
            expect(nodesContent, `LearningFlow regression in ${filePath}: uses legacy 'type' inside nodes`).not.toMatch(/type\s*:\s*['"](?:core|process|data|tool|warning|output)['"]/);
            expect(nodesContent, `LearningFlow regression in ${filePath}: uses legacy 'position' inside nodes`).not.toMatch(/position\s*:/);
          }

          const hasKind = props.includes('kind:') || props.includes('nodes: []');
          expect(hasKind, `LearningFlow regression in ${filePath}: missing 'kind'`).toBe(true);
          
          const hasTitle = props.includes('title:') || props.includes('nodes: []');
          expect(hasTitle, `LearningFlow regression in ${filePath}: missing 'title'`).toBe(true);

          const hasDetail = props.includes('detail:') || props.includes('nodes: []');
          expect(hasDetail, `LearningFlow regression in ${filePath}: missing 'detail'`).toBe(true);

          const hasX = /\bx\s*:/.test(props) || props.includes('nodes: []');
          expect(hasX, `LearningFlow regression in ${filePath}: missing 'x'`).toBe(true);

          const hasY = /\by\s*:/.test(props) || props.includes('nodes: []');
          expect(hasY, `LearningFlow regression in ${filePath}: missing 'y'`).toBe(true);
        }
      }
    });
  });
});
