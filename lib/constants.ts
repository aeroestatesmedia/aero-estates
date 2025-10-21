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
    brief: 'Strategic marketing campaigns, brand development, and content that connects with your audience and drives measurable growth.',
    icon: 'TrendingUp',
    description: 'Strategic campaigns, brand development, and content creation that drive engagement and growth.',
    features: [
      'SEO & Content Strategy',
      'Social Media Management',
      'Web Design & Development',
      'Brand Identity & Positioning',
    ],
  },
  {
    id: 'equity-analysis',
    name: 'Equity Analysis',
    slug: 'equity-analysis',
    brief: 'Financial modeling, investment analysis, and market intelligence that supports confident strategic decisions.',
    icon: 'LineChart',
    description: 'Financial modeling, investment insights, and market research to inform strategic decisions.',
    features: [
      'Financial Modeling',
      'Investment Due Diligence',
      'Market Research & Insights',
      'Business Valuation',
    ],
  },
  {
    id: 'real-estate-solutions',
    name: 'Real Estate Solutions',
    slug: 'real-estate-solutions',
    brief: 'Professional drone videography, immersive virtual tours, and high-impact marketing materials that showcase properties effectively and attract serious buyers.',
    icon: 'Building2',
    description: 'Professional drone videography, immersive virtual tours, and compelling marketing materials that showcase properties effectively and attract serious buyers.',
    features: [
      'Professional Drone Videography',
      'High-Definition Aerial Photography',
      'Immersive Virtual Tours',
      'Property Marketing Brochures',
    ],
  },
  {
    id: 'tech-solutions',
    name: 'Tech Solutions',
    slug: 'tech-solutions',
    brief: 'Custom web and mobile applications, AI integration, and automation solutions built specifically for your business requirements.',
    icon: 'Network',
    description: 'Custom web and mobile applications, AI integration, and automation solutions built specifically for your business requirements.',
    features: [
      'Custom Web Application Development',
      'Mobile App Development (iOS/Android)',
      'Custom LLM & AI Integration',
      'Business Process Automation',
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
