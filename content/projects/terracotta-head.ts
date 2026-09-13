import type { Project } from '@/lib/types';

export const terracottaHead: Project = {
  slug: 'terracotta-head',
  title: 'Terracotta-Inlay Head Study',
  year: '2024',
  medium: 'Carved composite with terracotta inlay',
  scale: 'Approx. 12 in (30 cm)',
  discipline: 'Sculpture',
  tools: [
    'Plaster composite matrix',
    'Fired terracotta pottery shards',
    'Woodcarving flat chisels & gouges',
    'Turned wooden mallets',
    'Diamond grinding pads & rifflers',
    'Wet-sanding abrasives (120–800 grit)',
  ],
  role: 'Sculptor, direct subtractive carving, composite inlay fabrication',
  order: 65,

  summaryShort:
    'Direct subtractive portrait carving and experimental composite inlay embedding fractured terracotta shards within a stone matrix.',

  summaryLong:
    'An experimental hybrid sculpture investigating material memory, tactile contrast, and subtractive geometry by embedding fractured terracotta ceramic shards into a structural mineral matrix. Once cured, the block was directly carved with steel chisels and mallets into an expressive faceted head, then wet-ground flush to produce a mottled mosaic surface where warm, earthy terracotta fragments interrupt cool composite stone planes.',

  media: [
    {
      src: '/media/terracotta-head/01.jpg',
      alt: 'Terracotta-Inlay Head Study — frontal direct carving and planar study',
      caption: 'Terracotta-Inlay Head Study — frontal direct carving and planar study, 2024',
      aspect: 800 / 1063,
      featured: true,
    },
    {
      src: '/media/terracotta-head/02.jpg',
      alt: 'Terracotta-Inlay Head Study — lateral profile view',
      caption: 'Terracotta-Inlay Head Study — lateral profile view showing ear articulation and neck curvature, 2024',
      aspect: 800 / 1062,
      featured: false,
    },
    {
      src: '/media/terracotta-head/03.jpg',
      alt: 'Terracotta-Inlay Head Study — posterior three-quarters view',
      caption: 'Terracotta-Inlay Head Study — posterior three-quarters view revealing spherical mass and terracotta flecks, 2024',
      aspect: 800 / 1062,
      featured: false,
    },
  ],

  sections: [
    {
      heading: 'Material Dialogue & Ceramic Memory',
      body: [
        'Terracotta is deeply rooted in Bengali cultural history, representing the soil and heritage of rural craft. In this project, fractured shards of discarded terracotta pottery are gathered, selected for curvature and tone, and cast directly into a contemporary plaster-composite block.',
        'The resulting head form acts as an archaeological synthesis: the historical, porous terracotta aggregate is suspended within a modern mineral binder, fusing memory with geometric figurative form.',
      ],
    },
    {
      heading: 'Subtractive Carving & Planar Analysis',
      body: [
        'Direct carving demands irreversible commitment: every chisel strike removes material permanently. The block of cured plaster and stone composite was approached by first squaring off the cranial volume, then systematically roughing out the eye sockets, nasal wedge, and jaw plane with broad flat chisels and mallet strikes.',
        'The faceted geometry draws inspiration from cubist and low-poly visual languages, reducing the complexity of the human face to essential planar relationships that catch light with architectural clarity.',
      ],
    },
    {
      heading: 'Flush Grinding & Mosaic Polishing',
      body: [
        'Carving through composite materials of varying hardness requires careful chisel calibration to prevent the harder terracotta shards from chipping away from the softer matrix. Once blocked out, the surface was planed with coarse diamond rasps.',
        'Progressive wet-sanding from 120 to 800 grit brought both materials to a uniform flush plane, revealing intricate cross-sections of the ceramic shards, speckled mineral aggregate, and smooth textural contrast.',
      ],
    },
  ],
};
