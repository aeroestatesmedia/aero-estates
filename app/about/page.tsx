import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { COMPANY_INFO } from '@/lib/constants';
import { Award, Users, Lightbulb, Heart, MapPin, Briefcase } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about Aero Estates - a Dublin-based agency specialising in brand scaling, equity analysis, real estate, and tech solutions.',
};

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We set the highest standards in everything we do, delivering exceptional results that exceed expectations.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace new ideas and technologies, constantly evolving to stay ahead of the curve.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We build lasting relationships based on trust, collaboration, and mutual success.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We operate with honesty and transparency, always acting in our clients\' best interests.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-6">
            <Badge variant="outline" className="border-foreground/10 text-xs font-normal">
              Est. {COMPANY_INFO.founded}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              About Aero Estates
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
              Building digital estates that inspire, engage, and endure
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Visual placeholder */}
            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-sm overflow-hidden sticky top-24">
                <Image
                  src="/images/elliot-voilmy-n5EqEx5WNuU-unsplash.jpg"
                  alt="Our Story"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Story</h2>
                <div className="space-y-4 text-base text-muted-foreground font-light leading-relaxed">
                  <p>
                    Founded in January 2024 in Dublin, Ireland, Aero Estates was born from a vision to bridge the gap between digital innovation and business growth. We saw an opportunity to create a multidisciplinary agency that could serve the diverse needs of modern businesses under one roof.
                  </p>
                  <p>
                    At Aero Estates, we specialise in brand scaling, equity analysis, real estate, and tech solutions. We build strong partnerships to deliver clear, innovative strategies tailored to each client's goals.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Mission</h2>
                <p className="text-base text-muted-foreground font-light leading-relaxed">
                  Our team combines creativity, technology, and insight to help brands grow and succeed in a changing market. We believe in personalised service, open collaboration, and lasting value. Whether working with startups or global brands, we are committed to excellence and innovation in every project. Your vision is our mission — together, we create digital estates that inspire, engage, and endure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-foreground/[0.015]">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Our Values</h2>
            <p className="text-base text-muted-foreground font-light max-w-2xl">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">{value.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Approach</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 p-8 border border-foreground/5">
              <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">Hybrid Working Model</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                We embrace modern work practices with a hybrid approach, combining the flexibility of remote work with in-person collaboration when needed. This allows us to attract top talent and maintain work-life balance while fostering strong team connections.
              </p>
            </div>

            <div className="space-y-4 p-8 border border-foreground/5">
              <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                <Users className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">Collaborative Methodology</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                We work closely with our clients as true partners, maintaining open communication and transparency throughout every project to ensure alignment and success.
              </p>
            </div>

            <div className="space-y-4 p-8 border border-foreground/5">
              <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">Innovation-Driven Mindset</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                We stay ahead of industry trends and embrace cutting-edge technologies and methodologies to deliver solutions that give our clients a competitive advantage.
              </p>
            </div>

            <div className="space-y-4 p-8 border border-foreground/5">
              <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                <Award className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">Student Internship Programme</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                We invest in the next generation through our internship programme, providing students with real-world experience and professional development opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center">
                <MapPin className="w-7 h-7 text-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Based in Dublin</h2>
            </div>
            <p className="text-base text-muted-foreground font-light leading-relaxed">
              Proudly serving clients from our base in {COMPANY_INFO.location}. Our hybrid approach means we can work with clients across Ireland and beyond, with flexible working arrangements providing opportunities for both in-person meetings and remote collaboration when needed.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="border-foreground/10 text-xs font-normal">Hybrid Operations</Badge>
              <Badge variant="outline" className="border-foreground/10 text-xs font-normal">Flexible Working Available</Badge>
              <Badge variant="outline" className="border-foreground/10 text-xs font-normal">Serving Ireland & Beyond</Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
