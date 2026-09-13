import type { Project } from '@/lib/types';

export const sleepingDog: Project = {
  slug: 'sleeping-dog',
  title: 'Sleeping Dog Study',
  year: '2024',
  medium: 'Clay figurative sculpture',
  scale: 'Approx. 24 in (61 cm)',
  discipline: 'Sculpture',
  tools: [
    'Moist studio clay',
    'Timber and wire armature',
    'Serrated loop tools',
    'Boxwood modelling ribs',
    'Directional rakes',
    'Sponge finishing',
  ],
  role: 'Life sculptor, anatomical study, surface texturing',
  order: 90,

  summaryShort:
    'Life-size anatomical study exploring skeletal alignment, resting body mass distribution, and muscular relaxation.',

  summaryLong:
    'An intimate life-size anatomical study exploring animal physiology, skeletal alignment, and passive muscular relaxation in repose. Modelled from direct observation of a resting canine, the sculpture investigates how physical mass settles organically against a ground plane, translating canine softness and bone structure through tactile clay surface modulation.',

  media: [
    {
      src: '/media/sleeping-dog/01.jpg',
      alt: 'Sleeping Dog Study — master elevated three-quarters study in repose',
      caption: 'Sleeping Dog Study — master elevated three-quarters study in repose, 2024',
      aspect: 810 / 405,
      featured: true,
    },
    {
      src: '/media/sleeping-dog/02.jpg',
      alt: 'Sleeping Dog Study — full recumbent lateral profile with hindquarters and tail',
      caption: 'Sleeping Dog Study — full recumbent profile showing relaxed lumbar spine and curled paws, 2024',
      aspect: 905 / 350,
      featured: false,
    },
    {
      src: '/media/sleeping-dog/03.jpg',
      alt: 'Sleeping Dog Study — cranial and forepaw anatomical detail showing sculpted fur texture',
      caption: 'Sleeping Dog Study — anatomical detail of snout, ear folds, and resting forepaws, 2024',
      aspect: 580 / 380,
      featured: false,
    },
    {
      src: '/media/sleeping-dog/04.jpg',
      alt: 'Sleeping Dog Study — low eye-level frontal repose view on turntable base',
      caption: 'Sleeping Dog Study — eye-level frontal repose view on studio turntable board, 2024',
      aspect: 900 / 345,
      featured: false,
    },
    {
      src: '/media/sleeping-dog/05.jpg',
      alt: 'Sleeping Dog Study — studio modeling context and environmental working view',
      caption: 'Sleeping Dog Study — studio modeling context and peer life-sculpting environment, 2024',
      aspect: 960 / 565,
      featured: false,
    },
  ],

  sections: [
    {
      heading: 'Anatomical Observation & Massing',
      body: [
        'The study began with extensive gestural observation analyzing the skeletal mechanics of a curled canine posture. Particular attention was given to the relationship between the ribcage, shoulder blades, and pelvis as they compress against the ground under natural gravity.',
        'Clay was applied in volumetric blocks corresponding to major muscle groups, establishing anatomical landmarks before developing secondary surface forms. The neck fold and resting paws articulate the gradual transition from weight-bearing tension to complete muscular surrender.',
      ],
    },
    {
      heading: 'Surface Texturing & Moisture Control',
      body: [
        'To render the tactile quality of canine fur without compromising anatomical mass, the surface was worked with custom serrated wooden ribs and directional wire rake tools. Sweeping tool marks follow the natural growth grain of the coat, contrasting coarse texturing along the flank with delicate smoothing around the snout and eyelids.',
        'Maintaining moisture equilibrium across the moist clay body over a four-week studio period required calibrated damp-cloth wrapping and localized spraying, ensuring consistent plasticity for delicate facial sculpting and preventing structural cracking.',
      ],
    },
    {
      heading: 'Ground Plane Equilibrium & Muscle Relaxation',
      body: [
        'The study specifically interrogated how gravitational pull acts upon passive animal mass when the skeletal framework is no longer engaged in load-bearing tension. By depressing the ribcage and flattening the flank against the wooden base, the clay body demonstrates physical weight rather than artificial volume.',
        'Fine transitions between the collapsed skin folds beneath the flank and the sharp protrusion of the hip bone establish a tactile rhythm across the sleeping form, grounding the canine figure in a state of authentic organic stillness.',
      ],
    },
  ],
};
