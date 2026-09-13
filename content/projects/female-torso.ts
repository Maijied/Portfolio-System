import type { Project } from '@/lib/types';

export const femaleTorso: Project = {
  slug: 'female-torso',
  title: 'Female Torso Study',
  year: '2024',
  medium: 'Figurative clay',
  scale: 'Approx. 20 in (51 cm)',
  courseCode: 'FAS-3103',
  discipline: 'Sculpture',
  tools: [
    'Water-based clay',
    'Steel pipe back-iron armature',
    'Plumb line',
    'Anatomical calipers',
    'Boxwood modeling tools',
    'Natural sea sponge',
  ],
  role: 'Life sculptor, classical anatomical study, planar finishing',
  order: 75,

  summaryShort:
    'Classical life-modelling study from direct observation, capturing contrapposto posture, thoracic twist, and weight distribution.',

  summaryLong:
    'A rigorous classical life-modelling study executed from live studio observation, analyzing contrapposto posture, pelvic asymmetry, and subtle spinal torsion. Spanning from the clavicle to the upper thighs, the sculpture investigates the graceful distribution of body weight across load-bearing and relaxed limbs, translating human anatomy into harmonious sculptural form.',

  media: [
    {
      src: '/media/female-torso/01.jpg',
      alt: 'Female Torso Study — frontal life-modelling study and contrapposto balance',
      caption: 'Female Torso Study — frontal life-modelling study and contrapposto balance, 2024',
      aspect: 720 / 1136,
      featured: true,
    },
    {
      src: '/media/female-torso/02.jpg',
      alt: 'Female Torso Study — three-quarters study articulating thoracic twist',
      caption: 'Female Torso Study — three-quarters study articulating thoracic twist and spinal torsion, 2024',
      aspect: 720 / 1102,
      featured: false,
    },
    {
      src: '/media/female-torso/03.jpg',
      alt: 'Female Torso Study — posterior view exploring scapular modeling',
      caption: 'Female Torso Study — posterior view exploring scapular modeling and lumbar alignment, 2024',
      aspect: 720 / 1127,
      featured: false,
    },
  ],

  sections: [
    {
      heading: 'Classical Contrapposto & Balance',
      body: [
        'The study focuses on the dynamic axis of contrapposto: as weight shifts onto the primary standing leg, the pelvic girdle tilts diagonally, countered by an opposing tilt of the shoulder axis to preserve equilibrium. This kinetic S-curve runs through the lumbar spine, activating the entire 20-inch torso.',
        'Accurate placement of key skeletal landmarks—the sternal notch, anterior superior iliac spine, and thoracic cage perimeter—established the foundational proportion before softer fleshy tissues were applied.',
      ],
    },
    {
      heading: 'Surface Modulation & Light Integration',
      body: [
        'Subtle transitions between convex muscular forms and concave planar depressions were continuously verified under single-source raking studio light. Graduated spatula passes and gentle damp-sponge smoothing unified the surface, capturing the soft, elastic tension of human skin.',
        'The truncation of limbs and neck was deliberate, focusing the viewer’s entire attention on the core torso mechanics and the organic interplay of ribcage expansion and abdominal posture.',
      ],
    },
    {
      heading: 'Anatomical Proportion & Caliper Truing',
      body: [
        'Throughout the three-week life-modelling session, proportional accuracy was continuously cross-examined using proportional calipers and plumb lines aligned to the live model. The lateral displacement of the navel and the compression of the waist fold on the weight-bearing hip were calibrated to fraction-of-an-inch tolerances.',
        'This mathematical verification prevented anatomical distortion while preserving the organic vitality of living tissue, establishing an authoritative classical foundation for subsequent contemporary sculptural investigations.',
      ],
    },
  ],
};
