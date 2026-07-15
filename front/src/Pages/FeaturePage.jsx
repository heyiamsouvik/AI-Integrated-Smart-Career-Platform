import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaRocket, 
  FaFileAlt, 
  FaChartLine, 
  FaEnvelope, 
  FaFolderOpen, 
  FaBriefcase,
  FaArrowRight,

  FaShieldAlt,
  FaCheckCircle
} from 'react-icons/fa';
import FeatureCard from '../components/homepage/feature/FeatureCard';

const features = [
  { 
    icon: 'FaFileAlt', 
    title: 'AI Resume Builder', 
    desc: 'Craft ATS-friendly resumes in seconds with intelligent formatting suggestions.',
    gradient: 'from-amber-400 via-orange-400 to-amber-500',
    iconBg: 'bg-amber-100',
    textColor: 'text-amber-600',
    path: '/AIResumeBuilder'  
  },
  { 
    icon: 'FaChartLine', 
    title: 'Resume Analyser', 
    desc: 'Get instant ATS score and keyword optimization suggestions.',
    gradient: 'from-orange-400 via-amber-400 to-yellow-500',
    iconBg: 'bg-orange-100',
    textColor: 'text-orange-600',
    path: '/resume-analyser'
  },
  { 
    icon: 'FaEnvelope', 
    title: 'Cover Letters', 
    desc: 'Personalized letters that capture attention and stand out.',
    gradient: 'from-amber-500 via-yellow-400 to-orange-400',
    iconBg: 'bg-yellow-100',
    textColor: 'text-yellow-600',
    path: '/cover-letters'
  },
  { 
    icon: 'FaFolderOpen', 
    title: 'Portfolio Generator', 
    desc: 'Generate stunning web portfolio to showcase your work.',
    gradient: 'from-orange-500 via-amber-400 to-yellow-500',
    iconBg: 'bg-orange-100',
    textColor: 'text-orange-600',
    path: '/portfolio-generator'
  },
  { 
    icon: 'FaBriefcase', 
    title: 'Job Matching', 
    desc: 'Find roles that perfectly align with your unique skills.',
    gradient: 'from-amber-600 via-orange-500 to-amber-400',
    iconBg: 'bg-amber-100',
    textColor: 'text-amber-600',
    path: '/job-matching'
  }
];

// Map icon names to components
const iconMap = {
  FaFileAlt: FaFileAlt,
  FaChartLine: FaChartLine,
  FaEnvelope: FaEnvelope,
  FaFolderOpen: FaFolderOpen,
  FaBriefcase: FaBriefcase,
};

function FeaturePage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#FFF2CC] via-[#FEF3D7] to-[#FFEBB8]">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-200/20 rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24 min-h-screen flex flex-col justify-center">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/60 backdrop-blur-sm border border-amber-200/50 shadow-lg shadow-amber-200/20 mb-6"
          >
            {/* <FaSparkles className="w-4 h-4 text-amber-500" /> */}
            <span className="text-sm font-medium text-amber-700">✨ Powered by AI</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 ml-1" />
            <span className="text-xs font-normal text-amber-600 bg-white/50 px-2 py-0.5 rounded-full">
              v2.0
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight"
          >
            Transform Your 
            <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Career Journey
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Everything you need to land your dream job with cutting-edge AI technology
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-6 md:gap-10"
          >
            <div className="flex items-center gap-2">
              <FaShieldAlt className="w-5 h-5 text-amber-500" />
              <div>
                <div className="text-lg font-bold text-gray-900">10K+</div>
                <div className="text-xs text-gray-500">Active Users</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="w-5 h-5 text-orange-500" />
              <div>
                <div className="text-lg font-bold text-gray-900">98%</div>
                <div className="text-xs text-gray-500">Success Rate</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaRocket className="w-5 h-5 text-amber-500" />
              <div>
                <div className="text-lg font-bold text-gray-900">4.9★</div>
                <div className="text-xs text-gray-500">User Rating</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 max-w-7xl mx-auto w-full">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="h-full"
              >
                <Link to={feature.path} className="block h-full">
                  <div className={`
                    relative h-full bg-white/70 backdrop-blur-sm 
                    rounded-2xl p-6 border-2 border-amber-200/50
                    hover:shadow-2xl hover:shadow-amber-200/30
                    transition-all duration-300
                    group overflow-hidden
                  `}>
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 opacity-0 group-hover:opacity-10 blur-2xl bg-gradient-to-r ${feature.gradient} transition-opacity duration-500 rounded-2xl`} />

                    {/* Icon */}
                    <div className={`
                      relative w-14 h-14 rounded-xl
                      ${feature.iconBg}
                      flex items-center justify-center
                      mb-4 transition-transform duration-300
                      group-hover:scale-110 group-hover:rotate-3
                      shadow-sm group-hover:shadow-md
                    `}>
                      {IconComponent && (
                        <IconComponent className={`w-7 h-7 ${feature.textColor}`} />
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-amber-600 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {feature.desc}
                    </p>

                    {/* Decorative Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

  
   
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-pulse { 
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; 
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
          background-size: 200% auto;
        }
        
        @keyframes softBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        .animate-softBounce {
          animation: softBounce 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default FeaturePage;