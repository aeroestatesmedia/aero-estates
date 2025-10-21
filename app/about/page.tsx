import type { Metadata } from 'next';
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
    description: 'We maintain high standards across everything we deliver, consistently exceeding client expectations.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay current with new ideas and technologies, continuously evolving our approach to deliver better results.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We build relationships based on trust, open communication, and shared success.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We operate with complete transparency, always acting in our clients\' best interests.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              About Aero Estates
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
              Building digital estates that last
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
                    Founded in January 2024 in Dublin, Ireland, Aero Estates emerged from a straightforward observation: businesses need integrated solutions, not disconnected services. We created a multidisciplinary agency that could handle diverse business needs under one roof.
                  </p>
                  <p>
                    We specialize in brand scaling, equity analysis, real estate solutions, and technology development. Our approach is based on building genuine partnerships and delivering clear, practical strategies that align with our clients' objectives.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Mission</h2>
                <p className="text-base text-muted-foreground font-light leading-relaxed">
                  Our team combines marketing expertise, financial acumen, and technical capability to help businesses grow sustainably. We believe in honest communication, meaningful collaboration, and delivering real value. Whether you're a startup or an established brand, we bring the same level of commitment to excellence. Your vision becomes our focus—together, we build something that endures.
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
              The principles behind our work
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
                We follow a proven methodology across all services that ensures strong results and client satisfaction.
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
                    Every engagement starts with understanding your business, goals, challenges, and target audience. Through thorough discovery sessions and research, we develop strategies specifically tailored to your situation and objectives.
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
                    With clear understanding of your needs, we create detailed plans and roadmaps. This includes technical specifications, creative concepts, financial models, or marketing strategies—whatever's needed to execute effectively and efficiently.
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
                    Our teams execute with precision and creativity. Whether developing technology, creating marketing campaigns, producing visual content, or conducting financial analysis, we maintain consistent quality while keeping you informed throughout.
                  </p>
                </div>
              </div>

              <div className="flex gap-8">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-foreground text-background font-bold text-lg">
                  4
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold tracking-tight">Optimization & Growth</h3>
                  <p className="text-base text-muted-foreground font-light leading-relaxed">
                    We don't just deliver and disappear. We monitor performance, gather feedback, analyze results, and refine our approach to maximize ROI and drive sustained growth. Our commitment extends well beyond project completion.
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
                  We use a hybrid approach that combines remote flexibility with in-person collaboration when valuable. This lets us work with top talent while maintaining strong team connections and work-life balance.
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
                  We work as true partners with our clients, maintaining clear communication and transparency throughout every project to ensure alignment and success.
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
                  We stay ahead of industry trends and adopt proven technologies and methodologies that give our clients competitive advantages.
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
                  We invest in emerging talent through our internship program, providing students with practical experience and professional development opportunities.
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
              We serve clients from our Dublin, Ireland base. Our hybrid model means we work with clients across Ireland and internationally, with flexible arrangements for both in-person meetings and remote collaboration as needed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
