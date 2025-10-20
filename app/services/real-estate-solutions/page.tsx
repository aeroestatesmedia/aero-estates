import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Camera, Image as ImageIcon, Video, FileText, Target, Palette } from 'lucide-react';
import { ServiceHero } from '@/components/services/service-hero';
import { Button } from '@/components/ui/button';
import { PropertyCarousel } from '@/components/services/property-carousel';
import { InteractiveIcon } from '@/components/ui/interactive-icon';

export const metadata: Metadata = {
  title: 'Real Estate Solutions',
  description: 'Professional drone videography, immersive virtual tours, and compelling marketing materials that showcase properties in their best light.',
};

const propertySlides = [
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    title: 'Aerial Drone Videography',
    category: 'Video',
    description: 'Stunning cinematic footage showcasing properties from breathtaking perspectives',
  },
  {
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
    title: 'Virtual Property Tours',
    category: 'Virtual Tours',
    description: 'Immersive 360-degree tours that let buyers explore properties remotely',
  },
  {
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2070&auto=format&fit=crop',
    title: 'Professional Photography',
    category: 'Photography',
    description: 'High-definition aerial and ground photography that captures every detail',
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    title: 'Marketing Materials',
    category: 'Marketing',
    description: 'Compelling brochures and advertisements designed to attract buyers',
  },
  {
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop',
    title: 'Property Staging',
    category: 'Staging',
    description: 'Expert consultation to present your property at its absolute best',
  },
];

const offerings = [
  {
    icon: Video,
    title: 'Professional Drone Videography',
    description: 'Capture stunning aerial footage that showcases your property\'s location, surroundings, and unique features from breathtaking perspectives. Our certified drone operators use professional-grade equipment to create cinematic videos that highlight proximity to amenities, transport links, schools, and natural features while demonstrating the property\'s position within its neighbourhood context.',
  },
  {
    icon: ImageIcon,
    title: 'High-Definition Aerial Photography',
    description: 'Professional aerial photography that provides unique perspectives impossible to achieve from ground level. These high-resolution images are perfect for brochures, online listings, and social media marketing, showing the property\'s relationship to its surroundings, garden layouts, and architectural features from compelling overhead angles.',
  },
  {
    icon: Camera,
    title: 'Immersive Virtual Tours',
    description: 'Create engaging 360-degree virtual tours that allow potential buyers to explore properties remotely at their own pace. Our virtual tours provide an interactive experience that helps buyers develop emotional connections with properties, reducing unnecessary viewings while attracting more serious, qualified prospects.',
  },
  {
    icon: FileText,
    title: 'Professional Property Marketing Brochures',
    description: 'Design and produce high-quality marketing brochures that combine stunning photography with compelling property descriptions and key selling points. Our brochures are professionally designed to create lasting impressions and provide potential buyers with comprehensive information in an elegant, memorable format.',
  },
  {
    icon: Target,
    title: 'Targeted Property Advertisements',
    description: 'Develop compelling advertising campaigns for digital and print media, including social media ads, online property portals, and local publications. We create targeted campaigns that reach the right buyers with messages and visuals specifically designed to generate interest and drive inquiries.',
  },
  {
    icon: Palette,
    title: 'Property Staging Consultation',
    description: 'Professional advice on presenting your property to maximise appeal and value. Our staging consultation identifies opportunities to enhance the property\'s presentation, from furniture arrangement and décor suggestions to minor improvements that can significantly impact buyer perception and offers.',
  },
];

export default function RealEstateSolutionsPage() {
  return (
    <div>
      <ServiceHero
        title="Real Estate Solutions"
        description="Elevating your property's presence to attract buyers"
        Icon={Building2}
      />

      {/* Overview Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Professional Property Marketing Solutions
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-base text-muted-foreground font-light leading-relaxed">
              <p>
                In today's competitive property market, stunning visual presentation can make the difference between a property that sells quickly at full asking price and one that lingers on the market. Our real estate solutions combine cutting-edge technology with creative expertise to showcase properties in their absolute best light.
              </p>
              <p>
                We understand that first impressions are everything in real estate. That's why we offer comprehensive visual marketing services that capture the unique character and appeal of each property. From breathtaking aerial footage that showcases location and surroundings to immersive virtual tours that let buyers explore every detail, we create marketing materials that drive genuine buyer interest and engagement.
              </p>
              <p>
                Whether you're a real estate agent looking to differentiate your listings, a property developer marketing new builds, or a homeowner preparing to sell, our professional services ensure your property stands out in a crowded marketplace and attracts serious, qualified buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 lg:py-28 bg-foreground/[0.015]">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Why Choose Our Real Estate Solutions
            </h2>
            <p className="text-base text-muted-foreground font-light leading-relaxed">
              We deliver property consulting services backed by market intelligence, financial expertise, and a track record of successful outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <InteractiveIcon Icon={Camera} size="sm" />
              <h3 className="text-xl font-semibold tracking-tight">Professional Quality Production</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Every video, photo, and tour is produced to the highest professional standards using industry-leading equipment and techniques. Our experienced team knows how to capture properties at their most appealing, using optimal lighting, angles, and composition.
              </p>
            </div>

            <div className="space-y-4">
              <InteractiveIcon Icon={Target} size="sm" />
              <h3 className="text-xl font-semibold tracking-tight">Comprehensive Marketing Package</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                We provide end-to-end visual marketing solutions, from initial property assessment through final delivery of all marketing materials. Our integrated approach ensures consistent, high-quality presentation across all channels and touchpoints.
              </p>
            </div>

            <div className="space-y-4">
              <InteractiveIcon Icon={Video} size="sm" />
              <h3 className="text-xl font-semibold tracking-tight">Fast Turnaround Times</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                We understand the importance of getting properties to market quickly. Our streamlined production process ensures rapid delivery without compromising quality, helping you capitalise on market momentum and buyer interest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Showcase Carousel */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Our Property Marketing Services
            </h2>
            <p className="text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
              Professional visual marketing solutions that showcase your property and attract qualified buyers.
            </p>
          </div>
          <PropertyCarousel slides={propertySlides} />
        </div>
      </section>

      {/* Offerings List */}
      <section className="py-20 lg:py-28 bg-foreground/[0.015]">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Our Real Estate Services
            </h2>
            <p className="text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
              Complete property marketing solutions designed to showcase your property's best features and attract qualified buyers.
            </p>
          </div>

          <div className="space-y-0">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <div key={index} className={`py-10 border-t border-foreground/5 ${index === offerings.length - 1 ? 'border-b' : ''}`}>
                  <div className="grid lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-4 flex items-start gap-4">
                      <InteractiveIcon Icon={Icon} size="sm" className="flex-shrink-0" />
                      <h3 className="text-xl font-semibold tracking-tight pt-2">{offering.title}</h3>
                    </div>
                    <div className="lg:col-span-8">
                      <p className="text-base text-muted-foreground font-light leading-relaxed">{offering.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-foreground/[0.015]">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
              Our Approach
            </h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">Property Assessment & Planning</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    We begin with a comprehensive property assessment to identify unique selling points, optimal shooting conditions, and the most effective angles and features to highlight. This planning phase ensures we capture everything needed to create compelling marketing materials.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">Professional Production</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Our experienced team uses professional equipment and proven techniques to capture high-quality footage and photography. We work efficiently to minimise disruption while ensuring we have all the content needed to tell your property's story effectively.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">Post-Production & Delivery</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Our skilled editors enhance all footage and photography, creating polished final products that showcase your property at its absolute best. We deliver all materials in the formats you need for various marketing channels, ensuring consistent, professional presentation everywhere your property appears.
                  </p>
                </div>
              </div>
            </div>
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
                  Ready to Showcase Your Property?
                </h2>
                <p className="text-base text-muted-foreground font-light leading-relaxed max-w-2xl">
                  Let's discuss how our real estate marketing solutions can help attract qualified buyers and achieve the best possible outcome
                </p>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end gap-4">
                <Button size="lg" asChild className="bg-foreground text-background hover:bg-foreground/90 border-0 px-8">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
