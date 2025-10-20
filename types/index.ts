export interface Service {
  id: string;
  name: string;
  slug: string;
  brief: string;
  icon: string;
  description: string;
  features: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: 'digital-marketing' | 'equity-analysis' | 'real-estate-solutions' | 'technology-architecture' | 'general';
  message: string;
}

export interface NavLink {
  name: string;
  href: string;
}
