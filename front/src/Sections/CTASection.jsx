
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

function CTASection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [controls, isInView]);

  return (
    <section 
      ref={ref}
      className="py-16 md:py-24 px-4 md:px-6 text-center relative overflow-hidden"
      style={{ backgroundColor: '#FFF2CC' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 md:opacity-20">
        <div className="absolute top-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-amber-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-amber-300 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-300 rounded-full filter blur-3xl opacity-30"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="inline-block bg-amber-200/50 backdrop-blur-sm px-4 py-2 rounded-full text-sm md:text-base mb-4 text-gray-700 border border-amber-300/50">
          🎯 Limited Time Offer
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight text-gray-800">
          Ready to Launch Your Career?
        </h2>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-gray-700 max-w-2xl mx-auto">
          Join thousands building better futures with AI. Start your free trial today!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/signup"
            className="bg-amber-600 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-lg md:text-xl hover:shadow-2xl hover:scale-105 hover:bg-amber-700 transition-all duration-300 inline-flex items-center gap-2 md:gap-3 group"
          >
            Start Free Trial 
            <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            to="/demo"
            className="border-2 border-amber-600 text-amber-700 px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-semibold text-lg md:text-xl hover:bg-amber-600 hover:text-white transition-all duration-300"
          >
            View Demo
          </Link>
        </div>
        
        <div className="mt-8 flex flex-wrap gap-6 justify-center text-sm md:text-base text-gray-700">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Unlimited Free Trial
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Top Secure
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default CTASection;