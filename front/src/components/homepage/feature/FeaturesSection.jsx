import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import FeatureCard from './FeatureCard';

const features = [
  { 
    icon: 'SparklesIcon', 
    title: 'AI Resume Builder', 
    desc: 'Craft ATS-friendly resumes in seconds with intelligent formatting suggestions.',
    gradient: 'from-amber-400 via-orange-400 to-red-400',
    path: '/AIResumeBuilder'  
  },
  { 
    icon: 'DocumentCheckIcon', 
    title: 'Resume Analyser', 
    desc: 'Get instant ATS score and keyword optimization suggestions.',
    gradient: 'from-purple-400 via-pink-400 to-rose-400',
    path: '/resume-analyser'
  },
  { 
    icon: 'EnvelopeIcon', 
    title: 'Cover Letters', 
    desc: 'Personalized letters that capture attention and stand out.',
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    path: '/cover-letters'
  },
  { 
    icon: 'MicrophoneIcon', 
    title: 'Interview Prep', 
    desc: 'Mock interviews with AI feedback to boost your confidence.',
    gradient: 'from-violet-400 via-purple-400 to-pink-400',
    path: '/interview-prep'
  },
  { 
    icon: 'BriefcaseIcon', 
    title: 'Job Matching', 
    desc: 'Find roles that perfectly align with your unique skills.',
    gradient: 'from-rose-400 via-pink-400 to-fuchsia-500',
    path: '/job-matching'
  }
];

function FeaturesSection() {
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
    <section ref={sectionRef} className="min-h-screen w-full relative overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Career growth background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/85 to-gray-900/90" />
        
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24 min-h-screen flex flex-col justify-start">
        {/* Header Section - Reduced bottom margin */}
        <div className="text-center mb-12 md:mb-16">
          <div className={`inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="text-white">✨ Powered by AI</span>
          </div>
          
          <h2 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-6'
          }`}>
            Transform Your 
            <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Career Journey
            </span>
          </h2>
          
          <p className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Everything you need to land your dream job with cutting-edge AI technology
          </p>
        </div>

        {/* Features Grid - Moved up with negative margin */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 max-w-7xl mx-auto w-full -mt-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100 + 600}ms` }}
            >
              <Link to={feature.path} className="block cursor-pointer">
                <FeatureCard feature={feature} />
              </Link>
            </div>
          ))}
        </div>

        {/* Subtle scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-30' : 'opacity-0'
        }`}>
          <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/30 rounded-full mt-2 animate-softBounce" />
          </div>
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

export default FeaturesSection;