'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sean-pollock-PhYq704ffdA-unsplash.jpg"
          alt="Modern architecture"
          fill
          className="object-cover"
          priority
          quality={100}
          sizes="100vw"
        />
        {/* Glassmorphism tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/40 to-background/30" />
        {/* Additional gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Building Digital Estates That Last
              </motion.h1>

              <motion.p
                className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We partner with businesses on brand growth, financial analysis, property marketing, and technology development.
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
        </div>
      </div>
    </section>
  );
}
