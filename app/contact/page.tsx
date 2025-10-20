import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { COMPANY_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { Mail, MapPin, Linkedin, Instagram, Facebook, Twitter, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Aero Estates to discuss your brand scaling, equity analysis, real estate, or tech solutions needs.',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl">
              Ready to start your project? We'd love to hear from you and discuss how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 pb-6 border-b border-foreground/5">
                    <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm">Email</h3>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pb-6 border-b border-foreground/5">
                    <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm">Location</h3>
                      <p className="text-muted-foreground text-sm">{COMPANY_INFO.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 pb-6 border-b border-foreground/5">
                    <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm">Office Model</h3>
                      <p className="text-muted-foreground text-sm">
                        Hybrid working with flexible arrangements
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold tracking-tight">Follow Us</h3>
                <div className="flex space-x-3">
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-foreground" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-foreground" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-foreground" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <Twitter className="w-5 h-5 text-foreground" />
                  </a>
                </div>
              </div>

              <div className="p-6 border border-foreground/5 space-y-2">
                <h3 className="text-lg font-semibold tracking-tight">Business Hours</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  We typically respond within 24 hours during business days.
                </p>
                <p className="text-sm text-muted-foreground font-light">
                  Monday - Friday: 9:00 AM - 6:00 PM GMT
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
