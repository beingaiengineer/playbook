import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Identity Tests', () => {
  const root = path.resolve(__dirname, '../../');

  it('I: Repository identity is BAE School', () => {
    const filesToCheck = ['README.md', 'DESIGN.md', 'package.json', 'docusaurus.config.ts'];

    filesToCheck.forEach(file => {
      const filePath = path.join(root, file);
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf8');
        expect(content).not.toMatch(/Python School Playbook/g);
      }
    });

    const docusaurusConfigPath = path.join(root, 'docusaurus.config.ts');
    if (fs.existsSync(docusaurusConfigPath)) {
      const docusaurusConfig = fs.readFileSync(docusaurusConfigPath, 'utf8');
      expect(docusaurusConfig).toContain("title: 'BAE School'");
      expect(docusaurusConfig).toContain("url: 'https://school.beingaiengineer.com'");
      expect(docusaurusConfig).toContain("projectName: 'school'");
    }
  });

  it('J: No design token regression (Crimson)', () => {
    const pythonAgentPath = path.join(root, '.claude/agents/python-agent.md');
    if (fs.existsSync(pythonAgentPath)) {
      const content = fs.readFileSync(pythonAgentPath, 'utf8');
      expect(content).not.toMatch(/#9f1239/g);
      expect(content).toContain('#1d1d1f');
    }
  });
});
