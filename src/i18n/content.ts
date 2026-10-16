// Languages, section order and URLs. The site's text itself lives in
// src/data/portfolio.ts; edit that file to change what the site says.
import { en, site, vi } from '../data/portfolio';

export { site };

export type Lang = 'en' | 'vi';

export type Project = {
  id: string;
  title: string;
  year: string;
  role: string;
  summary: string;
  problem: string;
  solution: string;
  decisions: string;
  outcome: string;
  stack: string[];
  art: 'rack' | 'database' | 'pipeline';
  links: { label: string; href: string }[];
};

export type FocusArea = {
  icon: 'api' | 'db' | 'test' | 'perf' | 'infra';
  title: string;
  body: string;
  evidence: string;
  tools: string[];
};

export type Copy = typeof en;

export const copy: Record<Lang, Copy> = { en, vi };

export const sectionOrder = ['about', 'experience', 'projects', 'skills', 'education', 'contact'] as const;

export type SectionId = (typeof sectionOrder)[number];

export const paths: Record<Lang, string> = { en: '/', vi: '/vi/' };

/** URL of a section page (or the overview when no section is given). */
export const href = (lang: Lang, section?: string) => `${paths[lang]}${section ? `${section}/` : ''}`;
