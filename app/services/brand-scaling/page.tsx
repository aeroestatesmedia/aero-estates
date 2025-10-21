import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, Target, Users, BarChart, Palette, Code } from 'lucide-react';
import { ServiceHero } from '@/components/services/service-hero';
import { Button } from '@/components/ui/button';
import { InteractiveIcon } from '@/components/ui/interactive-icon';
import { ComingSoon } from '@/components/services/coming-soon';

export const metadata: Metadata = {
  title: 'Brand Scaling Services',
  description: 'Strategic brand scaling campaigns, brand development, and content creation that drive engagement and growth.',
};

const offerings = [
  {
    icon: Target,
    title: 'Search Engine Optimisation (SEO)',
    description: 'Drive organic traffic with strategic SEO that improves your search rankings and visibility. We conduct comprehensive keyword research, technical SEO audits, on-page optimisation, and link building strategies to ensure your website ranks for terms that matter to your business.',
  },
  {
    icon: Palette,
    title: 'Content Marketing & Strategy',
    description: 'Engage your audience with compelling content that tells your brand story. From blog posts and white papers to video content and infographics, we create content that educates, entertains, and converts while building your authority in your industry.',
  },
  {
    icon: Users,
    title: 'Social Media Marketing',
    description: 'Build meaningful connections with your audience across Facebook, Instagram, LinkedIn, Twitter, and TikTok. We develop platform-specific strategies, create engaging content, manage community interactions, and run targeted paid campaigns to grow your following and drive engagement.',
  },
  {
    icon: Code,
    title: 'Web Design & Development',
    description: 'Create high-converting websites that reflect your brand and deliver exceptional user experiences. Our team designs and develops responsive, fast-loading websites optimised for both desktop and mobile, with seamless integration of analytics, CRM systems, and marketing automation tools.',
  },
  {
    icon: BarChart,
    title: 'Pay-Per-Click (PPC) Advertising',
    description: 'Maximise ROI with targeted PPC campaigns across Google Ads, Microsoft Advertising, and social platforms. We handle campaign setup, keyword research, ad copywriting, landing page optimisation, bid management, and continuous A/B testing to ensure your advertising budget delivers measurable results.',
  },
  {
    icon: TrendingUp,
    title: 'Email Marketing & Automation',
    description: 'Nurture leads and retain customers with strategic email marketing campaigns. We design automated workflows, segment audiences for personalised messaging, craft compelling email content, and optimise campaigns based on open rates, click-through rates, and conversions.',
  },
];

export default function DigitalMarketingPage() {
  return (
    <div>
      <ServiceHero
        title="Brand Scaling"
        description="Boost your reach with targeted digital campaigns that deliver measurable results"
        Icon={TrendingUp}
      />

      {/* Overview Section */}
      <section className="py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              <div>
                <div className="mb-12">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
                    Strategic Brand Scaling for Modern Brands
                  </h2>
                </div>
                <div className="space-y-8 text-xl text-muted-foreground font-light leading-relaxed">
                  <p>
                    In today's competitive digital landscape, a strong online presence is essential for business growth. Our brand scaling services combine creativity, data analytics, and cutting-edge technology to create campaigns that not only capture attention but deliver measurable results.
                  </p>
                  <p>
                    We take a holistic approach to brand scaling, understanding that every channel works together to create a cohesive brand experience. From SEO and content marketing to paid advertising and social media management, we develop integrated strategies that align with your business objectives and resonate with your target audience.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] lg:h-[600px]">
                <Image
                  src="/images/anthony-lim-yRXgGX7g4tM-unsplash.jpg"
                  alt="Digital marketing analytics and strategy"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="relative py-32 lg:py-40 bg-muted/20 overflow-hidden">
        {/* Glassmorphism background */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-br from-foreground/[0.02] via-transparent to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-tl from-foreground/[0.015] via-transparent to-transparent blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Why Choose Our Brand Scaling Services
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl">
                We deliver more than just marketing campaigns—we create sustainable growth strategies that evolve with your business.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative p-8 rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-xl shadow-lg shadow-foreground/5 hover:shadow-xl hover:shadow-foreground/10 hover:border-foreground/20 hover:-translate-y-1 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                <div className="relative space-y-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-foreground/5 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <BarChart className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">Data-Driven Approach</h3>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    Every decision we make is backed by data and analytics. We continuously monitor performance metrics, conduct A/B testing, and refine strategies to ensure optimal ROI and sustainable growth.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-xl shadow-lg shadow-foreground/5 hover:shadow-xl hover:shadow-foreground/10 hover:border-foreground/20 hover:-translate-y-1 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                <div className="relative space-y-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-foreground/5 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">Audience-First Methodology</h3>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    We invest time understanding your target audience—their behaviours, preferences, and pain points—to create campaigns that truly resonate and drive meaningful engagement.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-xl shadow-lg shadow-foreground/5 hover:shadow-xl hover:shadow-foreground/10 hover:border-foreground/20 hover:-translate-y-1 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                <div className="relative space-y-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-foreground/5 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">Transparent Reporting</h3>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    Receive clear, comprehensive reports that demonstrate the impact of your marketing investment. We believe in complete transparency with regular updates on campaign performance and strategic recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings List */}
      <section className="py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Our Brand Scaling Services
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl">
                Comprehensive brand scaling solutions designed to increase visibility, drive engagement, and deliver measurable business results.
              </p>
            </div>

            <div className="space-y-16">
              {offerings.map((offering, index) => {
                const Icon = offering.icon;
                return (
                  <div key={index} className="space-y-6">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 flex items-center justify-center bg-foreground/5 flex-shrink-0">
                        <Icon className="w-7 h-7 text-foreground" />
                      </div>
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tight">{offering.title}</h3>
                        <p className="text-lg text-muted-foreground font-light leading-relaxed">{offering.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <ComingSoon />

      {/* CTA Section */}
      <section className="py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="max-w-5xl mx-auto text-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Ready to Elevate Your
                  <br />
                  Digital Presence?
                </h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                  Let's discuss how our brand scaling services can help you reach your goals
                </p>
              </div>

              <div>
                <Button size="lg" asChild className="bg-foreground text-background hover:bg-foreground/90 border-0 px-10 h-14 text-base">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
