export interface Project {
  id: string;
  name: string;
  category: 'Mobile App' | 'Web App' | 'eCommerce' | 'Landing Page';
  techStack: string[];
  industry: string;
  companySize?: string;
  painPoints?: string[];
  description: string;
  challenge?: string;
  approach?: string;
  solution?: string;
  client?: string;
  role?: string;
  year?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  quote?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    id: 'emirates-airlines',
    name: 'Emirates Airlines',
    category: 'Mobile App',
    techStack: ['React Native', 'TypeScript', 'Redux'],
    industry: 'Travel & Aviation',
    companySize: 'Enterprise',
    painPoints: ['Legacy mobile experience', 'Poor booking flow', 'Low user ratings'],
    description: 'Complete mobile app redesign and rebuild for Emirates Airlines, serving millions of travelers worldwide.',
    challenge: 'Emirates needed to modernize their mobile booking experience to compete with modern travel apps. The existing app had poor ratings and outdated UX.',
    approach: 'Led a team of 12 engineers to rebuild the app from the ground up using React Native, enabling simultaneous iOS and Android deployment. Focused on streamlining the booking flow and improving performance.',
    solution: 'Delivered a premium mobile experience with intuitive booking, real-time flight updates, and seamless integration with Emirates Skywards loyalty program.',
    client: 'Emirates Airlines',
    role: 'Senior Engineering Director',
    year: '2022',
    metrics: [
      { label: 'App Rating', value: '1.4★ → 4.6★' },
      { label: 'Booking Conversion', value: '+340%' },
      { label: 'Load Time', value: '8s → 1.2s' }
    ],
    quote: 'The new app transformed how our customers book flights. Engineering excellence at every level.',
    images: []
  },
  {
    id: 'plutotv',
    name: 'PlutoTV',
    category: 'Mobile App',
    techStack: ['Swift', 'Kotlin', 'Native'],
    industry: 'Streaming Media',
    companySize: 'Enterprise',
    painPoints: ['Cross-platform consistency', 'Streaming performance', 'Content discovery'],
    description: 'Native mobile apps for PlutoTV\'s free streaming platform, delivering live TV and on-demand content to millions.',
    challenge: 'Build high-performance native streaming apps for iOS and Android with seamless playback and content discovery.',
    approach: 'Led development of native apps using Swift for iOS and Kotlin for Android, optimizing for streaming performance and user engagement.',
    solution: 'Shipped apps with smooth playback, personalized recommendations, and an elegant browsing experience across 250+ channels.',
    client: 'PlutoTV (ViacomCBS)',
    role: 'Engineering Director',
    year: '2021',
    metrics: [
      { label: 'Monthly Active Users', value: '20M+' },
      { label: 'Stream Start Time', value: '60% faster' },
      { label: 'Crash Rate', value: '<0.1%' }
    ],
    images: []
  },
  {
    id: 'lululemon',
    name: 'Lululemon',
    category: 'Mobile App',
    techStack: ['React Native', 'GraphQL', 'Redux'],
    industry: 'Retail & Wellness',
    companySize: 'Enterprise',
    painPoints: ['Mobile commerce optimization', 'Product discovery', 'Community features'],
    description: 'Premium mobile shopping experience for Lululemon, blending eCommerce with wellness content and community.',
    challenge: 'Create a mobile app that reflects Lululemon\'s premium brand while driving eCommerce and community engagement.',
    approach: 'Built a React Native app with advanced product filtering, AR try-on features, and integrated wellness content.',
    solution: 'Delivered an app that seamlessly combines shopping, workout videos, and community events in one cohesive experience.',
    client: 'Lululemon',
    role: 'Senior Engineer',
    year: '2020',
    metrics: [
      { label: 'Mobile Revenue', value: '+180%' },
      { label: 'User Engagement', value: '8.5 min avg session' }
    ],
    images: []
  },
  {
    id: 'ticketmaster',
    name: 'Ticketmaster',
    category: 'Mobile App',
    techStack: ['React Native', 'Node.js', 'Firebase'],
    industry: 'Entertainment & Events',
    companySize: 'Enterprise',
    painPoints: ['Ticket purchasing flow', 'Event discovery', 'Digital ticket delivery'],
    description: 'Mobile ticketing platform for live events, handling millions of transactions and digital ticket deliveries.',
    client: 'Ticketmaster',
    role: 'Senior Engineer',
    year: '2021',
    images: []
  },
  {
    id: 'home-depot',
    name: 'The Home Depot',
    category: 'Mobile App',
    techStack: ['React Native', 'Microservices', 'AWS'],
    industry: 'Retail',
    companySize: 'Enterprise',
    painPoints: ['In-store navigation', 'Product search', 'Inventory visibility'],
    description: 'Mobile app for The Home Depot enabling product search, in-store navigation, and seamless shopping experience.',
    client: 'The Home Depot',
    role: 'Senior Engineer',
    year: '2019',
    images: []
  },
  {
    id: 'ski-dubai',
    name: 'Ski Dubai',
    category: 'Web App',
    techStack: ['React', 'Flask', 'PostgreSQL'],
    industry: 'Entertainment & Hospitality',
    companySize: 'Mid-Market',
    painPoints: ['Online booking system', 'Real-time availability', 'Payment processing'],
    description: 'Indoor ski resort ticketing and booking platform with real-time availability and pricing.',
    challenge: 'Create a modern booking system for Dubai\'s premier indoor ski resort to handle complex pricing tiers and equipment rentals.',
    approach: 'Built a React frontend with Python Flask backend, integrating real-time inventory management and dynamic pricing.',
    solution: 'Delivered a fast, intuitive booking experience with seamless payment processing and automatic confirmation emails.',
    client: 'Ski Dubai',
    role: 'Full-Stack Engineer',
    year: '2023',
    images: []
  },
  {
    id: 'aavrani',
    name: 'Aavrani',
    category: 'eCommerce',
    techStack: ['Next.js', 'Shopify', 'GraphQL', 'Headless'],
    industry: 'Beauty & Personal Care',
    companySize: 'Startup',
    painPoints: ['Site performance', 'Product quiz integration', 'SEO optimization'],
    description: 'Headless commerce platform for science-backed hair and skincare brand with custom quiz and rewards program.',
    challenge: 'Build a lightning-fast eCommerce experience that feels premium and incorporates personalized product recommendations via quiz.',
    approach: 'Developed a headless Shopify architecture using Next.js and GraphQL Storefront API for maximum performance and flexibility.',
    solution: 'Shipped a sub-second loading eCommerce site with integrated hair quiz, rewards program, and beautiful product photography.',
    client: 'Aavrani',
    role: 'Lead Engineer',
    year: '2023',
    metrics: [
      { label: 'Page Load', value: '<900ms' },
      { label: 'Quiz Completion', value: '68%' },
      { label: 'Conversion Rate', value: '+210%' }
    ],
    images: []
  },
  {
    id: 'thrudark',
    name: 'ThruDark',
    category: 'eCommerce',
    techStack: ['Shopify', 'Liquid', 'JavaScript'],
    industry: 'Apparel & Tactical Gear',
    companySize: 'Small Business',
    painPoints: ['Brand positioning', 'Product presentation', 'Mobile optimization'],
    description: 'Premium Shopify store for tactical apparel brand founded by special forces veterans.',
    client: 'ThruDark',
    role: 'Shopify Developer',
    year: '2022',
    images: []
  },
  {
    id: 'tentree',
    name: 'Tentree',
    category: 'eCommerce',
    techStack: ['Shopify', 'Liquid', 'Vue.js'],
    industry: 'Sustainable Fashion',
    companySize: 'Small Business',
    painPoints: ['Sustainability storytelling', 'Impact tracking', 'Cart optimization'],
    description: 'Sustainable fashion eCommerce platform with tree-planting impact tracking and storytelling.',
    client: 'Tentree',
    role: 'Shopify Developer',
    year: '2022',
    images: []
  },
  {
    id: 'gretel-ny',
    name: 'Gretel NY',
    category: 'Web App',
    techStack: ['React', 'Node.js', 'MongoDB'],
    industry: 'Design & Creative',
    companySize: 'Small Business',
    description: 'Portfolio and project showcase platform for boutique design studio.',
    client: 'Gretel',
    role: 'Full-Stack Engineer',
    year: '2021',
    images: []
  },
  {
    id: 'mike-perry-studio',
    name: 'Mike Perry Studio',
    category: 'Web App',
    techStack: ['React', 'Three.js', 'WebGL'],
    industry: 'Art & Design',
    companySize: 'Small Business',
    description: 'Interactive portfolio website with WebGL art installations and project showcases.',
    client: 'Mike Perry Studio',
    role: 'Creative Developer',
    year: '2020',
    images: []
  },
  {
    id: 'jones-bbq',
    name: 'Jones BBQ',
    category: 'Web App',
    techStack: ['WordPress', 'PHP', 'MySQL'],
    industry: 'Food & Beverage',
    companySize: 'Small Business',
    description: 'Restaurant website with online ordering, menu management, and location finder.',
    client: 'Jones BBQ',
    role: 'WordPress Developer',
    year: '2019',
    images: []
  },
  {
    id: 'live-fit-apparel',
    name: 'Live Fit Apparel',
    category: 'eCommerce',
    techStack: ['React', 'FastAPI', 'Stripe'],
    industry: 'Fitness & Apparel',
    companySize: 'Startup',
    description: 'Custom eCommerce platform for fitness apparel brand with subscription options and size finder.',
    client: 'Live Fit Apparel',
    role: 'Full-Stack Engineer',
    year: '2023',
    images: []
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(p => p.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(p => p.category === category);
};
