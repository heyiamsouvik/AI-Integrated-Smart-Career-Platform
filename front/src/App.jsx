import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn, SignUp } from "@clerk/clerk-react";

import Homepage from "./Pages/Homepage";
import FeaturePage from "./Pages/FeaturePage";
import Terms from "./Pages/Terms";
import Privacy from "./Pages/Privacy";
import About from "./Pages/About";
import Navbar from "./Sections/Navbar";

import AIResumeBuilder from "./components/homepage/feature/featuresection/AIResumeBuilder";
import ResumeAnalyser from "./components/homepage/feature/featuresection/ResumeAnalyser";
import CoverLetters from "./components/homepage/feature/featuresection/CoverLetters";
import ResumeJobMatcher from "./components/homepage/feature/featuresection/ResumeJobMatcher";

import ProtectedRoute from "./components/ProtectedRoute";
import PortfolioPreview from "./Pages/PortfolioPreview";
import NotFound from "./Pages/NotFound";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-100 font-sans ">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route
            path="/sign-in/*"
            element={
              <div className="flex items-center justify-center min-h-screen pt-20">
                <SignIn
                  routing="path"
                  path="/sign-in"
                  signUpUrl="/sign-up"
                  signUpFallbackRedirectUrl="/" // ✅ Replaces redirectUrl on sign-up link
                  fallbackRedirectUrl="/" // ✅ Replaces redirectUrl on sign-in
                  appearance={{
                    elements: {
                      rootBox: "mx-auto",
                      card: "w-full max-w-md",
                    },
                  }}
                />
              </div>
            }
          />
          <Route
            path="/sign-up/*"
            element={
              <div className="flex items-center justify-center min-h-screen pt-20">
                <SignUp
                  routing="path"
                  path="/sign-up"
                  signInUrl="/sign-in"
                  signInFallbackRedirectUrl="/" // ✅ Replaces redirectUrl on sign-in link
                  fallbackRedirectUrl="/" // ✅ Replaces redirectUrl on sign-up
                  appearance={{
                    elements: {
                      rootBox: "mx-auto",
                      card: "w-full max-w-md",
                    },
                  }}
                />
              </div>
            }
          />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />

          <Route
            path="/AIResumeBuilder"
            element={
              <ProtectedRoute>
                <AIResumeBuilder />
              </ProtectedRoute>
            }
          />

          <Route
            path="/resume-analyser"
            element={
              <ProtectedRoute>
                <ResumeAnalyser />
              </ProtectedRoute>
            }
          />

          <Route
            path="/cover-letters"
            element={
              <ProtectedRoute>
                <CoverLetters />
              </ProtectedRoute>
            }
          />

          <Route
            path="/job-matching"
            element={
              <ProtectedRoute>
                <ResumeJobMatcher />
              </ProtectedRoute>
            }
          />

          <Route
            path="/portfolio-generator"
            element={
              <ProtectedRoute>
                <PortfolioPreview />
              </ProtectedRoute>
            }
          />

          <Route
            path="/features"
            element={
              <ProtectedRoute>
                <FeaturePage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
