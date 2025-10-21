import type { Metadata } from 'next';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Aero Estates - The terms and conditions governing the use of our services.',
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-20">
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Terms of Service</h1>
              <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-IE', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>

            <div className="prose prose-gray max-w-none space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the services provided by Aero Estates ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">2. Description of Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Aero Estates provides a range of professional services including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Brand scaling and digital marketing services</li>
                  <li>Equity analysis and financial consulting</li>
                  <li>Real estate solutions and consulting</li>
                  <li>Technology and software development solutions</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Specific services will be outlined in individual service agreements or statements of work.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">3. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of any account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">4. Intellectual Property Rights</h2>
                <h3 className="text-xl font-semibold tracking-tight">4.1 Our Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All content, materials, and intellectual property on our website and in our services, including but not limited to text, graphics, logos, images, software, and code, are owned by or licensed to Aero Estates and are protected by copyright, trademark, and other intellectual property laws.
                </p>

                <h3 className="text-xl font-semibold tracking-tight mt-6">4.2 Client Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You retain ownership of any content you provide to us. By providing content, you grant us a license to use, reproduce, modify, and distribute it as necessary to provide our services.
                </p>

                <h3 className="text-xl font-semibold tracking-tight mt-6">4.3 Deliverables</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ownership of deliverables created as part of our services will be specified in individual service agreements.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">5. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment terms, including fees, payment schedules, and accepted payment methods, will be specified in individual service agreements or invoices. Unless otherwise stated:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Invoices are due within 30 days of issuance</li>
                  <li>Late payments may incur interest charges</li>
                  <li>All fees are exclusive of applicable taxes</li>
                  <li>Refund policies will be outlined in service agreements</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">6. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We understand the sensitive nature of business information. Both parties agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Keep confidential information disclosed during our engagement private</li>
                  <li>Use confidential information only for the purposes of providing or receiving services</li>
                  <li>Implement reasonable security measures to protect confidential information</li>
                  <li>Return or destroy confidential information upon request or termination of services</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">7. Warranties and Disclaimers</h2>
                <h3 className="text-xl font-semibold tracking-tight">7.1 Our Warranties</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We warrant that our services will be performed in a professional and workmanlike manner consistent with industry standards.
                </p>

                <h3 className="text-xl font-semibold tracking-tight mt-6">7.2 Disclaimers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  EXCEPT AS EXPRESSLY PROVIDED, OUR SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">8. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, AERO ESTATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our total liability in connection with any service shall not exceed the total amount paid by you for that specific service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">9. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless Aero Estates, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services or violation of these terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">10. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate services in accordance with the terms specified in individual service agreements. Upon termination:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>You remain responsible for any outstanding payments</li>
                  <li>We will provide any completed deliverables</li>
                  <li>Confidentiality obligations will continue</li>
                  <li>Licenses granted may be revoked as specified in service agreements</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">11. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of Ireland. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of Ireland.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">12. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. We will notify you of any material changes by posting the updated terms on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">13. Severability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If any provision of these Terms of Service is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">14. Entire Agreement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service, together with any service agreements and our Privacy Policy, constitute the entire agreement between you and Aero Estates regarding our services and supersede all prior agreements and understandings.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tight">15. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
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
