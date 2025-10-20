'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center bg-background overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-foreground/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Building Digital Estates That Endure
              </motion.h1>

              <motion.p
                className="text-lg text-muted-foreground font-light leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Strategic partners in brand scaling, equity analysis, real estate solutions, and tech solutions.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button size="lg" asChild className="bg-foreground text-background hover:bg-foreground/90 border-0 px-8">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button size="lg" variant="ghost" asChild className="hover:bg-foreground/5 px-8">
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Visual element/placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src="/images/tsuyoshi-kozu--BnlR3U65hg-unsplash.jpg"
                alt="Aero Estates"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
