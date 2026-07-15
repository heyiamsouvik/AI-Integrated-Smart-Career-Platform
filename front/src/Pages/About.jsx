import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaAward,
  FaUsers,
  FaHeart,
  FaArrowRight,
  FaDownload
} from 'react-icons/fa';
import { SiLeetcode, SiHashnode } from 'react-icons/si';

function About() {
  const skills = [
    { name: 'React.js', level: 90, color: 'from-cyan-400 to-blue-500' },
    { name: 'Node.js', level: 85, color: 'from-green-400 to-emerald-500' },
    { name: 'Python', level: 80, color: 'from-yellow-400 to-orange-500' },
    { name: 'TypeScript', level: 75, color: 'from-blue-400 to-indigo-500' },
    { name: 'MongoDB', level: 70, color: 'from-green-400 to-teal-500' },
    { name: 'Tailwind CSS', level: 85, color: 'from-cyan-400 to-blue-500' },
  ];

  const projects = [
    {
      title: 'AI Career Platform',
      description: 'AI-powered platform for resume building, job matching, and career guidance.',
      tech: ['React', 'Node.js', 'AI', 'MongoDB'],
      link: '/features'
    },
    {
      title: 'Portfolio Builder',
      description: 'Interactive portfolio builder for developers and designers with customizable templates.',
      tech: ['React', 'Tailwind', 'Framer Motion'],
      link: '#'
    },
    {
      title: 'Code Collaboration Hub',
      description: 'Real-time code collaboration tool with video chat and pair programming features.',
      tech: ['WebRTC', 'Socket.io', 'React', 'Node.js'],
      link: '#'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '15+', icon: FaCode },
    { label: 'Years Experience', value: '3+', icon: FaLaptopCode },
    { label: 'Happy Clients', value: '10+', icon: FaUsers },
    { label: 'Awards', value: '2', icon: FaAward },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:your.email@gmail.com', label: 'Email' },
    { icon: SiLeetcode, href: 'https://leetcode.com/yourusername', label: 'LeetCode' },
    { icon: SiHashnode, href: 'https://hashnode.com/@yourusername', label: 'Blog' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50/30 pt-32 pb-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100/50 overflow-hidden">
          {/* Header with Gradient */}
          <div className="relative h-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            {/* Avatar */}
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="absolute -bottom-12 left-8"
            >
              <div className="w-28 h-28 rounded-2xl border-4 border-white shadow-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold overflow-hidden">
                <img 
                  src="https://ui-avatars.com/api/?name=Your+Name&background=random&size=128&bold=true" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Online Status */}
            <div className="absolute bottom-8 right-8 flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-white text-sm font-medium">Open to Work</span>
            </div>
          </div>

          {/* Profile Info */}
          <div className="pt-14 px-8 pb-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Your Name</h1>
                <p className="text-lg text-gray-600 mt-1">Full Stack Developer & AI Enthusiast</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">
                    🚀 React.js
                  </span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">
                    🔷 Node.js
                  </span>
                  <span className="px-3 py-1 bg-pink-50 text-pink-700 text-xs font-medium rounded-full">
                    🤖 AI/ML
                  </span>
                  <span className="px-3 py-1 bg-cyan-50 text-cyan-700 text-xs font-medium rounded-full">
                    ☁️ Cloud
                  </span>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/contact"
                  className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300 flex items-center gap-2"
                >
                  <FaEnvelope className="w-4 h-4" />
                  Contact Me
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/resume.pdf"
                  download
                  className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 text-sm font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center gap-2"
                >
                  <FaDownload className="w-4 h-4" />
                  Resume
                </motion.a>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-6 max-w-2xl">
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate Full Stack Developer with 3+ years of experience building 
                innovative web applications. I specialize in creating AI-powered solutions 
                that solve real-world problems. Currently focused on building the next 
                generation of career development tools with AI.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 bg-gray-50 rounded-xl text-center hover:bg-gray-100 transition-colors"
                >
                  <stat.icon className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-8">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FaCode className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-8">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100/50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FaRocket className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-900">Featured Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <FaArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-white text-xs text-gray-600 rounded-md border border-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links & Call to Action */}
        <div className="mt-8">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100/50 p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Let's Connect</h3>
                <p className="text-gray-600 text-sm mt-1">I'm always open to interesting conversations</p>
              </div>
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 border border-gray-200 hover:border-transparent flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-6 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                Made with <FaHeart className="text-red-500 w-3 h-3 animate-pulse" /> by Souvik
              </span>
              <div className="flex gap-4">
                <Link to="/privacy" className="hover:text-gray-700 transition-colors">Privacy</Link>
                <Link to="/terms" className="hover:text-gray-700 transition-colors">Terms</Link>
                <Link to="/cookies" className="hover:text-gray-700 transition-colors">Cookies</Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;