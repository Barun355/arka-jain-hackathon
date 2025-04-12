// src/components/ProtectedRoute.tsx
import { useAuth, useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  requireOnboarding?: boolean;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoaded, isSignedIn } = useAuth();
  const { user, isLoaded: isUserLoad } = useUser();
  const location = useLocation();

  // Check if the auth is still loading
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // If user is not signed in, redirect to sign-in page
  if (!isSignedIn) {
    return <Navigate to="/sign-in" state={{ from: location.pathname }} />;
  }

  if (!isUserLoad) {
    return <div>Loading user...</div>;
  }

  if (
    !user?.publicMetadata?.onboardingComplete &&
    !location.pathname.startsWith("/onboarding")
  ) {
    return <Navigate to="/onboarding" state={{ from: location.pathname }} />;
  }

  if (!user?.publicMetadata?.approved) {
    console.log(user?.publicMetadata?.approved);
    return <Navigate to="/not-approved" state={{ from: location.pathname }} />;
  }
  console.log(user.publicMetadata?.role)
  if (user?.publicMetadata?.onBoardingCompleted && user?.publicMetadata?.role) {
    if (user.publicMetadata.role === "mentor") {
      return <Navigate to="/dashboard/mentor" state={{ from: location.pathname }} />;
    } else if (user.publicMetadata.role === "mentee") {
      return <Navigate to="/dashboard/mentee" state={{ from: location.pathname }} />;
    }
  }

  // User is authenticated (and has completed onboarding if required)
  return <>{children}</>;
};
