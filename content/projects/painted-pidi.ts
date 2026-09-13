import type { Project } from '@/lib/types';

export const paintedPidi: Project = {
  slug: 'painted-pidi',
  title: 'Traditional Painted Wooden Panel (Alpana Pidi)',
  year: '2023',
  medium: 'Folk-art surface painting on seasoned wood',
  scale: 'Approx. 18" × 12" × 1.5" (46 cm × 30 cm × 4 cm)',
  discipline: 'Craft & Folk Art',
  tools: [
    'Seasoned hardwood panel (Pidi)',
    'Hand-ground mineral pigments',
    'Acrylic emulsion & enamel paints',
    'Traditional rice-paste (Pithali) Alpana brush',
    'Fine synthetic rigger & script liner brushes',
    'Clear polyurethane protective coat',
  ],
  role: 'Craftsperson, folk surface design, traditional ritual iconography',
  order: 58,

  summaryShort:
    'Traditional Bengali ceremonial wooden seating panel (pidi) embellished with symmetrical Mayur (peacock), sacred Kalka (paisley), and border motifs.',

  summaryLong:
    'A traditional Bengali ceremonial wooden seating board (Alpana Pidi) transformed into a vibrant folk-art heirloom panel. Embellished with sacred white and yellow Alpana motifs on a rich crimson ground, the panel features a majestic central Mayur (peacock) and Kalka (paisley) mandala, framed by floating butterflies and multi-tiered botanical scrollwork borders.',

  media: [
    {
      src: '/media/painted-pidi/01.jpg',
      alt: 'Traditional Painted Wooden Panel (Alpana Pidi) — hand-painted ritual panel with Mayur and Kalka motifs',
      caption: 'Traditional Painted Wooden Panel (Alpana Pidi) — hand-painted ritual panel with Mayur and Kalka motifs, 2023',
      aspect: 600 / 960,
      featured: true,
    },
  ],

  sections: [
    {
      heading: 'Vernacular Iconography & Auspicious Kalka Symmetry',
      body: [
        'The Pidi holds deep ceremonial significance in Bengali cultural heritage, serving as the sacred seat for the bride and groom during Hindu weddings and festive pujas. The central composition features twin Mayur (peacocks) facing inward, their plumage seamlessly merging into ornate Kalka (paisley) forms radiating from a central lotus seedhead rosette.',
        'Paired ceremonial butterflies hover symmetrically in the upper and lower quadrants, symbolizing marital transformation, joy, and the delicate beauty of agrarian natural ecosystems.',
      ],
    },
    {
      heading: 'Hardwood Substrate Preparation & Ground Pigments',
      body: [
        'A seasoned hardwood plank was hand-planed and fine-sanded to eliminate wood grain irregularities while retaining structural density. The substrate was primed with a sealing coat before applying multiple uniform layers of deep vermilion-red enamel ground, creating a brilliant, high-contrast base for intricate surface illumination.',
        'Fine-line Alpana motifs were hand-painted using opaque titanium white and chrome yellow pigments, formulated with balanced binders to ensure crisp edge definition without feathering or bleed into the red background.',
      ],
    },
    {
      heading: 'Multi-Tiered Foliage Margins & Ornamental Rhythm',
      body: [
        'The perimeter of the panel is enclosed within an architectural border structure: an outer wave band of repeating yellow and white leaf scrolls flanked by corner lotuses, bounded by crisp dual white containment rules.',
        'Executed freehand with microscopic brush control, the rhythmic cadence of the border mirrors traditional floor Alpana traditions while achieving the permanence and archival durability of fine decorative woodwork.',
      ],
    },
  ],
};
