import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CloudArrowUpIcon, 
  DocumentTextIcon,
  SparklesIcon,
  ArrowPathIcon,
  XCircleIcon,
  CheckCircleIcon,
  EyeIcon,
  ArrowDownTrayIcon
} from "@heroicons/react/24/outline";
import { FaRocket } from 'react-icons/fa';


const BE_url = import.meta.env.VITE_BE_URL;


const PortfolioPreview = () => {
  const [file, setFile] = useState(null);
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fileName, setFileName] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setError('');
      setIsGenerated(false);
    } else {
      setError('Please select a valid PDF file');
      setFile(null);
      setFileName('');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/pdf') {
      setFile(droppedFile);
      setFileName(droppedFile.name);
      setError('');
      setIsGenerated(false);
    } else {
      setError('Please drop a valid PDF file');
    }
  };

  const handleGenerate = async () => {
    if (!file) {
      setError('Please select a resume PDF');
      return;
    }

    setLoading(true);
    setError('');
    setIsGenerated(false);

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const response = await axios.post(`${BE_url}/api/generate`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 60000,
      });

      console.log('Response data:', response.data);

      if (response.data.success) {
        setHtmlContent(response.data.html);
        setIsGenerated(true);
        console.log('✅ Portfolio generated successfully');
      } else {
        setError(response.data.message || 'Failed to generate portfolio');
      }
    } catch (err) {
      console.error('❌ Error:', err);
      if (err.response) {
        setError(err.response.data?.message || `Server error: ${err.response.status}`);
      } else if (err.request) {
        setError('No response from server. Please check if the server is running.');
      } else {
        setError(err.message || 'An error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!htmlContent) return;
    
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio-${Date.now()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    setFile(null);
    setFileName('');
    setHtmlContent('');
    setIsGenerated(false);
    setError('');
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

  return (
    <div className="min-h-screen mt-10 bg-gradient-to-b from-[#FFF2CC] via-[#FEF3D7] to-[#FFEBB8] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">

        {/* Title Section */}
        <motion.div {...fadeInUp} className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Create Your Professional</span>
            <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Portfolio with AI
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Upload your resume and let AI create a stunning portfolio website in seconds.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <motion.div {...slideInLeft}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-amber-200/30 p-8 h-full">
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
                  disabled={loading}
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
                        {fileName}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleReset();
                          document.getElementById('fileInput').value = "";
                        }}
                        className="mt-2 text-xs text-red-600 hover:text-red-800"
                        disabled={loading}
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

              {/* Generate Button */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <motion.button
                  onClick={handleGenerate}
                  disabled={!file || loading}
                  className={`flex-1 py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 ${
                    !file || loading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-lg hover:shadow-xl'
                  }`}
                  whileHover={!loading && file ? { scale: 1.02 } : {}}
                  whileTap={!loading && file ? { scale: 0.98 } : {}}
                >
                  {loading ? (
                    <span className="flex items-center justify-center space-x-2">
                      <ArrowPathIcon className="h-5 w-5 animate-spin" />
                      <span>Generating Portfolio...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <SparklesIcon className="h-5 w-5" />
                      <span>Generate Portfolio</span>
                    </span>
                  )}
                </motion.button>

                {isGenerated && (
                  <motion.button
                    onClick={handleDownload}
                    className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ArrowDownTrayIcon className="h-5 w-5" />
                    <span>Download HTML</span>
                  </motion.button>
                )}
              </div>

              {/* Error Display */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <p className="text-red-600 flex items-center">
                      <XCircleIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                      {error}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Preview/Empty State Section */}
          <motion.div {...slideInRight}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-amber-200/30 p-8 h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <EyeIcon className="h-6 w-6 text-amber-600 mr-2" />
                Portfolio Preview
              </h2>

              {isGenerated && htmlContent ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-xl overflow-hidden border border-amber-200/30"
                >
                  <div className="flex items-center justify-between p-3 bg-gray-50 border-b border-amber-200/30">
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        Live Preview
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={handleDownload}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-md transition-all"
                      >
                        <span className="flex items-center space-x-1">
                          <ArrowDownTrayIcon className="h-4 w-4" />
                          <span>Download</span>
                        </span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative" style={{ height: '500px' }}>
                    <iframe
                      id="portfolioIframe"
                      srcDoc={htmlContent}
                      title="Portfolio Preview"
                      className="w-full h-full border-0"
                      sandbox="allow-scripts allow-modals allow-same-origin"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      <span className="flex items-center space-x-1">
                        <EyeIcon className="h-3 w-3" />
                        <span>Live Preview</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col justify-center items-center h-[500px] text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center mb-5">
                    <DocumentTextIcon className="h-12 w-12 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    No Portfolio Generated
                  </h3>
                  <p className="text-gray-500 mt-3 max-w-sm">
                    Upload your resume and click generate to see your AI-powered portfolio
                  </p>
                </motion.div>
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
              title: "AI-Powered Design",
              description:
                "Advanced AI creates professional, modern portfolio designs from your resume",
            },
            {
              icon: CheckCircleIcon,
              title: "Instant Generation",
              description:
                "Get your complete portfolio website in seconds, ready to download",
            },
            {
              icon: EyeIcon,
              title: "Live Preview",
              description:
                "Preview your portfolio in real-time before downloading",
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
};

export default PortfolioPreview;