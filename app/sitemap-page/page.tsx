import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'Sitemap for Aero Estates - Navigate through all pages on our website.',
};

const sitePages = [
  {
    category: 'Main Pages',
    pages: [
      { title: 'Home', href: '/' },
      { title: 'About Us', href: '/about' },
      { title: 'Services', href: '/services' },
      { title: 'Contact', href: '/contact' },
    ],
  },
  {
    category: 'Services',
    pages: [
      { title: 'Brand Scaling', href: '/services/brand-scaling' },
      { title: 'Equity Analysis', href: '/services/equity-analysis' },
      { title: 'Real Estate Solutions', href: '/services/real-estate-solutions' },
      { title: 'Tech Solutions', href: '/services/tech-solutions' },
    ],
  },
  {
    category: 'Legal',
    pages: [
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Service', href: '/terms' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Sitemap</h1>
              <p className="text-muted-foreground leading-relaxed">
                Navigate through all pages on our website
              </p>
            </div>

            <div className="space-y-10">
              {sitePages.map((section) => (
                <div key={section.category} className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tight">{section.category}</h2>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {section.pages.map((page) => (
                      <li key={page.href}>
                        <Link
                          href={page.href}
                          className="group flex items-center p-4 rounded-lg border border-foreground/10 bg-background/60 backdrop-blur-sm hover:border-foreground/20 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex-1">
                            <span className="text-foreground font-medium group-hover:text-foreground/80 transition-colors">
                              {page.title}
                            </span>
                            <p className="text-sm text-muted-foreground mt-1">
                              {page.href}
                            </p>
                          </div>
                          <svg
                            className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M9 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
