// PLACEHOLDER PROJECT. Replace copy and drop real images into
// public/media/soft-architectures/.

import type { Project } from '@/lib/types';

export const softArchitectures: Project = {
  slug: 'soft-architectures',
  title: 'Soft Architectures',
  year: '2024',
  medium: 'Spatial installation, projection mapping',
  discipline: 'Installation',
  tools: ['Rhino', 'Grasshopper', 'TouchDesigner', 'Blender'],
  role: 'Concept, geometry, projection mapping, install',
  order: 80,

  summaryShort:
    'A room whose corners are dissolved by projected geometry that behaves like textile.',

  summaryLong:
    'Soft Architectures treats a gallery corner as a material that can sag. Projected geometry, mapped precisely to the existing walls, introduces a slow deformation that reads as the room itself losing tension. Nothing physical is added; the entire effect depends on the projection agreeing with the architecture to within a few millimetres, so that when it begins to disagree, the wall rather than the image appears to be at fault.',

  media: [
    {
      src: '/media/soft-architectures/01.jpg',
      alt: 'Projected deformation across a gallery corner',
      caption: 'Soft Architectures, installation view, 2024',
      aspect: 3 / 2,
      featured: true,
    },
    {
      src: '/media/soft-architectures/02.jpg',
      alt: 'Detail of the corner at maximum deformation',
      caption: 'Detail: corner at maximum deformation',
      aspect: 4 / 5,
    },
    {
      src: '/media/soft-architectures/03.jpg',
      alt: 'Calibration grid during setup',
      caption: 'Calibration grid, install day',
      aspect: 16 / 9,
    },
  ],

  sections: [
    {
      heading: 'Concept',
      body: [
        'Architecture asserts rigidity so consistently that we stop registering the claim. The piece withdraws it, quietly, and lets the viewer notice their own surprise.',
        'The decision to add no physical element was central. A sculpted object would locate the strangeness in the object; keeping the room empty locates it in the room, which is where the work wants it.',
      ],
    },
    {
      heading: 'Geometry',
      body: [
        'The corner was surveyed and rebuilt in Rhino to match the as-built condition rather than the plan, which was out by several centimetres. Grasshopper drove a deformation field applied to that rebuilt surface.',
        'Deformation amplitude was tuned to the smallest value that still registered — roughly four centimetres of apparent displacement. Larger values turned the piece into an obvious animation.',
      ],
      media: [
        {
          src: '/media/soft-architectures/geometry-01.jpg',
          alt: 'Grasshopper definition driving the deformation field',
          caption: 'Deformation field definition',
          aspect: 16 / 9,
        },
      ],
    },
    {
      heading: 'Install',
      body: [
        'Two projectors were positioned to eliminate shadowing at the corner itself, the one place a viewer\'s body would otherwise break the illusion. Calibration took the better part of a day and had to be repeated after the room was repainted.',
        'Ambient light was reduced but not removed. Complete darkness read as cinema; leaving a low level of house light kept the space legible as a room.',
      ],
    },
    {
      heading: 'Outcome',
      body: [
        'Shown at Soft Architectures, 2024, alongside the Fold Studies walkthrough. The as-built survey method carried forward into subsequent site-specific work.',
      ],
    },
  ],
};
