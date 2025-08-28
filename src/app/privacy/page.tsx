import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#FBF4E1] text-[#3A3E38]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        
        <p className="text-sm text-[#9A917A] mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-lg mb-4">RISE collects the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Account information (name, email address)</li>
              <li>Wardrobe data (clothing items, photos, preferences)</li>
              <li>Style preferences and outfit history</li>
              <li>Usage data and app analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-lg mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide personalized outfit recommendations</li>
              <li>Improve our AI algorithms and services</li>
              <li>Send you notifications about your wardrobe</li>
              <li>Maintain and improve app performance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Data Storage and Security</h2>
            <p className="text-lg mb-4">
              Your data is encrypted and securely stored on our servers. We implement industry-standard security measures to protect your personal information and wardrobe data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
            <p className="text-lg mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share anonymized, aggregated data for research and improvement purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="text-lg mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request data deletion</li>
              <li>Export your wardrobe data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p className="text-lg">
              If you have questions about this Privacy Policy, please contact us at privacy@riseapp.com
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