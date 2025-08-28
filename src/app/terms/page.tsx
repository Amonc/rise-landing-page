import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FBF4E1] text-[#3A3E38]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
        
        <p className="text-sm text-[#9A917A] mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-lg">
              By downloading, installing, or using RISE, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
            <p className="text-lg">
              RISE is an AI-powered wardrobe assistant that helps you organize your clothing, create outfits, and receive personalized style recommendations. The service is provided &quot;as is&quot; and we reserve the right to modify or discontinue features at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            <p className="text-lg mb-4">To use RISE, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least 13 years old</li>
              <li>Provide accurate account information</li>
              <li>Keep your login credentials secure</li>
              <li>Be responsible for all activity under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. User Content</h2>
            <p className="text-lg mb-4">
              You retain ownership of all photos and data you upload to RISE. By using our service, you grant us a license to use, process, and display your content solely for providing and improving our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Prohibited Uses</h2>
            <p className="text-lg mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Upload inappropriate or offensive content</li>
              <li>Use the service for illegal purposes</li>
              <li>Attempt to hack or disrupt our service</li>
              <li>Share your account with others</li>
              <li>Use automated systems to access the service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p className="text-lg">
              RISE, its logo, and all related trademarks are the property of our company. You may not use our intellectual property without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="text-lg">
              RISE is provided without warranties of any kind. We are not liable for any damages arising from your use of the service, including but not limited to data loss or service interruptions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
            <p className="text-lg">
              We reserve the right to terminate or suspend your account at any time for violation of these terms. You may also delete your account at any time through the app settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
            <p className="text-lg">
              These Terms of Service are governed by the laws of the jurisdiction in which our company is incorporated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
            <p className="text-lg">
              For questions about these Terms of Service, please contact us at legal@riseapp.com
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#CEC5AB]">
          <Link href="/" className="text-[#9A917A] hover:text-[#3A3E38] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}