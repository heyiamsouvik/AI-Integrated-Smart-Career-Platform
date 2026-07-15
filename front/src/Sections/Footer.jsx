import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { 
  FaTwitter, 
  FaLinkedinIn, 
  FaGithub, 
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaArrowRight,
  FaRocket,
  FaShieldAlt,
  FaLock,
  FaCode,
  FaHeart,
  FaHome,
  FaInfoCircle,
  FaNewspaper,
  FaQuestionCircle,
  FaFileAlt
} from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'AI Resume Builder', path: '/AIResumeBuilder' },
      { name: 'Resume Analyzer', path: '/resume-analyser' },
      { name: 'Cover Letter', path: '/cover-letters' },
      { name: 'Portfolio Generator', path: '/#' },
      { name: 'Job Matcher', path: '/job-matching' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Careers', path: '/careers' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
    ],
  };

  const socialLinks = [
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-700' },
    { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube', color: 'hover:text-red-500' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#FFF2CC] via-[#FEF3D7] to-[#FFEBB8] text-gray-700 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl -translate-x-48 -translate-y-48" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl translate-x-48 translate-y-48" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section - 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-400 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/30 transition-all duration-300">
                    <FaRocket className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    AI Career
                  </span>
                  <span className="block text-xs text-gray-500 font-medium tracking-wider uppercase">
                    Platform
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Empowering professionals with AI-driven career solutions. 
              Transform your career journey with cutting-edge technology 
              and personalized insights.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 border border-amber-200/30 hover:border-amber-300/50 flex items-center justify-center text-gray-500 ${social.color} transition-all duration-300 group shadow-sm hover:shadow-md`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-3 gap-8 lg:col-span-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase mb-4">
                Product
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase mb-4">
                Legal
              </h3>
              <ul className="space-y-2.5">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-gray-600">
            <span>
              &copy; {currentYear} AI Career Platform. All rights reserved.
            </span>
            <span className="hidden md:inline text-amber-300">|</span>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              Made with <FaHeart className="text-red-500 w-3 h-3 animate-pulse" /> in India
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <Link
              to="/privacy"
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1.5"
            >
              <FaShieldAlt className="w-3.5 h-3.5" />
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1.5"
            >
              <FaLock className="w-3.5 h-3.5" />
              Terms
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-xl border border-amber-200/30 shadow-sm">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-amber-400/20 border-2 border-white flex items-center justify-center">
                <span className="text-[8px] font-bold text-amber-600">✓</span>
              </div>
              <div className="w-6 h-6 rounded-full bg-orange-400/20 border-2 border-white flex items-center justify-center">
                <span className="text-[8px] font-bold text-orange-600">✓</span>
              </div>
              <div className="w-6 h-6 rounded-full bg-yellow-400/20 border-2 border-white flex items-center justify-center">
                <span className="text-[8px] font-bold text-yellow-600">✓</span>
              </div>
            </div>
            <span className="text-xs text-gray-600 font-medium">
              Trusted by 1000+ users
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;