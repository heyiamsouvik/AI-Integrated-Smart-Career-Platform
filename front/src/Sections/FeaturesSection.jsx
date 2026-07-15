import React from "react";
import {
  FileText,
  FolderOpen,
  Mail,
  TrendingUp,
  Briefcase,
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
  CheckCircle,
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: <FileText className="w-7 h-7 text-amber-500" />,
      title: "Resume Generator",
      description:
        "Create professional, ATS-friendly resumes in minutes with our intelligent template system.",
      gradient: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-100",
    },
    {
      id: 2,
      icon: <FolderOpen className="w-7 h-7 text-blue-500" />,
      title: "Portfolio Builder",
      description:
        "Build a beautiful portfolio website that showcases your projects and skills with ease.",
      gradient: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100",
    },
    {
      id: 3,
      icon: <Mail className="w-7 h-7 text-emerald-500" />,
      title: "Cover Letter Creator",
      description:
        "Generate personalized cover letters tailored to every job description using AI.",
      gradient: "from-emerald-400 to-teal-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      iconBg: "bg-emerald-100",
    },
    {
      id: 4,
      icon: <TrendingUp className="w-7 h-7 text-purple-500" />,
      title: "Resume Improvement",
      description:
        "Receive AI-powered suggestions to improve your resume, ATS score, and recruiter visibility.",
      gradient: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100",
    },
    {
      id: 5,
      icon: <Briefcase className="w-7 h-7 text-red-500" />,
      title: "Smart Job Matching",
      description:
        "Get personalized job recommendations based on your profile, skills, and career goals.",
      gradient: "from-red-400 to-rose-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      iconBg: "bg-red-100",
    },
    {
      id: 6,
      icon: (
        <div className="flex items-center gap-1">
          <Shield className="w-5 h-5 text-indigo-500" />
          <Zap className="w-5 h-5 text-amber-500" />
        </div>
      ),
      title: "Fast & Secure",
      description:
        "Enterprise-grade security with blazing fast performance. Your data is encrypted and protected at all times.",
      gradient: "from-indigo-400 to-amber-500",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      iconBg: "bg-indigo-100",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full text-amber-700 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Features
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Everything You Need To
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            Land Your Dream Job
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            From resume creation to job matching - all in one place.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            // Special layout: Make features 5 and 6 side by side
            let colSpan = "";
            if (index === 0) colSpan = "md:col-span-2 lg:col-span-2";
            if (index === 3) colSpan = "md:col-span-2 lg:col-span-2";
            if (index === 4 || index === 5) colSpan = "md:col-span-1 lg:col-span-1";

            return (
              <div
                key={feature.id}
                className={`
                  ${feature.bgColor}
                  ${feature.borderColor}
                  border-2 rounded-2xl p-6
                  hover:shadow-xl transition-all duration-300
                  hover:-translate-y-1
                  ${colSpan}
                  ${index === 5 ? "relative overflow-hidden" : ""}
                `}
              >
                {/* "NEW" badge for Fast & Secure */}
                {index === 5 && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-2xl">
                      NEW
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`
                    w-12 h-12 rounded-xl
                    ${feature.iconBg}
                    flex items-center justify-center
                    flex-shrink-0
                    ${index === 5 ? "shadow-md" : ""}
                  `}
                  >
                    {feature.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                      {feature.title}
                      {index === 5 && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                          Trusted
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    

                    {/* Learn More Link */}
                    <button className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-amber-600 hover:text-orange-600 transition-colors group">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}

      </div>
    </section>
  );
};

export default FeaturesSection;