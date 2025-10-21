import type { Metadata } from 'next';
import { ServiceHero } from '@/components/services/service-hero';
import { Shield } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Aero Estates collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div>
      <ServiceHero
        title="Privacy Policy"
        description="Your privacy matters to us"
        Icon={Shield}
      />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-sm sm:prose-base max-w-none">
              <p className="text-muted-foreground font-light leading-relaxed mb-8">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>

              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Introduction</h2>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Aero Estates Limited ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website {' '}
                    <a href="https://aeroestates.ie" className="underline hover:text-foreground transition-colors">
                      aeroestates.ie
                    </a>, use our services, or interact with us.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Information We Collect</h2>

                  <h3 className="text-xl font-semibold mb-3 mt-6">Personal Information</h3>
                  <p className="text-muted-foreground font-light leading-relaxed mb-3">
                    We may collect personal information that you voluntarily provide when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-light">
                    <li>Fill out contact forms or inquiry forms</li>
                    <li>Subscribe to our newsletters or communications</li>
                    <li>Request information about our services</li>
                    <li>Engage with our customer support</li>
                  </ul>
                  <p className="text-muted-foreground font-light leading-relaxed mt-4">
                    This information may include: name, email address, phone number, company name, job title, and any other information you choose to provide.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
                  <p className="text-muted-foreground font-light leading-relaxed mb-3">
                    When you visit our website, we may automatically collect certain information about your device and browsing actions, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-light">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>Clickstream data</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">How We Use Your Information</h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-3">
                    We use the information we collect for various purposes, including to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-light">
                    <li>Provide, operate, and maintain our services</li>
                    <li>Respond to your inquiries and fulfill your requests</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Improve and personalize your experience</li>
                    <li>Analyze website usage and trends</li>
                    <li>Detect, prevent, and address technical issues or security threats</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Cookies and Tracking Technologies</h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-3">
                    We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with small amounts of data that are sent to your browser from a website and stored on your device.
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed mb-3">
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                  </p>

                  <h3 className="text-xl font-semibold mb-3 mt-6">Types of Cookies We Use</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-light">
                    <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                    <li><strong>Preference Cookies:</strong> Remember your preferences and settings</li>
                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Data Sharing and Disclosure</h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-3">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-light">
                    <li><strong>Service Providers:</strong> Third-party companies that perform services on our behalf (e.g., email delivery, analytics, hosting)</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Data Security</h2>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Your Rights (GDPR)</h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-3">
                    If you are located in the European Economic Area (EEA), you have certain data protection rights under GDPR, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-light">
                    <li><strong>Right to Access:</strong> Request copies of your personal data</li>
                    <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
                    <li><strong>Right to Erasure:</strong> Request deletion of your data</li>
                    <li><strong>Right to Restrict Processing:</strong> Request limitation of how we use your data</li>
                    <li><strong>Right to Data Portability:</strong> Request transfer of your data</li>
                    <li><strong>Right to Object:</strong> Object to our processing of your data</li>
                    <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
                  </ul>
                  <p className="text-muted-foreground font-light leading-relaxed mt-4">
                    To exercise these rights, please contact us at {COMPANY_INFO.email}.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Data Retention</h2>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Third-Party Links</h2>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Children's Privacy</h2>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Changes to This Privacy Policy</h2>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Contact Us</h2>
                  <p className="text-muted-foreground font-light leading-relaxed mb-3">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="p-6 border border-foreground/10 rounded-xl bg-foreground/[0.02] space-y-2">
                    <p className="text-muted-foreground font-light">
                      <strong>Aero Estates Limited</strong>
                    </p>
                    <p className="text-muted-foreground font-light">
                      Email: <a href={`mailto:${COMPANY_INFO.email}`} className="underline hover:text-foreground transition-colors">{COMPANY_INFO.email}</a>
                    </p>
                    <p className="text-muted-foreground font-light">
                      Location: {COMPANY_INFO.location}
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
