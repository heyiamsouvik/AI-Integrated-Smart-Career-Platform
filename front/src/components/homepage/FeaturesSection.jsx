import { motion } from 'framer-motion';
import {
  SparklesIcon,
  DocumentCheckIcon,
  EnvelopeIcon,
  MicrophoneIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';

const features = [
  { icon: SparklesIcon, title: 'AI Resume Builder', desc: 'Craft ATS-friendly resumes in seconds.' },
  { icon: DocumentCheckIcon, title: 'Smart Analysis', desc: 'Get instant feedback on your resume.' },
  { icon: EnvelopeIcon, title: 'Cover Letters', desc: 'Personalized letters that stand out.' },
  { icon: MicrophoneIcon, title: 'Interview Prep', desc: 'Mock interviews with AI feedback.' },
  { icon: BriefcaseIcon, title: 'Job Matching', desc: 'Find roles that fit your skills.' }
];

function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 md:mb-20"
      >
        Power Your Career Journey
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transition-all text-center group"
          >
            <feature.icon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-indigo-600 mx-auto mb-3 md:mb-5 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-gray-900">{feature.title}</h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
