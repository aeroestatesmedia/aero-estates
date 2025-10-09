'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TrendingUp, LineChart, Building2, Network, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SERVICES } from '@/lib/constants';
import { staggerContainer, staggerItem } from '@/lib/animations';

const iconMap = {
  TrendingUp,
  LineChart,
  Building2,
  Network,
};

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Our Services
          </h2>
          <p className="text-base text-muted-foreground font-light max-w-2xl">
            Comprehensive solutions designed to drive growth and innovation across digital, financial, real estate, and technology landscapes.
          </p>
        </motion.div>

        {/* Services list */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-0"
        >
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div key={service.id} variants={staggerItem}>
                <Link href={`/services/${service.slug}`} className="group block">
                  <div className={`py-8 border-t border-foreground/5 hover:bg-foreground/[0.02] transition-all duration-200 ${index === SERVICES.length - 1 ? 'border-b' : ''}`}>
                    <div className="flex items-center gap-6">
                      {/* Icon and title */}
                      <div className="flex items-center gap-4 flex-1 lg:flex-[0_0_41.666%]">
                        <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-foreground" />
                        </div>
                        <h3 className="text-xl font-semibold tracking-tight">
                          {service.name}
                        </h3>
                      </div>

                      {/* Description */}
                      <div className="hidden lg:block flex-1 lg:flex-[0_0_50%]">
                        <p className="text-muted-foreground font-light leading-relaxed">
                          {service.brief}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex items-center justify-end lg:flex-[0_0_8.333%]">
                        <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
