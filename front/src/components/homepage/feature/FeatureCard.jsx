import React from 'react';
import {
  SparklesIcon,
  DocumentCheckIcon,
  EnvelopeIcon,
  MicrophoneIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';

const iconMap = {
  SparklesIcon,
  DocumentCheckIcon,
  EnvelopeIcon,
  MicrophoneIcon,
  BriefcaseIcon
};

function FeatureCard({ feature }) {
  const IconComponent = iconMap[feature.icon];
  
  if (!IconComponent) return null;

  return (
    <div className="aspect-square w-full group cursor-pointer">
      <div className={`
        w-full h-full p-6 
        bg-gradient-to-br from-white/10 to-white/5 
        backdrop-blur-sm rounded-2xl 
        border border-white/20 
        hover:bg-gradient-to-br hover:from-white/20 hover:to-white/10
        transition-all duration-500 
        hover:scale-105 hover:shadow-2xl hover:shadow-white/10
        flex flex-col items-center justify-center text-center
        relative overflow-hidden
      `}>
        {/* Animated gradient background on hover */}
        <div className={`
          absolute inset-0 opacity-0 group-hover:opacity-20 
          transition-opacity duration-500 bg-gradient-to-r ${feature.gradient}
        `} />
        
        {/* Icon with gradient */}
        <div className={`
          mb-4 p-3 rounded-xl
          bg-gradient-to-r ${feature.gradient} 
          text-white
          transform group-hover:scale-110 transition-transform duration-300
        `}>
          <IconComponent className="w-8 h-8" />
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2">
          {feature.title}
        </h3>
        
        {/* Description */}
        <p className="text-xs text-gray-300 leading-relaxed">
          {feature.desc}
        </p>
        
        {/* Decorative line */}
        <div className={`
          absolute bottom-0 left-1/2 -translate-x-1/2 
          w-0 group-hover:w-1/2 h-0.5 
          bg-gradient-to-r ${feature.gradient}
          transition-all duration-500
        `} />
      </div>
    </div>
  );
}

export default FeatureCard;