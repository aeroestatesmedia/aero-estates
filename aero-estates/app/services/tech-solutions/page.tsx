import type { Metadata } from 'next';
import Link from 'next/link';
import { Network, Cloud, Server, Shield, Layers, GitBranch } from 'lucide-react';
import { ServiceHero } from '@/components/services/service-hero';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Tech Solutions Services',
  description: 'Expert cloud infrastructure, system design, and technical strategy services for scalable, secure enterprise tech solutions.',
};

const offerings = [
  {
    icon: Cloud,
    title: 'Cloud Infrastructure & Architecture',
    description: 'Design and implement scalable cloud solutions across AWS, Azure, and Google Cloud Platform. We architect multi-cloud and hybrid environments optimised for performance, cost-efficiency, and reliability, including infrastructure as code, containerisation strategies, and cloud migration planning that minimises disruption while maximising cloud benefits.',
  },
  {
    icon: Layers,
    title: 'System Design & Integration',
    description: 'Develop comprehensive system architectures that integrate seamlessly with existing technology ecosystems. From microservices design to enterprise application integration, we create scalable, maintainable systems that support business processes while enabling future growth and technology evolution.',
  },
  {
    icon: Shield,
    title: 'Security Architecture & Compliance',
    description: 'Implement robust security frameworks that protect critical assets while maintaining usability and performance. Our security architecture services cover identity and access management, data protection, network security, threat detection, and compliance with regulatory requirements including GDPR, SOC 2, and industry-specific standards.',
  },
  {
    icon: Network,
    title: 'API Design & Microservices Architecture',
    description: 'Design RESTful and GraphQL APIs that enable seamless integration and data exchange. We architect microservices-based systems that improve agility, scalability, and resilience, implementing API gateways, service mesh technologies, and event-driven architectures that support modern application development and digital transformation initiatives.',
  },
  {
    icon: Server,
    title: 'Technical Strategy & Modernisation',
    description: 'Develop comprehensive technology roadmaps that align IT investments with business objectives. We assess legacy systems, identify modernisation opportunities, and plan technology transformations that reduce technical debt while enabling innovation. Our strategic guidance covers technology selection, build vs. buy decisions, and digital platform development.',
  },
  {
    icon: GitBranch,
    title: 'DevOps & Automation Implementation',
    description: 'Establish DevOps practices and automation frameworks that accelerate software delivery while improving quality and reliability. We implement CI/CD pipelines, infrastructure automation, monitoring and observability solutions, and deployment strategies including blue-green deployments, canary releases, and progressive delivery approaches that enable rapid, safe software releases.',
  },
];

export default function TechnologyArchitecturePage() {
  return (
    <div>
      <ServiceHero
        title="Tech Solutions"
        description="Build scalable technology solutions with expert system design and infrastructure"
        Icon={Network}
      />

      {/* Overview Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Enterprise Tech Solutions for Digital Success
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-base text-muted-foreground font-light leading-relaxed">
              <p>
                In today's rapidly evolving technology landscape, robust architecture is the foundation of digital transformation and business agility. Our tech solutions services help organisations design, build, and evolve systems that are scalable, secure, and aligned with strategic business objectives.
              </p>
              <p>
                We bring deep technical expertise across cloud platforms, modern application architectures, security frameworks, and DevOps practices. Whether you're building new digital products, modernising legacy systems, or scaling infrastructure to support growth, we provide the architectural guidance and technical leadership needed to deliver successful outcomes while managing complexity and risk.
              </p>
              <p>
                From startups establishing their technical foundation to enterprises undertaking large-scale digital transformation, our team delivers architecture services tailored to your specific context, challenges, and goals. We work collaboratively with your technology teams, providing hands-on guidance while building internal capabilities for long-term success.
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
              Why Choose Our Tech Solutions Services
            </h2>
            <p className="text-base text-muted-foreground font-light leading-relaxed">
              We deliver architecture solutions that balance technical excellence with practical business considerations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                <Layers className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">Scalable by Design</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Every architecture we design is built to scale, supporting growth from initial launch through enterprise expansion. We apply proven patterns and best practices to create systems that handle increasing load, users, and complexity without requiring fundamental rebuilds.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                <Shield className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">Security First Approach</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Security is embedded throughout our architecture process, not added as an afterthought. We implement defense-in-depth strategies, zero-trust principles, and compliance frameworks that protect your systems, data, and customers while enabling business agility.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center">
                <Cloud className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">Cloud-Native Expertise</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Leverage our deep expertise across AWS, Azure, and Google Cloud to build optimised cloud solutions. We design architectures that take full advantage of cloud-native services, delivering improved performance, reduced costs, and accelerated innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings List */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              Our Tech Solutions Services
            </h2>
            <p className="text-base text-muted-foreground font-light leading-relaxed max-w-3xl">
              Comprehensive architecture and engineering services designed to build secure, scalable technology solutions that drive business results.
            </p>
          </div>

          <div className="space-y-0">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <div key={index} className={`py-10 border-t border-foreground/5 ${index === offerings.length - 1 ? 'border-b' : ''}`}>
                  <div className="grid lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-4 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-foreground" />
                      </div>
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
              Our Methodology
            </h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">Discovery & Assessment</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    We begin by understanding your business objectives, technical requirements, existing systems, and constraints. Through workshops, technical assessments, and stakeholder interviews, we develop a comprehensive understanding of your current state and desired outcomes.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">Architecture Design & Planning</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Our architects design comprehensive solutions that address your requirements while incorporating best practices, security standards, and scalability patterns. We create detailed architecture documentation, technology roadmaps, and implementation plans that guide successful delivery.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight">Implementation & Optimisation</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    We support implementation through technical leadership, code reviews, and hands-on development as needed. Post-deployment, we monitor performance, gather feedback, and continuously optimise the architecture to ensure it evolves with your business needs and emerging technologies.
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
                  Ready to Build Scalable Technology Solutions?
                </h2>
                <p className="text-base text-muted-foreground font-light leading-relaxed max-w-2xl">
                  Partner with us to architect technology infrastructure that drives innovation and business growth
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
