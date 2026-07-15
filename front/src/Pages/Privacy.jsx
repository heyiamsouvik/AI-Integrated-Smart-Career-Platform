import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12"
      >
        {/* Header */}
        <div className="border-b border-gray-200 pb-6 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p className="leading-relaxed">
              At AI Career, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our platform. Please read this 
              policy carefully to understand our practices regarding your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium text-gray-900">2.1 Personal Information</h3>
                <p className="leading-relaxed">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                  <li>Name and email address</li>
                  <li>Profile information and resume data</li>
                  <li>Career preferences and job search history</li>
                  <li>Communication preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">2.2 Usage Data</h3>
                <p className="leading-relaxed">
                  We automatically collect certain information when you use our platform:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent</li>
                  <li>Device information</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p className="leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Provide, maintain, and improve our services</li>
              <li>Personalize your experience and career recommendations</li>
              <li>Send you relevant job alerts and career insights</li>
              <li>Communicate with you about updates and promotions</li>
              <li>Analyze usage patterns to enhance our platform</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction. 
              These measures include encryption, secure servers, and regular security assessments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Third-Party Services</h2>
            <p className="leading-relaxed">
              We may share your information with trusted third-party service providers who assist us 
              in operating our platform, conducting business, or serving you. These parties are 
              contractually obligated to keep your information confidential and use it only for 
              the purposes we specify.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Your Rights</h2>
            <p className="leading-relaxed mb-3">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct your information</li>
              <li><strong>Deletion:</strong> Request deletion of your data</li>
              <li><strong>Opt-out:</strong> Unsubscribe from communications</li>
              <li><strong>Data Portability:</strong> Receive your data in a portable format</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Cookies</h2>
            <p className="leading-relaxed">
              We use cookies to enhance your experience on our platform. For detailed information 
              about our cookie usage, please see our <Link to="/cookies" className="text-indigo-600 hover:text-indigo-700 underline">Cookie Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Children's Privacy</h2>
            <p className="leading-relaxed">
              Our platform is not intended for children under 13 years of age. We do not knowingly 
              collect personal information from children under 13. If you believe we have collected 
              information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last updated" date. We encourage 
              you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy, 
              please contact us at:
            </p>
            <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-700">
                <strong>Email:</strong> heyiamsouvik@gmail.com
              </p>
              <p className="text-gray-700 mt-1">
                <strong>Address:</strong> Kolkata, West Bengal.
              </p>
            </div>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <Link to="/" className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default Privacy;