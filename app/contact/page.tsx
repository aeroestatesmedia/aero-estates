import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ServiceHero } from '@/components/services/service-hero';
import { COMPANY_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { Mail, MapPin, Linkedin, Instagram, Facebook, Twitter, Briefcase, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Aero Estates to discuss your brand scaling, equity analysis, real estate, or tech solutions needs.',
};

export default function ContactPage() {
  return (
    <div>
      <ServiceHero
        title="Get In Touch"
        description="Ready to start your project? We'd love to hear from you and discuss how we can help bring your vision to life"
        Icon={MessageSquare}
      />

      {/* Contact Content */}
      <section className="relative py-20 lg:py-28 bg-foreground/[0.015] overflow-hidden">
        {/* Glassmorphism background gradients */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-br from-foreground/[0.02] via-transparent to-transparent blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-tl from-foreground/[0.015] via-transparent to-transparent blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="relative p-8 lg:p-10 rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-xl shadow-lg shadow-foreground/5">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] via-transparent to-transparent rounded-2xl pointer-events-none" />

                <div className="relative space-y-8">
                  <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                      Start a Conversation
                    </h2>
                    <p className="text-base text-muted-foreground font-light leading-relaxed">
                      Share your project details and we'll respond within one business day with tailored insights and next steps.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              {/* Contact Details Card */}
              <div className="relative p-8 rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-xl shadow-lg shadow-foreground/5">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] via-transparent to-transparent rounded-2xl pointer-events-none" />

                <div className="relative space-y-6">
                  <h3 className="text-xl font-bold tracking-tight">Get In Touch</h3>

                  <div className="space-y-5">
                    <div className="flex items-start space-x-4">
                      <div className="w-11 h-11 bg-foreground/5 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                        <Mail className="w-5 h-5 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1.5 text-sm">Email</h4>
                        <a
                          href={`mailto:${COMPANY_INFO.email}`}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-11 h-11 bg-foreground/5 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                        <MapPin className="w-5 h-5 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1.5 text-sm">Location</h4>
                        <p className="text-sm text-muted-foreground">{COMPANY_INFO.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-11 h-11 bg-foreground/5 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                        <Briefcase className="w-5 h-5 text-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1.5 text-sm">Working Model</h4>
                        <p className="text-sm text-muted-foreground">
                          Hybrid approach with flexible arrangements
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="relative p-8 rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-xl shadow-lg shadow-foreground/5">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] via-transparent to-transparent rounded-2xl pointer-events-none" />

                <div className="relative space-y-4">
                  <h3 className="text-xl font-bold tracking-tight">Availability</h3>
                  <div className="space-y-2.5">
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      Monday – Friday: 9:00 AM – 6:00 PM GMT
                    </p>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      We typically respond within one business day.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links Card */}
              <div className="relative p-8 rounded-2xl border border-foreground/10 bg-background/60 backdrop-blur-xl shadow-lg shadow-foreground/5">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] via-transparent to-transparent rounded-2xl pointer-events-none" />

                <div className="relative space-y-5">
                  <h3 className="text-xl font-bold tracking-tight">Connect With Us</h3>
                  <div className="flex space-x-3">
                    <a
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-foreground/5 rounded-xl flex items-center justify-center hover:bg-foreground/10 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-foreground" />
                    </a>
                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-foreground/5 rounded-xl flex items-center justify-center hover:bg-foreground/10 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5 text-foreground" />
                    </a>
                    <a
                      href={SOCIAL_LINKS.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-foreground/5 rounded-xl flex items-center justify-center hover:bg-foreground/10 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5 text-foreground" />
                    </a>
                    <a
                      href={SOCIAL_LINKS.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-foreground/5 rounded-xl flex items-center justify-center hover:bg-foreground/10 hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                      aria-label="X (Twitter)"
                    >
                      <Twitter className="w-5 h-5 text-foreground" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
