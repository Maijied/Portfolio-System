// PLACEHOLDER PROJECT. Replace copy and drop real images into
// public/media/render-refuse/.

import type { Project } from '@/lib/types';

export const renderRefuse: Project = {
  slug: 'render-refuse',
  title: 'Render / Refuse',
  year: '2023 – 2024',
  medium: 'Single-channel video, procedural animation',
  discipline: 'Moving image',
  tools: ['Houdini', 'Blender', 'Redshift', 'DaVinci Resolve'],
  role: 'Concept, animation, edit, sound direction',
  order: 70,

  summaryShort:
    'An eight-minute video in which a rendered object refuses to resolve.',

  summaryLong:
    'Render / Refuse is built from the visual language of the unfinished render — the progressive sampling pass, the missing texture, the geometry that arrives late. Rather than treating these as errors, the video stages them as the object\'s own resistance to being depicted. Over eight minutes the form approaches clarity four times and withdraws, never completing, so the viewer\'s expectation of resolution becomes the actual subject.',

  media: [
    {
      src: '/media/render-refuse/01.jpg',
      alt: 'Still from Render / Refuse showing partial sampling',
      caption: 'Still, 02:14',
      aspect: 16 / 9,
      featured: true,
    },
    {
      src: '/media/render-refuse/02.jpg',
      alt: 'Still showing late-arriving geometry',
      caption: 'Still, 05:41',
      aspect: 16 / 9,
    },
  ],

  sections: [
    {
      heading: 'Concept',
      body: [
        'Everyone who has waited on a render knows the sensation of an image assembling itself. It carries a built-in promise: keep waiting and this will become clear. The work accepts the promise and then breaks it, four times.',
        'The refusal is not framed as failure. The object is not broken; it declines. That distinction is carried entirely by pacing — a broken render stutters, whereas this one withdraws smoothly, on its own terms.',
      ],
    },
    {
      heading: 'Process',
      body: [
        'The sampling noise is authored rather than captured. Real progressive renders converge in a pattern too even to read as intentional, so the noise was rebuilt procedurally with a bias toward the areas the eye is already searching.',
        'Timing was the hardest problem. Early cuts approached resolution too often and the pattern became predictable within three minutes. The final structure spaces the four approaches unevenly, with the longest gap immediately before the last.',
      ],
      media: [
        {
          src: '/media/render-refuse/process-01.jpg',
          alt: 'Timing diagram of the four approaches to resolution',
          caption: 'Structure: four approaches, uneven spacing',
          aspect: 16 / 9,
        },
      ],
    },
    {
      heading: 'Sound',
      body: [
        'Sound was directed rather than composed — a low bed with almost no event, so that the visual withdrawals are not underlined. An earlier version scored the approaches and it flattened them into suspense.',
      ],
    },
    {
      heading: 'Outcome',
      body: [
        'Selected for the Render / Refuse online screening programme, 2024. The procedural noise setup was reused as a look-development tool in later projects.',
      ],
    },
  ],
};
