import type { Project } from '@/lib/types';

export const birdRelief: Project = {
  slug: 'bird-relief',
  title: 'Bird and Foliage Relief',
  year: '2024',
  medium: 'Clay relief panel',
  scale: 'Approx. 14 in square (36 cm)',
  discipline: 'Sculpture',
  tools: [
    'Moist terracotta studio clay',
    'Rolling pin & depth guide rails',
    'Boxwood carving chisels',
    'Fine incising needles & styluses',
    'Graduated wire loop tools',
    'Damp sea sponge',
  ],
  role: 'Sculptor, compositional bas-relief design, anatomical detailing',
  order: 70,

  summaryShort:
    'Multi-tiered bas-relief panel depicting a native songbird feeding on berry clusters amid dense botanical foliage.',

  summaryLong:
    'A completed high-definition bas-relief panel depicting a native songbird perched among lush botanical foliage, reaching to feed on a cluster of wild berries. Hand-carved in moist studio clay within a square relief plaque, the composition balances deep spatial undercutting with delicate surface texturing across feather tracts and veined leaves.',

  media: [
    {
      src: '/media/bird-relief/01.jpg',
      alt: 'Bird and Foliage Relief — completed clay relief panel',
      caption: 'Bird and Foliage Relief — completed clay relief panel, 2024',
      aspect: 1200 / 1250,
      featured: true,
    },
  ],

  sections: [
    {
      heading: 'Spatial Depth & Tiered Composition',
      body: [
        'Working within a 50mm relief depth, the composition establishes three distinct spatial tiers: a textured background backplate, a middle register of intertwining leaf scrolls and berry stalks, and a high-relief foreground occupied by the arched songbird.',
        'Decisive undercutting beneath the bird’s breast, tail feathers, and major foliage clusters casts deep natural shadows, elevating the focal elements off the substrate and creating dynamic three-dimensional projection under studio light.',
      ],
    },
    {
      heading: 'Botanical Modeling & Feather Texturing',
      body: [
        'The bird’s plumage was articulated using fine-gauge incising tools, transitioning from delicate down on the throat to structured flight feathers along the wing and tail. The bird’s beak is poised mid-action at the berry cluster, capturing an intimate moment of nature.',
        'Fluted leaves with undulating margins frame the central avian figure, guiding the viewer’s eye through rhythmic diagonals that unify the sculptural panel.',
      ],
    },
    {
      heading: 'Spatial Undercutting & Relief Projection',
      body: [
        'Achieving an illusion of infinite atmospheric depth within a 2-inch relief slab required aggressive spatial undercutting behind the primary avian figure and foreground leaves. Beveled loop tools were worked backward beneath clay contours, creating deep pocket shadows that visually detach the songbird from the backplate.',
        'To prevent thin cantilevered clay elements like the berry stems and beak tip from slumping during carving, localized moisture gradients were regulated with micro-dampening paper shields, preserving structural rigidity throughout the detailed incising process.',
      ],
    },
  ],
};
