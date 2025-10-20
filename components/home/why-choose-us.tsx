'use client';

import { motion } from 'framer-motion';
import { Sparkles, Target, Zap, Handshake } from 'lucide-react';
import { staggerContainer, staggerItem } from '@/lib/animations';

const benefits = [
  {
    icon: Sparkles,
    title: 'Multidisciplinary Expertise',
    description: 'Four core services under one roof: digital, financial, property and technical solutions',
  },
  {
    icon: Target,
    title: 'Personalised Strategies',
    description: 'Tailored approaches designed specifically for your goals and market position',
  },
  {
    icon: Zap,
    title: 'Innovation Focused',
    description: 'Cutting-edge solutions that keep you ahead in a rapidly evolving digital landscape',
  },
  {
    icon: Handshake,
    title: 'Long-term Partnership',
    description: "We're committed to your sustained growth, not just one-off projects",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-20 lg:py-28 bg-foreground/[0.015] overflow-hidden">
      {/* Glassmorphism background elements */}
      <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-gradient-to-bl from-foreground/[0.02] via-transparent to-transparent blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-foreground/[0.015] via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Why Choose Us
          </h2>
          <p className="text-base text-muted-foreground font-light max-w-2xl">
            The Aero Estates advantage
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className="group"
              >
                <div className="relative h-full p-6 rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-xl shadow-lg shadow-foreground/5 hover:shadow-xl hover:shadow-foreground/10 hover:border-foreground/20 hover:-translate-y-1 transition-all duration-300">
                  {/* Glassmorphism overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                  <div className="relative space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-foreground/5 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
