// PLACEHOLDER PROJECT. Replace copy and drop real images into
// public/media/liminal-mass/. Filenames below are already wired up.

import type { Project } from '@/lib/types';

export const liminalMass: Project = {
  slug: 'liminal-mass',
  title: 'Liminal Mass',
  year: '2025',
  medium: 'Digital sculpture, large-format print, projection',
  discipline: 'Sculpture',
  tools: ['Houdini', 'ZBrush', 'Redshift', 'TouchDesigner'],
  role: 'Concept, modelling, look development, installation',
  order: 100,

  summaryShort:
    'A series of digital sculptures that erode along paths no stone possesses.',

  summaryLong:
    'Liminal Mass takes scan data from weathered limestone and drives it through an erosion simulation whose flow directions are authored rather than physical. The stone wears away along curves it has no grain for, producing forms that read as geological until the eye traces a single channel and finds it disobedient. The results were output as three-metre prints and paired with a slow projection that returns the erosion to motion.',

  media: [
    {
      src: '/media/liminal-mass/01.jpg',
      alt: 'Frontal view of the primary Liminal Mass form',
      caption: 'Liminal Mass I, digital sculpture, 2025',
      aspect: 4 / 5,
      featured: true,
    },
    {
      src: '/media/liminal-mass/02.jpg',
      alt: 'Detail of an authored erosion channel',
      caption: 'Detail: channel following an authored flow path',
      aspect: 16 / 9,
    },
    {
      src: '/media/liminal-mass/03.jpg',
      alt: 'Installation view with three-metre print and projection',
      caption: 'Installation view, Graduate Show, 2025',
      aspect: 3 / 2,
    },
    {
      src: '/media/liminal-mass/04.jpg',
      alt: 'Secondary form, side elevation',
      caption: 'Liminal Mass III, side elevation',
      aspect: 1,
    },
  ],

  sections: [
    {
      heading: 'Concept',
      body: [
        'Erosion is legible. Anyone can read a weathered surface and reconstruct roughly what happened to it — which way the water ran, where the grain resisted, how long it took. That legibility is what the work exploits.',
        'By keeping every other signal of authentic geology intact and altering only the flow direction, the piece stays believable far longer than it should. The objection, when it arrives, is precise: not "this is fake" but "this channel is wrong".',
      ],
      media: [
        {
          src: '/media/liminal-mass/concept-01.jpg',
          alt: 'Source photograph of weathered limestone',
          caption: 'Source: weathered limestone, field photograph',
          aspect: 3 / 2,
        },
      ],
    },
    {
      heading: 'Process',
      body: [
        'Source geometry came from photogrammetry of limestone outcrops, cleaned and retopologised to a workable density. A custom Houdini setup replaced the simulation\'s gravity-derived flow field with a hand-authored vector field, drawn as curves over the surface.',
        'Each form went through roughly forty iterations. The useful ones were those where the authored flow was subtle enough to survive a first glance — an early tendency toward dramatic spiralling had to be discarded because it announced itself immediately.',
      ],
      media: [
        {
          src: '/media/liminal-mass/process-01.jpg',
          alt: 'Authored vector field drawn over source geometry',
          caption: 'Authored flow field, Houdini viewport',
          aspect: 16 / 9,
        },
        {
          src: '/media/liminal-mass/process-02.jpg',
          alt: 'Iteration sheet showing forty erosion variants',
          caption: 'Iteration sheet, variants 01 – 40',
          aspect: 16 / 9,
        },
      ],
    },
    {
      heading: 'Material and output',
      body: [
        'Look development targeted print rather than screen. Surface response was tuned under a single raking light so that the print, lit the same way in the gallery, would carry depth without relying on a backlit display.',
        'Three forms were printed at three metres on matte cotton rag and mounted flush to the wall. A fourth was reserved for a projection that plays the erosion back over eleven minutes, slow enough that a viewer notices change only on returning.',
      ],
    },
    {
      heading: 'Outcome',
      body: [
        'Shown in the 2025 Graduate Show and awarded the departmental prize. The authored-flow method developed here became the technical basis for the subsequent Fold Studies series.',
      ],
    },
  ],
};
