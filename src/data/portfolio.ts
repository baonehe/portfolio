

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
      'Full-stack developer with 2+ years of experience, focused on back-end APIs, database performance and system migration. Based in Ho Chi Minh City.',
  },
  hero: {
    role: 'Full-Stack Developer',
    location: 'Ho Chi Minh City, Vietnam',
    intro:
      '2+ years building business applications, with a focus on back-end APIs, database performance and system migration. I apply AI-DLC to automate development tasks, reducing the workload per ticket by about 20%.',
  },
  about: {
    heading: 'About',
    lead: 'Full-stack delivery. A back-end focus.',
    body: [
      'I’m a Software Engineering graduate from UIT, VNU-HCM, and a Full-Stack Developer at MOR Software since March 2025. My experience spans client projects, freelance work and a .NET internship at VNPT.',
      'My work covers payment flows, slow database queries and legacy systems. I clarify business rules with clients, implement features across the stack and verify behavior before delivery.',
      'I also built baoOS, an AI-assisted development workflow used by my team. It connects Jira tickets, implementation and merge requests, with explicit checks at each stage and human review before merging.',
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
        summary: 'Contributed to five client projects, including direct collaboration with European clients in English.',
        points: [
          'MainDeck: implemented subscription payments and access checks; reduced search and connection API response time by about 40% through PostgreSQL tuning.',
          'Modat: built a FastAPI back-end and reduced processing time for captures of around 1 million packets from 15s to 2–3s.',
          'KOKEN: led the CakePHP-to-Laravel migration workflow for a system backed by a 500GB MySQL database; verified migrated modules against legacy behavior.',
          'LACO Group and WorkLog: built .NET APIs for traceability and activity tracking, including report optimization and offline data synchronization.',
        ],
      },
      {
        role: 'Full-Stack Developer',
        company: 'Freelance',
        period: 'Jul 2024 — Jan 2025',
        location: 'Remote',
        summary: 'Built booking, sales and rental applications for small businesses, mostly in teams of four.',
        points: [
          'Built a Telegram booking bot and a Next.js/NestJS reservation system used by about 100 staff.',
          'Developed Stelio, a React Native/Flask homestay booking app, with Google sign-in and map search; designed its UI in Figma.',
          'Built WPF business applications with role-based access, payroll and booking-conflict checks.',
        ],
      },
      {
        role: 'Back-end Developer Intern (.NET)',
        company: 'VNPT',
        period: 'Apr 2024 — Jun 2024',
        location: 'Ho Chi Minh City',
        summary: 'Contributed .NET back-end features and bug fixes to a meeting platform.',
        points: [
          'Implemented QR-code sign-in and meeting admission to simplify the guest join flow.',
          'Fixed user-avatar rendering in the meeting diagram.',
        ],
      },
    ],
  },
  work: {
    heading: 'Selected work',
    intro:
      'Three examples of my work: reliable payments, faster network analysis and a repeatable AI-assisted development process.',
    labels: {
      problem: 'Problem',
      solution: 'My contribution',
      decisions: 'Technical approach',
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
          'A professional network hosted in the EU, with about 1,900 users and a focus on privacy.',
        problem:
          'Subscription payments needed reliable retry handling, concurrent requests could create duplicates, and search and connection APIs were slow.',
        solution:
          'Built Next.js and Fastify features, integrated Mollie subscriptions and improved API access checks. Added ClamAV scanning for uploaded files.',
        decisions:
          'Checked payment status with Mollie and used idempotency keys to handle retries. Applied transactions and row locking to concurrent writes; used EXPLAIN ANALYZE to guide PostgreSQL index changes.',
        outcome:
          'Reduced search and connection API response time by about 40%. Fixed duplicate-processing issues in payment and post-creation flows.',
        stack: ['Next.js', 'TypeScript', 'Fastify', 'PostgreSQL', 'Mollie', 'ClamAV'],
        art: 'social',
        links: [{ label: 'Live site', href: 'https://maindeck.eu' }],
      },
      {
        id: 'modat',
        title: 'Modat',
        role: 'Back-end Developer · client-facing',
        summary:
          'A network-analysis platform for about 300 users to upload capture files and review results together.',
        problem:
          'Parsing a capture of around 1 million packets took about 15 seconds. Users waited for the full result, and repeated views triggered more processing.',
        solution:
          'Built the FastAPI back-end and integrated tshark to parse captures and analyze FTP/UDP traffic. Checked upload types and file signatures before processing.',
        decisions:
          'Streamed results in chunks so users could start reading sooner. Cached processed results in Redis so group members could reuse the same analysis.',
        outcome: 'Reduced processing time from 15s to 2–3s for captures of around 1 million packets; repeat-view response time fell by about 80%.',
        stack: ['Python', 'FastAPI', 'tshark', 'PostgreSQL', 'Redis', 'Docker'],
        art: 'security',
        links: [{ label: 'Client website', href: 'https://www.modat.io' }],
      },
      {
        id: 'baoos',
        title: 'baoOS',
        role: 'Creator & maintainer',
        summary: 'An AI-assisted workflow that takes a Jira ticket through planning, implementation and review to a merge request.',
        problem:
          'AI coding needs project context and a consistent process: requirements and plans should be reviewed before implementation begins.',
        solution:
          'Created a nine-stage workflow for Claude Code, with a saved output and a clear next step at each stage. The team uses it to prepare merge requests for human review.',
        decisions:
          'Used shell gates and hooks to check prerequisite outputs before advancing. Added a project knowledge base and review criteria for security, performance, APIs and data.',
        outcome:
          'An estimated 20% reduction in development time per ticket. On KOKEN, the workflow helped document legacy behavior and supported a migration completed in 3 months versus the original 6-month timeline.',
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
      'Client, personal and freelance projects, grouped by context. Each entry describes my role, contribution and technologies; the three featured projects also have case studies.',
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
              'Integrated Mollie subscription payments through webhooks, confirming payment status against the Mollie API and processing each webhook with an idempotency key, to prevent duplicate plan activation on retries.',
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
              'Validated upload formats by MIME type and file signature before processing; worked directly with the Dutch client in English.',
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
              'Built an end-to-end Jira-to-merge-request pipeline: the agent picks up a Jira ticket, reviews the requirement, writes a plan, implements the code and opens a merge request, which a person reviews before merging. It saves an estimated 20% of development time per ticket and is also used by the team.',
              'Designed a 9-stage workflow (onboard, knowledge, task, plan, implement, test, review, ship, learn) exposed as slash commands: one command per stage, one artifact per command, one explicit next step.',
              'Orchestrated it with shell-script gates and hooks that block each stage until its prerequisite artifact exists, to enforce the workflow prerequisites.',
              'Built a per-project knowledge base (architecture, conventions, API, testing) that grounds the AI in decisions the codebase has already made, plus graded code review across security, performance, API and data.',
              'Used it to document legacy behavior and support the KOKEN migration (CakePHP to Laravel), completed in 3 months versus the original 6-month timeline.',
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
              'Implemented booking logic with time-slot conflict checks, to prevent conflicting reservations for the same pitch.',
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
      'Back-end: .NET, Node.js, Python and PHP. Front-end and mobile: React, Next.js and React Native. The examples below connect each skill to project work.',
    evidenceLabel: 'Applied in',
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
    body: 'For a Back-end or Full-Stack role, or a business application project, email me with the scope, your team and the expected timeline. You can also find my work on GitHub and LinkedIn.',
    emailLabel: 'Email',
    links: { github: 'GitHub', linkedin: 'LinkedIn', resume: 'Résumé (PDF)' },
  },

  // Interface text
  sections: {
    about: { title: 'About', blurb: 'My background and how I work.', part: 'the head' },
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
    hint: 'Use the menu or select a label in the scene to explore.',
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
      'Lập trình viên Full-Stack với hơn 2 năm kinh nghiệm, thế mạnh về API, hiệu năng cơ sở dữ liệu và chuyển đổi hệ thống. Làm việc tại TP. Hồ Chí Minh.',
  },
  hero: {
    role: 'Lập trình viên Full-Stack',
    location: 'TP. Hồ Chí Minh, Việt Nam',
    intro:
      'Hơn 2 năm phát triển Full-Stack, thế mạnh ở back-end: xây dựng API, tối ưu cơ sở dữ liệu và chuyển đổi hệ thống. Mình ứng dụng AI-DLC để tự động hoá các bước phát triển phần mềm, giúp giảm khoảng 20% khối lượng công việc mỗi ticket.',
  },
  about: {
    heading: 'Giới thiệu',
    lead: 'Phát triển Full-Stack, chuyên sâu ở back-end.',
    body: [
      'Mình tốt nghiệp ngành Kỹ thuật Phần mềm tại UIT, ĐHQG-HCM và làm Full-Stack Developer tại MOR Software từ tháng 3/2025. Trước đó, mình làm freelance và thực tập .NET tại VNPT.',
      'Công việc của mình tập trung vào luồng thanh toán, truy vấn chậm và hệ thống cũ cần chuyển đổi. Mình làm rõ nghiệp vụ với khách hàng, phát triển cả front-end lẫn back-end và đối chiếu kết quả trước khi bàn giao.',
      'Mình cũng xây dựng baoOS, quy trình phát triển có AI hỗ trợ mà đội đang sử dụng. Công cụ kết nối ticket Jira với bước viết code và tạo merge request, có kiểm tra ở từng giai đoạn và người review trước khi merge.',
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
        summary: 'Tham gia năm dự án khách hàng, trong đó có các dự án làm việc trực tiếp bằng tiếng Anh với khách hàng châu Âu.',
        points: [
          'MainDeck: tích hợp thanh toán thuê bao, bổ sung kiểm tra quyền truy cập; tối ưu PostgreSQL giúp giảm khoảng 40% thời gian phản hồi API tìm kiếm và kết nối.',
          'Modat: xây dựng back-end FastAPI, giảm thời gian phân tích file khoảng 1 triệu gói tin từ 15 giây xuống 2–3 giây.',
          'KOKEN: dẫn dắt quy trình chuyển đổi CakePHP sang Laravel cho hệ thống dùng MySQL 500GB; đối chiếu các module mới với hành vi của hệ thống cũ.',
          'LACO Group và WorkLog: xây dựng API .NET cho truy xuất nguồn gốc và theo dõi công việc, gồm tối ưu báo cáo và đồng bộ dữ liệu offline.',
        ],
      },
      {
        role: 'Lập trình viên Full-Stack',
        company: 'Freelance',
        period: 'Tháng 7/2024 — Tháng 1/2025',
        location: 'Làm từ xa',
        summary: 'Phát triển ứng dụng đặt chỗ, bán hàng và cho thuê cho doanh nghiệp nhỏ, phần lớn trong nhóm bốn người.',
        points: [
          'Xây dựng bot đặt bàn Telegram và hệ thống quản lý đặt chỗ bằng Next.js/NestJS cho khoảng 100 nhân viên.',
          'Phát triển Stelio bằng React Native/Flask: đặt homestay, đăng nhập Google và tìm kiếm trên bản đồ; thiết kế giao diện bằng Figma.',
          'Xây dựng ứng dụng quản lý bằng WPF, có phân quyền, tính lương và kiểm tra trùng lịch đặt chỗ.',
        ],
      },
      {
        role: 'Thực tập sinh Back-end (.NET)',
        company: 'VNPT',
        period: 'Tháng 4/2024 — Tháng 6/2024',
        location: 'TP. Hồ Chí Minh',
        summary: 'Phát triển tính năng back-end .NET và sửa lỗi cho nền tảng họp trực tuyến.',
        points: [
          'Phát triển đăng nhập và tham gia cuộc họp bằng mã QR, giúp đơn giản hoá thao tác cho khách tham dự.',
          'Sửa lỗi hiển thị ảnh đại diện trong sơ đồ cuộc họp.',
        ],
      },
    ],
  },
  work: {
    heading: 'Dự án tiêu biểu',
    intro:
      'Ba dự án thể hiện thế mạnh của mình: xử lý thanh toán, tăng tốc phân tích dữ liệu mạng và xây dựng quy trình phát triển có AI hỗ trợ.',
    labels: {
      problem: 'Vấn đề',
      solution: 'Đóng góp của mình',
      decisions: 'Cách triển khai',
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
          'Mạng lưới nghề nghiệp lưu trữ tại châu Âu, chú trọng quyền riêng tư, với khoảng 1.900 người dùng.',
        problem:
          'Luồng thanh toán cần xử lý đúng khi nhận lại thông báo; các yêu cầu đồng thời có thể tạo dữ liệu trùng. API tìm kiếm và kết nối còn phản hồi chậm.',
        solution:
          'Phát triển tính năng bằng Next.js và Fastify, tích hợp thanh toán thuê bao Mollie và cải thiện kiểm tra quyền truy cập API. Bổ sung quét ClamAV cho file tải lên.',
        decisions:
          'Xác nhận trạng thái thanh toán với Mollie, dùng idempotency key để xử lý thông báo gửi lại. Dùng transaction và khoá dòng cho thao tác ghi đồng thời; dựa vào EXPLAIN ANALYZE để điều chỉnh index PostgreSQL.',
        outcome:
          'Giảm khoảng 40% thời gian phản hồi API tìm kiếm và kết nối. Sửa lỗi xử lý trùng trong luồng thanh toán và tạo bài viết.',
        stack: ['Next.js', 'TypeScript', 'Fastify', 'PostgreSQL', 'Mollie', 'ClamAV'],
        art: 'social',
        links: [{ label: 'Trang web', href: 'https://maindeck.eu' }],
      },
      {
        id: 'modat',
        title: 'Modat',
        role: 'Lập trình viên Back-end · làm việc trực tiếp với khách hàng',
        summary:
          'Nền tảng phân tích mạng cho khoảng 300 người dùng cùng tải lên và xem kết quả từ các file ghi lại lưu lượng mạng.',
        problem:
          'Một file khoảng 1 triệu gói tin mất khoảng 15 giây để phân tích. Người dùng phải chờ toàn bộ kết quả, còn những lần xem lại lại phát sinh xử lý.',
        solution:
          'Xây dựng back-end FastAPI, tích hợp tshark để phân tích file và lưu lượng FTP/UDP. Kiểm tra loại và chữ ký file tải lên trước khi xử lý.',
        decisions:
          'Trả kết quả theo từng phần để người dùng đọc sớm hơn. Lưu kết quả vào Redis để các thành viên trong nhóm dùng lại cùng một lần phân tích.',
        outcome: 'Giảm thời gian xử lý file khoảng 1 triệu gói tin từ 15 giây xuống 2–3 giây; thời gian phản hồi khi xem lại giảm khoảng 80%.',
        stack: ['Python', 'FastAPI', 'tshark', 'PostgreSQL', 'Redis', 'Docker'],
        art: 'security',
        links: [{ label: 'Trang của khách hàng', href: 'https://www.modat.io' }],
      },
      {
        id: 'baoos',
        title: 'baoOS',
        role: 'Tác giả & người duy trì',
        summary:
          'Quy trình dùng AI hỗ trợ đưa ticket Jira qua các bước lập kế hoạch, viết code và kiểm tra để tạo merge request.',
        problem:
          'AI viết code cần hiểu ngữ cảnh dự án và làm theo quy trình: yêu cầu và kế hoạch cần được xem xét trước khi bắt đầu triển khai.',
        solution:
          'Thiết kế quy trình chín giai đoạn cho Claude Code, mỗi bước lưu lại kết quả và chỉ rõ bước tiếp theo. Đội dùng công cụ để chuẩn bị merge request cho người review.',
        decisions:
          'Dùng shell script và hook kiểm tra đầu ra bắt buộc trước khi chuyển bước. Bổ sung kho kiến thức dự án và tiêu chí review về bảo mật, hiệu năng, API và dữ liệu.',
        outcome:
          'Ước tính giảm khoảng 20% thời gian phát triển mỗi ticket. Với KOKEN, công cụ hỗ trợ tài liệu hoá nghiệp vụ cũ và góp phần hoàn thành chuyển đổi trong 3 tháng so với kế hoạch 6 tháng.',
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
      'Các dự án khách hàng, cá nhân và freelance, gồm vai trò, đóng góp và công nghệ mình sử dụng. Ba dự án tiêu biểu có bài phân tích riêng trên trang chủ.',
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
              'Tích hợp thanh toán gói thuê bao Mollie qua webhook, xác nhận trạng thái thanh toán với API của Mollie và xử lý mỗi webhook bằng idempotency key, để tránh kích hoạt gói trùng khi webhook gửi lại.',
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
              'Kiểm tra định dạng file tải lên theo MIME type và chữ ký file trước khi xử lý; làm việc trực tiếp với khách hàng Hà Lan bằng tiếng Anh.',
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
              'Xây dựng pipeline trọn vẹn từ Jira đến merge request: agent nhận ticket Jira, xem xét yêu cầu, viết kế hoạch, viết code và mở merge request để người review trước khi merge. Ước tính tiết kiệm khoảng 20% thời gian phát triển mỗi ticket; đội cũng đang sử dụng.',
              'Thiết kế quy trình 9 giai đoạn (onboard, knowledge, task, plan, implement, test, review, ship, learn) dưới dạng slash command: mỗi giai đoạn một lệnh, mỗi lệnh một artifact, và một bước tiếp theo rõ ràng.',
              'Điều phối bằng cổng kiểm soát viết bằng shell script và hook, chặn mỗi giai đoạn cho tới khi có artifact tiên quyết, để kiểm soát thứ tự thực hiện các bước.',
              'Xây dựng kho kiến thức riêng cho từng dự án (kiến trúc, quy ước, API, kiểm thử) giữ AI bám sát những quyết định codebase đã đưa ra, cùng code review được chấm điểm theo bảo mật, hiệu năng, API và dữ liệu.',
              'Dùng công cụ để tài liệu hoá nghiệp vụ cũ và hỗ trợ chuyển đổi KOKEN (CakePHP sang Laravel), hoàn thành trong 3 tháng so với kế hoạch 6 tháng.',
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
              'Làm logic đặt sân có kiểm tra trùng khung giờ, để ngăn các lượt đặt cùng sân bị trùng giờ.',
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
      'Back-end: .NET, Node.js, Python và PHP. Front-end và di động: React, Next.js và React Native. Mỗi nhóm kỹ năng bên dưới đều gắn với dự án đã thực hiện.',
    evidenceLabel: 'Áp dụng trong',
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
    body: 'Nếu bạn muốn trao đổi về vị trí Back-end, Full-Stack hoặc dự án ứng dụng doanh nghiệp, hãy gửi email kèm mô tả công việc, đội ngũ và thời gian dự kiến. Bạn cũng có thể xem thêm trên GitHub và LinkedIn.',
    emailLabel: 'Email',
    links: { github: 'GitHub', linkedin: 'LinkedIn', resume: 'CV (PDF)' },
  },

  // Interface text
  sections: {
    about: { title: 'Giới thiệu', blurb: 'Nền tảng và cách mình làm việc.', part: 'cái đầu' },
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
    hint: 'Chọn mục trên menu hoặc nhãn trong hình để xem nội dung.',
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
