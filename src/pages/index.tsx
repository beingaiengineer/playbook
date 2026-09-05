import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

/* ------------------------------------------------------------------ */
/*  Course catalog - Bento layout matching the Stitch Design          */
/* ------------------------------------------------------------------ */
interface Course {
  emoji: string;
  image?: string;
  title: string;
  description: string;
  topicCount: string;
  href: string;
  accent: string;
  available: boolean;
  featured?: boolean;
}

const courses: Course[] = [
  {
    emoji: '🐍',
    image: '/img/home/python_bae.png',
    title: 'Backend Engineering with Python',
    description:
      'Master practical backend engineering. Build scalable APIs, handle background processing, manage databases, and deploy production-ready systems using FastAPI and Django.',
    topicCount: '144 lessons',
    href: '/docs/school/python/intro/what-is-python',
    accent: 'var(--course-python)',
    available: true,
    featured: true,
  },
  {
    emoji: '🤖',
    image: '/img/home/agentic_frameworks_bae.png',
    title: 'Agentic Frameworks',
    description:
      'Master AI agents, LangChain, LangGraph, CrewAI, and multi-agent systems.',
    topicCount: '97 lessons',
    href: '/docs/school/agentic-frameworks/intro/what-are-ai-agents',
    accent: 'var(--course-python)',
    available: true,
  },
  {
    emoji: '📊',
    image: '/img/home/data_structures_bae.png',
    title: 'Data Structures',
    description:
      'Master arrays, trees, graphs, heaps, hash tables, and algorithm complexities.',
    topicCount: '15 lessons',
    href: '/docs/school/data-structures/arrays-memory',
    accent: 'var(--course-python)',
    available: true,
  },
  {
    emoji: '🛡️',
    image: '/img/home/app_security_bae.png',
    title: 'App Security',
    description:
      'Secure applications against OWASP top 10, handle auth, and protect data.',
    topicCount: '11 lessons',
    href: '/docs/school/app-security/security-mindset',
    accent: 'var(--course-python)',
    available: true,
  },
  {
    emoji: '🚀',
    image: '/img/home/cicd_pipelines_bae.png',
    title: 'CI/CD Pipelines',
    description:
      'Automate testing, builds, and deployments with GitHub Actions and Docker.',
    topicCount: '11 lessons',
    href: '/docs/school/cicd-pipelines/what-is-cicd',
    accent: 'var(--course-python)',
    available: true,
  },
  {
    emoji: '⚡',
    title: 'FastAPI Concepts',
    description:
      'Deep dive into building high-performance REST APIs with FastAPI.',
    topicCount: '13 lessons',
    href: '/docs/school/fastapi-concepts/what-is-an-api',
    accent: 'var(--course-python)',
    available: true,
  },
  {
    emoji: '🌿',
    title: 'Git Workflows',
    description:
      'Master advanced Git, rebase, merge strategies, and team collaboration.',
    topicCount: '11 lessons',
    href: '/docs/school/git-workflows/git-fundamentals',
    accent: 'var(--course-python)',
    available: true,
  },
  {
    emoji: '🚨',
    title: 'Incident Management',
    description:
      'Handle production outages, runbooks, and post-mortems like a pro.',
    topicCount: '10 lessons',
    href: '/docs/school/incident-management/what-is-an-incident',
    accent: 'var(--course-python)',
    available: true,
  },
  {
    emoji: '📊',
    title: 'Observability',
    description:
      'Implement logging, metrics, and tracing for production systems.',
    topicCount: '11 lessons',
    href: '/docs/school/observability/what-is-observability',
    accent: 'var(--course-python)',
    available: true,
  },
  {
    emoji: '🧩',
    title: 'OOP & Patterns',
    description:
      'Object-oriented programming and essential software design patterns.',
    topicCount: '10 lessons',
    href: '/docs/school/oop-patterns/oop-in-production',
    accent: 'var(--course-python)',
    available: true,
  },
  {
    emoji: '🚢',
    title: 'Release & Deployment',
    description:
      'Strategies for safely rolling out code to millions of users.',
    topicCount: '11 lessons',
    href: '/docs/school/release-deployment/deployment-fundamentals',
    accent: 'var(--course-python)',
    available: true,
  },
  {
    emoji: '📏',
    title: 'Requirements & Estimation',
    description:
      'Learn how to break down complex projects and estimate work.',
    topicCount: '11 lessons',
    href: '/docs/school/requirements-estimation/requirement-gathering',
    accent: 'var(--course-python)',
    available: true,
  },
  {
    emoji: '🔄',
    title: 'SDLC & Agile',
    description:
      'The software development lifecycle, Scrum, Kanban, and sprints.',
    topicCount: '11 lessons',
    href: '/docs/school/sdlc-agile/what-is-sdlc',
    accent: 'var(--course-python)',
    available: true,
  },
  {
    emoji: '📈',
    title: 'SLIs & SLOs',
    description:
      'Define, measure, and manage service level reliability objectives.',
    topicCount: '10 lessons',
    href: '/docs/school/sli-slo/sli-slo-sla-explained',
    accent: 'var(--course-python)',
    available: true,
  },
  {
    emoji: '🧪',
    title: 'Software Testing',
    description:
      'Unit, integration, and E2E testing strategies for bulletproof code.',
    topicCount: '11 lessons',
    href: '/docs/school/software-testing/testing-pyramid',
    accent: 'var(--course-python)',
    available: true,
  },
  {
    emoji: '👥',
    title: 'Team Structure',
    description:
      'How modern engineering organizations and tech teams are structured.',
    topicCount: '10 lessons',
    href: '/docs/school/team-structure/your-first-day',
    accent: 'var(--course-python)',
    available: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Value propositions                                                 */
/* ------------------------------------------------------------------ */
interface ValueProp {
  icon: string;
  title: string;
  text: string;
}

const valueProps: ValueProp[] = [
  {
    icon: '⚙️',
    title: 'Real-world Projects',
    text: 'Build complex, portfolio-ready applications that solve actual engineering problems, not toy examples.',
  },
  {
    icon: '✅',
    title: 'Production Standards',
    text: 'Learn CI/CD, testing, logging, and monitoring from day one. Code like you are already on a senior team.',
  },
  {
    icon: '💬',
    title: 'Mentor Support',
    text: 'Get code reviews and architecture feedback from engineers who have shipped products at scale.',
  },
  {
    icon: '🚀',
    title: 'Career Outcomes',
    text: 'Our curriculum is reverse-engineered from the technical interviews of top-tier tech companies.',
  },
];

/* ------------------------------------------------------------------ */
/*  Components                                                         */
/* ------------------------------------------------------------------ */

function HeroBanner() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} />
      <div className={styles.heroPattern} />
      <div className="container relative z-10">
        <div className={styles.cohortBadge}>
          <span className={styles.badgePulse}></span>
          <span>Winter 2024 Cohort Open</span>
        </div>
        <Heading as="h1" className={styles.heroTitle}>
          <span className={styles.titleSub}>BAE School</span>
          <span className={styles.textGradient}>Practical Engineering.</span>
        </Heading>
        <p className={styles.heroSubtitle}>
          <strong>Learn</strong> the theory. <strong>Build</strong> the systems. <strong>Ship</strong> to production. We forge software engineers, not just coders.
        </p>
        <div className={styles.heroCta}>
          <Link
            className="button button--primary button--lg"
            to="/docs/school/python/intro/what-is-python">
            Join the Lab
          </Link>
          <Link
            className={`button button--outline button--lg ${styles.heroCtaSecondary}`}
            to="/docs/school/python/interview-prep/top-python-interview-questions">
            View Curriculum
          </Link>
        </div>
        
        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>120+</span>
            <span className={styles.statLabel}>Lessons</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>20</span>
            <span className={styles.statLabel}>Sections</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>10k+</span>
            <span className={styles.statLabel}>Students</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>98%</span>
            <span className={styles.statLabel}>Placement</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function CourseCard({course}: {course: Course}) {
  const inner = (
    <div
      className={`${styles.courseCard} ${course.featured ? styles.courseCardFeatured : ''} ${!course.available ? styles.courseCardDisabled : ''}`}
      style={{'--card-accent': course.accent} as React.CSSProperties}>
      <div className={styles.cardHeader}>
        <div className={styles.courseEmoji}>
          {course.image ? (
            <img src={course.image} alt={course.title} className={styles.courseIconImg} />
          ) : (
            course.emoji
          )}
        </div>
        {course.available ? (
          <div className={styles.liveBadge}>
            <span className={styles.livePulse}></span>
            <span>Live Now</span>
          </div>
        ) : (
          <div className={styles.soonBadge}>Coming Soon</div>
        )}
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.courseTitle}>{course.title}</h3>
        <p className={styles.courseDesc}>{course.description}</p>
      </div>
      <div className={styles.cardFooter}>
        <span className={styles.courseMeta}>
          {course.available ? '📚 ' : '🕐 '}
          {course.topicCount}
        </span>
        {course.available && (
          <span className={styles.courseCtaArrow}>Start Track →</span>
        )}
      </div>
    </div>
  );

  if (course.available) {
    return (
      <Link to={course.href} className={`${styles.courseLink} ${course.featured ? styles.gridColSpan2 : ''}`}>
        {inner}
      </Link>
    );
  }
  return inner;
}

function CourseCatalog() {
  return (
    <section className={styles.section} id="courses">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Engineering Tracks</h2>
          <p className={styles.sectionSubtitle}>
            Master the core stack required for modern production systems.
          </p>
        </div>
        <div className={styles.courseGrid}>
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className={`${styles.section} ${styles.sectionAlt}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Why BAE School?</h2>
          <p className={styles.sectionSubtitle}>
            We don't teach syntax. We teach you how to build real systems that scale.
          </p>
        </div>
        <div className={styles.valueGrid}>
          {valueProps.map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <span className={styles.valueIcon}>{v.icon}</span>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueText}>{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="BAE School — a practical engineering school for Python, JavaScript, DevOps, AI, and more.">
      <HeroBanner />
      <main>
        <CourseCatalog />
        <WhySection />
      </main>
    </Layout>
  );
}
