import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, TrendingUp, FileSearch, Briefcase, MapPin, DollarSign, ClipboardCheck } from 'lucide-react';
import { ServiceHero } from '@/components/services/service-hero';
import { Button } from '@/components/ui/button';
import { PropertyCarousel } from '@/components/services/property-carousel';
import { InteractiveIcon } from '@/components/ui/interactive-icon';

export const metadata: Metadata = {
  title: 'Real Estate Solutions',
  description: 'Expert property consulting, market analysis, and investment strategy services for commercial and residential real estate development.',
};

const propertySlides = [
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    title: 'Commercial Development Projects',
    category: 'Commercial',
    description: 'Strategic consulting for office, retail, and mixed-use developments',
  },
  {
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
    title: 'Residential Investment Opportunities',
    category: 'Residential',
    description: 'Portfolio management and acquisition strategy for residential properties',
  },
  {
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2070&auto=format&fit=crop',
    title: 'Industrial & Logistics Assets',
    category: 'Industrial',
    description: 'Specialized advisory for warehouse and logistics property investments',
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    title: 'Luxury Property Consulting',
    category: 'Luxury',
    description: 'High-end residential consulting and market analysis',
  },
  {
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop',
    title: 'Urban Regeneration Projects',
    category: 'Development',
    description: 'Comprehensive planning and execution for urban renewal initiatives',
  },
];

const offerings = [
  {
    icon: TrendingUp,
    title: 'Property Development Consulting',
    description: 'Comprehensive development advisory services from concept to completion, including project feasibility analysis, development strategy, planning coordination, and construction oversight. We guide developers through complex projects while managing risk and maximising returns on investment.',
  },
  {
    icon: FileSearch,
    title: 'Market Analysis & Research',
    description: 'In-depth market intelligence covering supply and demand dynamics, pricing trends, demographic analysis, and competitive positioning. Our research provides the data-driven insights needed to identify opportunities, assess market viability, and make informed property decisions.',
  },
  {
    icon: Briefcase,
    title: 'Investment Strategy & Portfolio Management',
    description: 'Strategic advisory services for property investors, including portfolio optimisation, acquisition strategy, asset allocation, and performance monitoring. We help investors build diversified portfolios that align with risk tolerance and return objectives while capitalising on market opportunities.',
  },
  {
    icon: DollarSign,
    title: 'Property Valuation & Appraisal',
    description: 'Professional property valuations using industry-standard methodologies including income capitalisation, comparable sales analysis, and cost approach. Our valuations support acquisition decisions, financing requirements, portfolio reporting, tax planning, and dispute resolution with defensible, well-documented analysis.',
  },
  {
    icon: MapPin,
    title: 'Site Selection & Feasibility Studies',
    description: 'Comprehensive site evaluation services assessing location suitability, zoning and planning considerations, infrastructure requirements, environmental factors, and development potential. We conduct detailed feasibility studies that analyse financial viability, market demand, and risk factors for proposed projects.',
  },
  {
    icon: ClipboardCheck,
    title: 'Due Diligence & Transaction Support',
    description: 'Thorough due diligence services for property acquisitions, including title review, lease analysis, physical condition assessments, environmental investigations, and financial verification. We provide transaction support through negotiation, documentation review, and closing coordination to ensure smooth, risk-mitigated property transactions.',
  },
];

export default function RealEstateSolutionsPage() {
  return (
    <div>
      <ServiceHero
        title="Real Estate Solutions"
        description="Unlock property potential with expert real estate consulting and investment strategy"
        Icon={Building2}
      />

      {/* Overview Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Strategic Real Estate Advisory for Property Success
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-base text-muted-foreground font-light leading-relaxed">
              <p>
                In today's dynamic property market, successful real estate investment and development requires sophisticated analysis, market expertise, and strategic planning. Our real estate solutions provide comprehensive advisory services that help clients navigate complex property transactions, optimise portfolios, and capitalise on market opportunities.
              </p>
              <p>
                We bring institutional-grade expertise to property consulting, combining deep market knowledge with rigorous financial analysis. Whether you're a developer planning a major project, an investor building a portfolio, or a business making strategic property decisions, we provide the insights and guidance needed to achieve your objectives while managing risk effectively.
              </p>
              <p>
                From initial market research and feasibility analysis through acquisition, development, and asset management, our team delivers end-to-end real estate advisory services. We work with developers, investors, corporations, and family offices across residential, commercial, industrial, and mixed-use property sectors.
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
              Why Choose Our Real Estate Solutions
            </h2>
            <p className="text-base text-muted-foreground font-light leading-relaxed">
              We deliver property consulting services backed by market intelligence, financial expertise, and a track record of successful outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <InteractiveIcon Icon={TrendingUp} size="sm" />
              <h3 className="text-xl font-semibold tracking-tight">Market Intelligence</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Access deep market insights based on comprehensive data analysis, local expertise, and industry relationships. We track market trends, transaction activity, and emerging opportunities to keep clients informed and positioned for success.
              </p>
            </div>

            <div className="space-y-4">
              <InteractiveIcon Icon={FileSearch} size="sm" />
              <h3 className="text-xl font-semibold tracking-tight">Rigorous Analysis</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Every recommendation is supported by thorough financial modelling, market research, and risk assessment. We apply institutional-quality analysis to evaluate opportunities and support confident decision-making.
              </p>
            </div>

            <div className="space-y-4">
              <InteractiveIcon Icon={Briefcase} size="sm" />
              <h3 className="text-xl font-semibold tracking-tight">End-to-End Support</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                From initial strategy development through transaction execution and ongoing asset management, we provide comprehensive support throughout the property lifecycle. Our team becomes your trusted advisor for all real estate decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Showcase Carousel */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Property Sectors We Serve
            </h2>
            <p className="text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
              From commercial developments to residential investments, we provide specialized expertise across all major property sectors.
            </p>
          </div>
          <PropertyCarousel slides={propertySlides} />
        </div>
      </section>

      {/* Offerings List */}
      <section className="py-20 lg:py-28 bg-foreground/[0.015]">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Our Real Estate Services
            </h2>
            <p className="text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
              Comprehensive property consulting and investment advisory services designed to maximise value and manage risk across the real estate lifecycle.
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
                  <h3 className="text-xl font-semibold tracking-tight">Discovery & Requirements</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    We begin by understanding your property objectives, investment criteria, timeline, and constraints. This discovery phase ensures our recommendations align with your specific goals, risk tolerance, and capital requirements.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">Analysis & Strategy Development</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Our team conducts comprehensive market research, financial analysis, and risk assessment to develop a tailored strategy. We evaluate opportunities, model scenarios, and present clear recommendations supported by data and market intelligence.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">Execution & Ongoing Support</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    We support implementation through transaction execution, coordination with professional advisors, and ongoing asset management. Our team remains engaged to ensure successful outcomes and provide continued strategic guidance as market conditions evolve.
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
                  Ready to Maximise Your Property Potential?
                </h2>
                <p className="text-base text-muted-foreground font-light leading-relaxed max-w-2xl">
                  Let's discuss how our real estate solutions can support your investment and development objectives
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
