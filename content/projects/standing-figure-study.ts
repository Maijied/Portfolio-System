import type { Project } from '@/lib/types';

export const standingFigureStudy: Project = {
  slug: 'standing-figure-study',
  title: 'Standing Figure Life Study',
  year: '2025',
  medium: 'Watercolor, gouache & graphite on paper',
  scale: 'Approx. 22" × 30" (56 cm × 76 cm)',
  discipline: 'Drawing & Painting',
  tools: [
    'Studio drawing board & binder clips',
    'Heavyweight cartridge paper (300 gsm)',
    'Graphite pencils (HB, 2B, 4B)',
    'Transparent artist watercolors',
    'Opaque gouache',
    'Round sable & flat wash brushes',
    'Photographic reference documentation',
  ],
  role: 'Life painter, observational anatomical study, color mixing',
  order: 92,

  summaryShort:
    'Academic full-figure study from direct observation and photographic reference, exploring contrapposto balance, skin undertones, and fabric draping.',

  summaryLong:
    'An academic observational life study executed in watercolor, gouache, and graphite on drawing board, exploring full-figure human anatomy, contrapposto balance, and daylight color temperature. Rendered from direct model observation supplemented by natural-environment reference photography pinned directly to the working easel, the study translates real-world volume, relaxed weight distribution, and fabric drapery into nuanced chromatic planes.',

  media: [
    {
      src: '/media/standing-figure-study/01.jpg',
      alt: 'Standing Figure Life Study — observational study on drawing board with pinned reference photo',
      caption: 'Standing Figure Life Study — observational study on drawing board with pinned reference, 2025',
      aspect: 725 / 880,
      featured: true,
    },
  ],

  sections: [
    {
      heading: 'Observational Translation & Photographic Reference',
      body: [
        'The studio process paired live observational blocking with a working reference photograph pinned to the drawing board easel. This dual-reference method allowed precise verification of anatomical contours, subtle skin undertones, and outdoor daylight reflections while retaining the spontaneous expressive vitality of direct studio painting.',
        'Graphite preliminary construction lines established the foundational plumb line and proportional grid, ensuring the head-to-body eight-head canon was accurately anchored before wet media application.',
      ],
    },
    {
      heading: 'Contrapposto Posture & Weight Distribution',
      body: [
        'The model adopts a natural standing posture with weight planted firmly on the right leg while the left leg relaxes forward with bent knee. This classic contrapposto posture shifts the pelvic axis diagonally, countered by the angled resting placement of the left arm on the waist.',
        'The anatomical rendering articulates the subtle shift in muscular tension between the taut supporting thigh and the softened calf, capturing organic bodily equilibrium and relaxed modern carriage with convincing physical gravity.',
      ],
    },
    {
      heading: 'Layered Glazes & Pigment Temperature Modulation',
      body: [
        'Flesh tones were developed through layered transparent watercolor glazes, transitioning from warm raw sienna and cadmium red undertones in illuminated planes to cool viridian and cobalt-infused neutral shadows in recessed areas.',
        'Opaque gouache was selectively applied to render the dense fabric texture of the dark tank top and khaki shorts, using dry-brush passes to define fabric folds, waistband tension, and crisp cast shadows across the thighs and footwear.',
      ],
    },
  ],
};
