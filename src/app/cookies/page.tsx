import Link from 'next/link';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#FBF4E1] text-[#3A3E38]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Cookie Policy</h1>

        <p className="text-sm text-[#9A917A] mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
            <p className="text-lg mb-4">
              Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
            <p className="text-lg mb-4">RISE uses cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Essential cookies required for the site to function</li>
              <li>Analytics cookies to understand how visitors use our site</li>
              <li>Preference cookies to remember your settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Third-Party Cookies</h2>
            <p className="text-lg mb-4">
              We may use trusted third-party services that set their own cookies to help us analyze site traffic and deliver our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
            <p className="text-lg mb-4">
              You can control and delete cookies through your browser settings. Please note that disabling cookies may affect the functionality of our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
            <p className="text-lg">
              If you have questions about our use of cookies, please contact us at support@getriseapp.com
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
