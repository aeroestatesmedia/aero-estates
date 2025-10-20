export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aero Estates Limited',
  url: 'https://aeroestates.ie',
  logo: 'https://aeroestates.ie/logos/AE-light.svg',
  description: 'Brand scaling, equity analysis, real estate solutions and tech solutions services',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dublin',
    addressRegion: 'Dublin 15',
    addressCountry: 'IE',
  },
  foundingDate: '2024-01',
  sameAs: [
    'https://linkedin.com/company/aero-estates',
    'https://instagram.com/aeroestates',
    'https://facebook.com/aeroestates',
    'https://twitter.com/aeroestates',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@aeroestates.ie',
    contactType: 'Customer Service',
    availableLanguage: 'English',
  },
};

export const serviceSchema = (serviceName: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description: description,
  provider: {
    '@type': 'Organization',
    name: 'Aero Estates Limited',
    url: 'https://aeroestates.ie',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Ireland',
  },
});
