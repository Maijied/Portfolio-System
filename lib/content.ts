// The only place in the app that touches content/ directly.
//
// Every page and print route reads content through these async functions. When
// the admin panel lands, each body becomes a fetch or a database query and no
// component changes. See docs/roadmap.md.

import { artist as localArtist } from '@/content/artist';
import { cvProjectEntries as localCvProjectEntries } from '@/content/cv-projects';
import { cvArtist as localCvArtist, cvProjects as localCvProjects } from '@/content/cv';
import { projects as localProjects } from '@/content/projects';
import { proposal as localProposal } from '@/content/proposal';
import { site as localSite, documents, navigation } from '@/content/site';
import type {
  Artist,
  CvProjectEntry,
  Project,
  Proposal,
  SiteMeta,
  Media,
} from '@/lib/types';

export async function getArtist(): Promise<Artist> {
  return localArtist;
}

/** Real CV profile — print routes and PDFs only. */
export async function getCvArtist(): Promise<Artist> {
  return localCvArtist;
}

/** Projects listed on the CV document. */
export async function getCvProjects(): Promise<Project[]> {
  return [...localCvProjects].sort(
    (a, b) => b.order - a.order || a.title.localeCompare(b.title),
  );
}

/** Compact studio work entries for the one-page CV. */
export async function getCvProjectEntries(): Promise<CvProjectEntry[]> {
  return [...localCvProjectEntries].sort(
    (a, b) => b.order - a.order || a.title.localeCompare(b.title),
  );
}

export async function getSite(): Promise<SiteMeta> {
  return localSite;
}

export async function getNavigation(): Promise<typeof navigation> {
  return navigation;
}

export async function getDocuments(): Promise<typeof documents> {
  return documents;
}

export async function getProjects(): Promise<Project[]> {
  return [...localProjects].sort(
    (a, b) => b.order - a.order || a.title.localeCompare(b.title),
  );
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const all = await getProjects();
  return all.find((project) => project.slug === slug);
}

export async function getProjectSlugs(): Promise<string[]> {
  const all = await getProjects();
  return all.map((project) => project.slug);
}

/** Previous and next in display order, wrapping at both ends. */
export async function getProjectNeighbours(
  slug: string,
): Promise<{ previous: Project; next: Project } | undefined> {
  const all = await getProjects();
  const index = all.findIndex((project) => project.slug === slug);
  if (index === -1 || all.length < 2) return undefined;
  return {
    previous: all[(index - 1 + all.length) % all.length],
    next: all[(index + 1) % all.length],
  };
}

export async function getProposal(): Promise<Proposal> {
  return localProposal;
}

/** The lead image for a project, falling back to the first available. */
export function featuredMedia(project: Project): Media | undefined {
  return project.media.find((item) => item.featured) ?? project.media[0];
}

/** Every image belonging to a project, including those inside sections. */
export function allMedia(project: Project): Media[] {
  return [
    ...project.media,
    ...project.sections.flatMap((section) => section.media ?? []),
  ];
}
