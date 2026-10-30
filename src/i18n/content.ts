// Languages, section order and URLs. The site's text itself lives in
// src/data/portfolio.ts; edit that file to change what the site says.
import { en, site, vi } from '../data/portfolio';

export { site };

export type Lang = 'en' | 'vi';

export type Project = {
  id: string;
  title: string;
  role: string;
  summary: string;
  problem: string;
  solution: string;
  decisions: string;
  outcome: string;
  stack: string[];
  art: 'social' | 'security' | 'agents';
  links: { label: string; href: string }[];
};

export type FocusArea = {
  icon: 'api' | 'db' | 'test' | 'perf' | 'infra';
  title: string;
  body: string;
  evidence: string;
  tools: string[];
};

/** One entry on the all-projects page: what it was, what I did, with what. */
export type ArchiveProject = {
  /** Matches a home-page case study's id when there is one, which then gets linked. */
  id: string;
  title: string;
  role: string;
  summary: string;
  points: string[];
  stack: string[];
  links: { label: string; href: string }[];
};

/** Projects grouped by where they were done (an employer, freelance, my own). */
export type ProjectGroup = {
  id: string;
  name: string;
  meta: string;
  projects: ArchiveProject[];
};

export type Cert = {
  name: string;
  issuer: string;
  /** May be empty when the date isn't worth showing. */
  year: string;
  /** Link to the certificate itself, if there is one to show. */
  href?: string;
};

export type Copy = typeof en;

export const copy: Record<Lang, Copy> = { en, vi };

export const sectionOrder = ['about', 'projects', 'experience', 'skills', 'education', 'contact'] as const;

export type SectionId = (typeof sectionOrder)[number];

/** Site base path (e.g. '/portfolio' on GitHub Pages), without a trailing slash. */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export const paths: Record<Lang, string> = { en: `${BASE}/`, vi: `${BASE}/vi/` };

/** URL of a section on the main page (or the page itself when no section is given). */
export const href = (lang: Lang, section?: string) => `${paths[lang]}${section ? `#${section}` : ''}`;

/** The page listing every project, in full. */
export const projectsPaths: Record<Lang, string> = { en: `${BASE}/projects/`, vi: `${BASE}/vi/projects/` };

/** Where each section lived before the site became one page; these URLs now redirect. */
export const legacyHref = (lang: Lang, section: string) => `${paths[lang]}${section}/`;
