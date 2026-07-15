import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  useUser,
} from "@clerk/clerk-react";

function Navbar({ isMenuOpen, setIsMenuOpen }) {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { user } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: "" },
    { name: "Features", path: "/features", icon: "" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 px-4 sm:px-6 py-3 transition-all duration-500 ${
        scrolled
          ? "bg-[#FFF2CC]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
          : "bg-[#FFF2CC]/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="relative group">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/20">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <span className="text-xl font-medium text-gray-800 tracking-tight">
              Career
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Pixel Style Dock */}
        <div className="hidden md:flex items-center gap-3">
          {/* Navigation Links - Centered Dock */}
          <div className="flex items-center gap-1 bg-white/60 backdrop-blur-xl px-2 py-1.5 rounded-2xl border border-amber-200/30 shadow-lg shadow-amber-500/5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/20"
                    : "text-gray-600 hover:text-gray-900 hover:bg-amber-50/50"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base">{link.icon}</span>
                  {link.name}
                </span>
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Pixel Style */}
          <div className="flex items-center gap-2 ml-2">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="group relative px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-[1.02]">
                  <span className="relative flex items-center gap-2">
                    Get Started
                    <motion.svg
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </motion.svg>
                  </span>
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-white/60 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 flex items-center justify-center text-white font-medium text-sm shadow-md shadow-amber-500/20">
                    {user?.firstName?.charAt(0) || user?.emailAddresses?.[0]?.emailAddress?.charAt(0) || "U"}
                  </div>
                  <span className="text-sm font-medium text-gray-700 hidden lg:block">
                    {user?.firstName || "User"}
                  </span>
                  <svg 
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <AnimatePresence>
                  {showDropdown && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-200/30 py-2 overflow-hidden"
                    >
                      {/* User Info */}
                      <div className="px-4 py-3 border-b border-amber-100/50">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 flex items-center justify-center text-white font-semibold text-base shadow-md">
                            {user?.firstName?.charAt(0) || user?.emailAddresses?.[0]?.emailAddress?.charAt(0) || "U"}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-gray-800 truncate">
                              {user?.firstName} {user?.lastName}
                            </p>
                            <p className="text-xs text-gray-500 truncate">
                              {user?.emailAddresses?.[0]?.emailAddress}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="py-1">
                        {/* <Link 
                          to="/profile" 
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50/50 transition-colors"
                          onClick={() => setShowDropdown(false)}
                        >
                          <span className="text-xl">👤</span>
                          My Profile
                        </Link> */}

                        {/* <Link 
                          to="/settings" 
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-50/50 transition-colors"
                          onClick={() => setShowDropdown(false)}
                        >
                          <span className="text-xl">⚙️</span>
                          Settings
                        </Link> */}

                        {/* <div className="border-t border-amber-100/50 my-1"></div> */}

                        <SignOutButton>
                          <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50/50 transition-colors">
                            <span className="text-xl">🚪</span>
                            Sign Out
                          </button>
                        </SignOutButton>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </SignedIn>
          </div>
        </div>

        {/* Mobile Menu Button - Pixel Style */}
        <button
          className="md:hidden relative w-11 h-11 flex items-center justify-center rounded-2xl bg-white/60 backdrop-blur-xl border border-amber-200/30 shadow-lg shadow-amber-500/5 hover:bg-white/80 transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 flex flex-col justify-center gap-1.5">
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
              className="block w-5 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
            />
            <motion.span
              animate={
                isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
              }
              className="block w-5 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu - Pixel Style */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="pt-4 pb-2 space-y-1"
            >
              {/* Mobile Nav Links */}
              <div className="bg-white/60 backdrop-blur-xl rounded-2xl border border-amber-200/30 shadow-lg shadow-amber-500/5 p-1.5 mx-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all ${
                        location.pathname === link.path
                          ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/20"
                          : "text-gray-700 hover:bg-amber-50/50"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-xl">{link.icon}</span>
                      <span className="text-base font-medium">{link.name}</span>
                      {location.pathname === link.path && (
                        <motion.div
                          layoutId="mobileActiveIndicator"
                          className="ml-auto w-2 h-2 bg-white rounded-full"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Auth */}
              <div className="mx-4 mt-3">
                <SignedOut>
                  <SignInButton mode="modal">
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 transition-all"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Get Started 🚀
                      </span>
                    </button>
                  </SignInButton>
                </SignedOut>

                <SignedIn>
                  <div className="space-y-2">
                    {/* User Profile Card */}
                    <div className="flex items-center gap-3 px-4 py-3 bg-white/60 backdrop-blur-xl rounded-2xl border border-amber-200/30">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 flex items-center justify-center text-white font-semibold text-base shadow-md shadow-amber-500/20">
                        {user?.firstName?.charAt(0) || user?.emailAddresses?.[0]?.emailAddress?.charAt(0) || "U"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-800 truncate">
                          {user?.firstName} {user?.lastName}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {user?.emailAddresses?.[0]?.emailAddress}
                        </p>
                      </div>
                    </div>

                    {/* Mobile Menu Items */}
                    <Link
                      to="/profile"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-gray-700 hover:bg-amber-50/50 transition-colors bg-white/40 backdrop-blur-sm"
                    >
                      <span className="text-xl">👤</span>
                      <span className="text-sm font-medium">My Profile</span>
                    </Link>

                    <SignOutButton>
                      <button className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-red-50/80 backdrop-blur-sm text-red-600 font-medium border border-red-200/50 hover:bg-red-100/80 transition-all">
                        <span className="text-xl">🚪</span>
                        Sign Out
                      </button>
                    </SignOutButton>
                  </div>
                </SignedIn>
              </div>

              {/* Bottom Branding */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 px-4 py-2 text-center"
              >
                <div className="text-xs text-gray-400 font-light tracking-wider">
                  AI Career · Premium Platform
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;