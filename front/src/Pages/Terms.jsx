import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Terms() {
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
            Terms of Service
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
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Agreement to Terms</h2>
            <p className="leading-relaxed">
              By accessing or using AI Career's platform, you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you may not access or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. User Accounts</h2>
            <div className="space-y-3">
              <p className="leading-relaxed">
                To use certain features of our platform, you must create an account. You are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the security of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. User Responsibilities</h2>
            <p className="leading-relaxed mb-3">
              You agree to use our platform responsibly and not to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-600">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Post false, misleading, or harmful content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the platform</li>
              <li>Harass, abuse, or harm other users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Intellectual Property</h2>
            <p className="leading-relaxed">
              The content, features, and functionality of AI Career are owned by us and are protected 
              by copyright, trademark, and other intellectual property laws. You may not copy, modify, 
              distribute, or create derivative works without our explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. User Content</h2>
            <p className="leading-relaxed">
              By submitting content to our platform, you grant us a worldwide, royalty-free license to 
              use, reproduce, and modify that content for the purpose of providing our services. You 
              retain ownership of your content and are responsible for ensuring it does not violate 
              any laws or third-party rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Third-Party Services</h2>
            <p className="leading-relaxed">
              Our platform may contain links to third-party websites or services that are not owned 
              or controlled by us. We have no control over and assume no responsibility for the content, 
              privacy policies, or practices of any third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Termination</h2>
            <p className="leading-relaxed">
              We may terminate or suspend your account immediately, without prior notice, if you breach 
              these Terms of Service. Upon termination, your right to use the platform will cease 
              immediately, and we may delete your account and associated data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Disclaimer of Warranties</h2>
            <p className="leading-relaxed">
              Our platform is provided "as is" and "as available" without any warranties, express or 
              implied. We do not guarantee that the platform will be uninterrupted, error-free, or 
              free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the fullest extent permitted by law, AI Career shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages arising out of or related to 
              your use of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State 
              of California, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to update these Terms of Service at any time. We will notify you of 
              any changes by posting the new terms on this page. Your continued use of the platform 
              after any changes constitutes your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Contact Information</h2>
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

export default Terms;