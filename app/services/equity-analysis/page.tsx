import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { LineChart, TrendingUp, FileText, Calculator, PieChart, Target, BarChart3, CircleDollarSign } from 'lucide-react';
import { ServiceHero } from '@/components/services/service-hero';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Equity Analysis Services',
  description: 'Expert financial modelling, investment insights, and market research to inform strategic business decisions.',
};

const offerings = [
  {
    icon: Calculator,
    title: 'Financial Modelling & Forecasting',
    description: 'Develop comprehensive financial models that project future performance, cash flows, and business scenarios. Our models incorporate historical data, market trends, and strategic assumptions to provide reliable forecasts for budgeting, fundraising, and strategic planning initiatives.',
  },
  {
    icon: FileText,
    title: 'Investment Due Diligence',
    description: 'Conduct thorough due diligence assessments for investment opportunities, including financial statement analysis, quality of earnings reviews, working capital analysis, and identification of potential risks and value drivers. We provide detailed reports that enable informed investment decisions.',
  },
  {
    icon: TrendingUp,
    title: 'Market Research & Analysis',
    description: 'Deliver deep market intelligence covering industry trends, competitive landscapes, market sizing, and growth opportunities. Our research combines quantitative data analysis with qualitative insights to inform market entry strategies, product development, and competitive positioning.',
  },
  {
    icon: PieChart,
    title: 'Business Valuation',
    description: 'Provide accurate business valuations using multiple methodologies including DCF analysis, comparable company analysis, and precedent transactions. Whether for M&A transactions, fundraising rounds, shareholder agreements, or tax planning, we deliver defensible valuations supported by robust analysis.',
  },
  {
    icon: Target,
    title: 'Strategic Financial Planning',
    description: 'Support long-term strategic planning with financial analysis and scenario modelling. We help businesses evaluate growth initiatives, capital allocation decisions, and strategic alternatives, providing the financial insights needed to make confident, data-driven choices.',
  },
  {
    icon: CircleDollarSign,
    title: 'Capital Structure Advisory',
    description: 'Optimise your capital structure by analysing debt and equity options, evaluating funding alternatives, and assessing the impact of different financing strategies on returns and risk profile. We help businesses make informed decisions about raising capital and managing their balance sheet.',
  },
];

export default function EquityAnalysisPage() {
  return (
    <div>
      <ServiceHero
        title="Equity Analysis"
        description="Drive growth with expert equity analysis and financial insights"
        Icon={LineChart}
      />

      {/* Overview Section */}
      <section className="py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              <div>
                <div className="mb-12">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
                    Data-Driven Financial Intelligence
                  </h2>
                </div>
                <div className="space-y-8 text-xl text-muted-foreground font-light leading-relaxed">
                  <p>
                    In today's complex financial landscape, informed decision-making requires rigorous analysis and deep market understanding. Our equity analysis services provide the insights and intelligence businesses need to evaluate opportunities, assess risks, and drive strategic growth.
                  </p>
                  <p>
                    We combine technical financial expertise with industry knowledge to deliver comprehensive analysis that goes beyond the numbers. Whether you're evaluating an acquisition target, planning a capital raise, or developing long-term strategy, we provide the financial intelligence that supports confident decision-making.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] lg:h-[600px]">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop"
                  alt="Financial data analysis and charts"
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
                Why Choose Our Equity Analysis Services
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl">
                We deliver institutional-quality analysis with a practical, business-focused approach.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
              <div className="space-y-6">
                <div className="w-14 h-14 flex items-center justify-center bg-foreground/5">
                  <BarChart3 className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Rigorous Methodology</h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Our analysis follows established financial standards and best practices, ensuring credibility and reliability. We use sophisticated modelling techniques while maintaining transparency in our assumptions and methodologies.
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-14 h-14 flex items-center justify-center bg-foreground/5">
                  <Target className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Actionable Insights</h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  We don't just deliver data—we provide clear, actionable recommendations that directly support your business objectives. Our reports translate complex financial analysis into strategic insights you can act on.
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-14 h-14 flex items-center justify-center bg-foreground/5">
                  <TrendingUp className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Industry Expertise</h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Our team combines financial analysis skills with deep sector knowledge, enabling us to contextualise findings within industry dynamics and competitive realities that matter to your business.
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
                Our Equity Analysis Services
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl">
                Comprehensive financial analysis and strategic insights to support critical business decisions and drive sustainable growth.
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

      {/* CTA Section */}
      <section className="py-32 lg:py-40 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24">
          <div className="max-w-5xl mx-auto text-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Make Informed
                  <br />
                  Financial Decisions
                </h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                  Partner with us for expert equity analysis and financial intelligence that drives strategic success
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
