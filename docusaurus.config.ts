import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BAE School',
  tagline: 'Learn engineering, one topic at a time',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://school.beingaiengineer.com',
  baseUrl: '/',
  organizationName: 'being-ai-engineer',
  projectName: 'school',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'BAE School',
      logo: {
        alt: 'BAE School Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Courses',
          position: 'left',
          items: [
            { type: 'docSidebar', sidebarId: 'pythonSidebar', label: '🐍 Python' },
            { type: 'docSidebar', sidebarId: 'agenticFrameworksSidebar', label: '🤖 Agentic Frameworks' },
            { type: 'docSidebar', sidebarId: 'dataStructuresSidebar', label: '📊 Data Structures' },
            { type: 'docSidebar', sidebarId: 'appSecuritySidebar', label: '🛡️ App Security' },
            { type: 'docSidebar', sidebarId: 'cicdPipelinesSidebar', label: '🚀 CI/CD Pipelines' },
            { type: 'docSidebar', sidebarId: 'fastapiConceptsSidebar', label: '⚡ FastAPI Concepts' },
            { type: 'docSidebar', sidebarId: 'gitWorkflowsSidebar', label: '🌿 Git Workflows' },
            { type: 'docSidebar', sidebarId: 'incidentManagementSidebar', label: '🚨 Incident Management' },
            { type: 'docSidebar', sidebarId: 'observabilitySidebar', label: '📊 Observability' },
            { type: 'docSidebar', sidebarId: 'oopPatternsSidebar', label: '🧩 OOP & Patterns' },
            { type: 'docSidebar', sidebarId: 'releaseDeploymentSidebar', label: '🚢 Release & Deployment' },
            { type: 'docSidebar', sidebarId: 'requirementsEstimationSidebar', label: '📏 Requirements & Estimation' },
            { type: 'docSidebar', sidebarId: 'sdlcAgileSidebar', label: '🔄 SDLC & Agile' },
            { type: 'docSidebar', sidebarId: 'sliSloSidebar', label: '📈 SLIs & SLOs' },
            { type: 'docSidebar', sidebarId: 'softwareTestingSidebar', label: '🧪 Software Testing' },
            { type: 'docSidebar', sidebarId: 'teamStructureSidebar', label: '👥 Team Structure' },
          ],
        },
        {
          to: '/docs/school/python/interview-prep/top-python-interview-questions',
          label: 'Interview Prep',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Courses',
          items: [
            {
              label: '🐍 Python',
              to: '/docs/school/python/intro/what-is-python',
            },
          ],
        },
        {
          title: 'Python Tracks',
          items: [
            {
              label: 'Fundamentals',
              to: '/docs/school/python/fundamentals/variables',
            },
            {
              label: 'Collections',
              to: '/docs/school/python/collections/lists',
            },
            {
              label: 'System Design',
              to: '/docs/school/python/system-design/python-architecture',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Interview Prep',
              to: '/docs/school/python/interview-prep/top-python-interview-questions',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BAE School. Built with ❤️ by Being AI Engineer.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
