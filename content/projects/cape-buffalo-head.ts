import type { Project } from '@/lib/types';

export const capeBuffaloHead: Project = {
  slug: 'cape-buffalo-head',
  title: 'Cape Buffalo Head',
  year: '2024',
  medium: 'Clay bust — animal form',
  scale: 'Approx. 18 in (46 cm)',
  courseCode: 'FAS-3102',
  discipline: 'Sculpture',
  tools: [
    'Terracotta studio clay',
    'Welded steel pipe and timber core',
    'Annealed GI wire mesh',
    'Heavy modeling spatulas',
    'Toothed scrapers',
    'Wire texturing brushes',
  ],
  role: 'Sculptor, structural armature engineering, anatomical modeling',
  order: 85,

  summaryShort:
    'High-relief animal bust analyzing cranial bone architecture and the cantilevered mass of sweeping horn structure.',

  summaryLong:
    'A commanding high-relief animal bust exploring the imposing cranial architecture, horn topology, and muscular mass of the African Cape buffalo. Constructed over an anchored internal armature, the sculpture investigates the dramatic lateral spread and heavy boss of the horns, capturing both brute structural weight and subtle subcutaneous tension.',

  media: [
    {
      src: '/media/cape-buffalo-head/01.jpg',
      alt: 'Cape Buffalo Head — frontal anatomical study',
      caption: 'Cape Buffalo Head — frontal anatomical study, 2024',
      aspect: 960 / 754,
      featured: true,
    },
    {
      src: '/media/cape-buffalo-head/02.jpg',
      alt: 'Cape Buffalo Head — lateral profile study',
      caption: 'Cape Buffalo Head — lateral profile study, 2024',
      aspect: 880 / 832,
      featured: false,
    },
    {
      src: '/media/cape-buffalo-head/03.jpg',
      alt: 'Cape Buffalo Head — three-quarters perspective study',
      caption: 'Cape Buffalo Head — three-quarters perspective study, 2024',
      aspect: 880 / 770,
      featured: false,
    },
  ],

  sections: [
    {
      heading: 'Cranial Architecture & Horn Topology',
      body: [
        'The Cape buffalo presents one of the most formidable structural challenges in animal sculpture: the horn boss forms a continuous helmet of dense keratin across the forehead, with massive horns sweeping downward and outward before hooking upward. The sculpture articulates this continuous bone structure as an integrated architectural arch.',
        'Deeply recessed eye sockets, flared nostrils, and textured skin folds around the heavy dewlap convey the wary alertness characteristic of the species, anchoring the animal’s powerful presence.',
      ],
    },
    {
      heading: 'Armature Construction & Surface Carving',
      body: [
        'Because of the dramatic 18-inch cantilevered horn span, a rigid central steel pipe and timber core was constructed and wrapped in wire mesh to provide essential structural purchase for the heavy clay.',
        'The horn surfaces were deeply furrowed using toothed steel scrapers to replicate growth rings and weathered battle striations, while the facial plane was rendered through broad, muscular spatula strokes that catch directional raking light.',
      ],
    },
    {
      heading: 'Keratin Striations & Raking Light Modulation',
      body: [
        'The massive sweeping horns required directional surface articulation to simulate dense, compacted layers of keratin accumulated over decades of physical combat and weathering. Serrated steel tools and fine wire combs were drawn along the horn curvature, engraving concentric growth rings.',
        'Under focused single-source studio illumination, these micro-grooves cast fine shadow bands across the cantilevered horns, contrasting against the broad, planar bone planes of the central cranial shield and emphasizing the animal’s defensive power.',
      ],
    },
  ],
};
