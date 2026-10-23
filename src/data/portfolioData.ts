export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  category: 'Residential' | 'Private Residence' | 'Luxury Apartment' | 'Hospitality';
  year: string;
  area: string;
  leadQuote: string;
  description: string;
  philosophy: string;
  coverImage: string;
  eveningImage: string;
  detailImages: string[];
  materials: { name: string; origin: string; texture: string }[];
  specs: { label: string; value: string }[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'casa-nera',
    title: 'Casa Nera',
    location: 'Mumbai, India',
    category: 'Residential',
    year: '2026',
    area: '6,800 sq.ft.',
    leadQuote: 'A study in shadow, stone and silence.',
    description:
      'Designed for a collector family seeking sanctuary amidst the kinetic density of coastal Mumbai. Casa Nera employs deep fluted basalt stone, blackened teak, and subtle brushed bronze thresholds. The architecture manipulates sea breezes and filtered tropical sunlight to create monolithic quietude.',
    philosophy:
      'Instead of competing with the city, Casa Nera turns inward. Light is modulated through recessed geometric light troughs, casting slow-moving rectangular shadows across honed volcanic stone throughout the day.',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
    eveningImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80'
    ],
    materials: [
      { name: 'Fluted Basalt Stone', origin: 'Deccan Traps, Maharashtra', texture: 'Hand-chiseled tactile relief' },
      { name: 'Blackened Teak', origin: 'Nagpur Central Forest', texture: 'Wire-brushed organic grain' },
      { name: 'Raw Belgian Linen', origin: 'Flanders, Belgium', texture: 'Heavy natural unbleached weave' },
      { name: 'Patinated Bronze', origin: 'Artisanal Foundry, Jaipur', texture: 'Hand-rubbed living wax finish' }
    ],
    specs: [
      { label: 'Scope', value: 'Complete Architectural & Interior Remodel' },
      { label: 'Timeline', value: '22 Months' },
      { label: 'Team', value: 'Lead Architect: FORMA Atelier / Studio Lead: Devika Sen' },
      { label: 'Lighting Design', value: 'Custom 2700K Architectural Grazing' }
    ]
  },
  {
    id: 'the-quiet-house',
    title: 'The Quiet House',
    location: 'Goa, India',
    category: 'Private Residence',
    year: '2025',
    area: '9,200 sq.ft.',
    leadQuote: 'A seamless boundary between coastal forest and earth architecture.',
    description:
      'Settled quietly among an old cashew grove in North Goa, The Quiet House uses rammed earth walls forged from on-site red clay, hand-dressed laterite blocks, and oversized sliding teak screens that invite monsoon fragrance and coastal breezes.',
    philosophy:
      'We sought to erase the threshold between living shelter and nature. The living pavilion floats above a reflecting pool of slate stone, framing canopy views through timber colonnades.',
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85',
    eveningImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80'
    ],
    materials: [
      { name: 'On-site Rammed Earth', origin: 'Goa Clay Substrata', texture: 'Layered horizontal geological strata' },
      { name: 'Reclaimed Teak Beams', origin: 'Colonial Demolitions, Kerala', texture: 'Aged weathered patina' },
      { name: 'Green Kota Stone', origin: 'Rajasthan', texture: 'Honed leathered non-slip surface' }
    ],
    specs: [
      { label: 'Scope', value: 'New Construction & Bespoke Interiors' },
      { label: 'Timeline', value: '28 Months' },
      { label: 'Landscape Design', value: 'Endemic Monsoon Flora Integration' }
    ]
  },
  {
    id: 'atelier-27',
    title: 'Atelier 27',
    location: 'Delhi, India',
    category: 'Luxury Apartment',
    year: '2026',
    area: '4,500 sq.ft.',
    leadQuote: 'Sculptural marble monoliths and curated light wells.',
    description:
      'A top-floor duplex in Lutyens Delhi converted into a quiet sanctuary for contemporary art lovers. The open living volume is anchored by an 18-foot monolithic Arabescato marble counter and patinated metal pivot partitions.',
    philosophy:
      'Proportion is the highest luxury. Every joinery line lines up with architectural openings, eliminating visual noise so art pieces and light become the primary story.',
    coverImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
    eveningImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80'
    ],
    materials: [
      { name: 'Arabescato Vagli Marble', origin: 'Carrara, Italy', texture: 'Bookmatched honed matte' },
      { name: 'Smoked Smoked Glass', origin: 'Murano, Italy', texture: 'Subtle translucent warm tint' },
      { name: 'Raw Silk & Wool Weaves', origin: 'Varanasi Weavers Guild', texture: 'Bespoke hand-tufted floor rugs' }
    ],
    specs: [
      { label: 'Scope', value: 'Penthouse Full-Floor Architecture' },
      { label: 'Timeline', value: '18 Months' },
      { label: 'Art Advisory', value: 'Collaborative curatorial curation' }
    ]
  },
  {
    id: 'terra-house',
    title: 'Terra House',
    location: 'Bangalore, India',
    category: 'Residential',
    year: '2025',
    area: '5,400 sq.ft.',
    leadQuote: 'Monolithic micro-cement and internal reflection courtyards.',
    description:
      'An inward-looking family residence in Bangalore organized around two tranquil water courts. Warm grey micro-cement surfaces reflect the dappled shade of frangipani trees, paired with bespoke oiled American walnut cabinetry.',
    philosophy:
      'We designed Terra House as an acoustic retreat from the metropolitan bustle. Wall depths of 450mm create natural insulation and dramatic deep-silled window seats.',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85',
    eveningImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80'
    ],
    materials: [
      { name: 'Warm Micro-Cement', origin: 'Formulated in-house', texture: 'Continuous seamless mineral skin' },
      { name: 'Oiled American Walnut', origin: 'Appalachian Valley', texture: 'Silky satin organic grain' },
      { name: 'Charcoal Linen Drapery', origin: 'Normandy, France', texture: 'Acoustic sound-dampening weight' }
    ],
    specs: [
      { label: 'Scope', value: 'Architectural Remodeling & Joinery' },
      { label: 'Timeline', value: '20 Months' }
    ]
  },
  {
    id: 'sora',
    title: 'Sora',
    location: 'Dubai, UAE',
    category: 'Hospitality',
    year: '2026',
    area: '14,000 sq.ft.',
    leadQuote: 'A boutique desert sanctuary celebrating light, shadow and stone.',
    description:
      'A private 12-suite sanctuary in the Dubai dunes. High vaulted ceilings with carved light scoops draw soft northern skylight across hand-applied lime plaster and pale travertine colonnades.',
    philosophy:
      'In extreme climates, shade is sacred. Sora transforms shadow into a sculptural material, creating cool, serene chambers that offer profound sensory reset.',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=85',
    eveningImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80'
    ],
    materials: [
      { name: 'Roman Travertine Navona', origin: 'Tivoli, Italy', texture: 'Cross-cut open pore finish' },
      { name: 'Dune Lime Plaster', origin: 'Regional aggregate mix', texture: 'Soft breathable matte' },
      { name: 'Aged Brushed Brass', origin: 'Emirati Metal Artisans', texture: 'Warm satin hand-turned hardware' }
    ],
    specs: [
      { label: 'Scope', value: 'Boutique Hotel Concept & Turnkey Execution' },
      { label: 'Timeline', value: '30 Months' }
    ]
  }
];

export interface MaterialItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  tactileDescription: string;
  origin: string;
  image: string;
}

export const MATERIALS_DATA: MaterialItem[] = [
  {
    id: 'stone',
    name: 'Stone',
    subtitle: 'Honed Travertine & Basalt',
    description: 'Quarried monoliths chosen for their tactile weight, porous warmth, and quiet permanence across centuries.',
    tactileDescription: 'Cool to touch, micro-textured surface with natural voids and delicate tonal mineral veins.',
    origin: 'Tivoli & Deccan Plateaus',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'wood',
    name: 'Wood',
    subtitle: 'Smoked Oak & Hinoki',
    description: 'Sustainably harvested hardwoods cured slowly and finished with natural organic oils that patina gracefully across generations.',
    tactileDescription: 'Warm, open-grained surface offering subtle aroma and tactile softness.',
    origin: 'Black Forest & Nagano Forests',
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'linen',
    name: 'Linen',
    subtitle: 'Belgian Raw Weave',
    description: 'Heavy unbleached flax that softens daylight, absorbs acoustic echo, and brings organic drape to architectural volumes.',
    tactileDescription: 'Subtle slub texture with natural fiber variations and relaxed structural drape.',
    origin: 'Flanders River Valleys',
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'metal',
    name: 'Metal',
    subtitle: 'Hand-Rubbed Patinated Bronze',
    description: 'Living finishes that react subtly with touch, atmospheric humidity, and the gentle passage of time without artificial lacquer.',
    tactileDescription: 'Silky satin bronze with deep warm brown undertones and delicate burnished edges.',
    origin: 'Jaipur & Florence Foundries',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'glass',
    name: 'Glass',
    subtitle: 'Fluted & Acid-Etched',
    description: 'Diffuses harsh glare into luminous atmospheric gradients, preserving spatial privacy while inviting continuity of light.',
    tactileDescription: 'Continuous parallel linear ridges refracting light into soft, rhythmic bands.',
    origin: 'Murano Workshops',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'concrete',
    name: 'Concrete',
    subtitle: 'Warm Pigmented Micro-Cement',
    description: 'Seamless hand-troweled mineral surfaces that ground expansive rooms in serene, continuous geometry without joint lines.',
    tactileDescription: 'Soft stone-like eggshell finish with delicate cloudy trowel marks.',
    origin: 'Valencian Minerals',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1000&q=80'
  }
];

export interface JournalArticle {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  fullText: string[];
  image: string;
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'art-of-quiet-spaces',
    title: 'The Art of Quiet Spaces',
    subtitle: 'On sensory deceleration and architectural restraint.',
    date: 'February 2026',
    readTime: '6 min read',
    category: 'Philosophy',
    excerpt: 'In an era of relentless hyper-stimulation, luxury is no longer defined by ornamentation. It is defined by the absence of noise.',
    fullText: [
      'In an era of relentless hyper-stimulation, luxury is no longer defined by ornamentation or precious gold leaf. It is defined by acoustic calmness, tactile honesty, and the presence of generous negative space.',
      'When we design a room at FORMA, our first question is rarely what furniture to place inside it. Our first inquiry is: what can we withhold? What is the baseline noise level of this room? How does the sound of footfall respond to stone versus timber?',
      'A quiet space does not feel barren. On the contrary, it awakens sensory perception. In a room stripped of trivial visual clutter, the gentle grain of smoked oak becomes captivating. The angle of afternoon sunlight shifting across a hand-troweled lime wall becomes an unscripted hourly performance.',
      'We believe the true home should function as a spatial decompression chamber. You step through the threshold, the world outside fades, and your breathing instinctively slows.'
    ],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'why-natural-materials-feel-timeless',
    title: 'Why Natural Materials Feel Timeless',
    subtitle: 'Materials that deepen in character rather than deteriorate.',
    date: 'January 2026',
    readTime: '5 min read',
    category: 'Materiality',
    excerpt: 'Synthetic surfaces look their best on day one and deteriorate thereafter. Natural materials begin their true aesthetic life only after years of touch.',
    fullText: [
      'Synthetic surfaces look their pristine best on day one; every day thereafter is a steady decline into degradation. A chip on plastic veneer is a flaw. A scratch on an acrylic table is an eyesore.',
      'Natural materials work on an inverse principle. Raw unlacquered bronze begins with a golden shine, but as hands touch the door pull over decades, oils from human skin create deep rich burnished tones. Unsealed travertine slowly mellows under sunlight. Solid timber softens its edges and tells the biography of the home.',
      'This is what Japanese aesthetics conceptualizes as wabi-sabi: an appreciation of the genuine marks left by time. When selecting materials for Casa Nera or The Quiet House, we choose exclusively substances that will outlive our studio and look more dignified in thirty years than they do today.'
    ],
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'designing-with-light',
    title: 'Designing With Light',
    subtitle: 'Treating illumination as a tactile architectural material.',
    date: 'December 2025',
    readTime: '7 min read',
    category: 'Architecture',
    excerpt: 'Light is not an accessory installed at the end of a project. Light is the primary structural substance that reveals volume and creates emotional atmosphere.',
    fullText: [
      'Louis Kahn famously wrote that the sun never knew how great it was until it struck the side of a building. In interior architecture, illumination is not simply an electric fixture suspended from the ceiling to allow reading after dark.',
      'Light is the medium through which all other materials exist. A rough-cut basalt wall placed beneath flat overhead downlights looks dead and gray. But place a concealed warm 2700K grazing light along its upper perimeter, and every microscopic chisel mark casts an intricate shadow, transforming cold stone into a dramatic tapestry.',
      'At FORMA, we design lighting for diurnal rhythms. Morning light is celebrated through deep reveals and clear clerestory glass. Twilight transitions seamlessly through indirect cove lighting concealed in ceiling reveals, never assaulting the eye with glaring bare bulbs.'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'inside-casa-nera',
    title: 'Inside Casa Nera',
    subtitle: 'Monograph documenting 24 months crafting a coastal sanctuary.',
    date: 'November 2025',
    readTime: '9 min read',
    category: 'Case Study',
    excerpt: 'How we turned a 6,800-square-foot Mumbai high-rise apartment into a monolithic retreat of volcanic basalt and filtered tropical sunlight.',
    fullText: [
      'When our clients first approached us with an empty concrete shell on the 34th floor overlooking the Arabian Sea, the temptation was obvious: maximize glass and flood the apartment with relentless tropical glare.',
      'Our proposal was radical. We suggested doing the exact opposite: introduce deep architectural reveals, dark fluted volcanic basalt walls, and recessed light scoops that treat the ocean view not as an overwhelming billboard, but as a carefully framed landscape painting.',
      'Over twenty-four months, our craftsmen hand-chiseled more than 400 square meters of basalt stone on-site in Mumbai. Bespoke blackened teak cabinetry was smoked in custom kilns to achieve a matte charcoal tone with subtle warm undertones.',
      'The result is Casa Nera: a home that breathes in silence, where the intense heat and noise of the city dissolve into deep, contemplative calm.'
    ],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
  }
];
