import { client } from "../lib/sanityclient";

export interface Project {
  _id: string;
  titel: string;
  slug: string | "";
  resume: string;
  indhold: string[];
  billede: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  dato: string;
  programmeringssprog: {
    _id: string;
    navn: string;
    logo: any;
  }[];
  websiteLink?: string;
  githubLink?: string;
}

export const getProjects = async () => {
  const projects = await client.fetch(`*[_type == "projekter"]{
    _id,
    titel,
    "slug": slug.current,
    resume,
    indhold,
    billede,
    dato,
    githubLink,
    websiteLink,
    "programmeringssprog": programmeringssprog[]->{
      _id,
      navn,
      logo
    }
  }`);
  return projects;
};

export const getProject = async (slug: string) => {
  console.log("Searching for project with slug:", slug);
  
  try {
    const projects = await client.fetch(`*[_type == "projekter" && slug.current == "${slug}"]{
      _id,
      titel,
      "slug": slug.current,
      resume,
      indhold,
      billede,
      dato,
      githubLink,
      websiteLink,
      "programmeringssprog": programmeringssprog[]->{
        _id,
        navn,
        logo
      }
    }`);
    
    console.log("Query result:", projects);
    console.log("Projects length:", projects?.length);
    
    // Return the first (and should be only) project, or null if not found
    return projects && projects.length > 0 ? projects[0] : null;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
};





/* const projects: Project[] = [

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

export const getProjects = () => projects; */