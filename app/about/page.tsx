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
      <section className="relative py-20 lg:py-28 bg-foreground/[0.015] overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-gradient-to-bl from-foreground/[0.02] via-transparent to-transparent blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-foreground/[0.015] via-transparent to-transparent blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Our Values</h2>
            <p className="text-base text-muted-foreground font-light max-w-2xl">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group relative p-6 rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-xl shadow-lg shadow-foreground/5 hover:shadow-xl hover:shadow-foreground/10 hover:border-foreground/20 hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                  <div className="relative space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-foreground/5 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">{value.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Our Approach</h2>
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                Regardless of the service, we follow a proven methodology that ensures exceptional results and client satisfaction.
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex gap-8">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-foreground text-background font-bold text-lg">
                  1
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold tracking-tight">Discovery & Strategy</h3>
                  <p className="text-base text-muted-foreground font-light leading-relaxed">
                    We begin every engagement by deeply understanding your business, objectives, challenges, and target audience. Through comprehensive discovery sessions, research, and analysis, we develop tailored strategies that align with your goals and set the foundation for success.
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-foreground text-background font-bold text-lg">
                  2
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold tracking-tight">Planning & Design</h3>
                  <p className="text-base text-muted-foreground font-light leading-relaxed">
                    With a clear understanding of your needs, we create detailed plans, designs, and roadmaps. This includes technical specifications, creative concepts, financial models, or marketing strategies—whatever is needed to bring your vision to life with clarity and precision.
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-foreground text-background font-bold text-lg">
                  3
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold tracking-tight">Implementation & Execution</h3>
                  <p className="text-base text-muted-foreground font-light leading-relaxed">
                    Our expert teams execute the strategy with precision and creativity. Whether developing technology, creating marketing campaigns, producing visual content, or conducting financial analysis, we maintain the highest standards of quality while keeping you informed and involved throughout the process.
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-foreground text-background font-bold text-lg">
                  4
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold tracking-tight">Optimisation & Growth</h3>
                  <p className="text-base text-muted-foreground font-light leading-relaxed">
                    We don't just deliver and walk away. We continuously monitor performance, gather feedback, analyse results, and refine our approach to maximise ROI and drive sustained growth. Our commitment extends beyond project completion to ensure long-term success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Model Section */}
      <section className="relative py-20 lg:py-28 bg-foreground/[0.015] overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-foreground/[0.02] via-transparent to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-foreground/[0.015] via-transparent to-transparent blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How We Work</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative p-8 rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-xl shadow-lg shadow-foreground/5 hover:shadow-xl hover:shadow-foreground/10 hover:border-foreground/20 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">Hybrid Working Model</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  We embrace modern work practices with a hybrid approach, combining the flexibility of remote work with in-person collaboration when needed. This allows us to attract top talent and maintain work-life balance while fostering strong team connections.
                </p>
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-xl shadow-lg shadow-foreground/5 hover:shadow-xl hover:shadow-foreground/10 hover:border-foreground/20 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">Collaborative Partnership</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  We work closely with our clients as true partners, maintaining open communication and transparency throughout every project to ensure alignment and success.
                </p>
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-xl shadow-lg shadow-foreground/5 hover:shadow-xl hover:shadow-foreground/10 hover:border-foreground/20 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">Innovation-Driven</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  We stay ahead of industry trends and embrace cutting-edge technologies and methodologies to deliver solutions that give our clients a competitive advantage.
                </p>
              </div>
            </div>

            <div className="group relative p-8 rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-xl shadow-lg shadow-foreground/5 hover:shadow-xl hover:shadow-foreground/10 hover:border-foreground/20 hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              <div className="relative space-y-4">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight">Student Internships</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  We invest in the next generation through our internship programme, providing students with real-world experience and professional development opportunities.
                </p>
              </div>
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
