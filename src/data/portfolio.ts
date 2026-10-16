// All of the site's text lives here: who you are, your projects, experience,
// education and contact details, in English (`en`) and Vietnamese (`vi`).
// Edit this file to change what the site says; no component needs touching.
//
// - Text inside [square brackets] is placeholder content and renders with the
//   placeholder highlight until you replace it (brackets included).
// - `vi` mirrors `en` field for field; TypeScript flags anything missing.
// - Interface text (section names, buttons, hints) sits at the end of each
//   language block.

import type { FocusArea, Project } from '../i18n/content';

export const site = {
  // Set to false once every [placeholder] has been replaced with real content.
  draft: true,
  name: '[Your Name]',
  initials: '[YN]',
  email: '[you@example.com]',
  links: {
    github: '#',
    linkedin: '#',
    resume: '#',
  },
};

// ─── English ────────────────────────────────────────────────────────────────

export const en = {
  meta: {
    title: `${site.name} — Backend Engineer`,
    description: '[One-sentence description of you for search engines and link previews.]',
  },
  hero: {
    role: 'Backend Engineer',
    location: '[City], Vietnam',
    status: '[Open to new roles & freelance work]',
    intro:
      '[Two sentences about what you build and what you care about. For example: the kind of systems you work on, and the quality you hold them to.]',
  },
  about: {
    heading: 'About',
    lead: '[A one-sentence statement about the kind of engineer you are.]',
    body: [
      '[Background: where you started, what you studied, how you got into backend work.]',
      '[Now: what you work on today and what you are getting better at.]',
      '[Outside work: one or two real interests.]',
    ],
    facts: [
      { label: 'Based in', value: '[City], Vietnam' },
      { label: 'Experience', value: '[3] years' },
      { label: 'Currently', value: '[Role at Company]' },
      { label: 'Next', value: '[Career direction]' },
    ],
  },
  experience: {
    items: [
      {
        role: '[Backend Engineer]',
        company: '[Company A]',
        period: '[2023 — now]',
        location: '[City]',
        summary: '[One line on the team and the product you work on.]',
        points: ['[What you own or built — real scope only.]', '[A result you can stand behind.]'],
      },
      {
        role: '[Backend Engineer]',
        company: '[Company B]',
        period: '[2021 — 2023]',
        location: '[City]',
        summary: '[One line on the team and the product you worked on.]',
        points: ['[What you owned or built.]', '[A result you can stand behind.]'],
      },
      {
        role: '[Junior Developer / Intern]',
        company: '[Company C]',
        period: '[2020 — 2021]',
        location: '[City]',
        summary: '[One line on where you started.]',
        points: ['[What you learned or shipped.]'],
      },
    ],
  },
  work: {
    heading: 'Selected work',
    intro: '[One line framing the projects below — what connects them.]',
    labels: {
      problem: 'Problem',
      solution: 'Solution',
      decisions: 'Key decisions',
      outcome: 'Outcome',
      stack: 'Stack',
      illustration: 'Illustration, not a product screenshot',
    },
    // `art` picks the pixel illustration: 'rack' | 'database' | 'pipeline'.
    projects: [
      {
        id: 'project-one',
        title: '[Project One]',
        year: '[2025]',
        role: '[Backend lead]',
        summary: '[One sentence: what this system does and for whom.]',
        problem: '[What was broken, slow, or missing — and who felt it.]',
        solution: '[What you built, in plain terms.]',
        decisions: '[The two or three technical choices that mattered, and why you made them.]',
        outcome: '[What changed afterwards. Only real numbers — leave qualitative if none.]',
        stack: ['[Go]', '[PostgreSQL]', '[Redis]', '[Docker]'],
        art: 'rack',
        links: [{ label: 'Repository', href: '#' }],
      },
      {
        id: 'project-two',
        title: '[Project Two]',
        year: '[2024]',
        role: '[Backend engineer]',
        summary: '[One sentence: what this system does and for whom.]',
        problem: '[What was broken, slow, or missing — and who felt it.]',
        solution: '[What you built, in plain terms.]',
        decisions: '[The two or three technical choices that mattered, and why you made them.]',
        outcome: '[What changed afterwards. Only real numbers — leave qualitative if none.]',
        stack: ['[Node.js]', '[MySQL]', '[Kafka]'],
        art: 'database',
        links: [{ label: 'Case study', href: '#' }],
      },
      {
        id: 'project-three',
        title: '[Project Three]',
        year: '[2023]',
        role: '[Side project]',
        summary: '[One sentence: what this system does and for whom.]',
        problem: '[What was broken, slow, or missing — and who felt it.]',
        solution: '[What you built, in plain terms.]',
        decisions: '[The two or three technical choices that mattered, and why you made them.]',
        outcome: '[What changed afterwards. Only real numbers — leave qualitative if none.]',
        stack: ['[Python]', '[RabbitMQ]', '[AWS]'],
        art: 'pipeline',
        links: [{ label: 'Repository', href: '#' }],
      },
    ] satisfies Project[],
  },
  focus: {
    heading: 'Engineering focus',
    intro: '[A short paragraph on how you approach backend work. Only list areas you can point to real work for.]',
    evidenceLabel: 'Seen in',
    // `icon` picks the pixel icon: 'api' | 'db' | 'test' | 'perf' | 'infra'.
    areas: [
      {
        icon: 'api',
        title: 'API design & architecture',
        body: '[How you design interfaces between services and clients.]',
        evidence: '[Project One]',
        tools: ['[REST]', '[gRPC]', '[OpenAPI]'],
      },
      {
        icon: 'db',
        title: 'Databases & data modeling',
        body: '[Schemas, migrations, query tuning — what you actually do.]',
        evidence: '[Project Two]',
        tools: ['[PostgreSQL]', '[Redis]'],
      },
      {
        icon: 'test',
        title: 'Testing & reliability',
        body: '[Your testing habits and how you keep systems up.]',
        evidence: '[Project One]',
        tools: ['[Integration tests]', '[Observability]'],
      },
      {
        icon: 'perf',
        title: 'Performance & scalability',
        body: '[Profiling, caching, load — with real context.]',
        evidence: '[Project Three]',
        tools: ['[Caching]', '[Queues]'],
      },
      {
        icon: 'infra',
        title: 'Infrastructure & tooling',
        body: '[CI/CD, containers, cloud — the parts you own.]',
        evidence: '[Project Three]',
        tools: ['[Docker]', '[GitHub Actions]'],
      },
    ] satisfies FocusArea[],
  },
  education: {
    items: [
      {
        degree: '[B.Sc. in Computer Science]',
        school: '[University name]',
        period: '[2016 — 2020]',
        notes: '[Thesis, relevant coursework or honours — only if real.]',
      },
    ],
    certsTitle: 'Certificates & courses',
    certs: [
      { name: '[Certificate name]', issuer: '[Issuer]', year: '[2024]' },
      { name: '[Course name]', issuer: '[Platform]', year: '[2023]' },
    ],
  },
  contact: {
    heading: "Let's talk.",
    body: '[One line on what kind of conversations you welcome — roles, freelance projects, or a chat about backend work.]',
    emailLabel: 'Email',
    links: { github: 'GitHub', linkedin: 'LinkedIn', resume: 'Résumé (PDF)' },
  },

  // Interface text
  sections: {
    about: { title: 'About', blurb: 'Who I am and where I’m headed.', part: 'the head' },
    experience: { title: 'Experience', blurb: 'Where I’ve worked and what I did there.', part: 'the legs' },
    projects: { title: 'Projects', blurb: 'Selected systems I’ve built.', part: 'the diamond pickaxe' },
    skills: { title: 'Skills', blurb: 'The backend work I can back up.', part: 'the body' },
    education: { title: 'Education', blurb: 'Degrees, courses and certificates.', part: 'the diamond ore' },
    contact: { title: 'Contact', blurb: 'How to reach me.', part: 'the wooden sign' },
  },
  ui: {
    explore: 'Explore',
    viewProjects: 'View projects',
    sectionsLabel: 'Sections',
    hint: 'Pick a part of the picture to zoom in.',
    overview: 'Overview',
    next: 'Next',
    langLabel: 'Language',
    sceneLabel: 'Portfolio sections',
  },
  draftNotice: 'Draft layout — text in brackets is placeholder content.',
  footer: {
    art: 'Pixel art drawn for this site.',
    built: 'Built with Astro.',
  },
};

// ─── Tiếng Việt ─────────────────────────────────────────────────────────────

export const vi: typeof en = {
  meta: {
    title: `${site.name} — Kỹ sư Backend`,
    description: '[Một câu giới thiệu bạn cho công cụ tìm kiếm và bản xem trước liên kết.]',
  },
  hero: {
    role: 'Kỹ sư Backend',
    location: '[Thành phố], Việt Nam',
    status: '[Sẵn sàng cho công việc mới & dự án freelance]',
    intro:
      '[Hai câu về những gì bạn xây dựng và điều bạn quan tâm. Ví dụ: loại hệ thống bạn làm, và tiêu chuẩn chất lượng bạn theo đuổi.]',
  },
  about: {
    heading: 'Giới thiệu',
    lead: '[Một câu khẳng định bạn là kiểu kỹ sư như thế nào.]',
    body: [
      '[Xuất phát điểm: bạn bắt đầu từ đâu, học gì, đến với backend thế nào.]',
      '[Hiện tại: bạn đang làm gì và đang giỏi lên ở mảng nào.]',
      '[Ngoài công việc: một hai sở thích thật.]',
    ],
    facts: [
      { label: 'Sống tại', value: '[Thành phố], Việt Nam' },
      { label: 'Kinh nghiệm', value: '[3] năm' },
      { label: 'Hiện tại', value: '[Vị trí tại Công ty]' },
      { label: 'Định hướng', value: '[Hướng phát triển]' },
    ],
  },
  experience: {
    items: [
      {
        role: '[Kỹ sư Backend]',
        company: '[Công ty A]',
        period: '[2023 — nay]',
        location: '[Thành phố]',
        summary: '[Một dòng về đội ngũ và sản phẩm bạn làm.]',
        points: ['[Việc bạn phụ trách hoặc kết quả có thật.]', '[Việc bạn phụ trách hoặc kết quả có thật.]'],
      },
      {
        role: '[Kỹ sư Backend]',
        company: '[Công ty B]',
        period: '[2021 — 2023]',
        location: '[Thành phố]',
        summary: '[Một dòng về đội ngũ và sản phẩm bạn làm.]',
        points: ['[Việc bạn phụ trách hoặc kết quả có thật.]', '[Việc bạn phụ trách hoặc kết quả có thật.]'],
      },
      {
        role: '[Lập trình viên junior / Thực tập]',
        company: '[Công ty C]',
        period: '[2020 — 2021]',
        location: '[Thành phố]',
        summary: '[Một dòng về đội ngũ và sản phẩm bạn làm.]',
        points: ['[Việc bạn phụ trách hoặc kết quả có thật.]'],
      },
    ],
  },
  work: {
    heading: 'Dự án tiêu biểu',
    intro: '[Một dòng giới thiệu điểm chung của các dự án bên dưới.]',
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
        id: 'project-one',
        title: '[Dự án Một]',
        year: '[2025]',
        role: '[Trưởng nhóm backend]',
        summary: '[Một câu: hệ thống này làm gì và cho ai.]',
        problem: '[Điều gì đang hỏng, chậm hoặc thiếu — và ai bị ảnh hưởng.]',
        solution: '[Bạn đã xây dựng gì, nói đơn giản.]',
        decisions: '[Hai hoặc ba lựa chọn kỹ thuật quan trọng, và lý do.]',
        outcome: '[Điều gì thay đổi sau đó. Chỉ dùng số liệu thật — không có thì mô tả định tính.]',
        stack: ['[Go]', '[PostgreSQL]', '[Redis]', '[Docker]'],
        art: 'rack',
        links: [{ label: 'Mã nguồn', href: '#' }],
      },
      {
        id: 'project-two',
        title: '[Dự án Hai]',
        year: '[2024]',
        role: '[Kỹ sư backend]',
        summary: '[Một câu: hệ thống này làm gì và cho ai.]',
        problem: '[Điều gì đang hỏng, chậm hoặc thiếu — và ai bị ảnh hưởng.]',
        solution: '[Bạn đã xây dựng gì, nói đơn giản.]',
        decisions: '[Hai hoặc ba lựa chọn kỹ thuật quan trọng, và lý do.]',
        outcome: '[Điều gì thay đổi sau đó. Chỉ dùng số liệu thật — không có thì mô tả định tính.]',
        stack: ['[Node.js]', '[MySQL]', '[Kafka]'],
        art: 'database',
        links: [{ label: 'Chi tiết dự án', href: '#' }],
      },
      {
        id: 'project-three',
        title: '[Dự án Ba]',
        year: '[2023]',
        role: '[Dự án cá nhân]',
        summary: '[Một câu: hệ thống này làm gì và cho ai.]',
        problem: '[Điều gì đang hỏng, chậm hoặc thiếu — và ai bị ảnh hưởng.]',
        solution: '[Bạn đã xây dựng gì, nói đơn giản.]',
        decisions: '[Hai hoặc ba lựa chọn kỹ thuật quan trọng, và lý do.]',
        outcome: '[Điều gì thay đổi sau đó. Chỉ dùng số liệu thật — không có thì mô tả định tính.]',
        stack: ['[Python]', '[RabbitMQ]', '[AWS]'],
        art: 'pipeline',
        links: [{ label: 'Mã nguồn', href: '#' }],
      },
    ],
  },
  focus: {
    heading: 'Chuyên môn kỹ thuật',
    intro: '[Một đoạn ngắn về cách bạn tiếp cận công việc backend. Chỉ liệt kê mảng bạn có dự án thật để chứng minh.]',
    evidenceLabel: 'Thể hiện ở',
    areas: [
      {
        icon: 'api',
        title: 'Thiết kế API & kiến trúc',
        body: '[Cách bạn thiết kế giao tiếp giữa các service và client.]',
        evidence: '[Dự án Một]',
        tools: ['[REST]', '[gRPC]', '[OpenAPI]'],
      },
      {
        icon: 'db',
        title: 'Cơ sở dữ liệu & mô hình dữ liệu',
        body: '[Schema, migration, tối ưu truy vấn — những gì bạn thực sự làm.]',
        evidence: '[Dự án Hai]',
        tools: ['[PostgreSQL]', '[Redis]'],
      },
      {
        icon: 'test',
        title: 'Kiểm thử & độ tin cậy',
        body: '[Thói quen kiểm thử và cách bạn giữ hệ thống ổn định.]',
        evidence: '[Dự án Một]',
        tools: ['[Integration test]', '[Observability]'],
      },
      {
        icon: 'perf',
        title: 'Hiệu năng & khả năng mở rộng',
        body: '[Profiling, cache, tải — kèm bối cảnh thật.]',
        evidence: '[Dự án Ba]',
        tools: ['[Caching]', '[Queues]'],
      },
      {
        icon: 'infra',
        title: 'Hạ tầng & công cụ',
        body: '[CI/CD, container, cloud — phần bạn trực tiếp phụ trách.]',
        evidence: '[Dự án Ba]',
        tools: ['[Docker]', '[GitHub Actions]'],
      },
    ],
  },
  education: {
    items: [
      {
        degree: '[Cử nhân Khoa học Máy tính]',
        school: '[Tên trường]',
        period: '[2016 — 2020]',
        notes: '[Đề tài tốt nghiệp, môn học liên quan hoặc thành tích — chỉ khi có thật.]',
      },
    ],
    certsTitle: 'Chứng chỉ & khoá học',
    certs: [
      { name: '[Tên chứng chỉ]', issuer: '[Đơn vị cấp]', year: '[2024]' },
      { name: '[Tên khoá học]', issuer: '[Nền tảng]', year: '[2023]' },
    ],
  },
  contact: {
    heading: 'Cùng trò chuyện.',
    body: '[Một dòng về những cuộc trò chuyện bạn chào đón — cơ hội việc làm, dự án freelance, hay chuyện backend.]',
    emailLabel: 'Email',
    links: { github: 'GitHub', linkedin: 'LinkedIn', resume: 'CV (PDF)' },
  },

  // Interface text
  sections: {
    about: { title: 'Giới thiệu', blurb: 'Mình là ai và đang hướng tới đâu.', part: 'cái đầu' },
    experience: { title: 'Kinh nghiệm', blurb: 'Những nơi mình đã làm và đã làm gì.', part: 'đôi chân' },
    projects: { title: 'Dự án', blurb: 'Những hệ thống mình đã xây dựng.', part: 'cây cuốc kim cương' },
    skills: { title: 'Kỹ năng', blurb: 'Mảng backend mình có thể chứng minh.', part: 'thân người' },
    education: { title: 'Học vấn', blurb: 'Bằng cấp, khoá học và chứng chỉ.', part: 'khối quặng kim cương' },
    contact: { title: 'Liên hệ', blurb: 'Cách liên lạc với mình.', part: 'tấm biển gỗ' },
  },
  ui: {
    explore: 'Khám phá',
    viewProjects: 'Xem dự án',
    sectionsLabel: 'Các mục',
    hint: 'Chọn một phần của bức tranh để phóng to.',
    overview: 'Tổng quan',
    next: 'Tiếp theo',
    langLabel: 'Ngôn ngữ',
    sceneLabel: 'Các mục của portfolio',
  },
  draftNotice: 'Bản nháp bố cục — chữ trong ngoặc vuông là nội dung tạm.',
  footer: {
    art: 'Hình pixel được vẽ riêng cho trang này.',
    built: 'Xây dựng bằng Astro.',
  },
};
