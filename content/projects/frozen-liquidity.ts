import type { Project } from '@/lib/types';

export const frozenLiquidity: Project = {
  slug: 'frozen-liquidity',
  title: 'The Frozen Liquidity',
  year: '2025 – 2026',
  medium: 'Mixed-media sculpture & installation — acrylic, wire armature, adhesive compounds, canvas',
  courseCode: '4102',
  scale: 'Approx. 150 cm height (Cantilever suspended)',
  discipline: 'Sculpture',
  tools: [
    '8mm mild steel rod',
    'Annealed GI wire matrix',
    'High-density epoxy putty (M-Seal)',
    'Multi-viscosity acrylic resins',
    'High-gloss polymer glaze',
    'Stretched cotton canvas',
    'Reinforced wood base',
  ],
  role: 'Concept design, 3D modelling, structural armature engineering, fabrication',
  order: 100,

  summaryShort:
    'A suspended paint can pours red and blue acrylic onto a canvas — the stream and splash held as a single frozen kinetic sculpture.',

  summaryLong:
    'The Frozen Liquidity reconstructs the transient instant when paint leaves a suspended can and impacts a canvas below. Staged as an illusion of fluid kinetics, a weathered metal can hovers unsupported above an easel, pouring an interwoven stream of saturated crimson and cobalt blue pigment that culminates in an explosive, three-dimensional splash. Built around a hidden internal steel cantilever armature, the work explores the threshold between fluid dynamics and sculptural permanence—inviting the viewer to marvel at the engineered impossibility of frozen motion.',

  media: [
    {
      src: '/media/frozen-liquidity/01.jpg',
      alt: 'Photorealistic 3D concept render of The Frozen Liquidity — suspended paint can pouring acrylic onto canvas on studio easel',
      caption: 'The Frozen Liquidity — 3D concept visualisation and studio scale study, 2026',
      aspect: 1920 / 1110,
      featured: true,
    },
  ],

  sections: [
    {
      heading: 'Concept & Temporal Suspension',
      body: [
        'Liquid motion is among the fastest physical signals human vision interprets. In this project, that fleeting instant is captured and held permanently in three dimensions—transforming an everyday studio occurrence into an arresting sculptural event. The title embodies this paradox: liquidity stabilized, kinetic energy crystallized into physical mass.',
        'The chromatic tension between deep cadmium red and ultramarine blue generates an optical velocity that guides the eye from the tilted rim of the vessel down through the twisting vortex and outward into the dynamic crown splash across the white canvas surface.',
      ],
    },
    {
      heading: 'Structural Engineering & Hidden Cantilever',
      body: [
        'Achieving the illusion of a vessel floating unsupported required rigorous structural engineering. The entire upper assembly is anchored by an 8mm high-tensile mild steel rod concealed inside the central stream of paint. This rod is welded to an internal bracket beneath the reinforced MDF baseboard and rises through the canvas to rigidly anchor the interior of the paint can.',
        'An intricate secondary skeleton of 16-gauge and 22-gauge annealed GI wire branches outward from the central rod to support the complex geometry of trailing paint ribbons, turbulent ripples, and suspended splash droplets without external wire bracing or visible supports.',
      ],
    },
    {
      heading: 'Material Synthesis & Surface Glaze',
      body: [
        'Building fluid mass over the metal armature involved applying successive layers of two-part epoxy compound (M-Seal) and high-viscosity polymer adhesives, hand-sculpted while curing to replicate the organic viscosity of flowing paint.',
        'The sculpture was primed and finished with high-pigment acrylics applied through airbrush gradients and fine glazing brushes. Multiple topcoats of crystal-clear polyurethane gloss glaze produce authentic specular highlights and light refraction, giving the cured composite the tactile appearance of freshly poured liquid.',
      ],
    },
  ],
};
