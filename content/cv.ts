import type { Artist, Project } from '@/lib/types';

import { proposalPdfFooter } from '@/content/pdf-meta';
import { studioProjects } from '@/content/studio-projects';

/** Real CV data — used by print routes and PDF generation only. */
export const cvArtist: Artist = {
  name: 'Borshon Mondol',
  title: '3D Artist and Designer',
  studentId: proposalPdfFooter.studentId,
  location: 'Dhaka, Bangladesh',
  email: 'borshonm563@gmail.com',
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/borshon-mondol-7ab4bb436/',
    },
  ],

  bioShort:
    'BFA candidate in 3D Art and Design at Jagannath University with an advanced studio practice bridging figurative sculpture, kinetic-illusion installations, and craft-rooted object making. Specialises in material research, structural armature fabrication, anatomical modelling, and spatial narrative. Experienced in full-cycle project execution—from preparatory analytical drawing and scaled maquette testing to heavy-gauge metal armature construction, resin casting, and exhibition curation. Featured degree installations: The Weave of Memory and the Inner Cage (reclaimed textiles & helical armatures) and The Frozen Liquidity (kinetic suspended acrylic pour).',

  bioLong: [],

  statementShort:
    'I work with materials in motion — paint, thread, metal — and build the instant before they settle. My aim is to make duration visible: not an image of an event, but the event held open for the viewer to measure.',

  statementLong: [
    'My work begins with ordinary studio actions — a pour, a stitch, a fold — and asks what happens when that action is enlarged, suspended, and made permanent. Liquid motion is among the fastest signals we read visually; I borrow that instant and refuse to return it, turning flow into form.',
    'The current degree project, The Frozen Liquidity, reconstructs a paint can pouring red and blue acrylic onto a canvas. Wire armature, adhesive compounds, and layered acrylic build a stream and splash that should be impossible to hold. The viewer should feel, for a moment, that time has stopped — and then notice the engineering that makes the stop possible.',
    'I am trained across painting, craft, and construction. The work sits at the intersection of material experiment and spatial narrative: not a replica of a photograph, but a constructed scene where craft skill and sculptural thinking transform a familiar image into an uncanny physical presence.',
    'What I am after is a specific feeling: recognition that arrives a half-second before the objection. I want the viewer to believe the object first, and only then discover that motion has been held open for them to measure.',
  ],

  education: [
    {
      institution: 'Jagannath University',
      degree: 'Bachelor of Fine Arts, 3D Art and Design',
      location: 'Dhaka, Bangladesh',
      start: 'September 2023',
      end: 'Present',
      focus:
        'Sculptural engineering, spatial installation, material chemistry, anatomical modelling, craft-led 3D design',
      notes: [
        'Faculty Advisor: Mohammad Jahidul Hoque, Assistant Professor.',
        'Coursework: Advanced Armature Engineering, Classical Life Studies, Mold Making, Ceramic Relief.',
      ],
    },
  ],

  exhibitions: [
    {
      title: 'Annual Faculty Art Exhibition',
      venue: 'Faculty of Fine Arts Gallery, Jagannath University',
      location: 'Dhaka',
      year: '2024, 2025',
      kind: 'Group',
    },
    {
      title: 'Departmental 3D Studio Showcase',
      venue: 'Department of 3D Art and Design',
      location: 'Dhaka',
      year: '2023 – 2025',
      kind: 'Group',
    },
  ],
  awards: [],

  skills: [
    {
      label: 'Sculpture',
      items: [
        'Figurative modelling',
        'Animal anatomy',
        'Clay relief',
        'Armature building',
        'Surface texturing',
        'Mixed-media construction',
      ],
    },
    {
      label: 'Carving',
      items: [
        'Plaster and stone carving',
        'Chisel work',
        'Composite inlay',
        'Terracotta surface treatment',
      ],
    },
    {
      label: 'Craft',
      items: [
        'Folk-art painting',
        'Alpana-style ornament',
        'Wood and bamboo craft',
        'Hand embroidery',
        'Jewellery making',
      ],
    },
    {
      label: 'Studio',
      items: [
        'Acrylic and wall painting',
        'Material testing',
        'Maquette development',
        'Documentation photography',
        'Presentation and portfolio preparation',
      ],
    },
  ],

  workshops: [],

  languages: [
    { language: 'Bengali', level: 'Native' },
    { language: 'English', level: 'Fluent' },
  ],

  references: [],
};

export const cvProjects: Project[] = studioProjects;
