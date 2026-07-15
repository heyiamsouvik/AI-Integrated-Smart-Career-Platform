// components/homepage/ReviewsSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft, FaQuoteRight,FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


// Sample reviews data
const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Software Engineer at Google',
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=amber&color=fff&size=60',
    rating: 5,
    text: 'AI Career completely transformed my job search. The resume analyzer gave me insights I never considered, and I landed my dream role at Google within 3 weeks!',
    date: '2 months ago'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager at Microsoft',
    avatar: 'https://ui-avatars.com/api/?name=Michael+Chen&background=orange&color=fff&size=60',
    rating: 5,
    text: 'The AI-powered cover letter generator is a game-changer. It saved me hours of work and helped me craft personalized letters that actually got noticed.',
    date: '1 month ago'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'UX Designer at Apple',
    avatar: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&background=amber&color=fff&size=60',
    rating: 4.5,
    text: 'I love how intuitive the platform is. The job matching feature helped me discover opportunities I would have never found on my own. Highly recommend!',
    date: '3 weeks ago'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Data Scientist at Amazon',
    avatar: 'https://ui-avatars.com/api/?name=David+Kim&background=orange&color=fff&size=60',
    rating: 5,
    text: 'The ATS score optimization feature is incredible. My resume went from being ignored to getting interviews at top companies. This platform is a must-have.',
    date: '1 week ago'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Marketing Director',
    avatar: 'https://ui-avatars.com/api/?name=Lisa+Thompson&background=amber&color=fff&size=60',
    rating: 4.5,
    text: 'As someone who was switching careers, AI Career was invaluable. The interview preparation tools gave me the confidence I needed to succeed.',
    date: '2 weeks ago'
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Full Stack Developer',
    avatar: 'https://ui-avatars.com/api/?name=James+Wilson&background=orange&color=fff&size=60',
    rating: 5,
    text: 'This platform is worth every penny. The resume builder created a professional resume that helped me triple my interview callbacks. Absolutely fantastic!',
    date: '3 days ago'
  },
  {
    id: 7,
    name: 'Rachel Green',
    role: 'HR Manager',
    avatar: 'https://ui-avatars.com/api/?name=Rachel+Green&background=amber&color=fff&size=60',
    rating: 4.5,
    text: 'I recommend AI Career to all my friends and colleagues. The platform is user-friendly and the results speak for themselves. Truly life-changing.',
    date: '1 week ago'
  },
  {
    id: 8,
    name: 'Robert Taylor',
    role: 'Business Analyst',
    avatar: 'https://ui-avatars.com/api/?name=Robert+Taylor&background=orange&color=fff&size=60',
    rating: 5,
    text: 'The AI suggestions helped me identify gaps in my resume that I had never noticed. Within 2 weeks of using this platform, I received 5 interview offers!',
    date: '5 days ago'
  }
];

// Star Rating Component
const StarRating = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-400 w-3.5 h-3.5" />);
  }
  
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-400 w-3.5 h-3.5" />);
  }
  
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400 w-3.5 h-3.5" />);
  }

  return <div className="flex gap-0.5">{stars}</div>;
};

// Individual Review Card
const ReviewCard = ({ review, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="flex-shrink-0 w-[320px] md:w-[380px] mx-3"
    >
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-200/30 shadow-lg hover:shadow-xl transition-all duration-300 h-[280px] flex flex-col">
        {/* Header with Avatar and Name */}
        <div className="flex items-start gap-3 mb-3">
          <div className="relative flex-shrink-0">
            <img 
              src={review.avatar} 
              alt={review.name}
              className="w-12 h-12 rounded-full ring-2 ring-amber-200/50"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-gray-800 truncate">
              {review.name}
            </h4>
            <p className="text-xs text-gray-500 truncate">{review.role}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="mb-2.5">
          <StarRating rating={review.rating} />
        </div>

        {/* Review Text */}
        <div className="flex-1 relative">
          <FaQuoteLeft className="absolute -top-1 -left-1 w-4 h-4 text-amber-300/50" />
          <p className="text-sm text-gray-700 leading-relaxed px-3 line-clamp-4">
            {review.text}
          </p>
          <FaQuoteRight className="absolute -bottom-1 -right-1 w-4 h-4 text-amber-300/50" />
        </div>

        {/* Date */}
        <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-amber-100/50">
          <span className="text-xs text-gray-400">{review.date}</span>
          <div className="flex gap-0.5">
            <span className="text-[10px] text-amber-400">✦</span>
            <span className="text-[10px] text-gray-400">Verified</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Reviews Section
function ReviewsSection() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate reviews for infinite scroll effect
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0" style={{ backgroundColor: '#FFF2CC' }} />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl -translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl translate-x-32 translate-y-32" />
      
      {/* Section Header */}
      <div className="relative max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Real Stories, Real Success
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with AI Career
          </p>
        </motion.div>
      </div>

      {/* Scrolling Reviews */}
      <div 
        className="relative max-w-7xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden">
          <motion.div
            ref={scrollRef}
            className="flex"
            animate={{
              x: ['0%', '-50%']
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              paused: isPaused
            }}
          >
            {doubledReviews.map((review, index) => (
              <ReviewCard key={`${review.id}-${index}`} review={review} index={index} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlays for smooth edges */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 md:w-32 h-full bg-gradient-to-r from-[#FFF2CC] to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 md:w-32 h-full bg-gradient-to-l from-[#FFF2CC] to-transparent pointer-events-none z-10" />

      {/* Stats / Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative max-w-7xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { number: '4.9', label: 'Average Rating', icon: '⭐' },
          { number: '1,200+', label: 'Reviews', icon: '💬' },
          { number: '98%', label: 'Satisfaction Rate', icon: '😊' },
          { number: '500+', label: 'Success Stories', icon: '🏆' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index + 0.4, duration: 0.6 }}
            className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-amber-200/30 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-2xl md:text-3xl mb-1">{stat.icon}</div>
            <div className="text-xl md:text-2xl font-bold text-gray-800">{stat.number}</div>
            <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative max-w-7xl mx-auto mt-12 text-center"
      >
        <Link
          to="/reviews"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-2xl shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-[1.02] transition-all duration-300"
        >
          Read All Reviews
          <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </section>
  );
}

export default ReviewsSection;
