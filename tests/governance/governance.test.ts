import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Governance Tests', () => {
  const root = path.resolve(__dirname, '../../');

  it('A1: Required governance files exist', () => {
    const requiredFiles = [
      'AGENTS.md',
      'CONTENT.md',
      'QUALITY.md',
      'DESIGN.md',
      'SOUL.md',
      'HEARTBEAT.md',
      'TOOLS.md',
      'CLAUDE.md',
      'JULES.md',
      'README.md'
    ];

    requiredFiles.forEach(file => {
      const filePath = path.join(root, file);
      expect(fs.existsSync(filePath), `Missing required governance file: ${file}`).toBe(true);
    });
  });

  it('A2: Canonical section count is 18', () => {
    const activeFiles = ['AGENTS.md', 'CONTENT.md', 'QUALITY.md', '.claude/agents/python-agent.md'];

    activeFiles.forEach(file => {
      const filePath = path.join(root, file);
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        // Ensure 18-section is referenced
        expect(content).toMatch(/18.?[sS]ection|18.?[mM]andatory/g);
        // Ensure no active 15-section or 16-section misconfigurations
        expect(content, `File ${file} contains legacy 15 or 16 section references`).not.toMatch(/15-section template|16-section template|15 mandatory|16 mandatory/gi);
      }
    });
  });

  it('A3: MEMORY path is correct', () => {
    const agentsMdPath = path.join(root, 'AGENTS.md');
    if (fs.existsSync(agentsMdPath)) {
      const content = fs.readFileSync(agentsMdPath, 'utf8');
      expect(content).toContain('.claude/agent-memory/*/MEMORY.md');
    }
  });
});
