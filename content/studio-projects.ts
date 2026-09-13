import { cvProjectEntries } from '@/content/cv-projects';
import { frozenLiquidity } from '@/content/projects/frozen-liquidity';
import { weaveOfMemory } from '@/content/projects/weave-of-memory';
import type { Media, Project, ProjectSection } from '@/lib/types';

interface ProjectDetailContent {
  discipline: string;
  tools: string[];
  role: string;
  summaryLong: string;
  sections: ProjectSection[];
}

const detailedProjectContent: Record<string, ProjectDetailContent> = {
  'sleeping-dog': {
    discipline: 'Sculpture',
    tools: [
      'Moist studio clay',
      'Timber and wire armature',
      'Serrated loop tools',
      'Boxwood modelling ribs',
      'Directional rakes',
      'Sponge finishing',
    ],
    role: 'Life sculptor, anatomical study, surface texturing',
    summaryLong:
      'An intimate life-size anatomical study exploring animal physiology, skeletal alignment, and passive muscular relaxation in repose. Modelled from direct observation of a resting canine, the sculpture investigates how physical mass settles organically against a ground plane, translating canine softness and bone structure through tactile clay surface modulation.',
    sections: [
      {
        heading: 'Anatomical Observation & Massing',
        body: [
          'The study began with extensive gestural observation analyzing the skeletal mechanics of a curled canine posture. Particular attention was given to the relationship between the ribcage, shoulder blades, and pelvis as they compress against the ground under natural gravity.',
          'Clay was applied in volumetric blocks corresponding to major muscle groups, establishing anatomical landmarks before developing secondary surface forms. The neck fold and resting paws articulate the gradual transition from weight-bearing tension to complete muscular surrender.',
        ],
      },
      {
        heading: 'Surface Texturing & Moisture Control',
        body: [
          'To render the tactile quality of canine fur without compromising anatomical mass, the surface was worked with custom serrated wooden ribs and directional wire rake tools. Sweeping tool marks follow the natural growth grain of the coat, contrasting coarse texturing along the flank with delicate smoothing around the snout and eyelids.',
          'Maintaining moisture equilibrium across the moist clay body over a four-week studio period required calibrated damp-cloth wrapping and localized spraying, ensuring consistent plasticity for delicate facial sculpting and preventing structural cracking.',
        ],
      },
      {
        heading: 'Ground Plane Equilibrium & Muscle Relaxation',
        body: [
          'The study specifically interrogated how gravitational pull acts upon passive animal mass when the skeletal framework is no longer engaged in load-bearing tension. By depressing the ribcage and flattening the flank against the wooden base, the clay body demonstrates physical weight rather than artificial volume.',
          'Fine transitions between the collapsed skin folds beneath the flank and the sharp protrusion of the hip bone establish a tactile rhythm across the sleeping form, grounding the canine figure in a state of authentic organic stillness.',
        ],
      },
    ],
  },
  'cape-buffalo-head': {
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
    summaryLong:
      'A commanding high-relief animal bust exploring the imposing cranial architecture, horn topology, and muscular mass of the African Cape buffalo. Constructed over an anchored internal armature, the sculpture investigates the dramatic lateral spread and heavy boss of the horns, capturing both brute structural weight and subtle subcutaneous tension.',
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
  },
  'female-torso': {
    discipline: 'Sculpture',
    tools: [
      'Water-based clay',
      'Steel pipe back-iron armature',
      'Plumb line',
      'Anatomical calipers',
      'Boxwood modeling tools',
      'Natural sea sponge',
    ],
    role: 'Life sculptor, classical anatomical study, planar finishing',
    summaryLong:
      'A rigorous classical life-modelling study executed from live studio observation, analyzing contrapposto posture, pelvic asymmetry, and subtle spinal torsion. Spanning from the clavicle to the upper thighs, the sculpture investigates the graceful distribution of body weight across load-bearing and relaxed limbs, translating human anatomy into harmonious sculptural form.',
    sections: [
      {
        heading: 'Classical Contrapposto & Balance',
        body: [
          'The study focuses on the dynamic axis of contrapposto: as weight shifts onto the primary standing leg, the pelvic girdle tilts diagonally, countered by an opposing tilt of the shoulder axis to preserve equilibrium. This kinetic S-curve runs through the lumbar spine, activating the entire 20-inch torso.',
          'Accurate placement of key skeletal landmarks—the sternal notch, anterior superior iliac spine, and thoracic cage perimeter—established the foundational proportion before softer fleshy tissues were applied.',
        ],
      },
      {
        heading: 'Surface Modulation & Light Integration',
        body: [
          'Subtle transitions between convex muscular forms and concave planar depressions were continuously verified under single-source raking studio light. Graduated spatula passes and gentle damp-sponge smoothing unified the surface, capturing the soft, elastic tension of human skin.',
          'The truncation of limbs and neck was deliberate, focusing the viewer’s entire attention on the core torso mechanics and the organic interplay of ribcage expansion and abdominal posture.',
        ],
      },
      {
        heading: 'Anatomical Proportion & Caliper Truing',
        body: [
          'Throughout the three-week life-modelling session, proportional accuracy was continuously cross-examined using proportional calipers and plumb lines aligned to the live model. The lateral displacement of the navel and the compression of the waist fold on the weight-bearing hip were calibrated to fraction-of-an-inch tolerances.',
          'This mathematical verification prevented anatomical distortion while preserving the organic vitality of living tissue, establishing an authoritative classical foundation for subsequent contemporary sculptural investigations.',
        ],
      },
    ],
  },
  'bird-relief': {
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
    summaryLong:
      'A completed high-definition bas-relief panel depicting a native songbird perched among lush botanical foliage, reaching to feed on a cluster of wild berries. Hand-carved in moist studio clay within a square relief plaque, the composition balances deep spatial undercutting with delicate surface texturing across feather tracts and veined leaves.',
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
  },
  'terracotta-head': {
    discipline: 'Sculpture',
    tools: [
      'Plaster composite matrix',
      'Fired terracotta pottery shards',
      'Diamond grinding pads',
      'Hand rasps & rifflers',
      'Wet-sanding abrasives',
    ],
    role: 'Sculptor, composite inlay fabrication, flush grinding & polishing',
    summaryLong:
      'An experimental hybrid sculpture investigating material memory and tactile contrast by embedding fractured terracotta ceramic shards into a structural mineral matrix. Once cured, the head form was carved and wet-ground flush, creating a speckled mosaic surface where warm, earthy terracotta fragments interrupt cool composite stone planes.',
    sections: [
      {
        heading: 'Material Dialogue & Ceramic Memory',
        body: [
          'Terracotta is deeply rooted in Bengali cultural history, representing the soil and heritage of rural craft. In this project, fractured shards of discarded terracotta pottery are gathered, selected for curvature and tone, and cast directly into a contemporary plaster-composite block.',
          'The resulting head form acts as an archaeological synthesis: the historical, porous terracotta aggregate is suspended within a modern mineral binder, fusing memory with geometric figurative form.',
        ],
      },
      {
        heading: 'Flush Grinding & Mosaic Polishing',
        body: [
          'Carving through composite materials of varying hardness requires careful chisel calibration to prevent the harder terracotta shards from chipping away from the softer matrix. Once blocked out, the surface was planed with coarse diamond rasps.',
          'Progressive wet-sanding from 120 to 800 grit brought both materials to a uniform flush plane, revealing intricate cross-sections of the ceramic shards, speckled mineral aggregate, and smooth textural contrast.',
        ],
      },
      {
        heading: 'Heterogeneous Matrix Fusion & Material Tension',
        body: [
          'Binding high-fired, porous terracotta shards with a dense stone-dust and gypsum matrix introduced complex material differential challenges during curing and abrasive finishing. The absorption rate of the clay shards was pre-treated with diluted acrylic resin to prevent premature water extraction from the surrounding wet matrix.',
          'This chemical pre-treatment ensured an unbreakable structural bond across disparate material interfaces, allowing the rotating diamond abrasive pads to shear cleanly through both ceramic and stone aggregate without pit voids or shard dislodgement.',
        ],
      },
    ],
  },
  'tonal-life-studies': {
    discipline: 'Drawing & Anatomy',
    tools: [
      'Heavy brown kraft paper (toned ground)',
      'Vine & willow charcoal',
      'Compressed charcoal pencils (2B–6B)',
      'White calcium carbonate chalk',
      'Kneaded rubber erasers',
      'Blending tortillons & chamois cloth',
      'Aerosol fixative',
    ],
    role: 'Life draughtsman, anatomical research, chiaroscuro study',
    summaryLong:
      'A suite of monumental academic life drawings executed on heavy toned kraft paper, investigating the human figure through dramatic chiaroscuro, structural foreshortening, and classical anatomical massing. Drawn from direct studio observation of live models, the studies exploit the mid-tone brown substrate as an active anatomical value, pushing deep compressed charcoal into deep recesses while pulling forward muscular planes with bold white chalk highlights.',
    sections: [
      {
        heading: 'Chiaroscuro Modeling & Anatomical Massing',
        body: [
          'The primary study analyzes a seated female model positioned in an asymmetrical, crossed-limb posture atop a wooden studio chair. By treating the human body as an interlocking architecture of skeletal wedges and muscular volumes, the drawing avoids superficial contour tracing in favor of decisive volumetric massing.',
          'Deep charcoal values sculpt the torso and deep pelvis recesses, while dramatic raking illumination carves out the sharp planar edges of the clavicle, thigh, and contracted forearm, establishing immediate sculptural presence on a monumental two-dimensional plane.',
        ],
      },
      {
        heading: 'Toned Kraft Ground & Specular White Chalk',
        body: [
          'Working on mid-tone industrial kraft paper fundamentally reorients the draughtsman’s tonal hierarchy: rather than building shadows on white paper, the toned ground provides the true anatomical half-tone. Dark values are pushed downward into deep shadow using compressed charcoal, while light is constructed additively with pure white chalk.',
          'White chalk is deployed selectively across high-projection anatomical landmarks—the forehead plane, zygomatic ridge, crest of the knee, and shin bone—creating intense specular radiance that makes the seated figure advance dramatically toward the viewer.',
        ],
      },
      {
        heading: 'Seated Contrapposto & Planar Foreshortening',
        body: [
          'The complex crossed-leg posture introduces severe foreshortening challenges where the lower limb projects directly toward the viewer’s eye. Precise tonal calibration of overlapping edge contours prevents spatial collapse, using aerial perspective and progressive contrast shifts to establish undeniable depth.',
          'The companion study of a standing peasant woman carrying a harvest basket explores dynamic physical exertion and textile drapery folds, demonstrating versatility across static meditative repose and active agrarian posture.',
        ],
      },
    ],
  },
  'standing-figure-study': {
    discipline: 'Drawing & Painting',
    tools: [
      'Studio drawing board & binder clips',
      'Heavyweight cartridge paper (300 gsm)',
      'Graphite pencils (HB, 2B, 4B)',
      'Transparent artist watercolors',
      'Opaque gouache',
      'Round sable & flat wash brushes',
      'Photographic reference documentation',
    ],
    role: 'Life painter, observational anatomical study, color mixing',
    summaryLong:
      'An academic observational life study executed in watercolor, gouache, and graphite on drawing board, exploring full-figure human anatomy, contrapposto balance, and daylight color temperature. Rendered from direct model observation supplemented by natural-environment reference photography pinned directly to the working easel, the study translates real-world volume, relaxed weight distribution, and fabric drapery into nuanced chromatic planes.',
    sections: [
      {
        heading: 'Observational Translation & Photographic Reference',
        body: [
          'The studio process paired live observational blocking with a working reference photograph pinned to the drawing board easel. This dual-reference method allowed precise verification of anatomical contours, subtle skin undertones, and outdoor daylight reflections while retaining the spontaneous expressive vitality of direct studio painting.',
          'Graphite preliminary construction lines established the foundational plumb line and proportional grid, ensuring the head-to-body eight-head canon was accurately anchored before wet media application.',
        ],
      },
      {
        heading: 'Contrapposto Posture & Weight Distribution',
        body: [
          'The model adopts a natural standing posture with weight planted firmly on the right leg while the left leg relaxes forward with bent knee. This classic contrapposto posture shifts the pelvic axis diagonally, countered by the angled resting placement of the left arm on the waist.',
          'The anatomical rendering articulates the subtle shift in muscular tension between the taut supporting thigh and the softened calf, capturing organic bodily equilibrium and relaxed modern carriage with convincing physical gravity.',
        ],
      },
      {
        heading: 'Layered Glazes & Pigment Temperature Modulation',
        body: [
          'Flesh tones were developed through layered transparent watercolor glazes, transitioning from warm raw sienna and cadmium red undertones in illuminated planes to cool viridian and cobalt-infused neutral shadows in recessed areas.',
          'Opaque gouache was selectively applied to render the dense fabric texture of the dark tank top and khaki shorts, using dry-brush passes to define fabric folds, waistband tension, and crisp cast shadows across the thighs and footwear.',
        ],
      },
    ],
  },
  'painted-pidi': {
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
    summaryLong:
      'A traditional Bengali ceremonial wooden seating board (Alpana Pidi) transformed into a vibrant folk-art heirloom panel. Embellished with sacred white and yellow Alpana motifs on a rich crimson ground, the panel features a majestic central Mayur (peacock) and Kalka (paisley) mandala, framed by floating butterflies and multi-tiered botanical scrollwork borders.',
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
  },
  'painted-kula': {
    discipline: 'Craft',
    tools: [
      'Woven bamboo kula tray',
      'Chalk and animal-glue gesso primer',
      'Traditional natural pigments',
      'Acrylic gouache',
      'Fine sable brushes',
      'Clear protective varnish',
    ],
    role: 'Craftsperson, folk surface design, traditional Alpana painting',
    summaryLong:
      'A traditional Bengali bamboo winnowing tray (kula) transformed into a vibrant cultural canvas. Featuring an ornamental bridal portrait framed by sacred Alpana floral patterns and symbolic geometric borders, the work celebrates indigenous agrarian craft while elevating vernacular decorative traditions into contemporary fine-art display.',
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
  },
  'ceremonial-vessel': {
    discipline: 'Craft',
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
    summaryLong:
      'A hand-turned wooden ceremonial vessel embellished with intricate folk-art portraiture, gold leaf accents, and continuous geometric rhythmic registers. Exploring cylindrical narrative composition, the vessel unites traditional lathe craftsmanship with ceremonial decorative painting, evoking the heirloom spiritual vessels of South Asian folk culture.',
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
  },
};

/** Full portfolio projects built from CV entries and rich studio case studies. */
export function buildStudioProjects(): Project[] {
  return cvProjectEntries.map((entry) => {
    if (entry.slug === 'weave-of-memory') {
      return {
        ...weaveOfMemory,
        courseCode: entry.courseCode,
        scale: entry.scale,
      };
    }

    if (entry.slug === 'frozen-liquidity') {
      return {
        ...frozenLiquidity,
        courseCode: entry.courseCode,
        scale: entry.scale,
      };
    }

    const detailData = detailedProjectContent[entry.slug];

    return {
      slug: entry.slug,
      title: entry.title,
      year: entry.year,
      medium: entry.medium,
      courseCode: entry.courseCode,
      scale: entry.scale,
      discipline: detailData?.discipline ?? 'Sculpture',
      tools: detailData?.tools ?? ['Studio tools', 'Mixed media', 'Documentation'],
      role: detailData?.role ?? 'Concept, construction, documentation',
      order: entry.order,
      summaryShort: entry.detail,
      summaryLong: detailData?.summaryLong ?? `${entry.detail} ${entry.secondaryDetail ?? ''}`,
      media: (() => {
        const list: Media[] = [
          {
            src: `/media/${entry.slug}/01.jpg`,
            alt: `${entry.title} — studio photograph`,
            caption:
              entry.slug === 'bird-relief'
                ? `${entry.title} — completed clay relief panel, ${entry.year}`
                : entry.slug === 'cape-buffalo-head'
                  ? `${entry.title} — frontal anatomical study, ${entry.year}`
                  : entry.slug === 'terracotta-head'
                    ? `${entry.title} — frontal direct carving and planar study, ${entry.year}`
                    : entry.slug === 'female-torso'
                      ? `${entry.title} — frontal life-modelling study and contrapposto balance, ${entry.year}`
                      : entry.slug === 'sleeping-dog'
                        ? `${entry.title} — canine life study in repose, ${entry.year}`
                        : entry.slug === 'tonal-life-studies'
                          ? `${entry.title} — seated chiaroscuro life study on wooden chair, ${entry.year}`
                          : entry.slug === 'standing-figure-study'
                            ? `${entry.title} — observational study on drawing board with pinned reference, ${entry.year}`
                            : entry.slug === 'painted-pidi'
                              ? `${entry.title} — traditional painted ritual panel with Mayur and Kalka motifs, ${entry.year}`
                              : `${entry.title}, ${entry.year}`,
            aspect:
              entry.slug === 'bird-relief'
                ? 1200 / 1250
                : entry.slug === 'terracotta-head'
                  ? 800 / 1063
                  : entry.slug === 'cape-buffalo-head'
                    ? 960 / 754
                    : entry.slug === 'female-torso'
                      ? 720 / 1136
                      : entry.slug === 'sleeping-dog'
                        ? 810 / 405
                        : entry.slug === 'tonal-life-studies'
                          ? 720 / 1080
                          : entry.slug === 'standing-figure-study'
                            ? 725 / 880
                            : entry.slug === 'painted-pidi'
                              ? 600 / 960
                              : 4 / 3,
            featured: true,
          },
        ];

        if (entry.slug === 'terracotta-head') {
          list.push(
            {
              src: '/media/terracotta-head/02.jpg',
              alt: `${entry.title} — lateral profile view`,
              caption: `${entry.title} — lateral profile view showing ear articulation and neck curvature, ${entry.year}`,
              aspect: 800 / 1062,
              featured: false,
            },
            {
              src: '/media/terracotta-head/03.jpg',
              alt: `${entry.title} — posterior three-quarters view`,
              caption: `${entry.title} — posterior three-quarters view revealing spherical mass and terracotta flecks, ${entry.year}`,
              aspect: 800 / 1062,
              featured: false,
            },
          );
        }

        if (entry.slug === 'cape-buffalo-head') {
          list.push(
            {
              src: '/media/cape-buffalo-head/02.jpg',
              alt: `${entry.title} — lateral profile study`,
              caption: `${entry.title} — lateral profile study capturing horn curvature and facial plane, ${entry.year}`,
              aspect: 880 / 832,
              featured: false,
            },
            {
              src: '/media/cape-buffalo-head/03.jpg',
              alt: `${entry.title} — three-quarters perspective study`,
              caption: `${entry.title} — three-quarters perspective study articulating horn striations, ${entry.year}`,
              aspect: 880 / 770,
              featured: false,
            },
          );
        }

        if (entry.slug === 'female-torso') {
          list.push(
            {
              src: '/media/female-torso/02.jpg',
              alt: `${entry.title} — three-quarters study`,
              caption: `${entry.title} — three-quarters study articulating thoracic twist and spinal torsion, ${entry.year}`,
              aspect: 720 / 1102,
              featured: false,
            },
            {
              src: '/media/female-torso/03.jpg',
              alt: `${entry.title} — posterior view`,
              caption: `${entry.title} — posterior view exploring scapular modeling and lumbar alignment, ${entry.year}`,
              aspect: 720 / 1127,
              featured: false,
            },
          );
        }

        if (entry.slug === 'tonal-life-studies') {
          list.push(
            {
              src: '/media/tonal-life-studies/02.jpg',
              alt: `${entry.title} — standing harvest figure study`,
              caption: `${entry.title} — standing harvest figure study with basket, ${entry.year}`,
              aspect: 720 / 1080,
              featured: false,
            },
            {
              src: '/media/tonal-life-studies/03.jpg',
              alt: `${entry.title} — seated male patient study`,
              caption: `${entry.title} — seated male patient study with IV drip and sandals, ${entry.year}`,
              aspect: 720 / 1350,
              featured: false,
            },
            {
              src: '/media/tonal-life-studies/04.jpg',
              alt: `${entry.title} — panoramic exhibition wall view`,
              caption: `${entry.title} — panoramic exhibition wall view of academic life studies on toned paper, ${entry.year}`,
              aspect: 1280 / 1060,
              featured: false,
            },
          );
        }

        if (entry.slug === 'sleeping-dog') {
          list.push(
            {
              src: '/media/sleeping-dog/02.jpg',
              alt: `${entry.title} — full recumbent lateral profile`,
              caption: `${entry.title} — full recumbent profile showing relaxed lumbar spine and curled paws, ${entry.year}`,
              aspect: 905 / 350,
              featured: false,
            },
            {
              src: '/media/sleeping-dog/03.jpg',
              alt: `${entry.title} — cranial and forepaw anatomical detail`,
              caption: `${entry.title} — anatomical detail of snout, ear folds, and resting forepaws, ${entry.year}`,
              aspect: 580 / 380,
              featured: false,
            },
            {
              src: '/media/sleeping-dog/04.jpg',
              alt: `${entry.title} — low eye-level frontal repose view`,
              caption: `${entry.title} — eye-level frontal repose view on studio turntable board, ${entry.year}`,
              aspect: 900 / 345,
              featured: false,
            },
            {
              src: '/media/sleeping-dog/05.jpg',
              alt: `${entry.title} — studio modeling context`,
              caption: `${entry.title} — studio modeling context and peer life-sculpting environment, ${entry.year}`,
              aspect: 960 / 565,
              featured: false,
            },
          );
        }

        return list;
      })(),
      sections: detailData?.sections ?? [
        {
          heading: 'Studio Practice',
          body: [
            entry.detail,
            entry.secondaryDetail ?? '',
            ...(entry.scale ? [`Maximum dimension: ${entry.scale}.`] : []),
            ...(entry.courseCode
              ? [`Course Code ${entry.courseCode}, Department of 3D Art and Design, Jagannath University.`]
              : []),
          ].filter(Boolean),
        },
      ],
    };
  });
}

export const studioProjects: Project[] = buildStudioProjects();
