import type { Metadata } from 'next';
import Link from 'next/link';
import { Network, Code, Smartphone, Brain, Zap, Database } from 'lucide-react';
import { ServiceHero } from '@/components/services/service-hero';
import { Button } from '@/components/ui/button';
import { InteractiveIcon } from '@/components/ui/interactive-icon';

export const metadata: Metadata = {
  title: 'Tech Solutions Services',
  description: 'Custom web and mobile applications, AI integration, and business automation solutions tailored to your needs.',
};

const offerings = [
  {
    icon: Code,
    title: 'Custom Web Application Development',
    description: 'Build powerful, responsive web applications tailored to your specific business requirements. Our full-stack development team creates scalable applications using modern frameworks like React, Vue.js, and Angular for frontend, with robust backend systems using Node.js, Python, or .NET. We deliver applications that are fast, secure, and optimised for user experience across all devices.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Develop native iOS and Android applications or cross-platform solutions using React Native and Flutter. Our mobile development expertise covers everything from consumer-facing apps with intuitive user interfaces to enterprise applications with complex integrations. We handle the entire development lifecycle from concept and design through app store deployment and ongoing maintenance.',
  },
  {
    icon: Brain,
    title: 'Custom LLM & AI Integration',
    description: 'Implement powerful AI capabilities including custom large language models, natural language processing, computer vision, and predictive analytics. We build AI systems that automate complex tasks, provide intelligent insights, and enhance user experiences. Our AI solutions range from chatbots and virtual assistants to advanced analytics systems and recommendation engines.',
  },
  {
    icon: Zap,
    title: 'Business Process Automation',
    description: 'Design and implement comprehensive automation solutions that streamline operations, reduce manual work, and eliminate errors. Our automation systems integrate with existing tools and databases to create seamless workflows, from simple task automation to complex multi-step processes involving data processing, approvals, and third-party integrations.',
  },
  {
    icon: Network,
    title: 'API Development & Integration',
    description: 'Create robust APIs that enable seamless data exchange and system integration. We develop RESTful and GraphQL APIs that connect your applications with third-party services, legacy systems, and external partners. Our integration expertise includes payment gateways, CRM systems, marketing platforms, and custom business applications.',
  },
  {
    icon: Database,
    title: 'Database Design & Management',
    description: 'Architect and implement scalable database solutions optimised for your specific data requirements. We work with both SQL and NoSQL databases, designing schemas that ensure data integrity, optimal performance, and scalability. Our database services include migration from legacy systems, optimisation of existing databases, and implementation of data warehouses and analytics solutions.',
  },
];

export default function TechnologyArchitecturePage() {
  return (
    <div>
      <ServiceHero
        title="Tech Solutions"
        description="Empowering businesses with custom technology solutions"
        Icon={Network}
      />

      {/* Overview Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Custom Technology Development for Modern Business
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-base text-muted-foreground font-light leading-relaxed">
              <p>
                In today's digital-first world, having the right technology infrastructure can be the difference between thriving and merely surviving. Our tech solutions services provide comprehensive custom development that transforms business processes, enhances customer experiences, and drives operational efficiency through intelligent automation and cutting-edge applications.
              </p>
              <p>
                We specialise in building tailored technology solutions that address your specific business challenges and opportunities. From custom web applications that streamline internal processes to sophisticated AI systems that provide competitive advantages, we develop solutions that are not only technically excellent but also aligned with your strategic business objectives.
              </p>
              <p>
                Whether you're a startup needing to build your technical foundation from scratch, an established business looking to modernise legacy systems, or an enterprise seeking to leverage AI for competitive advantage, our team delivers scalable, secure, and maintainable solutions that grow with your business.
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
              We deliver custom technology solutions that drive real business value and competitive advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <InteractiveIcon Icon={Code} size="sm" />
              <h3 className="text-xl font-semibold tracking-tight">Tailored to Your Needs</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Every solution we build is custom-designed for your specific requirements, business processes, and objectives. We don't believe in one-size-fits-all approaches—instead, we create technology that fits seamlessly into your operations and enhances your unique value proposition.
              </p>
            </div>

            <div className="space-y-4">
              <InteractiveIcon Icon={Zap} size="sm" />
              <h3 className="text-xl font-semibold tracking-tight">Future-Ready Architecture</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Our solutions are built with scalability and evolution in mind. We use modern architecture patterns, cloud-native approaches, and industry best practices to ensure your technology investment continues to deliver value as your business grows and technology landscapes evolve.
              </p>
            </div>

            <div className="space-y-4">
              <InteractiveIcon Icon={Brain} size="sm" />
              <h3 className="text-xl font-semibold tracking-tight">AI-Powered Innovation</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                We integrate artificial intelligence and machine learning capabilities that provide genuine business value, from intelligent automation that reduces manual work to predictive analytics that inform strategic decisions. Our AI solutions are practical, measurable, and designed to deliver clear ROI.
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
              Comprehensive custom technology development services designed to transform your business operations and drive competitive advantage.
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


      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="border-t border-foreground/5 pt-16">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  Ready to Transform Your Business with Technology?
                </h2>
                <p className="text-base text-muted-foreground font-light leading-relaxed max-w-2xl">
                  Let's discuss how our custom tech solutions can drive efficiency, innovation, and growth for your business
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
