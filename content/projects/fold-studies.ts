// PLACEHOLDER PROJECT. Replace copy and drop real images into
// public/media/fold-studies/.

import type { Project } from '@/lib/types';

export const foldStudies: Project = {
  slug: 'fold-studies',
  title: 'Fold Studies',
  year: '2024 – 2025',
  medium: 'Digital sculpture, real-time environment',
  discipline: 'Sculpture',
  tools: ['Blender', 'Houdini', 'Unreal Engine 5', 'Substance 3D Painter'],
  role: 'Concept, simulation, real-time build',
  order: 90,

  summaryShort:
    'Fabric simulations that hold their shape after the force is withdrawn.',

  summaryLong:
    'Fold Studies asks a cloth to remember. Each piece begins as a standard simulation — a heavy fabric dropped over an armature — and is then frozen at the moment of maximum tension before the armature is deleted. What remains is a fold suspended around nothing, keeping a shape whose cause has been removed. Eleven studies were built and assembled into a real-time environment the viewer walks through at their own pace.',

  media: [
    {
      src: '/media/fold-studies/01.jpg',
      alt: 'Fold Study 04, suspended fabric form',
      caption: 'Fold Study 04, 2024',
      aspect: 4 / 5,
      featured: true,
    },
    {
      src: '/media/fold-studies/02.jpg',
      alt: 'Detail of a fold edge where the armature was removed',
      caption: 'Detail: edge condition after armature removal',
      aspect: 3 / 2,
    },
    {
      src: '/media/fold-studies/03.jpg',
      alt: 'Real-time environment, wide view',
      caption: 'Real-time environment, Unreal Engine 5',
      aspect: 16 / 9,
    },
  ],

  sections: [
    {
      heading: 'Concept',
      body: [
        'A fold is a record of a force. Remove the force and the fabric relaxes; the record is lost. The work refuses that relaxation, and in doing so turns a transient event into an object.',
        'The absence at the centre of each piece matters more than the fabric around it. The viewer reconstructs a shape that was never modelled, inferred entirely from the way the cloth wraps a void.',
      ],
    },
    {
      heading: 'Process',
      body: [
        'Simulations ran with deliberately heavy cloth parameters — a fabric closer to canvas than silk — because lighter settings collapsed into forms too generic to hold attention.',
        'Freezing the mesh was straightforward; making the result survive the armature\'s deletion was not. Edges that had been in contact with the removed geometry read as cut rather than draped, and each study required manual sculpting at those boundaries to restore a believable termination.',
      ],
      media: [
        {
          src: '/media/fold-studies/process-01.jpg',
          alt: 'Simulation setup with armature visible',
          caption: 'Simulation setup, armature visible',
          aspect: 16 / 9,
        },
      ],
    },
    {
      heading: 'Real-time build',
      body: [
        'The eleven studies were placed in a single Unreal environment at a scale that puts the largest slightly above eye level. Lighting is fixed and directional; there is no interaction beyond movement.',
        'Navigation speed was capped well below the engine default. Moving slowly forces the viewer to circle each form rather than glance at it, which is when the missing armature becomes noticeable.',
      ],
    },
    {
      heading: 'Outcome',
      body: [
        'Exhibited as a walkthrough at Soft Architectures, 2024. Three studies were later output as prints for the Fold Studies presentation in Chittagong.',
      ],
    },
  ],
};
