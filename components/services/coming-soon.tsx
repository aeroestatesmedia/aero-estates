'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function ComingSoon() {
  return (
    <section className="relative py-20 lg:py-28 bg-background overflow-hidden">
      {/* Glassmorphism background gradients */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-br from-foreground/[0.02] via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-tl from-foreground/[0.015] via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Glassmorphism card */}
          <div className="relative p-12 lg:p-16 rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-xl shadow-lg shadow-foreground/5">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-transparent rounded-2xl pointer-events-none" />

            <div className="relative space-y-6">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-foreground/5 rounded-xl backdrop-blur-sm">
                  <Sparkles className="w-8 h-8 text-foreground" />
                </div>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl md:text-4xl font-bold tracking-tight"
              >
                New Tools & Products — Coming Soon
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto"
              >
                We're launching 4 innovative tools to help scale your business and investment strategy. Stay tuned for updates!
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
