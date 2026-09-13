import type { Project } from '@/lib/types';

export const ceremonialVessel: Project = {
  slug: 'ceremonial-vessel',
  title: 'Ceremonial Painted Vessel',
  year: '2023',
  medium: 'Wood craft with ornamental painting',
  scale: 'Approx. 8 in (20 cm)',
  discipline: 'Craft & Folk Art',
  tools: [
    'Turned hardwood vessel',
    'Wood turning lathe',
    'Shellac sealer',
    'Mineral acrylic pigments',
    'Burnished gold leaf',
    'Micro-liner brushes',
    'Hand-rubbed lacquer',
  ],
  role: 'Craftsperson, wood turnery, ceremonial decorative painting',
  order: 50,

  summaryShort:
    'Turned wooden ceremonial vessel decorated with traditional folk portraits and continuous geometric rhythmic bands.',

  summaryLong:
    'A hand-turned wooden ceremonial vessel embellished with intricate folk-art portraiture, gold leaf accents, and continuous geometric rhythmic registers. Exploring cylindrical narrative composition, the vessel unites traditional lathe craftsmanship with ceremonial decorative painting, evoking the heirloom spiritual vessels of South Asian folk culture.',

  media: [
    {
      src: '/media/ceremonial-vessel/01.jpg',
      alt: 'Ceremonial Painted Vessel — hand-painted turned wooden object',
      caption: 'Ceremonial Painted Vessel — hand-painted turned wooden object, 2023',
      aspect: 886 / 1178,
      featured: true,
    },
  ],

  sections: [
    {
      heading: 'Cylindrical Narrative & Turnery',
      body: [
        'Unlike flat panels, a cylindrical vessel demands a continuous 360-degree narrative composition. As the vessel is rotated, panoramic decorative registers unfold, featuring stylized folk figures, protective eye motifs, and interlocking botanical tendrils.',
        'The wooden vessel was turned on a studio lathe to achieve balanced, classical proportions—featuring a weighted base, graceful swelling waist, and flared collar suited for ceremonial rituals.',
      ],
    },
    {
      heading: 'Pigment Application & Gilding',
      body: [
        'The sanded hardwood was sealed with bleached shellac to prevent grain raising before applying saturated mineral pigments. A traditional palette of deep crimson, Indian yellow, and carbon black establishes bold cultural resonance.',
        'Select ornamental highlights were gilded with fine burnished gold leaf, sealed under multiple coats of hand-rubbed protective lacquer to produce a warm, heirloom tactile sheen.',
      ],
    },
    {
      heading: 'Rotational Symmetry & Continuous Border Iconography',
      body: [
        'Maintaining visual balance across a curved, tapering wooden circumference required calculating proportional division lines prior to brushwork. The vessel was indexed on a rotary turntable, establishing equidistant vertical registers that subdivide the surface into rhythmic visual chapters.',
        'Fine-line border bands featuring stylized lotus bud repeats and running wave motifs anchor the upper lip and pedestal base, visually framing the central ceremonial figures and establishing harmonious unity between the lathe-turned vessel profile and its painted narrative.',
      ],
    },
  ],
};
