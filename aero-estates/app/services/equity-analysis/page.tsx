import type { Metadata } from 'next';
import Link from 'next/link';
import { LineChart, TrendingUp, FileText, Calculator, PieChart, Target, BarChart3, CircleDollarSign } from 'lucide-react';
import { ServiceHero } from '@/components/services/service-hero';
import { Button } from '@/components/ui/button';
import { InteractiveIcon } from '@/components/ui/interactive-icon';

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
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Data-Driven Financial Intelligence
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-base text-muted-foreground font-light leading-relaxed">
              <p>
                In today's complex financial landscape, informed decision-making requires rigorous analysis and deep market understanding. Our equity analysis services provide the insights and intelligence businesses need to evaluate opportunities, assess risks, and drive strategic growth.
              </p>
              <p>
                We combine technical financial expertise with industry knowledge to deliver comprehensive analysis that goes beyond the numbers. Whether you're evaluating an acquisition target, planning a capital raise, or developing long-term strategy, we provide the financial intelligence that supports confident decision-making.
              </p>
              <p>
                From startups seeking their first institutional funding to established enterprises planning major transactions, our team brings institutional-grade financial analysis tailored to businesses of all sizes and stages.
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
              Why Choose Our Equity Analysis Services
            </h2>
            <p className="text-base text-muted-foreground font-light leading-relaxed">
              We deliver institutional-quality analysis with a practical, business-focused approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <InteractiveIcon Icon={BarChart3} size="sm" />
              <h3 className="text-xl font-semibold tracking-tight">Rigorous Methodology</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Our analysis follows established financial standards and best practices, ensuring credibility and reliability. We use sophisticated modelling techniques while maintaining transparency in our assumptions and methodologies.
              </p>
            </div>

            <div className="space-y-4">
              <InteractiveIcon Icon={Target} size="sm" />
              <h3 className="text-xl font-semibold tracking-tight">Actionable Insights</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                We don't just deliver data—we provide clear, actionable recommendations that directly support your business objectives. Our reports translate complex financial analysis into strategic insights you can act on.
              </p>
            </div>

            <div className="space-y-4">
              <InteractiveIcon Icon={TrendingUp} size="sm" />
              <h3 className="text-xl font-semibold tracking-tight">Industry Expertise</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Our team combines financial analysis skills with deep sector knowledge, enabling us to contextualise findings within industry dynamics and competitive realities that matter to your business.
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
              Our Equity Analysis Services
            </h2>
            <p className="text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
              Comprehensive financial analysis and strategic insights to support critical business decisions and drive sustainable growth.
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
              Our Methodology
            </h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">Data Collection & Analysis</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    We gather comprehensive financial data, market intelligence, and operational metrics to build a complete picture of the opportunity or challenge. This includes detailed financial statement analysis, industry research, and stakeholder consultations.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">Modelling & Scenario Planning</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Using sophisticated financial models, we analyse multiple scenarios to understand potential outcomes and risks. Our models are built with flexibility to test various assumptions and strategic alternatives, providing a range of outcomes for decision-making.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">Insights & Strategic Recommendations</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    We deliver clear, actionable insights with strategic recommendations tailored to your specific objectives. Our reports present findings in an accessible format while maintaining analytical rigor, ensuring stakeholders at all levels can understand and act on our conclusions.
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
                  Make Informed Financial Decisions
                </h2>
                <p className="text-base text-muted-foreground font-light leading-relaxed max-w-2xl">
                  Partner with us for expert equity analysis and financial intelligence that drives strategic success
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
