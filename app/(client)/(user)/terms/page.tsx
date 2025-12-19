import Container from '@/components/Container';

const TermsPage = () => {
  return (
    <div className="bg-linear-to-b from-gray-50 to-white min-h-screen">
      <Container className="max-w-4xl lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: December 9, 2025
          </p>
        </div>

        {/* Terms Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using P3D&apos;s services, you agree to be
                bound by these Terms and Conditions. If you do not agree to
                these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                2. Use of Services
              </h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to use P3D&apos;s services only for lawful purposes
                and in accordance with these Terms and Conditions. You are
                responsible for maintaining the confidentiality of your account
                and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                3. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                All content and materials available on P3D&apos;s services are
                the property of P3D and are protected by applicable intellectual
                property laws. This includes but is not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Product designs and 3D models</li>
                <li>Website content and graphics</li>
                <li>Logos, trademarks, and branding materials</li>
                <li>Software and technical implementations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                4. Product Orders and Payment
              </h2>
              <p className="text-gray-700 leading-relaxed">
                All orders placed through P3D are subject to acceptance and
                availability. We reserve the right to refuse or cancel any
                order. Payment must be received in full before production
                begins. Prices are subject to change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                5. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                P3D shall not be liable for any indirect, incidental, special,
                consequential or punitive damages resulting from your use of our
                services. Our total liability shall not exceed the amount paid
                by you for the specific product or service in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                6. Returns and Refunds
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Custom 3D-printed products are made to order and are generally
                non-refundable. If you receive a defective or incorrect product,
                please contact us within 7 days of receipt for a replacement or
                refund.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                7. Privacy and Data Protection
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. We collect and process personal
                data in accordance with our Privacy Policy. By using our
                services, you consent to our collection and use of your
                information as described.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                8. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                P3D reserves the right to modify these Terms and Conditions at
                any time. Changes will be effective immediately upon posting to
                our website. Your continued use of our services constitutes
                acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                9. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions shall be governed by and construed in
                accordance with the laws of Victoria, Australia. Any disputes
                arising from these terms shall be subject to the exclusive
                jurisdiction of the courts in Melbourne, Victoria.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                10. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms and Conditions,
                please contact us at{' '}
                <a
                  href="mailto:hphongt1123@gmail.com"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  hphongt1123@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            By using P3D&apos;s services, you acknowledge that you have read and
            understood these Terms and Conditions.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default TermsPage;
