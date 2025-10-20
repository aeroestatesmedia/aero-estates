export const COMPANY_INFO = {
  name: 'Aero Estates Limited',
  tagline: 'Your partners in brand scaling, equity analysis, real estate solutions and tech solutions',
  founded: 'January 2024',
  location: 'Dublin, Ireland',
  email: 'aeroestateservice@gmail.com',
  phone: '+353 1 234 5678',
} as const;

export const SERVICES = [
  {
    id: 'brand-scaling',
    name: 'Brand Scaling',
    slug: 'brand-scaling',
    brief: 'Boost reach with targeted digital campaigns',
    icon: 'TrendingUp',
    description: 'Strategic campaigns, brand development, and content creation that drive engagement and growth.',
    features: [
      'SEO & Content Strategy',
      'Social Media Management',
      'Web Design & Development',
      'Brand Identity & Positioning',
      'Analytics & Performance Tracking',
    ],
  },
  {
    id: 'equity-analysis',
    name: 'Equity Analysis',
    slug: 'equity-analysis',
    brief: 'Drive growth with expert equity analysis',
    icon: 'LineChart',
    description: 'Financial modelling, investment insights, and market research to inform strategic decisions.',
    features: [
      'Financial Modelling',
      'Investment Due Diligence',
      'Market Research & Insights',
      'Business Valuation',
      'Strategic Planning Support',
    ],
  },
  {
    id: 'real-estate-solutions',
    name: 'Real Estate Solutions',
    slug: 'real-estate-solutions',
    brief: 'Elevating your property\'s presence to attract buyers',
    icon: 'Building2',
    description: 'Professional drone videography, immersive virtual tours, and compelling marketing materials that showcase properties in their best light and drive buyer interest.',
    features: [
      'Professional Drone Videography',
      'High-Definition Aerial Photography',
      'Immersive Virtual Tours',
      'Property Marketing Brochures',
      'Targeted Property Advertisements',
      'Property Staging Consultation',
    ],
  },
  {
    id: 'tech-solutions',
    name: 'Tech Solutions',
    slug: 'tech-solutions',
    brief: 'Empowering businesses with custom technology solutions',
    icon: 'Network',
    description: 'Comprehensive technology development including custom web and mobile applications, intelligent AI systems, and seamless automation solutions tailored to your business needs.',
    features: [
      'Custom Web Application Development',
      'Mobile App Development (iOS/Android)',
      'Custom LLM & AI Integration',
      'Business Process Automation',
      'API Development & Integration',
      'Database Design & Management',
    ],
  },
] as const;

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/aero-estates-ltd/',
  instagram: 'https://instagram.com/aero.estates',
  facebook: 'https://facebook.com/profile.php?id=61580480402090',
  twitter: 'https://twitter.com/Aero_Estates',
} as const;

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const;
