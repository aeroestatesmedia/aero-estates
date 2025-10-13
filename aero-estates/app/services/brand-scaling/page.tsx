import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, Target, Users, BarChart, Palette, Code } from 'lucide-react';
import { ServiceHero } from '@/components/services/service-hero';
import { Button } from '@/components/ui/button';
import { InteractiveIcon } from '@/components/ui/interactive-icon';

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
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Strategic Brand Scaling for Modern Brands
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-base text-muted-foreground font-light leading-relaxed">
              <p>
                In today's competitive digital landscape, a strong online presence is essential for business growth. Our brand scaling services combine creativity, data analytics, and cutting-edge technology to create campaigns that not only capture attention but deliver measurable results.
              </p>
              <p>
                We take a holistic approach to brand scaling, understanding that every channel works together to create a cohesive brand experience. From SEO and content marketing to paid advertising and social media management, we develop integrated strategies that align with your business objectives and resonate with your target audience.
              </p>
              <p>
                Whether you're a startup looking to establish your digital footprint, a growing business aiming to scale your online presence, or an established brand seeking to refresh your digital strategy, we provide tailored solutions backed by industry expertise and proven methodologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 lg:py-28 bg-foreground/[0.015]">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Why Choose Our Brand Scaling Services
            </h2>
            <p className="text-base text-muted-foreground font-light leading-relaxed">
              We deliver more than just marketing campaigns—we create sustainable growth strategies that evolve with your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <InteractiveIcon Icon={BarChart} size="sm" />
              <h3 className="text-xl font-semibold tracking-tight">Data-Driven Approach</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Every decision we make is backed by data and analytics. We continuously monitor performance metrics, conduct A/B testing, and refine strategies to ensure optimal ROI and sustainable growth.
              </p>
            </div>

            <div className="space-y-4">
              <InteractiveIcon Icon={Users} size="sm" />
              <h3 className="text-xl font-semibold tracking-tight">Audience-First Methodology</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                We invest time understanding your target audience—their behaviours, preferences, and pain points—to create campaigns that truly resonate and drive meaningful engagement.
              </p>
            </div>

            <div className="space-y-4">
              <InteractiveIcon Icon={TrendingUp} size="sm" />
              <h3 className="text-xl font-semibold tracking-tight">Transparent Reporting</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Receive clear, comprehensive reports that demonstrate the impact of your marketing investment. We believe in complete transparency with regular updates on campaign performance and strategic recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings List */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Our Brand Scaling Services
            </h2>
            <p className="text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
              Comprehensive brand scaling solutions designed to increase visibility, drive engagement, and deliver measurable business results.
            </p>
          </div>

          <div className="space-y-0">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <div key={index} className={`py-10 border-t border-foreground/5 ${index === offerings.length - 1 ? 'border-b' : ''}`}>
                  <div className="grid lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-4 flex items-start gap-4">
                      <InteractiveIcon Icon={Icon} size="sm" className="flex-shrink-0" />
                      <h3 className="text-xl font-semibold tracking-tight pt-2">{offering.title}</h3>
                    </div>
                    <div className="lg:col-span-8">
                      <p className="text-base text-muted-foreground font-light leading-relaxed">{offering.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-foreground/[0.015]">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
              Our Approach
            </h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">Discovery & Strategy</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    We begin by understanding your brand, audience, and objectives to craft a tailored brand scaling strategy.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">Implementation & Creation</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Our team executes the strategy with compelling content, targeted campaigns, and seamless technical implementation.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">Optimisation & Growth</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    We continuously monitor, analyse, and refine your campaigns to maximise ROI and achieve sustained growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="border-t border-foreground/5 pt-16">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  Ready to Elevate Your Digital Presence?
                </h2>
                <p className="text-base text-muted-foreground font-light leading-relaxed max-w-2xl">
                  Let's discuss how our brand scaling services can help you reach your goals
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end gap-4">
                <Button size="lg" asChild className="bg-foreground text-background hover:bg-foreground/90 border-0 px-8">
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
