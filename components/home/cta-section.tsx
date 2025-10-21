'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-foreground/5 pt-16"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Ready to Build Your Digital Estate?
              </h2>
              <p className="text-base text-muted-foreground font-light leading-relaxed max-w-2xl">
                Let's talk about how we can help your business grow.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <Button
                size="lg"
                asChild
                className="bg-foreground text-background hover:bg-foreground/90 group border-0 px-8"
              >
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
