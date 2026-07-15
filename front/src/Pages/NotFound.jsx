// Pages/NotFound.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaRocket } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className=" relative min-h-screen pt-5 w-full overflow-hidden bg-gradient-to-b from-[#FFF2CC] via-[#FEF3D7] to-[#FFEBB8] flex items-center justify-center px-4">
      {/* Decorative Background Elements - Matching FeaturePage */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-200/20 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Large 404 with Gradient - Matching FeaturePage heading style */}
            <h1 className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              404
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h2>
            
            <p className="text-xl text-gray-600 max-w-lg mx-auto leading-relaxed mb-8">
              Oops! The page you're looking for seems to have wandered off into the digital wilderness.
            </p>

   
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 bg-[length:200%_auto] animate-gradient text-white rounded-xl hover:shadow-2xl hover:shadow-amber-200/50 transition-all duration-300 transform hover:-translate-y-1 font-medium text-lg"
            >
              <FaHome className="w-5 h-5" />
              Go Back Home
              <span className="text-white/70">→</span>
            </Link>

            {/* Helpful Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/features" className="text-amber-600 hover:text-amber-700 transition-colors hover:underline">
                Browse Features
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/about" className="text-amber-600 hover:text-amber-700 transition-colors hover:underline">
                About Us
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/" className="text-amber-600 hover:text-amber-700 transition-colors hover:underline">
                Homepage
              </Link>
            </div>
          </motion.div>
        </motion.div>
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
      `}</style>
    </div>
  );
}