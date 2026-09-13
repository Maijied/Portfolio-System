import type { Project } from '@/lib/types';

export const tonalLifeStudies: Project = {
  slug: 'tonal-life-studies',
  title: 'Academic Life Studies on Toned Paper',
  year: '2025',
  medium: 'Charcoal & white chalk on toned kraft paper',
  scale: 'Approx. 5 ft × 3.5 ft (150 cm × 105 cm)',
  discipline: 'Drawing & Anatomy',
  tools: [
    'Heavy brown kraft paper (toned ground)',
    'Vine & willow charcoal',
    'Compressed charcoal pencils (2B–6B)',
    'White calcium carbonate chalk',
    'Kneaded rubber erasers',
    'Blending tortillons & chamois cloth',
    'Aerosol fixative',
  ],
  role: 'Life draughtsman, anatomical research, chiaroscuro study',
  order: 95,

  summaryShort:
    'Monumental academic life drawings analyzing skeletal anatomy, chiaroscuro planes, and dramatic sculptural foreshortening on toned kraft paper.',

  summaryLong:
    'A suite of monumental academic life drawings executed on heavy toned kraft paper, investigating the human figure through dramatic chiaroscuro, structural foreshortening, and classical anatomical massing. Drawn from direct studio observation of live models, the studies exploit the mid-tone brown substrate as an active anatomical value, pushing deep compressed charcoal into deep recesses while pulling forward muscular planes with bold white chalk highlights.',

  media: [
    {
      src: '/media/tonal-life-studies/01.jpg',
      alt: 'Academic Life Studies on Toned Paper — seated chiaroscuro life study on wooden chair',
      caption: 'Academic Life Studies on Toned Paper — seated chiaroscuro life study on wooden chair, 2025',
      aspect: 720 / 1080,
      featured: true,
    },
    {
      src: '/media/tonal-life-studies/02.jpg',
      alt: 'Academic Life Studies on Toned Paper — standing harvest figure study with basket',
      caption: 'Academic Life Studies on Toned Paper — standing harvest figure study with basket, 2025',
      aspect: 720 / 1080,
      featured: false,
    },
    {
      src: '/media/tonal-life-studies/03.jpg',
      alt: 'Academic Life Studies on Toned Paper — seated male patient study with IV drip and sandals',
      caption: 'Academic Life Studies on Toned Paper — seated male patient study with IV drip and sandals, 2025',
      aspect: 720 / 1350,
      featured: false,
    },
    {
      src: '/media/tonal-life-studies/04.jpg',
      alt: 'Academic Life Studies on Toned Paper — panoramic exhibition wall view',
      caption: 'Academic Life Studies on Toned Paper — panoramic exhibition wall view of academic life studies on toned paper, 2025',
      aspect: 1280 / 1060,
      featured: false,
    },
  ],

  sections: [
    {
      heading: 'Chiaroscuro Modeling & Anatomical Massing',
      body: [
        'The primary study analyzes a seated female model positioned in an asymmetrical, crossed-limb posture atop a wooden studio chair. By treating the human body as an interlocking architecture of skeletal wedges and muscular volumes, the drawing avoids superficial contour tracing in favor of decisive volumetric massing.',
        'Deep charcoal values sculpt the torso and deep pelvis recesses, while dramatic raking illumination carves out the sharp planar edges of the clavicle, thigh, and contracted forearm, establishing immediate sculptural presence on a monumental two-dimensional plane.',
      ],
    },
    {
      heading: 'Toned Kraft Ground & Specular White Chalk',
      body: [
        'Working on mid-tone industrial kraft paper fundamentally reorients the draughtsman’s tonal hierarchy: rather than building shadows on white paper, the toned ground provides the true anatomical half-tone. Dark values are pushed downward into deep shadow using compressed charcoal, while light is constructed additively with pure white chalk.',
        'White chalk is deployed selectively across high-projection anatomical landmarks—the forehead plane, zygomatic ridge, crest of the knee, and shin bone—creating intense specular radiance that makes the seated figure advance dramatically toward the viewer.',
      ],
    },
    {
      heading: 'Seated Contrapposto & Planar Foreshortening',
      body: [
        'The complex crossed-leg posture introduces severe foreshortening challenges where the lower limb projects directly toward the viewer’s eye. Precise tonal calibration of overlapping edge contours prevents spatial collapse, using aerial perspective and progressive contrast shifts to establish undeniable depth.',
        'The companion study of a standing peasant woman carrying a harvest basket explores dynamic physical exertion and textile drapery folds, demonstrating versatility across static meditative repose and active agrarian posture.',
      ],
    },
  ],
};
