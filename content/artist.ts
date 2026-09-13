import type { Artist } from '@/lib/types';

import { proposalPdfFooter } from '@/content/pdf-meta';

export const artist: Artist = {
  name: 'Borshon Mondol',
  title: '3D Artist and Designer',
  studentId: proposalPdfFooter.studentId,
  location: 'Dhaka, Bangladesh',
  email: 'borshonm563@gmail.com',
  website: 'https://borshon.lorapok.tech',
  socials: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/borshon-mondol-7ab4bb436/',
    },
  ],

  bioShort:
    'BFA candidate in 3D Art and Design at Jagannath University with an advanced studio practice bridging figurative sculpture, kinetic-illusion installations, and craft-rooted object making. Specialises in material research, structural armature fabrication, anatomical modelling, and spatial narrative.',

  bioLong: [
    'Borshon Mondol is a 3D artist and sculptor based in Dhaka, Bangladesh, currently pursuing a Bachelor of Fine Arts in 3D Art and Design at Jagannath University. His practice bridges classical figurative modelling, experimental spatial installation, and indigenous craft traditions.',
    'Working across clay, plaster, terracotta, wood, and metal armature engineering, his projects investigate the tension between handmade gesture and structural balance. His work explores moments of suspended duration—freezing dynamic physical processes into permanent sculptural presence.',
    'Notable studio investigations include figurative life studies, animal anatomical sculpture (such as the Cape Buffalo head and Terracotta studies), and kinetic-illusion installations such as The Frozen Liquidity and The Weave of Memory. His work has been exhibited at the Annual Faculty Art Exhibition and Departmental Studio Showcases at Jagannath University.',
  ],

  statementShort:
    'I work with materials in motion — paint, clay, thread, metal — and build the instant before they settle. My aim is to make duration visible: not an image of an event, but the event held open for the viewer to measure.',

  statementLong: [
    'My work begins with ordinary studio actions — a pour, a stitch, a fold — and asks what happens when that action is enlarged, suspended, and made permanent. Liquid motion and physical gesture are among the fastest signals we read visually; I borrow that instant and refuse to return it, turning flow into form.',
    'In degree investigations such as The Frozen Liquidity, I reconstruct dynamic paint flows onto canvas using wire armatures, adhesive compounds, and layered acrylic to build streams and splashes that should be physically impossible to hold. The viewer feels that time has stopped, then observes the structural engineering making that suspension real.',
    'Trained across sculpture, painting, and craft, my work sits at the intersection of rigorous material experiment and spatial narrative: transforming observational insight into an uncanny, tactile physical presence.',
    'What I am after is a specific feeling: recognition that arrives a half-second before objection. I want the viewer to believe the object first, and only then discover that motion has been held open for them to measure.',
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
      venue: 'Department of 3D Art and Design, Jagannath University',
      location: 'Dhaka',
      year: '2023 – 2025',
      kind: 'Group',
    },
  ],

  awards: [],

  skills: [
    {
      label: 'Sculpture & Modelling',
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
      label: 'Carving & Moulding',
      items: [
        'Plaster and stone carving',
        'Chisel work',
        'Composite inlay',
        'Terracotta surface treatment',
        'Plaster waste moulds',
      ],
    },
    {
      label: 'Craft & Heritage',
      items: [
        'Folk-art painting',
        'Alpana-style ornament',
        'Wood and bamboo craft',
        'Hand embroidery',
        'Jewellery making',
      ],
    },
    {
      label: 'Studio & Digital Practice',
      items: [
        'Acrylic and wall painting',
        'Material testing',
        'Maquette development',
        'Documentation photography',
        'Presentation & 3D visualization',
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
