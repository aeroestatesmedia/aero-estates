import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, LineChart, Building2, Network, ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ServiceHero } from '@/components/services/service-hero';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our brand scaling, equity analysis, real estate and tech solutions services',
};

const iconMap = {
  TrendingUp,
  LineChart,
  Building2,
  Network,
};

export default function ServicesPage() {
  return (
    <div>
      <ServiceHero
        title="Our Services"
        description="Comprehensive solutions tailored to drive your business forward"
        Icon={Sparkles}
      />

      {/* Overview Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Strategic Solutions for Modern Business
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-base text-muted-foreground font-light leading-relaxed">
              <p>
                At Aero Estates, we deliver integrated solutions across brand scaling, equity analysis, real estate, and technology. Our approach combines strategic thinking with practical execution to help businesses grow, scale, and succeed in competitive markets.
              </p>
              <p>
                Each service is designed to address specific business challenges while working together as part of a comprehensive growth strategy. Whether you're looking to expand your digital presence, make informed investment decisions, showcase properties effectively, or leverage technology for competitive advantage, our expert team delivers results that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Glassmorphism */}
      <section className="relative py-20 lg:py-28 bg-foreground/[0.015] overflow-hidden">
        {/* Glassmorphism background gradients */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-br from-foreground/[0.02] via-transparent to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-tl from-foreground/[0.015] via-transparent to-transparent blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Our Services
            </h2>
            <p className="text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
              Explore our comprehensive range of services designed to help your business thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group block h-full"
                >
                  <div className="group relative p-8 rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-xl shadow-lg shadow-foreground/5 hover:shadow-xl hover:shadow-foreground/10 hover:border-foreground/20 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                    <div className="relative space-y-6 flex-1 flex flex-col">
                      <div className="w-14 h-14 flex items-center justify-center bg-foreground/5 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-foreground" />
                      </div>

                      <div className="space-y-4 flex-1 flex flex-col">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-2xl font-bold tracking-tight">{service.name}</h3>
                          <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                        </div>

                        <p className="text-base text-muted-foreground font-light leading-relaxed flex-1">
                          {service.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-3 tracking-tight">Key Offerings</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-muted-foreground font-light">
                              <span className="mr-2">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
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
                  Ready to Get Started?
                </h2>
                <p className="text-base text-muted-foreground font-light leading-relaxed max-w-2xl">
                  Let's discuss which services are right for your business and how we can help you achieve your goals.
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <Button size="lg" asChild className="bg-foreground text-background hover:bg-foreground/90 border-0 px-8">
                  <Link href="/contact">
                    Contact Us Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
