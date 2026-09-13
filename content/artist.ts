// Website placeholder content. Real CV and proposal data live in content/cv.ts
// and content/proposal.ts. The public site will be updated later.

import type { Artist } from '@/lib/types';

export const artist: Artist = {
  name: 'Borshon',
  title: '3D Artist and Designer',
  location: 'Dhaka, Bangladesh',
  email: 'hello@example.com',
  phone: '+880 000 000 0000',
  website: 'www.example.com',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'ArtStation', href: 'https://artstation.com/' },
    { label: 'Behance', href: 'https://behance.net/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
  ],

  bioShort:
    'Artist and designer working in digital sculpture, computational form, and spatial installation, with a practice built on the friction between handmade gesture and generated geometry.',

  bioLong: [
    'Borshon is an artist and designer whose practice sits between sculpture and computation. Trained in 3D Art and Design, the work begins with physical observation — a weathered surface, a cast shadow, the way a fabric holds a fold — and translates it into digital geometry that can be pushed past what the original material would tolerate.',
    'The resulting objects are neither renders of imagined things nor documentation of real ones. They occupy a third position: forms that carry the memory of material behaviour while obeying rules no material would accept. This tension is the subject of the work rather than a byproduct of the tools.',
    'Recent projects extend this method into space, using projection, print at architectural scale, and real-time environments to place these forms back into rooms where a body can measure itself against them. The work has been shown in group exhibitions and screenings, and developed through residencies and technical workshops.',
  ],

  statementShort:
    'I make forms that remember material behaviour but refuse material limits. Working from close observation of surfaces, folds, and erosion, I build geometry that is then subjected to computational processes the original substance could never survive, and return the result to physical space so a viewer can measure their own body against it.',

  statementLong: [
    'My work begins with looking closely at how things fail. Erosion, creasing, sagging, fracture — these are the moments where a material admits what it is. I photograph and scan them, not to reproduce them, but to extract the logic underneath.',
    'That logic then goes somewhere the material cannot. In digital space I can ask a fold to continue for a hundred metres, ask a stone to erode along a curve it has no grain for, ask a fabric to hold a shape after the force is removed. The geometry keeps the vocabulary of the physical while breaking its grammar.',
    'I am wary of work that stops at the render. A convincing image of an impossible object is only a trick. So the final move is always back into space — as print at a scale that has to be walked past, as projection that puts the form on a real wall with real dust in the light, as a real-time environment a viewer navigates at their own pace. The work is only finished when a body can stand next to it and find it both familiar and wrong.',
    'What I am ultimately after is a specific feeling: the recognition that arrives a half-second before the objection. I want the viewer to believe the object first, and only then discover it could not exist.',
  ],

  education: [
    {
      institution: 'University of the Arts — PLACEHOLDER',
      degree: 'BFA, 3D Art and Design',
      location: 'Dhaka, Bangladesh',
      start: '2021',
      end: '2025',
      focus: 'Digital sculpture, computational form, spatial installation',
      thesis:
        'Impossible Materials: Computational Form and the Memory of Physical Behaviour',
      notes: [
        'Graduated with distinction — PLACEHOLDER',
        'Departmental award for final-year project — PLACEHOLDER',
      ],
    },
    {
      institution: 'Secondary institution — PLACEHOLDER',
      degree: 'Foundation Diploma, Art and Design',
      location: 'Dhaka, Bangladesh',
      start: '2020',
      end: '2021',
      focus: 'Drawing, material studies, model making',
    },
  ],

  exhibitions: [
    {
      title: 'Liminal Mass',
      venue: 'Graduate Show, University of the Arts',
      location: 'Dhaka',
      year: '2025',
      kind: 'Group',
    },
    {
      title: 'Soft Architectures',
      venue: 'Gallery Placeholder',
      location: 'Dhaka',
      year: '2024',
      kind: 'Group',
    },
    {
      title: 'Render / Refuse',
      venue: 'Online Screening Programme',
      location: 'Online',
      year: '2024',
      kind: 'Screening',
    },
    {
      title: 'Fold Studies',
      venue: 'Project Space Placeholder',
      location: 'Chittagong',
      year: '2023',
      kind: 'Group',
    },
  ],

  awards: [
    {
      title: 'Emerging Digital Artist Award — PLACEHOLDER',
      awarder: 'Awarding Body Placeholder',
      year: '2025',
      note: 'Awarded for the Liminal Mass series.',
    },
    {
      title: 'Departmental Excellence Prize — PLACEHOLDER',
      awarder: 'University of the Arts',
      year: '2025',
    },
    {
      title: 'Student Residency Bursary — PLACEHOLDER',
      awarder: 'Residency Placeholder',
      year: '2024',
    },
  ],

  skills: [
    {
      label: 'Modelling and sculpting',
      items: ['Blender', 'ZBrush', 'Houdini', 'Rhino', 'Grasshopper'],
    },
    {
      label: 'Rendering and look development',
      items: ['Cycles', 'Redshift', 'Octane', 'Substance 3D Painter', 'Marmoset'],
    },
    {
      label: 'Real-time and interactive',
      items: ['Unreal Engine 5', 'Unity', 'TouchDesigner', 'Three.js'],
    },
    {
      label: 'Capture and fabrication',
      items: [
        'Photogrammetry',
        'LiDAR scanning',
        'FDM and resin printing',
        'CNC preparation',
        'Large-format print prep',
      ],
    },
    {
      label: 'Supporting',
      items: ['Python scripting', 'After Effects', 'DaVinci Resolve', 'Figma'],
    },
  ],

  workshops: [
    {
      title: 'Procedural Geometry Intensive — PLACEHOLDER',
      host: 'Workshop Host Placeholder',
      year: '2024',
      role: 'Attendee',
    },
    {
      title: 'Introduction to Photogrammetry — PLACEHOLDER',
      host: 'University of the Arts',
      year: '2024',
      role: 'Facilitator',
    },
    {
      title: 'Real-time Installation Methods — PLACEHOLDER',
      host: 'Workshop Host Placeholder',
      year: '2023',
      role: 'Attendee',
    },
  ],

  languages: [
    { language: 'Bengali', level: 'Native' },
    { language: 'English', level: 'Fluent' },
  ],

  references: [
    {
      name: 'Reference Name — PLACEHOLDER',
      title: 'Course Leader, 3D Art and Design',
      organisation: 'University of the Arts',
      email: 'reference@example.com',
    },
    {
      name: 'Reference Name — PLACEHOLDER',
      title: 'Curator',
      organisation: 'Gallery Placeholder',
      email: 'reference@example.com',
    },
  ],
};
