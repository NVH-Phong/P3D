import Container from "@/components/Container";

const PrivacyPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#1d1145] to-[#1d1145]/95 min-h-screen">
      <Container className="max-w-4xl lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Privacy Policy
          </h1>
          <p className="text-lg text-white/60">
            Last updated: December 9, 2025
          </p>
        </div>

        {/* Privacy Content */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg shadow-2xl p-8 md:p-12 border border-white/10">
          <div className="space-y-8">
            <div className="pb-6 border-b border-white/10">
              <p className="text-white/85 leading-relaxed">
                At P3D, we are committed to protecting your privacy and ensuring
                the security of your personal information. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-white border-b border-white/10 pb-2">
                1. Information We Collect
              </h2>
              <p className="text-white/85 leading-relaxed mb-3">
                We collect information you provide directly to us when using our
                services, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/75 ml-4">
                <li>Name, email address, and contact information</li>
                <li>Billing and shipping addresses</li>
                <li>
                  Payment information (processed securely by our payment
                  partners)
                </li>
                <li>Order history and preferences</li>
                <li>Communications and correspondence with us</li>
                <li>
                  Technical data such as IP address, browser type, and device
                  information
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-white border-b border-white/10 pb-2">
                2. How We Use Your Information
              </h2>
              <p className="text-white/85 leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/75 ml-4">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and account</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our products, services, and website</li>
                <li>Detect and prevent fraud or unauthorized activities</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-white border-b border-white/10 pb-2">
                3. Information Sharing and Disclosure
              </h2>
              <p className="text-white/85 leading-relaxed mb-3">
                We do not sell your personal information. We may share your
                information with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/75 ml-4">
                <li>Payment processors to complete transactions</li>
                <li>Shipping companies to deliver your orders</li>
                <li>Service providers who assist with our operations</li>
                <li>
                  Law enforcement when required by law or to protect our rights
                </li>
              </ul>
              <p className="text-white/85 leading-relaxed mt-3">
                All third parties are required to maintain the confidentiality
                of your information and use it only for the purposes we specify.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-white border-b border-white/10 pb-2">
                4. Data Security
              </h2>
              <p className="text-white/85 leading-relaxed">
                We implement appropriate technical and organizational security
                measures to protect your personal information from loss, theft,
                misuse, unauthorized access, disclosure, alteration, and
                destruction. However, no method of transmission over the
                internet or electronic storage is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-white border-b border-white/10 pb-2">
                5. Cookies and Tracking Technologies
              </h2>
              <p className="text-white/85 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your
                browsing experience, analyze website traffic, and understand
                user preferences. You can control cookie settings through your
                browser, but disabling cookies may limit some website
                functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-white border-b border-white/10 pb-2">
                6. Your Rights and Choices
              </h2>
              <p className="text-white/85 leading-relaxed mb-3">
                You have the following rights regarding your personal
                information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-white/75 ml-4">
                <li>Access and review your personal information</li>
                <li>Correct or update inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to certain data processing activities</li>
                <li>Request a copy of your data in a portable format</li>
              </ul>
              <p className="text-white/85 leading-relaxed mt-3">
                To exercise these rights, please contact us using the
                information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-white border-b border-white/10 pb-2">
                7. Data Retention
              </h2>
              <p className="text-white/85 leading-relaxed">
                We retain your personal information for as long as necessary to
                fulfill the purposes outlined in this Privacy Policy, comply
                with legal obligations, resolve disputes, and enforce our
                agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-white border-b border-white/10 pb-2">
                8. Children&apos;s Privacy
              </h2>
              <p className="text-white/85 leading-relaxed">
                Our services are not directed to children under 13 years of age.
                We do not knowingly collect personal information from children.
                If you believe we have collected information from a child,
                please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-white border-b border-white/10 pb-2">
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-white/85 leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the &quot;Last updated&quot; date. Your
                continued use of our services after changes are posted
                constitutes your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-white border-b border-white/10 pb-2">
                10. Contact Us
              </h2>
              <p className="text-white/85 leading-relaxed">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-white/85">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:hphongt1123@gmail.com"
                    className="text-[#0db4b9] hover:text-white underline font-semibold transition-colors"
                  >
                    hphongt1123@gmail.com
                  </a>
                </p>
                <p className="text-white/85 mt-2">
                  <strong>Address:</strong> Melbourne, Victoria, Australia
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm">
            By using P3D&apos;s services, you acknowledge that you have read and
            understood this Privacy Policy.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPage;
