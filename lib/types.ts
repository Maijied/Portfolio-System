// Content model for the site, the portfolio PDF, the CV, and the proposal.
// Everything the artist publishes is described by these types, so adding a CMS
// later means matching this shape rather than reworking the pages.

export type Media = {
  /** Path relative to /public, e.g. /media/liminal-mass/01.jpg */
  src: string;
  alt: string;
  caption?: string;
  /** width / height. Drives the placeholder box and the layout reservation. */
  aspect: number;
  /** Marks the lead image used on the work index and as the case-study opener. */
  featured?: boolean;
};

export type ProjectSection = {
  heading: string;
  body: string[];
  media?: Media[];
};

export type Project = {
  slug: string;
  title: string;
  /** Displayed under the title, e.g. "2025" or "2023 – 2024". */
  year: string;
  /** e.g. "Digital sculpture, real-time render". */
  medium: string;
  /** Course or studio assignment code when applicable. */
  courseCode?: string;
  /** Maximum dimension note for assessment or display. */
  scale?: string;
  /** Short discipline label used for filtering, e.g. "Sculpture". */
  discipline: string;
  tools: string[];
  role?: string;
  /** One line. Used on the CV and as the index hover line. */
  summaryShort: string;
  /** 60 to 90 words. Used on the work index and the portfolio PDF contents. */
  summaryLong: string;
  sections: ProjectSection[];
  media: Media[];
  /** Higher numbers sort first. Lets the artist promote work without renaming. */
  order: number;
};

export type EducationEntry = {
  institution: string;
  degree: string;
  location: string;
  start: string;
  end: string;
  focus?: string;
  thesis?: string;
  notes?: string[];
};

export type Exhibition = {
  title: string;
  venue: string;
  location: string;
  year: string;
  kind: 'Solo' | 'Group' | 'Screening' | 'Online';
};

export type Award = {
  title: string;
  awarder: string;
  year: string;
  note?: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Workshop = {
  title: string;
  host: string;
  year: string;
  role: 'Attendee' | 'Facilitator' | 'Speaker';
};

export type Reference = {
  name: string;
  title: string;
  organisation: string;
  email?: string;
};

export type Artist = {
  name: string;
  /** e.g. "3D Artist and Designer". Sits under the name everywhere. */
  title: string;
  /** University roll or registration number — used on formal documents. */
  studentId?: string;
  location: string;
  email: string;
  phone?: string;
  website?: string;
  socials: { label: string; href: string }[];
  /** One or two sentences. CV header and meta description. */
  bioShort: string;
  /** Paragraphs. About page and portfolio PDF opener. */
  bioLong: string[];
  /** One paragraph condensation of the statement, for the CV. */
  statementShort: string;
  /** Paragraphs. The full artist statement. */
  statementLong: string[];
  education: EducationEntry[];
  exhibitions: Exhibition[];
  awards: Award[];
  skills: SkillGroup[];
  workshops: Workshop[];
  languages: { language: string; level: string }[];
  references: Reference[];
};

export type CvProjectEntry = {
  slug: string;
  title: string;
  medium: string;
  year: string;
  /** Course or studio assignment code, e.g. 4102 or FAS-3102. */
  courseCode?: string;
  /** Primary description line for CV and portfolio. */
  detail: string;
  /** Secondary technical or methodological description line for professional CV. */
  secondaryDetail?: string;
  /** Maximum dimension for assessment compliance. */
  scale?: string;
  order: number;
};

export type ProposalBudgetLine = {
  item: string;
  detail: string;
  qty?: string;
  rate?: string;
  amount: string;
};

export type ProposalPhase = {
  phase: string;
  duration: string;
  activities: string[];
  deliverable: string;
};

export type ProposalParty = {
  name: string;
  title?: string;
  department: string;
  institution: string;
  studentId?: string;
};

export type Proposal = {
  title: string;
  subtitle: string;
  /** Course or project code, e.g. 4102. */
  code: string;
  /** Who the proposal is addressed to (summary line). */
  addressedTo: string;
  submittedTo: ProposalParty;
  submittedBy: ProposalParty;
  /** Maximum overall sculpture dimensions for assessment compliance. */
  maxDimensions: string;
  date: string;
  conceptImage?: {
    src: string;
    alt: string;
    caption: string;
  };
  abstract: string[];
  context: string[];
  aims: string[];
  methodology: { heading: string; body: string[] }[];
  timeline: ProposalPhase[];
  budget: { lines: ProposalBudgetLine[]; total: string; note?: string };
  outcomes: string[];
  evaluation: string[];
  bibliography?: string[];
};

export type SiteMeta = {
  title: string;
  description: string;
  /** Absolute origin, used for canonical URLs and Open Graph. */
  url: string;
};
