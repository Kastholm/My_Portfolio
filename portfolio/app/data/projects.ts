export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  dateRange: string;
  technologies: string[];
  websiteUrl?: string;
  sourceUrl?: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Flexnet',
    description: 'Fullstack web application til et spansk telekommunikationsfirma. Platformen giver kunder mulighed for at overvåge/købe produket, administrere deres abonnementer og betalinger online.',
    imageUrl: '/img/projects/flexnet.png',
    dateRange: 'Feb 2024 - Jun 2024',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Authentication', 'Stripe'],
    websiteUrl: 'https://flexnet.es/',
    sourceUrl: '/img/projects/flexnet.png',
  },
  {
    id: '2',
    title: 'Grusvej',
    description: 'Grusvej præsenterer et brand og dets services, med fokus på at levere skræddersyede løsninger. Platformen er bygget med Nuxt.js, TypeScript og TailwindCSS.',
    imageUrl: '/img/projects/grusvej.png',
    dateRange: 'Maj 2023 - Sep 2024',
    technologies: ['Nuxt.js', 'TypeScript', 'TailwindCSS'],
    websiteUrl: 'https://grusvej.dk',
    sourceUrl: 'https://github.com/Kastholm/GrusvejDK',
  },
  {
    id: '3',
    title: 'KOLD Festival',
    description: 'KOLD Festival præsenterer en dynamisk platform, der fremhæver festivalens brand og events. Bygget med Nuxt.js, TypeScript, GSAP, TailwindCSS og API-integrationer.',
    imageUrl: '/img/projects/koldfestival.png',
    dateRange: 'Feb 2023 - Aug 2023',
    technologies: ['Nuxt.js', 'TypeScript', 'GSAP', 'TailwindCSS', 'API'],
    websiteUrl: 'https://koldfestival.dk',
    sourceUrl: 'https://github.com/andersravn32/kold-festival',
  },
  {
    id: '4',
    title: 'Pengehjørnet',
    description: 'Pengehjørnet er et fullstack nyhedsmedie, der henter artikler via API fra et skræddersyet Sanity-setup. Bygget med Next.js for optimal performance og SEO-optimering.',
    imageUrl: '/img/projects/mgdk/penge.png',
    dateRange: 'Mar 2024 - I dag',
    technologies: ['Next.js', 'TypeScript', 'React', 'Sanity', 'TailwindCSS', 'API', 'SEO', 'Programmatic'],
    websiteUrl: 'https://pengehjoernet.dk/',
    sourceUrl: 'https://github.com/Media-Group-Denmark/APP',
  },
  {
    id: '5',
    title: 'Lifesync',
    description: 'Lifesync er en personlig organiseringsplatform, der samler alt fra læste bøger til kalenderdata ét sted. Bygget med Next.js, TypeScript, React, TailwindCSS og API-integrationer.',
    imageUrl: '/img/projects/lifesync.png',
    dateRange: 'Sep 2024 - I dag',
    technologies: ['Next.js', 'TypeScript', 'React', 'TailwindCSS', 'API'],
    websiteUrl: 'https://app.lifesync.us',
    sourceUrl: 'https://github.com/Kastholm/LifesyncV2',
  },
  {
    "id": "6",
    "title": "Dagens DK",
    "description": "Dagens er et dagligt nyhedsmedie, der leverer nyheder på dansk. Fokus på aktuelt indhold med optimeret programmatic og SEO.",
    "imageUrl": "/img/projects/mgdk/dagensdk.png",
    "dateRange": "Feb 2024 - Mar 2024",
    "technologies": ["Programmatic", "CSS3", "JavaScript", "CMS", "SEO", "Google Analytics"],
    "websiteUrl": "https://www.dagens.dk/"
  },
  {
    "id": "7",
    "title": "Dagens COM",
    "description": "Dagens er et dagligt nyhedsmedie, der leverer nyheder på engelsk. Fokus på globalt indhold og SEO-optimering.",
    "imageUrl": "/img/projects/mgdk/dagenscom.png",
    "dateRange": "Mar 2024 - Mar 2024",
    "technologies": ["Programmatic", "CSS3", "JavaScript", "CMS", "SEO", "Google Analytics"],
    "websiteUrl": "https://www.dagens.com/"
  },
  {
    "id": "8",
    "title": "Dagens DE",
    "description": "Dagens er et dagligt nyhedsmedie, der leverer nyheder på tysk. Fokus på lokalt indhold og stærk SEO-integration.",
    "imageUrl": "/img/projects/mgdk/dagensde.png",
    "dateRange": "Mar 2024 - Mar 2024",
    "technologies": ["Programmatic", "CSS3", "JavaScript", "CMS", "SEO", "Google Analytics"],
    "websiteUrl": "https://www.dagens.de/"
  },
  {
    "id": "9",
    "title": "Dagens SE",
    "description": "Dagens er et dagligt nyhedsmedie, der leverer nyheder på svensk. Fokus på aktuelt og SEO-optimeret indhold.",
    "imageUrl": "/img/projects/mgdk/dagensse.png",
    "dateRange": "Maj 2024 - Jun 2024",
    "technologies": ["Programmatic", "CSS3", "JavaScript", "CMS", "SEO", "Google Analytics"],
    "websiteUrl": "https://www.dagens.se/"
  },  
  {
    id: '10',
    title: 'Trend DK',
   "description": "Trend er et dagligt nyhedsmedie, der leverer teknologi nyheder. Fokus på aktuelt og SEO-optimeret indhold.",
    imageUrl: '/img/projects/mgdk/trenddk.png',
    dateRange: 'Jun 2024 - Jul 2024',
    "technologies": ["Programmatic", "CSS3", "JavaScript", "CMS", "SEO", "Google Analytics"],
    websiteUrl: 'https://www.trend.dk',
  },
  {
    id: '11',
    title: 'Sportfokus DK',
    "description": "Sportfokus er et dagligt nyhedsmedie, der leverer sports nyheder. Fokus på aktuelt og SEO-optimeret indhold.",
    imageUrl: '/img/projects/mgdk/sportfokusdk.png',
    dateRange: 'June 2024 - Jul 2024',
    "technologies": ["Programmatic", "CSS3", "JavaScript", "CMS", "SEO", "Google Analytics"],
    websiteUrl: 'https://sportfokus.dk',
  },
  {
    id: '',
    title: 'GPK Consulting',
    description: 'GPK Consulting er et logistikfirma, der leverer skræddersyede løsninger inden for transport og supply chain management. Bygget med PHP og WordPress for enkel og effektiv håndtering af kundernes behov.',
    imageUrl: '/img/projects/gpkc.png',
    dateRange: 'Jan 2023 - Apr 2023',
    technologies: ['PHP', 'WordPress', 'CSS3', 'JavaScript'],
    websiteUrl: 'https://gpkollundconsulting.de/',
  },
];

export const getProjects = () => projects;