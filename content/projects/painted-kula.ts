import type { Project } from '@/lib/types';

export const paintedKula: Project = {
  slug: 'painted-kula',
  title: 'Painted Winnowing Tray (Kula)',
  year: '2023',
  medium: 'Folk-art surface painting on bamboo',
  scale: 'Approx. 16 in (41 cm)',
  discipline: 'Craft & Folk Art',
  tools: [
    'Woven bamboo kula tray',
    'Chalk and animal-glue gesso primer',
    'Traditional natural pigments',
    'Acrylic gouache',
    'Fine sable brushes',
    'Clear protective varnish',
  ],
  role: 'Craftsperson, folk surface design, traditional Alpana painting',
  order: 55,

  summaryShort:
    'Traditional Bengali ceremonial craft object reimagined with a central fine-line bridal portrait and border iconography.',

  summaryLong:
    'A traditional Bengali bamboo winnowing tray (kula) transformed into a vibrant cultural canvas. Featuring an ornamental bridal portrait framed by sacred Alpana floral patterns and symbolic geometric borders, the work celebrates indigenous agrarian craft while elevating vernacular decorative traditions into contemporary fine-art display.',

  media: [
    {
      src: '/media/painted-kula/01.jpg',
      alt: 'Painted Winnowing Tray (Kula) — traditional ceremonial folk painting',
      caption: 'Painted Winnowing Tray (Kula) — traditional ceremonial folk painting, 2023',
      aspect: 886 / 1178,
      featured: true,
    },
  ],

  sections: [
    {
      heading: 'Heritage Craft & Vernacular Identity',
      body: [
        'The kula is an indispensable object in rural Bengali households, used for threshing grain and honored in auspicious wedding rituals (Gaaye Holud). By adopting this agrarian tool as a painting support, the project pays homage to feminine domestic traditions and heritage folk visual language.',
        'The central portrait depicts a radiant traditional bride adorned in vermilion and gold jewellery, rendered in bold contour lines and expressive stylized eyes evocative of classic Kalighat and Patachitra traditions.',
      ],
    },
    {
      heading: 'Substrate Preparation & Alpana Detailing',
      body: [
        'Woven bamboo presents an irregular, textured surface requiring extensive priming. Multiple layers of chalk gesso mixed with binder were hand-applied and wet-sanded to create a flexible, smooth painting ground without obscuring the underlying bamboo weave.',
        'The surrounding borders feature intricate hand-painted Alpana motifs—paisleys (kalka), lotus petals, and rhythmic geometric bands—executed with microscopic brush control in an authentic crimson, yellow-ochre, and titanium white palette.',
      ],
    },
    {
      heading: 'Sacred Iconography & Protective Lacquer Layering',
      body: [
        'The ornamental motifs surrounding the bridal portrait draw upon centuries-old ritual symbols: the Kalka (paisley) representing fertility and life-force, the blooming lotus signifying spiritual purity, and serrated geometric border chevrons denoting domestic protection in traditional Bengali rites.',
        'Upon completing the intricate gouache detailing, the porous surface was sealed beneath three successive coats of hand-rubbed clear satin lacquer. This protective treatment enhances color saturation—deepening the vermilion red and illuminating the titanium white linework—while shielding the fragile bamboo substrate from humidity.',
      ],
    },
  ],
};
