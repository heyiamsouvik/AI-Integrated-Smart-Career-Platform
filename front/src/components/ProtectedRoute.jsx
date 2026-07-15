import { Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

export default function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-200">
        <p className="font-extrabold text-3xl">Just a moment...</p>
      </div>
    );
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
}