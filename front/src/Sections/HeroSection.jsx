// components/homepage/HeroSection.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  SparklesIcon,
  DocumentCheckIcon,
  MicrophoneIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';

// Animation variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const floatAnimation = {
  y: [0, -10, 0],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
};

const Stats = ({ value, label }) => (
  <div>
    <div className="text-2xl md:text-3xl font-bold text-gray-800">{value}</div>
    <div className="text-xs md:text-base text-gray-600">{label}</div>
  </div>
);

const JobMatch = ({ company, role, match, color }) => (
  <div className="flex items-center justify-between p-2 md:p-3 bg-white/80 backdrop-blur-sm rounded-lg md:rounded-xl hover:bg-white transition-all duration-300 cursor-pointer shadow-sm">
    <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
      <div className={`w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-gradient-to-br ${color} rounded-lg md:rounded-xl shadow-md flex-shrink-0`}></div>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-[10px] md:text-xs lg:text-sm truncate text-gray-800">
          {role} - {company}
        </div>
        <div className="text-[8px] md:text-xs text-gray-500">{match}% match</div>
      </div>
    </div>
    <div className="w-12 md:w-16 lg:w-20 h-4 md:h-5 lg:h-6 bg-gray-200 rounded-full flex-shrink-0">
      <div className="h-full bg-gradient-to-r from-amber-400 to-orange-400 rounded-full" style={{ width: `${match}%` }}></div>
    </div>
  </div>
);

function HeroSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <section 
      ref={ref}
      className="min-h-screen flex items-center justify-center pt-16 px-4 md:px-6 overflow-hidden relative"
      style={{ backgroundColor: '#FFF2CC' }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 w-full">
        {/* Left Content */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="inline-block bg-amber-200/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm md:text-base mb-4 md:mb-6 text-gray-700 border border-amber-300/50">
            🚀 AI-Powered Career Platform
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 drop-shadow-2xl leading-tight text-gray-800">
            Build Your Dream<br />Career with AI
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-12 max-w-2xl lg:mx-0 leading-relaxed text-gray-700">
            Create resumes, analyze them, generate cover letters, and prepare for interviews—all in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
            <Link
              to="/features"
              className="bg-amber-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:shadow-2xl hover:scale-105 hover:bg-amber-700 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Get Started 
              <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/features" 
              className="border-2 border-amber-600 text-amber-700 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-amber-600 hover:text-white transition-all duration-300 text-center"
            >
              Explore Features
            </Link>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-6 md:gap-8 mt-8 md:mt-12 justify-center lg:justify-start">
            <Stats value="50K+" label="Active Users" />
            <Stats value="95%" label="Success Rate" />
            <Stats value="100K+" label="Resumes Built" />
          </div>
        </motion.div>

        {/* Right Content */}
        <HeroMockups controls={controls} />
      </div>
      
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(251, 191, 36, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.15) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}

function HeroMockups({ controls }) {
  return (
    <motion.div
      variants={fadeInRight}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative block mt-8 lg:mt-0"
    >
      <div className="relative flex justify-center">
        {/* Main Dashboard */}
        <motion.div
          animate={floatAnimation}
          className="relative z-10 w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[480px]"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 border border-amber-200/50 shadow-2xl">
            {/* Profile Card */}
            <div className="mb-4 md:mb-6 p-3 md:p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl md:rounded-2xl backdrop-blur-sm border border-amber-200/30">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl md:rounded-2xl shadow-lg flex items-center justify-center text-white font-bold text-sm md:text-lg">
                  JD
                </div>
                <div>
                  <div className="text-sm md:text-base font-semibold text-gray-800">John Doe</div>
                  <div className="text-xs md:text-sm text-gray-600">Senior Developer</div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6">
              <div className="bg-white/90 backdrop-blur-sm p-2 md:p-3 lg:p-4 rounded-lg md:rounded-xl shadow-lg border border-amber-200/50">
                <div className="text-[10px] md:text-xs text-gray-500 font-medium mb-0.5 md:mb-1">ATS Score</div>
                <div className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  92%
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-2 md:p-3 lg:p-4 rounded-lg md:rounded-xl shadow-lg border border-amber-200/50">
                <div className="text-[10px] md:text-xs text-gray-500 font-medium mb-0.5 md:mb-1">Jobs Matched</div>
                <div className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  127
                </div>
              </div>
            </div>

            {/* Job Matches List */}
            <div className="space-y-2 md:space-y-3">
              <JobMatch 
                company="Google" 
                role="Software Engineer" 
                match={85} 
                color="from-green-400 to-emerald-500"
              />
              <JobMatch 
                company="Meta" 
                role="Frontend Developer" 
                match={78} 
                color="from-purple-400 to-pink-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Floating Cards */}
        <FloatingCard
          icon={<DocumentCheckIcon className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />}
          title="ATS Score"
          subtitle="Perfect optimization"
          gradient="from-emerald-400 to-green-500"
          position="top-left"
          animation={{
            y: [0, -15, 0],
            rotate: [0, 2, 0],
            duration: 5,
            delay: 0.5
          }}
        />

        <FloatingCard
          icon={<SparklesIcon className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />}
          title="AI Suggestions"
          subtitle="15 improvements found"
          gradient="from-amber-400 to-orange-500"
          position="bottom-right"
          animation={{
            y: [0, -20, 0],
            rotate: [0, -2, 0],
            duration: 6,
            delay: 1
          }}
        />

        {/* Floating Icons */}
        <FloatingIcon
          icon={<BriefcaseIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-white drop-shadow-lg" />}
          gradient="from-purple-500 to-pink-500"
          position="bottom-left"
          animation={{ scale: [1, 1.1, 1], duration: 4, delay: 1.5 }}
        />

        <FloatingIcon
          icon={<MicrophoneIcon className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-white drop-shadow-lg" />}
          gradient="from-blue-500 to-indigo-600"
          position="top-right"
          animation={{ scale: [1, 1.2, 1], rotate: [0, 5, 0], duration: 4, delay: 2 }}
        />

        {/* Background Shapes */}
        <BackgroundShapes />
      </div>
    </motion.div>
  );
}

// Sub-components for better organization
const FloatingCard = ({ icon, title, subtitle, gradient, position, animation }) => {
  const positionClasses = {
    'top-left': 'absolute -top-4 md:-top-8 -left-2 md:-left-16 z-20',
    'bottom-right': 'absolute -bottom-8 md:-bottom-12 -right-2 md:-right-8 z-20'
  };

  return (
    <motion.div
      animate={{
        y: animation.y,
        rotate: animation.rotate
      }}
      transition={{ 
        duration: animation.duration, 
        repeat: Infinity, 
        ease: "easeInOut", 
        delay: animation.delay 
      }}
      className={positionClasses[position]}
    >
      <div className={`bg-gradient-to-br ${gradient} text-white p-3 md:p-4 lg:p-5 rounded-xl md:rounded-2xl shadow-2xl w-40 md:w-48 lg:w-56 border border-white/30`}>
        <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2 lg:mb-3">
          <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center">
            {icon}
          </div>
          <div>
            <div className="font-bold text-xs md:text-sm lg:text-base">{title}</div>
            <div className="text-[10px] md:text-xs lg:text-sm opacity-90">{subtitle}</div>
          </div>
        </div>
        <div className="w-full bg-white/30 rounded-full h-1 md:h-1.5 lg:h-2">
          <div className="w-11/12 h-1 md:h-1.5 lg:h-2 bg-white rounded-full shadow-sm"></div>
        </div>
      </div>
    </motion.div>
  );
};

const FloatingIcon = ({ icon, gradient, position, animation }) => {
  const positionClasses = {
    'bottom-left': 'absolute -bottom-2 md:-bottom-6 left-2 md:left-12 z-30',
    'top-right': 'absolute top-16 md:top-24 -right-2 md:-right-12 z-30'
  };

  return (
    <motion.div
      animate={{
        scale: animation.scale,
        rotate: animation.rotate || 0
      }}
      transition={{ 
        duration: animation.duration, 
        repeat: Infinity, 
        ease: "easeInOut", 
        delay: animation.delay 
      }}
      className={positionClasses[position]}
    >
      <div className={`bg-gradient-to-r ${gradient} p-2 md:p-3 lg:p-4 rounded-xl md:rounded-2xl shadow-2xl border-2 md:border-4 border-white/50 hover:scale-110 transition-transform duration-300 cursor-pointer`}>
        {icon}
      </div>
    </motion.div>
  );
};

const BackgroundShapes = () => (
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute top-1/4 right-1/4 w-48 md:w-72 h-48 md:h-72 bg-gradient-to-r from-amber-300/30 via-yellow-300/20 to-orange-300/30 rounded-full blur-3xl opacity-30 md:opacity-40 animate-pulse"></div>
    <div className="absolute bottom-1/4 left-1/4 w-56 md:w-80 h-56 md:h-80 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-3xl opacity-30 md:opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
  </div>
);

export default HeroSection;