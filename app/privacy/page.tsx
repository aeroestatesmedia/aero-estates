import type { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Aero Estates - How we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
              <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-IE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            <div className="prose prose-gray max-w-none space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Aero Estates ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold tracking-tight">2.1 Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect personal information that you provide to us, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company name and job title</li>
                  <li>Information you provide in contact forms or inquiries</li>
                  <li>Communications you send to us</li>
                </ul>

                <h3 className="text-xl font-semibold tracking-tight mt-6">2.2 Automatically Collected Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you visit our website, we may automatically collect certain information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Device information</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Responding to your inquiries and providing customer support</li>
                  <li>Delivering services you have requested</li>
                  <li>Improving our website and services</li>
                  <li>Sending you marketing communications (with your consent)</li>
                  <li>Complying with legal obligations</li>
                  <li>Protecting our rights and preventing fraud</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">4. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device. You can control cookie preferences through your browser settings, but disabling cookies may affect website functionality.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">5. Data Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Service providers who assist in our operations (e.g., hosting, analytics)</li>
                  <li>Professional advisors (lawyers, accountants)</li>
                  <li>Law enforcement or regulatory bodies when required by law</li>
                  <li>Third parties with your explicit consent</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">6. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Under applicable data protection laws (including GDPR), you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your information</li>
                  <li>Request restriction of processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">8. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">9. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">10. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will delete it promptly.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">11. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">12. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="text-muted-foreground space-y-2">
                  <p><strong>Email:</strong> {COMPANY_INFO.email}</p>
                  <p><strong>Address:</strong> {COMPANY_INFO.address}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
