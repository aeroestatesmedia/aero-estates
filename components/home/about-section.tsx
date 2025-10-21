'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-16"
        >
          {/* Left column - Visual placeholder */}
          <div className="lg:col-span-5">
            <div className="aspect-[4/3] rounded-sm overflow-hidden sticky top-24">
              <Image
                src="/images/bernd-dittrich-3dil0Olji38-unsplash.jpg"
                alt="About Aero Estates"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right column - Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                About Aero Estates
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-base">
              <p>
                At Aero Estates, we specialise in brand scaling, equity analysis, real estate and tech solutions. We build strong partnerships to deliver clear, innovative strategies tailored to each client's goals.
              </p>

              <p>
                Our team combines creativity, technology and insight to help brands grow and succeed in a changing market. We believe in personalised service, open collaboration and lasting value.
              </p>

              <p>
                Whether working with startups or global brands, we are committed to excellence and innovation in every project. Your vision is our mission — together, we create digital estates that inspire, engage and endure.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
