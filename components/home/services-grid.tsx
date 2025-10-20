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
    <section className="relative py-20 lg:py-28 bg-background overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-foreground/[0.02] via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-foreground/[0.025] via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
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

        {/* Services grid with glassmorphism cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div key={service.id} variants={staggerItem}>
                <Link href={`/services/${service.slug}`} className="group block h-full">
                  <div className="relative h-full p-8 rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur-xl shadow-lg shadow-foreground/5 hover:shadow-xl hover:shadow-foreground/10 hover:border-foreground/20 hover:-translate-y-1 transition-all duration-300">
                    {/* Glassmorphism overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                    <div className="relative space-y-4">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-foreground/5 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-foreground" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold tracking-tight">
                        {service.name}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground font-light leading-relaxed">
                        {service.brief}
                      </p>

                      {/* Arrow */}
                      <div className="flex items-center gap-2 text-sm font-medium pt-2">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">Learn more</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
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
