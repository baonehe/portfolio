

import type { Cert, FocusArea, Project, ProjectGroup } from '../i18n/content';

export const site = {
  name: 'Trần Dư Gia Bảo',
  email: 'giabao1352002@gmail.com',
  links: {
    github: 'https://github.com/baonehe',
    linkedin: 'https://www.linkedin.com/in/trandugiabao1305/',
    resume: '#',
  },
};

const ielts = 'https://drive.google.com/file/d/1VGrxm2ipqFD5nNJjg3HcQzZ0lK2CK2j9/view';

// ─── English ────────────────────────────────────────────────────────────────

export const en = {
  meta: {
    title: `${site.name} — Full-Stack Developer`,
    description:
      'Full-stack developer in Ho Chi Minh City building .NET, Node.js and Python back-ends, and an AI workflow that takes Jira tickets to merge requests.',
  },
  hero: {
    role: 'Full-Stack Developer',
    location: 'Ho Chi Minh City, Vietnam',
    intro:
      'I build business applications end to end, with most of my work on the back-end: APIs, data models, payments and performance. I also built baoOS, an AI workflow that takes a Jira ticket to a merge request ready for review and saves about 20% of development time per ticket.',
  },
  about: {
    heading: 'About',
    lead: 'A full-stack developer, strongest on the back-end: correct data, safe payments, fast queries.',
    body: [
      'I studied Software Engineering at the University of Information Technology (VNU-HCM) and started with a back-end internship at VNPT, building QR-code login and QR-code meeting join for a meeting platform.',
      'Since March 2025 I have worked at MOR Software, an IT outsourcing company, building products directly with clients in the EU and the Netherlands: a privacy-first professional network, a network-analysis platform, and a CakePHP-to-Laravel migration.',
      'Before that I freelanced, building a Telegram booking bot with n8n, an internal booking system used by about 100 staff, and a homestay booking app for iOS and Android. Along the way I built baoOS, the AI workflow my team now uses to go from Jira ticket to merge request.',
    ],
    facts: [
      { label: 'Based in', value: 'Ho Chi Minh City, Vietnam' },
      { label: 'Experience', value: '2+ years' },
      { label: 'Currently', value: 'Full-Stack Developer at MOR Software' },
      { label: 'Focus', value: 'Back-end & AI workflow automation' },
    ],
  },
  experience: {
    items: [
      {
        role: 'Full-Stack Developer',
        company: 'MOR Software JSC',
        period: 'Mar 2025 — now',
        location: 'Ho Chi Minh City',
        summary: 'IT outsourcing: five client projects, working directly with clients in the EU and the Netherlands.',
        points: [
          'MainDeck, a privacy-first professional network in the EU (1,900 users): Mollie subscription payments with idempotent webhooks, race-condition fixes with transactions and row locking, IDOR fixes, CRT-RSA encryption of user data, and PostgreSQL indexes that cut search and connection API response time by about 40%.',
          'Modat, a network-analysis platform (Netherlands): a FastAPI back-end that parses captures of about 1 million packets with tshark in 2–3s instead of 15s, streams results in chunks, and caches them in Redis for about 80% faster repeat views.',
          'KOKEN, a material management system for electronic components: migrated from CakePHP to Laravel on a 500GB MySQL database in 3 months instead of 6, verifying each module 1:1 against the legacy code.',
          'LACO Group, a multi-tenant product traceability platform for Dong Thap Province: .NET microservices with web and mobile QR apps; heavy reports about 30% faster after moving their queries to stored procedures and raw SQL.',
          'WorkLog, activity tracking for real-estate operations: ASP.NET Core APIs and a DynamoDB data model behind a .NET MAUI macOS app, including a batch sync API for offline mode.',
        ],
      },
      {
        role: 'Full-Stack Developer',
        company: 'Freelance',
        period: 'Jul 2024 — Jan 2025',
        location: 'Remote',
        summary: 'Booking, sales and rental systems for small businesses, mostly in teams of four.',
        points: [
          'Restaurant table booking: a Telegram bot built with n8n that checks availability and confirms reservations, plus an internal booking system (NestJS, Next.js) used by about 100 staff.',
          'Stelio, a homestay booking app for iOS and Android (React Native, Flask): Google OAuth 2.0 sign-in, map search on OpenStreetMap, live GPS tracking, and the full UI designed in Figma.',
          'Car Sales Management and Football Manager: WPF desktop systems (MVVM, SQL Server) for a car dealership and a football-pitch rental business, with role-based access, payroll, and bookings that can never double-book a pitch.',
        ],
      },
      {
        role: 'Back-end Developer Intern (.NET)',
        company: 'VNPT',
        period: 'Apr 2024 — Jun 2024',
        location: 'Ho Chi Minh City',
        summary: 'Back-end work on a meeting platform.',
        points: [
          'Built QR-code login, and QR-code meeting join with automatic admission, so guests no longer need host approval.',
          'Fixed a bug that kept user avatars from rendering in the meeting diagram.',
        ],
      },
    ],
  },
  work: {
    heading: 'Selected work',
    intro:
      'Three systems from client and personal work: payments and private data, heavy file analysis, and the AI workflow I use to build them.',
    labels: {
      problem: 'Problem',
      solution: 'Solution',
      decisions: 'Key decisions',
      outcome: 'Outcome',
      stack: 'Stack',
      illustration: 'Illustration, not a product screenshot',
    },
    // `art` picks the pixel illustration: 'social' | 'security' | 'agents'.
    projects: [
      {
        id: 'maindeck',
        title: 'MainDeck',
        role: 'Full-Stack Developer · client-facing',
        summary:
          'A privacy-first professional network hosted in the EU, an alternative to LinkedIn with about 1,900 users.',
        problem:
          'Paid plans had to activate exactly once even when payment webhooks were retried, concurrent requests could charge twice or duplicate posts, some endpoints let users reach other people’s resources, and post search and connection queries needed to be faster.',
        solution:
          'Built features end to end with Next.js and Fastify, and refactored the back-end into route, service and repository layers. Integrated Mollie subscriptions through webhooks, and scanned every upload with ClamAV before storage.',
        decisions:
          'Confirm each payment against the Mollie API and process webhooks with an idempotency key. Use database transactions and row locking against race conditions. Encrypt all personal and account data except names with CRT-RSA before it reaches the database, with the keys kept on the server.',
        outcome:
          'Retried webhooks never activate a plan twice, and double charges and duplicate posts are gone. Composite indexes, found with EXPLAIN ANALYZE, cut post search and connection API response time by about 40%; removing redundant ones sped up writes.',
        stack: ['Next.js', 'TypeScript', 'Fastify', 'PostgreSQL', 'Mollie', 'ClamAV'],
        art: 'social',
        links: [{ label: 'Live site', href: 'https://maindeck.eu' }],
      },
      {
        id: 'modat',
        title: 'Modat',
        role: 'Back-end Developer · client-facing',
        summary:
          'A collaboration platform where about 300 users in 10 communities and 30 groups upload and analyze network capture files together.',
        problem:
          'Capture files run to around 1 million packets. Parsing one took about 15 seconds, users waited for the whole file before seeing anything, and every member of a group waited again. Uploads also had to be screened for malicious files.',
        solution:
          'A three-layer FastAPI back-end that embeds Wireshark’s tshark to parse captures and analyze FTP and UDP traffic, with uploads checked by MIME type and file signature before processing.',
        decisions:
          'Stream results to the front-end in chunked HTTP responses, so data appears progressively. Cache processed results in Redis, so the rest of a group opens an analyzed file almost instantly.',
        outcome: 'Processing time fell from 15s to 2–3s, and repeat views respond about 80% faster.',
        stack: ['Python', 'FastAPI', 'tshark', 'PostgreSQL', 'Redis', 'Docker'],
        art: 'security',
        links: [{ label: 'Client website', href: 'https://www.modat.io' }],
      },
      {
        id: 'baoos',
        title: 'baoOS',
        role: 'Creator & maintainer',
        summary: 'A gated, artifact-driven AI-SDLC workflow for Claude Code that takes a Jira ticket to a merge request.',
        problem:
          'AI coding agents skip steps: they write code before the requirement is reviewed or a plan exists, and they ignore decisions the codebase has already made.',
        solution:
          'A pipeline in which the agent picks up a Jira ticket, reviews the requirement, writes a plan, implements the code and opens a merge request, which a person reviews before merging. Nine stages (onboard, knowledge, task, plan, implement, test, review, ship, learn), each a slash command with one artifact and one explicit next step.',
        decisions:
          'Shell-script gates and hooks block each stage until its prerequisite artifact exists. A per-project knowledge base (architecture, conventions, API, testing) grounds the agent, and code review is graded across security, performance, API and data.',
        outcome:
          'About 20% less development time per ticket, and the team uses it too. On the undocumented KOKEN migration it reverse-engineered the legacy code into a knowledge base before any new code was written, helping cut the timeline from 6 months to 3.',
        stack: ['Claude Code', 'Jira', 'GitLab', 'Shell', 'Node.js'],
        art: 'agents',
        links: [{ label: 'Repository', href: '#' }],
      },
    ] satisfies Project[],
    allLink: 'See all projects',
  },
  // The all-projects page (/projects/). A project whose `id` matches a case
  // study above links to it.
  archive: {
    title: 'All projects',
    intro:
      'Every project from my résumé: client work at MOR Software, my own AI workflow, and freelance jobs. Three of them are written up as case studies on the home page.',
    back: 'Back to the home page',
    caseStudy: 'Read the case study',
    stack: 'Stack',
    groups: [
      {
        id: 'mor-software',
        name: 'MOR Software JSC',
        meta: 'IT outsourcing · Mar 2025 — now',
        projects: [
          {
            id: 'maindeck',
            title: 'MainDeck',
            role: 'Full-Stack Developer · client-facing',
            summary:
              'A privacy-first professional network hosted in the EU, an alternative to LinkedIn with about 1,900 users.',
            points: [
              'Developed features end to end, with Next.js on the front-end and Fastify REST APIs on the back-end, working directly with the EU client.',
              'Refactored the back-end into route, service and repository layers, separating business logic from data access so modules are easier to test and change.',
              'Integrated Mollie subscription payments through webhooks, confirming payment status against the Mollie API and processing each webhook with an idempotency key, so retried webhooks never activate a plan twice.',
              'Fixed race conditions in the subscription payment and post-creation flows with database transactions and row locking, preventing double charges and duplicate posts.',
              'Found and fixed IDOR vulnerabilities by enforcing resource-ownership checks on API endpoints; added ClamAV scanning so infected uploads are rejected before storage.',
              'Encrypted all personal and account data except names with CRT-RSA before it reaches the database, with the keys kept on the server, in line with the platform’s privacy-first promise.',
              'Tuned PostgreSQL with EXPLAIN ANALYZE: added composite indexes for post search and connection queries and removed redundant ones, cutting those APIs’ response time by about 40% and speeding up writes.',
            ],
            stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Fastify', 'PostgreSQL', 'Mollie', 'ClamAV'],
            links: [{ label: 'Live site', href: 'https://maindeck.eu' }],
          },
          {
            id: 'modat',
            title: 'Modat',
            role: 'Back-end Developer · client-facing',
            summary:
              'A network-analysis platform from the Netherlands, where communities and groups upload and analyze network capture files together.',
            points: [
              'Built the FastAPI back-end, in three layers, for a platform with 10 communities, 30 groups and about 300 users.',
              'Embedded Wireshark (tshark) to parse capture files of around 1 million packets and analyze FTP and UDP traffic, cutting processing time from 15s to 2–3s.',
              'Streamed analysis results to the front-end through chunked HTTP responses, so users see data progressively instead of waiting for the whole file.',
              'Cached processed results in Redis, so other members of a group open an analyzed file almost instantly, cutting response time by about 80% on repeat views.',
              'Validated uploads by MIME type and file signature to block malicious files before processing; worked directly with the Dutch client in English.',
            ],
            stack: ['Python', 'FastAPI', 'Wireshark/tshark', 'PostgreSQL', 'Redis', 'Docker'],
            links: [{ label: 'Client website', href: 'https://www.modat.io' }],
          },
          {
            id: 'koken',
            title: 'KOKEN',
            role: 'Full-Stack Developer · client-facing',
            summary: 'A material management system for electronic components, migrated from CakePHP to Laravel.',
            points: [
              'Migrated an undocumented system, backed by a 500GB MySQL database self-hosted on AWS EC2, from CakePHP to Laravel, cutting the timeline from 6 months to 3.',
              'Led the migration workflow: used baoOS to reverse-engineer the legacy code into a knowledge base (architecture, data model, business rules) before writing new code.',
              'Turned legacy logic into flow documents and confirmed each flow with the client before implementation, catching mismatched business rules early.',
              'Verified each migrated module 1:1 against the legacy source, comparing behavior and output on the same data before sign-off.',
              'Built scheduled jobs to synchronize data between the legacy and new systems during the transition.',
            ],
            stack: ['PHP', 'CakePHP', 'Laravel', 'MySQL', 'AWS (EC2, S3)', 'Claude Code'],
            links: [],
          },
          {
            id: 'laco-group',
            title: 'LACO Group',
            role: 'Full-Stack Developer · team of 6',
            summary: 'A product traceability system for Dong Thap Province.',
            points: [
              'Developed a multi-tenant traceability platform on a microservices architecture, with web and mobile apps for generating and scanning product QR codes.',
              'Built a log table and a dedicated log-viewer page, so production incidents can be traced and root-caused quickly.',
              'Sped up heavy reports by replacing ORM queries with stored procedures and raw SQL, cutting their load time by about 30%.',
              'Presented demos to Dong Thap Province stakeholders; deployed releases through CI/CD and maintained API documentation and release notes.',
            ],
            stack: ['C#', '.NET Core', 'Microservices', 'ReactJS', 'React Native', 'SQL Server', 'CI/CD'],
            links: [],
          },
          {
            id: 'worklog',
            title: 'WorkLog',
            role: 'Back-end Developer · team of 10',
            summary: 'Work and activity tracking for real-estate operations.',
            points: [
              'Built the ASP.NET Core APIs and DynamoDB data model behind a .NET MAUI macOS app that tracks activities, tasks, working time and work logs for real-estate projects.',
              'Built the back-end for offline mode: a batch sync API that accepts activities recorded offline and uploads them as soon as the connection returns.',
              'Implemented APIs for status updates, search, filtering and work history; fixed defects to improve stability and performance.',
            ],
            stack: ['C#', 'ASP.NET Core', '.NET MAUI', 'DynamoDB'],
            links: [],
          },
        ],
      },
      {
        id: 'personal',
        name: 'Personal',
        meta: 'My own tool, now used by my team',
        projects: [
          {
            id: 'baoos',
            title: 'baoOS',
            role: 'Creator & maintainer',
            summary: 'A gated, artifact-driven AI-SDLC workflow for Claude Code.',
            points: [
              'Built an end-to-end Jira-to-merge-request pipeline: the agent picks up a Jira ticket, reviews the requirement, writes a plan, implements the code and opens a merge request, which a person reviews before merging. It saves about 20% of development time per ticket, and the team uses it too.',
              'Designed a 9-stage workflow (onboard, knowledge, task, plan, implement, test, review, ship, learn) exposed as slash commands: one command per stage, one artifact per command, one explicit next step.',
              'Orchestrated it with shell-script gates and hooks that block each stage until its prerequisite artifact exists, so the AI cannot skip steps.',
              'Built a per-project knowledge base (architecture, conventions, API, testing) that grounds the AI in decisions the codebase has already made, plus graded code review across security, performance, API and data.',
              'Used in production to cut the undocumented KOKEN migration (CakePHP to Laravel) from 6 months to 3.',
            ],
            stack: ['Claude Code', 'Jira', 'GitLab', 'Shell', 'Node.js'],
            links: [],
          },
        ],
      },
      {
        id: 'freelance',
        name: 'Freelance',
        meta: 'Remote · Jul 2024 — Jan 2025',
        projects: [
          {
            id: 'restaurant-booking',
            title: 'Restaurant Table Booking',
            role: 'Full-Stack Developer',
            summary: 'A Telegram booking bot and an internal booking system for a restaurant.',
            points: [
              'Built a Telegram booking bot with n8n that takes table reservations, checks availability through the back-end API and confirms bookings automatically.',
              'Built the internal booking management system, with a NestJS back-end and a Next.js front-end, used by about 100 staff.',
            ],
            stack: ['Next.js', 'NestJS', 'n8n', 'Telegram Bot API'],
            links: [],
          },
          {
            id: 'stelio',
            title: 'Stelio',
            role: 'Full-Stack Developer · team of 4',
            summary: 'A homestay booking app for iOS and Android.',
            points: [
              'Built a cross-platform booking app in React Native with a Flask REST back-end, covering homestay search, room availability, booking and booking history.',
              'Implemented Google OAuth 2.0 alongside email sign-in, and encrypted sensitive user data with CRT-RSA, keeping the keys on the server so the app never stores them.',
              'Designed a central Redux store for booking state, persisted with AsyncStorage so sessions survive app restarts.',
              'Integrated OpenStreetMap for in-app geolocation and map-based homestay search, avoiding paid map APIs and the need for an external map app.',
              'Implemented real-time GPS tracking on iOS and Android: handled location permissions on both platforms, kept the user’s position live on the map, and plotted nearby homestays by distance.',
              'Designed the full UI/UX in Figma, from wireframes to a high-fidelity prototype, and iterated on it with the client.',
            ],
            stack: ['React Native', 'Redux', 'Python', 'Flask', 'Firebase', 'Google OAuth 2.0', 'OpenStreetMap'],
            links: [],
          },
          {
            id: 'car-sales',
            title: 'Car Sales Management',
            role: 'Full-Stack Developer · team of 4',
            summary: 'A desktop management system for a car dealership, with under 50 internal users.',
            points: [
              'Built a desktop system covering vehicle inventory, sales transactions, customers, employees and payroll.',
              'Applied MVVM with the Command pattern to separate the UI from business logic, making screens easier to test and maintain.',
              'Implemented attendance tracking with real-time status updates that feeds monthly payroll calculation.',
              'Built an admin dashboard with sales and revenue reports, and role-based access for admin, sales and accounting staff.',
              'Encrypted employee and customer personal and account data with CRT-RSA.',
            ],
            stack: ['C#', '.NET', 'WPF', 'MVVM', 'SQL Server'],
            links: [],
          },
          {
            id: 'football-manager',
            title: 'Football Manager',
            role: 'Back-end Developer · team of 4',
            summary: 'Rental management for a football-pitch business, with under 50 internal users.',
            points: [
              'Built most of the back-end, covering pitch booking and scheduling, customers, staff and salary payment.',
              'Implemented booking logic with time-slot conflict checks, so a pitch can never be double-booked.',
              'Implemented employee attendance tracking with data persistence, and generated revenue and expense reports with Crystal Reports.',
              'Applied MVVM to keep booking and payroll logic out of the UI layer, so business rules can be changed and debugged without touching the screens.',
            ],
            stack: ['C#', '.NET', 'WPF', 'MVVM', 'SQL Server', 'Crystal Reports'],
            links: [],
          },
        ],
      },
    ] satisfies ProjectGroup[],
  },
  focus: {
    heading: 'Engineering focus',
    intro:
      'Most of my work is on the back-end, in .NET, Node.js, Python and PHP; on the front-end I use React, Next.js and React Native. Each area below names the projects where it shows.',
    evidenceLabel: 'Seen in',
    // `icon` picks the pixel icon: 'api' | 'db' | 'test' | 'perf' | 'infra'.
    areas: [
      {
        icon: 'api',
        title: 'Back-end architecture & APIs',
        body: 'Route, service and repository layers that keep business logic apart from data access; REST APIs, microservices and multi-tenancy.',
        evidence: 'MainDeck, Modat, LACO Group',
        tools: ['ASP.NET Core', 'Fastify', 'FastAPI', 'NestJS', 'Laravel'],
      },
      {
        icon: 'db',
        title: 'Databases & data integrity',
        body: 'Transactions, row locking and idempotency keys where money and duplicates are at stake; data models in SQL and DynamoDB; legacy and new systems kept in sync during a migration.',
        evidence: 'MainDeck, KOKEN, WorkLog',
        tools: ['PostgreSQL', 'SQL Server', 'MySQL', 'DynamoDB'],
      },
      {
        icon: 'test',
        title: 'Security',
        body: 'Ownership checks against IDOR, malware scanning and file-signature checks on uploads, OAuth 2.0, JWT, role-based access, and CRT-RSA encryption of personal data.',
        evidence: 'MainDeck, Modat, Stelio',
        tools: ['OAuth 2.0', 'JWT', 'RBAC', 'ClamAV'],
      },
      {
        icon: 'perf',
        title: 'Performance',
        body: 'EXPLAIN ANALYZE and composite indexes, Redis caching, streamed responses, and stored procedures where an ORM is too slow.',
        evidence: 'MainDeck, Modat, LACO Group',
        tools: ['EXPLAIN ANALYZE', 'Redis', 'Stored procedures'],
      },
      {
        icon: 'infra',
        title: 'AI automation & delivery',
        body: 'baoOS for Claude Code (sub-agents, skills, hooks, slash commands), n8n automations, and releases through CI/CD with Docker and AWS.',
        evidence: 'baoOS, KOKEN, LACO Group',
        tools: ['Claude Code', 'n8n', 'Docker', 'AWS', 'CI/CD'],
      },
    ] satisfies FocusArea[],
  },
  education: {
    items: [
      {
        degree: 'Bachelor’s Degree in Software Engineering',
        school: 'University of Information Technology (UIT), VNU-HCM',
        period: 'Sep 2020 — Nov 2024',
        notes: 'Ho Chi Minh City',
      },
    ],
    certsTitle: 'Certificates & awards',
    certs: [
      { name: 'IELTS', issuer: 'Overall band 5.5', year: '', href: ielts },
      { name: 'Bronze Medal', issuer: 'April 30th Olympiad', year: '2018, 2019' },
    ] satisfies Cert[],
  },
  contact: {
    heading: "Let's talk.",
    body: 'The best way to reach me is email. My code is on GitHub, and my work history on LinkedIn.',
    emailLabel: 'Email',
    links: { github: 'GitHub', linkedin: 'LinkedIn', resume: 'Résumé (PDF)' },
  },

  // Interface text
  sections: {
    about: { title: 'About', blurb: 'Who I am and where I’m headed.', part: 'the head' },
    experience: { title: 'Experience', blurb: 'Where I’ve worked and what I did there.', part: 'the legs' },
    projects: { title: 'Projects', blurb: 'Selected systems I’ve built.', part: 'the diamond pickaxe' },
    skills: { title: 'Skills', blurb: 'What I work with, and where it shows.', part: 'the body' },
    education: { title: 'Education', blurb: 'Degree, certificates and awards.', part: 'the diamond ore' },
    contact: { title: 'Contact', blurb: 'How to reach me.', part: 'the wooden sign' },
  },
  ui: {
    explore: 'Explore',
    viewProjects: 'View projects',
    sectionsLabel: 'Sections',
    hint: 'Pick a part of the picture to jump to that section.',
    contents: 'Contents',
    moved: 'This section now lives on the main page.',
    langLabel: 'Language',
    sceneLabel: 'Portfolio sections',
  },
  footer: {
    art: 'Pixel art drawn for this site.',
    built: 'Built with Astro.',
  },
};

// ─── Tiếng Việt ─────────────────────────────────────────────────────────────

export const vi: typeof en = {
  meta: {
    title: `${site.name} — Lập trình viên Full-Stack`,
    description:
      'Lập trình viên full-stack tại TP. Hồ Chí Minh, xây dựng back-end bằng .NET, Node.js và Python, cùng một quy trình AI đưa ticket Jira thành merge request.',
  },
  hero: {
    role: 'Lập trình viên Full-Stack',
    location: 'TP. Hồ Chí Minh, Việt Nam',
    intro:
      'Mình xây dựng ứng dụng doanh nghiệp từ đầu đến cuối, phần lớn ở back-end: API, mô hình dữ liệu, thanh toán và hiệu năng. Mình cũng tự xây baoOS, quy trình AI đưa một ticket Jira thành merge request sẵn sàng để review, giúp tiết kiệm khoảng 20% thời gian phát triển mỗi ticket.',
  },
  about: {
    heading: 'Giới thiệu',
    lead: 'Lập trình viên full-stack, mạnh nhất ở back-end: dữ liệu đúng, thanh toán an toàn, truy vấn nhanh.',
    body: [
      'Mình học Kỹ thuật Phần mềm tại Trường Đại học Công nghệ Thông tin (ĐHQG-HCM) và bắt đầu bằng kỳ thực tập back-end tại VNPT, làm tính năng đăng nhập bằng mã QR và tham gia cuộc họp bằng mã QR cho một nền tảng họp trực tuyến.',
      'Từ tháng 3/2025, mình làm tại MOR Software, một công ty gia công phần mềm, xây dựng sản phẩm và làm việc trực tiếp với khách hàng ở châu Âu và Hà Lan: một mạng lưới nghề nghiệp đặt quyền riêng tư lên hàng đầu, một nền tảng phân tích mạng, và một dự án chuyển đổi từ CakePHP sang Laravel.',
      'Trước đó mình làm freelance: bot đặt bàn trên Telegram xây bằng n8n, hệ thống đặt bàn nội bộ cho khoảng 100 nhân viên, và ứng dụng đặt homestay cho iOS và Android. Song song, mình xây dựng baoOS, quy trình AI mà đội mình hiện dùng để đi từ ticket Jira đến merge request.',
    ],
    facts: [
      { label: 'Sống tại', value: 'TP. Hồ Chí Minh, Việt Nam' },
      { label: 'Kinh nghiệm', value: 'Hơn 2 năm' },
      { label: 'Hiện tại', value: 'Lập trình viên Full-Stack tại MOR Software' },
      { label: 'Trọng tâm', value: 'Back-end & tự động hoá quy trình bằng AI' },
    ],
  },
  experience: {
    items: [
      {
        role: 'Lập trình viên Full-Stack',
        company: 'MOR Software JSC',
        period: 'Tháng 3/2025 — nay',
        location: 'TP. Hồ Chí Minh',
        summary: 'Gia công phần mềm: năm dự án cho khách hàng, làm việc trực tiếp với khách hàng ở châu Âu và Hà Lan.',
        points: [
          'MainDeck, mạng lưới nghề nghiệp đặt quyền riêng tư lên hàng đầu tại châu Âu (1.900 người dùng): thanh toán gói thuê bao qua Mollie với webhook idempotent, xử lý race condition bằng transaction và khoá dòng, vá lỗ hổng IDOR, mã hoá dữ liệu người dùng bằng CRT-RSA, và thêm index PostgreSQL giúp giảm khoảng 40% thời gian phản hồi của API tìm kiếm bài viết và kết nối.',
          'Modat, nền tảng phân tích mạng (Hà Lan): back-end FastAPI dùng tshark phân tích file capture khoảng 1 triệu gói tin trong 2–3 giây thay vì 15 giây, trả kết quả theo từng phần, và cache trong Redis để lần xem lại nhanh hơn khoảng 80%.',
          'KOKEN, hệ thống quản lý vật tư linh kiện điện tử: chuyển từ CakePHP sang Laravel trên cơ sở dữ liệu MySQL 500GB trong 3 tháng thay vì 6, đối chiếu từng module 1:1 với mã nguồn cũ.',
          'LACO Group, nền tảng truy xuất nguồn gốc sản phẩm đa tenant cho tỉnh Đồng Tháp: microservices .NET cùng ứng dụng web và di động tạo và quét mã QR; báo cáo nặng nhanh hơn khoảng 30% sau khi chuyển truy vấn sang stored procedure và SQL thuần.',
          'WorkLog, theo dõi công việc cho vận hành bất động sản: API ASP.NET Core và mô hình dữ liệu DynamoDB cho ứng dụng .NET MAUI trên macOS, gồm API đồng bộ hàng loạt cho chế độ offline.',
        ],
      },
      {
        role: 'Lập trình viên Full-Stack',
        company: 'Freelance',
        period: 'Tháng 7/2024 — Tháng 1/2025',
        location: 'Làm từ xa',
        summary: 'Hệ thống đặt chỗ, bán hàng và cho thuê cho doanh nghiệp nhỏ, phần lớn trong nhóm bốn người.',
        points: [
          'Đặt bàn nhà hàng: bot Telegram xây bằng n8n kiểm tra bàn trống và tự xác nhận đặt chỗ, cùng hệ thống quản lý đặt bàn nội bộ (NestJS, Next.js) cho khoảng 100 nhân viên.',
          'Stelio, ứng dụng đặt homestay cho iOS và Android (React Native, Flask): đăng nhập Google OAuth 2.0, tìm homestay trên bản đồ OpenStreetMap, theo dõi GPS thời gian thực, và toàn bộ giao diện thiết kế trên Figma.',
          'Car Sales Management và Football Manager: phần mềm desktop WPF (MVVM, SQL Server) cho một đại lý ô tô và một dịch vụ cho thuê sân bóng, có phân quyền theo vai trò, tính lương, và đặt sân không bao giờ bị trùng giờ.',
        ],
      },
      {
        role: 'Thực tập sinh Back-end (.NET)',
        company: 'VNPT',
        period: 'Tháng 4/2024 — Tháng 6/2024',
        location: 'TP. Hồ Chí Minh',
        summary: 'Phát triển back-end cho một nền tảng họp trực tuyến.',
        points: [
          'Làm tính năng đăng nhập bằng mã QR, và tham gia cuộc họp bằng mã QR với cơ chế tự động cho vào, không cần chủ phòng duyệt.',
          'Sửa lỗi ảnh đại diện người dùng không hiển thị trong sơ đồ cuộc họp.',
        ],
      },
    ],
  },
  work: {
    heading: 'Dự án tiêu biểu',
    intro:
      'Ba hệ thống từ dự án khách hàng và dự án cá nhân: thanh toán và dữ liệu riêng tư, phân tích file dung lượng lớn, và quy trình AI mình dùng để làm ra chúng.',
    labels: {
      problem: 'Vấn đề',
      solution: 'Giải pháp',
      decisions: 'Quyết định kỹ thuật',
      outcome: 'Kết quả',
      stack: 'Công nghệ',
      illustration: 'Hình minh hoạ, không phải ảnh chụp sản phẩm',
    },
    projects: [
      {
        id: 'maindeck',
        title: 'MainDeck',
        role: 'Lập trình viên Full-Stack · làm việc trực tiếp với khách hàng',
        summary:
          'Mạng lưới nghề nghiệp đặt quyền riêng tư lên hàng đầu, lưu trữ tại châu Âu, một lựa chọn thay thế LinkedIn với khoảng 1.900 người dùng.',
        problem:
          'Gói trả phí phải được kích hoạt đúng một lần kể cả khi webhook thanh toán bị gửi lại, các request đồng thời có thể gây trừ tiền hai lần hoặc tạo bài viết trùng, một số endpoint cho phép truy cập tài nguyên của người khác, và truy vấn tìm kiếm bài viết, kết nối cần nhanh hơn.',
        solution:
          'Phát triển tính năng từ đầu đến cuối với Next.js và Fastify, và tái cấu trúc back-end thành ba lớp route, service và repository. Tích hợp thanh toán thuê bao Mollie qua webhook, và quét mọi file tải lên bằng ClamAV trước khi lưu.',
        decisions:
          'Xác nhận từng khoản thanh toán với API của Mollie và xử lý webhook bằng idempotency key. Dùng transaction và khoá dòng trong cơ sở dữ liệu để chặn race condition. Mã hoá toàn bộ dữ liệu cá nhân và tài khoản, trừ tên, bằng CRT-RSA trước khi lưu vào cơ sở dữ liệu, với khoá giữ trên server.',
        outcome:
          'Webhook gửi lại không bao giờ kích hoạt gói hai lần, và không còn trừ tiền hai lần hay bài viết trùng. Index kết hợp, tìm ra nhờ EXPLAIN ANALYZE, giảm khoảng 40% thời gian phản hồi của API tìm kiếm bài viết và kết nối; bỏ các index thừa giúp ghi dữ liệu nhanh hơn.',
        stack: ['Next.js', 'TypeScript', 'Fastify', 'PostgreSQL', 'Mollie', 'ClamAV'],
        art: 'social',
        links: [{ label: 'Trang web', href: 'https://maindeck.eu' }],
      },
      {
        id: 'modat',
        title: 'Modat',
        role: 'Lập trình viên Back-end · làm việc trực tiếp với khách hàng',
        summary:
          'Nền tảng cộng tác nơi khoảng 300 người dùng trong 10 cộng đồng và 30 nhóm cùng tải lên và phân tích file capture mạng.',
        problem:
          'Mỗi file capture có khoảng 1 triệu gói tin. Phân tích một file mất khoảng 15 giây, người dùng phải chờ xong cả file mới thấy dữ liệu, và mỗi thành viên trong nhóm lại phải chờ thêm lần nữa. File tải lên cũng cần được sàng lọc mã độc.',
        solution:
          'Back-end FastAPI ba lớp, nhúng tshark của Wireshark để phân tích file capture và lưu lượng FTP, UDP; file tải lên được kiểm tra MIME type và chữ ký file trước khi xử lý.',
        decisions:
          'Trả kết quả về front-end bằng HTTP chunked response để dữ liệu hiện dần. Cache kết quả đã xử lý trong Redis để các thành viên khác trong nhóm mở file đã phân tích gần như tức thì.',
        outcome: 'Thời gian xử lý giảm từ 15 giây xuống 2–3 giây, và lần xem lại phản hồi nhanh hơn khoảng 80%.',
        stack: ['Python', 'FastAPI', 'tshark', 'PostgreSQL', 'Redis', 'Docker'],
        art: 'security',
        links: [{ label: 'Trang của khách hàng', href: 'https://www.modat.io' }],
      },
      {
        id: 'baoos',
        title: 'baoOS',
        role: 'Tác giả & người duy trì',
        summary:
          'Quy trình AI-SDLC cho Claude Code, có cổng kiểm soát và dựa trên artifact, đưa một ticket Jira thành merge request.',
        problem:
          'AI agent viết code hay bỏ bước: viết code trước khi yêu cầu được xem xét hay có kế hoạch, và bỏ qua những quyết định mà codebase đã đưa ra.',
        solution:
          'Một pipeline trong đó agent nhận ticket Jira, xem xét yêu cầu, viết kế hoạch, viết code và mở merge request để người review trước khi merge. Chín giai đoạn (onboard, knowledge, task, plan, implement, test, review, ship, learn), mỗi giai đoạn là một slash command, tạo ra một artifact và chỉ rõ một bước tiếp theo.',
        decisions:
          'Cổng kiểm soát bằng shell script và hook chặn mỗi giai đoạn cho tới khi có artifact tiên quyết. Kho kiến thức riêng cho từng dự án (kiến trúc, quy ước, API, kiểm thử) giữ agent bám sát codebase, và code review được chấm điểm theo bảo mật, hiệu năng, API và dữ liệu.',
        outcome:
          'Tiết kiệm khoảng 20% thời gian phát triển mỗi ticket, và cả đội cũng đang dùng. Với dự án KOKEN không có tài liệu, baoOS dịch ngược mã nguồn cũ thành kho kiến thức trước khi viết code mới, góp phần rút thời gian từ 6 tháng xuống 3.',
        stack: ['Claude Code', 'Jira', 'GitLab', 'Shell', 'Node.js'],
        art: 'agents',
        links: [{ label: 'Mã nguồn', href: '#' }],
      },
    ],
    allLink: 'Xem tất cả dự án',
  },
  archive: {
    title: 'Tất cả dự án',
    intro:
      'Toàn bộ dự án trong CV của mình: dự án khách hàng tại MOR Software, quy trình AI do mình tự xây, và các dự án freelance. Ba dự án trong số đó có bài phân tích chi tiết ở trang chủ.',
    back: 'Quay lại trang chủ',
    caseStudy: 'Đọc bài phân tích',
    stack: 'Công nghệ',
    groups: [
      {
        id: 'mor-software',
        name: 'MOR Software JSC',
        meta: 'Gia công phần mềm · Tháng 3/2025 — nay',
        projects: [
          {
            id: 'maindeck',
            title: 'MainDeck',
            role: 'Lập trình viên Full-Stack · làm việc trực tiếp với khách hàng',
            summary:
              'Mạng lưới nghề nghiệp đặt quyền riêng tư lên hàng đầu, lưu trữ tại châu Âu, một lựa chọn thay thế LinkedIn với khoảng 1.900 người dùng.',
            points: [
              'Phát triển tính năng từ đầu đến cuối, với Next.js ở front-end và REST API bằng Fastify ở back-end, làm việc trực tiếp với khách hàng châu Âu.',
              'Tái cấu trúc back-end thành ba lớp route, service và repository, tách logic nghiệp vụ khỏi truy cập dữ liệu để các module dễ kiểm thử và thay đổi hơn.',
              'Tích hợp thanh toán gói thuê bao Mollie qua webhook, xác nhận trạng thái thanh toán với API của Mollie và xử lý mỗi webhook bằng idempotency key, để webhook gửi lại không bao giờ kích hoạt gói hai lần.',
              'Xử lý race condition trong luồng thanh toán thuê bao và luồng tạo bài viết bằng transaction và khoá dòng trong cơ sở dữ liệu, chặn việc trừ tiền hai lần và bài viết trùng.',
              'Phát hiện và vá lỗ hổng IDOR bằng cách kiểm tra quyền sở hữu tài nguyên ở các endpoint API; thêm quét ClamAV để file nhiễm mã độc bị từ chối trước khi lưu.',
              'Mã hoá toàn bộ dữ liệu cá nhân và tài khoản, trừ tên, bằng CRT-RSA trước khi lưu vào cơ sở dữ liệu, với khoá giữ trên server, đúng với cam kết đặt quyền riêng tư lên hàng đầu của nền tảng.',
              'Tối ưu PostgreSQL bằng EXPLAIN ANALYZE: thêm index kết hợp cho truy vấn tìm kiếm bài viết và kết nối, bỏ các index thừa, giảm khoảng 40% thời gian phản hồi của các API này và giúp ghi dữ liệu nhanh hơn.',
            ],
            stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Fastify', 'PostgreSQL', 'Mollie', 'ClamAV'],
            links: [{ label: 'Trang web', href: 'https://maindeck.eu' }],
          },
          {
            id: 'modat',
            title: 'Modat',
            role: 'Lập trình viên Back-end · làm việc trực tiếp với khách hàng',
            summary:
              'Nền tảng phân tích mạng của khách hàng Hà Lan, nơi các cộng đồng và nhóm cùng tải lên và phân tích file capture mạng.',
            points: [
              'Xây dựng back-end FastAPI ba lớp cho nền tảng gồm 10 cộng đồng, 30 nhóm và khoảng 300 người dùng.',
              'Nhúng Wireshark (tshark) để phân tích file capture khoảng 1 triệu gói tin và lưu lượng FTP, UDP, giảm thời gian xử lý từ 15 giây xuống 2–3 giây.',
              'Trả kết quả phân tích về front-end bằng HTTP chunked response, để người dùng thấy dữ liệu hiện dần thay vì chờ xử lý xong cả file.',
              'Cache kết quả đã xử lý trong Redis, để các thành viên khác trong nhóm mở file đã phân tích gần như tức thì, giảm khoảng 80% thời gian phản hồi ở những lần xem lại.',
              'Kiểm tra file tải lên theo MIME type và chữ ký file để chặn file độc hại trước khi xử lý; làm việc trực tiếp với khách hàng Hà Lan bằng tiếng Anh.',
            ],
            stack: ['Python', 'FastAPI', 'Wireshark/tshark', 'PostgreSQL', 'Redis', 'Docker'],
            links: [{ label: 'Trang của khách hàng', href: 'https://www.modat.io' }],
          },
          {
            id: 'koken',
            title: 'KOKEN',
            role: 'Lập trình viên Full-Stack · làm việc trực tiếp với khách hàng',
            summary: 'Hệ thống quản lý vật tư linh kiện điện tử, chuyển đổi từ CakePHP sang Laravel.',
            points: [
              'Chuyển một hệ thống không có tài liệu, chạy trên cơ sở dữ liệu MySQL 500GB tự vận hành trên AWS EC2, từ CakePHP sang Laravel, rút thời gian từ 6 tháng xuống 3.',
              'Dẫn dắt quy trình chuyển đổi: dùng baoOS dịch ngược mã nguồn cũ thành kho kiến thức (kiến trúc, mô hình dữ liệu, quy tắc nghiệp vụ) trước khi viết code mới.',
              'Chuyển logic cũ thành tài liệu luồng nghiệp vụ và xác nhận từng luồng với khách hàng trước khi làm, phát hiện sớm những quy tắc nghiệp vụ bị hiểu sai.',
              'Đối chiếu từng module đã chuyển 1:1 với mã nguồn cũ, so sánh hành vi và kết quả trên cùng dữ liệu trước khi bàn giao.',
              'Xây dựng các job định kỳ để đồng bộ dữ liệu giữa hệ thống cũ và mới trong giai đoạn chuyển tiếp.',
            ],
            stack: ['PHP', 'CakePHP', 'Laravel', 'MySQL', 'AWS (EC2, S3)', 'Claude Code'],
            links: [],
          },
          {
            id: 'laco-group',
            title: 'LACO Group',
            role: 'Lập trình viên Full-Stack · nhóm 6 người',
            summary: 'Hệ thống truy xuất nguồn gốc sản phẩm cho tỉnh Đồng Tháp.',
            points: [
              'Phát triển nền tảng truy xuất nguồn gốc đa tenant trên kiến trúc microservices, cùng ứng dụng web và di động để tạo và quét mã QR sản phẩm.',
              'Xây dựng bảng log và một trang web xem log riêng, để sự cố trên production được truy vết và tìm ra nguyên nhân nhanh chóng.',
              'Tăng tốc các báo cáo nặng bằng cách thay truy vấn ORM bằng stored procedure và SQL thuần, giảm khoảng 30% thời gian tải.',
              'Trình bày demo cho các bên liên quan của tỉnh Đồng Tháp; phát hành qua CI/CD và duy trì tài liệu API cùng ghi chú phát hành.',
            ],
            stack: ['C#', '.NET Core', 'Microservices', 'ReactJS', 'React Native', 'SQL Server', 'CI/CD'],
            links: [],
          },
          {
            id: 'worklog',
            title: 'WorkLog',
            role: 'Lập trình viên Back-end · nhóm 10 người',
            summary: 'Theo dõi công việc và hoạt động cho vận hành bất động sản.',
            points: [
              'Xây dựng API ASP.NET Core và mô hình dữ liệu DynamoDB cho ứng dụng .NET MAUI trên macOS, theo dõi hoạt động, công việc, thời gian làm việc và nhật ký công việc của các dự án bất động sản.',
              'Xây dựng back-end cho chế độ offline: API đồng bộ hàng loạt nhận các hoạt động ghi lại khi mất mạng và tải lên ngay khi có kết nối trở lại.',
              'Làm API cập nhật trạng thái, tìm kiếm, lọc và lịch sử công việc; sửa lỗi để tăng độ ổn định và hiệu năng.',
            ],
            stack: ['C#', 'ASP.NET Core', '.NET MAUI', 'DynamoDB'],
            links: [],
          },
        ],
      },
      {
        id: 'personal',
        name: 'Dự án cá nhân',
        meta: 'Công cụ mình tự xây, giờ cả đội cùng dùng',
        projects: [
          {
            id: 'baoos',
            title: 'baoOS',
            role: 'Tác giả & người duy trì',
            summary: 'Quy trình AI-SDLC cho Claude Code, có cổng kiểm soát và dựa trên artifact.',
            points: [
              'Xây dựng pipeline trọn vẹn từ Jira đến merge request: agent nhận ticket Jira, xem xét yêu cầu, viết kế hoạch, viết code và mở merge request để người review trước khi merge. Tiết kiệm khoảng 20% thời gian phát triển mỗi ticket, và cả đội cũng đang dùng.',
              'Thiết kế quy trình 9 giai đoạn (onboard, knowledge, task, plan, implement, test, review, ship, learn) dưới dạng slash command: mỗi giai đoạn một lệnh, mỗi lệnh một artifact, và một bước tiếp theo rõ ràng.',
              'Điều phối bằng cổng kiểm soát viết bằng shell script và hook, chặn mỗi giai đoạn cho tới khi có artifact tiên quyết, để AI không thể bỏ bước.',
              'Xây dựng kho kiến thức riêng cho từng dự án (kiến trúc, quy ước, API, kiểm thử) giữ AI bám sát những quyết định codebase đã đưa ra, cùng code review được chấm điểm theo bảo mật, hiệu năng, API và dữ liệu.',
              'Dùng thực tế để rút dự án chuyển đổi KOKEN không có tài liệu (CakePHP sang Laravel) từ 6 tháng xuống 3.',
            ],
            stack: ['Claude Code', 'Jira', 'GitLab', 'Shell', 'Node.js'],
            links: [],
          },
        ],
      },
      {
        id: 'freelance',
        name: 'Freelance',
        meta: 'Làm từ xa · Tháng 7/2024 — Tháng 1/2025',
        projects: [
          {
            id: 'restaurant-booking',
            title: 'Đặt bàn nhà hàng',
            role: 'Lập trình viên Full-Stack',
            summary: 'Bot đặt bàn trên Telegram và hệ thống quản lý đặt bàn nội bộ cho một nhà hàng.',
            points: [
              'Xây dựng bot đặt bàn trên Telegram bằng n8n, nhận yêu cầu đặt bàn, kiểm tra bàn trống qua API back-end và tự động xác nhận đặt chỗ.',
              'Xây dựng hệ thống quản lý đặt bàn nội bộ, với back-end NestJS và front-end Next.js, cho khoảng 100 nhân viên sử dụng.',
            ],
            stack: ['Next.js', 'NestJS', 'n8n', 'Telegram Bot API'],
            links: [],
          },
          {
            id: 'stelio',
            title: 'Stelio',
            role: 'Lập trình viên Full-Stack · nhóm 4 người',
            summary: 'Ứng dụng đặt homestay cho iOS và Android.',
            points: [
              'Xây dựng ứng dụng đặt phòng đa nền tảng bằng React Native với back-end REST bằng Flask, gồm tìm homestay, xem phòng trống, đặt phòng và lịch sử đặt phòng.',
              'Làm đăng nhập Google OAuth 2.0 bên cạnh đăng nhập bằng email, và mã hoá dữ liệu nhạy cảm của người dùng bằng CRT-RSA, giữ khoá trên server để ứng dụng không bao giờ lưu khoá.',
              'Thiết kế Redux store tập trung cho trạng thái đặt phòng, lưu bằng AsyncStorage để phiên làm việc vẫn còn sau khi mở lại ứng dụng.',
              'Tích hợp OpenStreetMap để định vị và tìm homestay trên bản đồ ngay trong ứng dụng, không cần API bản đồ trả phí hay ứng dụng bản đồ bên ngoài.',
              'Làm theo dõi GPS thời gian thực trên iOS và Android: xử lý quyền vị trí trên cả hai nền tảng, cập nhật vị trí người dùng liên tục trên bản đồ, và hiển thị homestay gần đó theo khoảng cách.',
              'Thiết kế toàn bộ UI/UX trên Figma, từ wireframe đến prototype chi tiết, và chỉnh sửa cùng khách hàng qua nhiều vòng.',
            ],
            stack: ['React Native', 'Redux', 'Python', 'Flask', 'Firebase', 'Google OAuth 2.0', 'OpenStreetMap'],
            links: [],
          },
          {
            id: 'car-sales',
            title: 'Car Sales Management',
            role: 'Lập trình viên Full-Stack · nhóm 4 người',
            summary: 'Phần mềm quản lý trên desktop cho một đại lý ô tô, dưới 50 người dùng nội bộ.',
            points: [
              'Xây dựng phần mềm desktop quản lý kho xe, giao dịch bán hàng, khách hàng, nhân viên và tính lương.',
              'Áp dụng MVVM với Command pattern để tách giao diện khỏi logic nghiệp vụ, giúp các màn hình dễ kiểm thử và bảo trì hơn.',
              'Làm chấm công với cập nhật trạng thái thời gian thực, làm dữ liệu đầu vào cho tính lương hằng tháng.',
              'Xây dựng trang quản trị với báo cáo bán hàng và doanh thu, cùng phân quyền theo vai trò cho quản trị viên, nhân viên bán hàng và kế toán.',
              'Mã hoá dữ liệu cá nhân và tài khoản của nhân viên và khách hàng bằng CRT-RSA.',
            ],
            stack: ['C#', '.NET', 'WPF', 'MVVM', 'SQL Server'],
            links: [],
          },
          {
            id: 'football-manager',
            title: 'Football Manager',
            role: 'Lập trình viên Back-end · nhóm 4 người',
            summary: 'Phần mềm quản lý cho thuê sân bóng, dưới 50 người dùng nội bộ.',
            points: [
              'Xây dựng phần lớn back-end, gồm đặt sân và xếp lịch, khách hàng, nhân viên và trả lương.',
              'Làm logic đặt sân có kiểm tra trùng khung giờ, để một sân không bao giờ bị đặt hai lần.',
              'Làm chấm công nhân viên có lưu trữ dữ liệu, và tạo báo cáo thu chi bằng Crystal Reports.',
              'Áp dụng MVVM để giữ logic đặt sân và tính lương ngoài lớp giao diện, để quy tắc nghiệp vụ có thể thay đổi và debug mà không đụng tới màn hình.',
            ],
            stack: ['C#', '.NET', 'WPF', 'MVVM', 'SQL Server', 'Crystal Reports'],
            links: [],
          },
        ],
      },
    ],
  },
  focus: {
    heading: 'Chuyên môn kỹ thuật',
    intro:
      'Phần lớn công việc của mình ở back-end, với .NET, Node.js, Python và PHP; ở front-end mình dùng React, Next.js và React Native. Mỗi mảng bên dưới ghi rõ những dự án thể hiện nó.',
    evidenceLabel: 'Thể hiện ở',
    areas: [
      {
        icon: 'api',
        title: 'Kiến trúc back-end & API',
        body: 'Ba lớp route, service và repository tách logic nghiệp vụ khỏi truy cập dữ liệu; REST API, microservices và đa tenant.',
        evidence: 'MainDeck, Modat, LACO Group',
        tools: ['ASP.NET Core', 'Fastify', 'FastAPI', 'NestJS', 'Laravel'],
      },
      {
        icon: 'db',
        title: 'Cơ sở dữ liệu & toàn vẹn dữ liệu',
        body: 'Transaction, khoá dòng và idempotency key ở những chỗ liên quan đến tiền và dữ liệu trùng; mô hình dữ liệu trên SQL và DynamoDB; đồng bộ dữ liệu giữa hệ thống cũ và mới trong lúc chuyển đổi.',
        evidence: 'MainDeck, KOKEN, WorkLog',
        tools: ['PostgreSQL', 'SQL Server', 'MySQL', 'DynamoDB'],
      },
      {
        icon: 'test',
        title: 'Bảo mật',
        body: 'Kiểm tra quyền sở hữu để chặn IDOR, quét mã độc và kiểm tra chữ ký file khi tải lên, OAuth 2.0, JWT, phân quyền theo vai trò, và mã hoá dữ liệu cá nhân bằng CRT-RSA.',
        evidence: 'MainDeck, Modat, Stelio',
        tools: ['OAuth 2.0', 'JWT', 'RBAC', 'ClamAV'],
      },
      {
        icon: 'perf',
        title: 'Hiệu năng',
        body: 'EXPLAIN ANALYZE và index kết hợp, cache bằng Redis, trả kết quả theo từng phần, và stored procedure ở những chỗ ORM quá chậm.',
        evidence: 'MainDeck, Modat, LACO Group',
        tools: ['EXPLAIN ANALYZE', 'Redis', 'Stored procedures'],
      },
      {
        icon: 'infra',
        title: 'Tự động hoá bằng AI & triển khai',
        body: 'baoOS cho Claude Code (sub-agent, skill, hook, slash command), tự động hoá bằng n8n, và phát hành qua CI/CD với Docker và AWS.',
        evidence: 'baoOS, KOKEN, LACO Group',
        tools: ['Claude Code', 'n8n', 'Docker', 'AWS', 'CI/CD'],
      },
    ],
  },
  education: {
    items: [
      {
        degree: 'Cử nhân Kỹ thuật Phần mềm',
        school: 'Trường Đại học Công nghệ Thông tin (UIT), ĐHQG-HCM',
        period: 'Tháng 9/2020 — Tháng 11/2024',
        notes: 'TP. Hồ Chí Minh',
      },
    ],
    certsTitle: 'Chứng chỉ & giải thưởng',
    certs: [
      { name: 'IELTS', issuer: 'Điểm tổng 5.5', year: '', href: ielts },
      { name: 'Huy chương Đồng', issuer: 'Olympic truyền thống 30/4', year: '2018, 2019' },
    ],
  },
  contact: {
    heading: 'Cùng trò chuyện.',
    body: 'Cách tốt nhất để liên lạc với mình là qua email. Mã nguồn của mình ở GitHub, quá trình làm việc ở LinkedIn.',
    emailLabel: 'Email',
    links: { github: 'GitHub', linkedin: 'LinkedIn', resume: 'CV (PDF)' },
  },

  // Interface text
  sections: {
    about: { title: 'Giới thiệu', blurb: 'Mình là ai và đang hướng tới đâu.', part: 'cái đầu' },
    experience: { title: 'Kinh nghiệm', blurb: 'Những nơi mình đã làm và đã làm gì.', part: 'đôi chân' },
    projects: { title: 'Dự án', blurb: 'Những hệ thống mình đã xây dựng.', part: 'cây cuốc kim cương' },
    skills: { title: 'Kỹ năng', blurb: 'Mình làm được gì, và dự án nào chứng minh.', part: 'thân người' },
    education: { title: 'Học vấn', blurb: 'Bằng cấp, chứng chỉ và giải thưởng.', part: 'khối quặng kim cương' },
    contact: { title: 'Liên hệ', blurb: 'Cách liên lạc với mình.', part: 'tấm biển gỗ' },
  },
  ui: {
    explore: 'Khám phá',
    viewProjects: 'Xem dự án',
    sectionsLabel: 'Các mục',
    hint: 'Chọn một phần của bức tranh để tới mục đó.',
    contents: 'Mục lục',
    moved: 'Mục này giờ nằm trên trang chính.',
    langLabel: 'Ngôn ngữ',
    sceneLabel: 'Các mục của portfolio',
  },
  footer: {
    art: 'Hình pixel được vẽ riêng cho trang này.',
    built: 'Xây dựng bằng Astro.',
  },
};
