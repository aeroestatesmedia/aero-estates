import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
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
      <section className="py-32 lg:py-40 bg-muted/20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Why Choose Our Brand Scaling Services
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl">
                We deliver more than just marketing campaigns—we create sustainable growth strategies that evolve with your business.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
              <div className="space-y-6">
                <div className="w-14 h-14 flex items-center justify-center bg-foreground/5">
                  <BarChart className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Data-Driven Approach</h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Every decision we make is backed by data and analytics. We continuously monitor performance metrics, conduct A/B testing, and refine strategies to ensure optimal ROI and sustainable growth.
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-14 h-14 flex items-center justify-center bg-foreground/5">
                  <Users className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Audience-First Methodology</h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  We invest time understanding your target audience—their behaviours, preferences, and pain points—to create campaigns that truly resonate and drive meaningful engagement.
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-14 h-14 flex items-center justify-center bg-foreground/5">
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

      {/* Process Section */}
      <section className="py-32 lg:py-40 bg-muted/20">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 tracking-tight">
                  Our Approach
                </h2>
                <div className="space-y-12">
                  <div className="flex gap-8">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-foreground text-background font-bold text-lg">
                      1
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold tracking-tight">Discovery & Strategy</h3>
                      <p className="text-lg text-muted-foreground font-light leading-relaxed">
                        We begin by understanding your brand, audience, and objectives to craft a tailored brand scaling strategy.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-foreground text-background font-bold text-lg">
                      2
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold tracking-tight">Implementation & Creation</h3>
                      <p className="text-lg text-muted-foreground font-light leading-relaxed">
                        Our team executes the strategy with compelling content, targeted campaigns, and seamless technical implementation.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-8">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-foreground text-background font-bold text-lg">
                      3
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold tracking-tight">Optimisation & Growth</h3>
                      <p className="text-lg text-muted-foreground font-light leading-relaxed">
                        We continuously monitor, analyse, and refine your campaigns to maximise ROI and achieve sustained growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px] hidden lg:block">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2340&auto=format&fit=crop"
                  alt="Team collaboration and strategy"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
