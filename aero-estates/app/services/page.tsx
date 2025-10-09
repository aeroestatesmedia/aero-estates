import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingUp, LineChart, Building2, Network, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
              Comprehensive solutions tailored to drive your business forward. From brand scaling to tech solutions, we deliver results that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-0">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group block"
                >
                  <div className={`py-12 border-t border-foreground/5 hover:bg-foreground/[0.02] transition-all duration-200 ${index === SERVICES.length - 1 ? 'border-b' : ''}`}>
                    <div className="grid lg:grid-cols-12 gap-8">
                      {/* Left: Icon and Title */}
                      <div className="lg:col-span-4 space-y-4">
                        <div className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center">
                          <Icon className="w-7 h-7 text-foreground" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                          {service.name}
                        </h2>
                      </div>

                      {/* Middle: Description and Features */}
                      <div className="lg:col-span-7 space-y-6">
                        <p className="text-base text-muted-foreground font-light leading-relaxed">
                          {service.description}
                        </p>

                        <div>
                          <h3 className="text-sm font-semibold mb-3 tracking-tight">Key Offerings</h3>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {service.features.slice(0, 6).map((feature, idx) => (
                              <li key={idx} className="flex items-start text-sm text-muted-foreground font-light">
                                <span className="mr-2">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right: Arrow */}
                      <div className="lg:col-span-1 flex justify-end items-start pt-2">
                        <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
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
