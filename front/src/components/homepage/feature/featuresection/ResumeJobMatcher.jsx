import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CloudArrowUpIcon, 
  DocumentTextIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  ArrowRightIcon,
  SparklesIcon,
  ChartBarIcon,
  LightBulbIcon,
  XCircleIcon
} from "@heroicons/react/24/outline";
import { FaRocket } from 'react-icons/fa';


const BE_url = import.meta.env.VITE_BE_URL;



export default function ResumeJobMatcher() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError("");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
      setError("");
    } else {
      setError("Please upload a PDF file.");
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a resume.");
      return;
    }

    setLoading(true);
    setError("");
    setSkills([]);
    setJobs([]);

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const { data } = await axios.post(
        `${BE_url}/api/jobs/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      setSkills(data.extractedSkills || []);
      setJobs(data.jobs || []);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch job listings.");
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay: 0.2 },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, delay: 0.3 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const listItem = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF2CC] via-[#FEF3D7] to-[#FFEBB8] mt-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">



        {/* Heading */}
        <motion.div {...fadeInUp} className="text-center mb-12 ">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Find Your Dream Job</span>
            <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              with AI-Powered Matching
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Upload your resume and discover jobs perfectly matched to your skills and experience.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Upload Section */}
          <motion.div {...slideInLeft}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-amber-200/30 p-6 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CloudArrowUpIcon className="h-6 w-6 text-amber-600 mr-2" />
                Upload Resume
              </h2>

              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => document.getElementById('fileInput').click()}
                className={`relative border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-200 ${
                  isDragging
                    ? "border-amber-500 bg-amber-50"
                    : file
                      ? "border-green-500 bg-green-50"
                      : "border-gray-300 hover:border-amber-400 hover:bg-amber-50/30"
                }`}
              >
                <input
                  id="fileInput"
                  type="file"
                  accept=".pdf"
                  className="hidden"
                  onChange={handleFileChange}
                />

                <AnimatePresence mode="wait">
                  {file ? (
                    <motion.div
                      key="file"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="flex flex-col items-center"
                    >
                      <DocumentTextIcon className="h-16 w-16 text-green-500" />
                      <p className="mt-2 text-sm font-medium text-gray-900">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setFile(null);
                          document.getElementById('fileInput').value = "";
                        }}
                        className="mt-2 text-xs text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="upload"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                    >
                      <CloudArrowUpIcon className="h-16 w-16 text-gray-400 mx-auto" />
                      <p className="mt-4 text-gray-700 font-medium">
                        <span className="text-amber-600">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        PDF files only
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                onClick={handleUpload}
                disabled={loading || !file}
                className={`w-full mt-6 py-4 rounded-xl font-semibold text-white transition-all duration-200 ${
                  loading || !file
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-lg hover:shadow-xl"
                }`}
                whileHover={!loading && file ? { scale: 1.02 } : {}}
                whileTap={!loading && file ? { scale: 0.98 } : {}}
              >
                {loading ? (
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Processing Resume...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <SparklesIcon className="h-5 w-5" />
                    <span>Find Matching Jobs</span>
                  </span>
                )}
              </motion.button>

              {/* Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-5 rounded-xl bg-red-50 border border-red-200 p-4"
                  >
                    <p className="text-sm text-red-600 flex items-center">
                      <XCircleIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span>{error}</span>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div {...slideInRight}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-amber-200/30 p-6 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BriefcaseIcon className="h-6 w-6 text-amber-600 mr-2" />
                Results
              </h2>

              {skills.length === 0 && jobs.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col justify-center items-center h-[500px] text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center mb-5">
                    <DocumentTextIcon className="h-12 w-12 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    No Results Yet
                  </h3>
                  <p className="text-gray-500 mt-3 max-w-sm">
                    Upload your resume to see extracted skills and recommended jobs.
                  </p>
                </motion.div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key="results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {/* Skills Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <SparklesIcon className="h-5 w-5 text-amber-600 mr-2" />
                        Extracted Skills
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {skills.map((skill, index) => (
                          <motion.span
                            key={index}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium shadow-md"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Jobs Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <BriefcaseIcon className="h-5 w-5 text-amber-600 mr-2" />
                        Recommended Jobs ({jobs.length})
                      </h3>

                      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                        {jobs.map((job, index) => (
                          <motion.div
                            key={index}
                            variants={listItem}
                            initial="initial"
                            animate="animate"
                            transition={{ delay: index * 0.05 }}
                            className="rounded-xl border border-amber-200/30 p-5 bg-white hover:shadow-lg transition-all duration-300 hover:border-amber-400"
                          >
                            <h4 className="text-lg font-bold text-gray-900">
                              {job.title}
                            </h4>
                            <div className="mt-2 space-y-1.5 text-gray-600">
                              <p className="flex items-center">
                                <BuildingOfficeIcon className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0" />
                                <span className="font-semibold">Company:</span>
                                <span className="ml-2">{job.company}</span>
                              </p>
                              <p className="flex items-center">
                                <MapPinIcon className="h-4 w-4 text-amber-600 mr-2 flex-shrink-0" />
                                <span className="font-semibold">Location:</span>
                                <span className="ml-2">{job.location}</span>
                              </p>
                            </div>
                            <a
                              href={job.redirectUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center mt-4 px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
                            >
                              Apply Now
                              <ArrowRightIcon className="h-4 w-4 ml-2" />
                            </a>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: SparklesIcon,
              title: "Smart Skill Extraction",
              description:
                "AI automatically extracts and identifies key skills from your resume",
            },
            {
              icon: ChartBarIcon,
              title: "Precise Job Matching",
              description:
                "Find jobs that perfectly align with your skills and experience",
            },
            {
              icon: LightBulbIcon,
              title: "Career Insights",
              description:
                "Get recommendations for career paths and skill development",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-amber-200/30 shadow-sm hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <feature.icon className="h-8 w-8 text-amber-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}