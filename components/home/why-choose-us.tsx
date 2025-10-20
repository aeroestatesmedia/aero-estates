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
    <section className="py-20 lg:py-28 bg-foreground/[0.015]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                className="space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
