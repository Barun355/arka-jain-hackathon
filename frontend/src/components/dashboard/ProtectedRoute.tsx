// src/components/ProtectedRoute.tsx
import { useAuth, useUser } from '@clerk/clerk-react';
import { Navigate, useLocation } from 'react-router-dom';
import { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
  requireOnboarding?: boolean;
}

export const ProtectedRoute = ({ 
  children
}: ProtectedRouteProps) => {
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

  if (!user?.publicMetadata?.onBoardingCompeleted) {
    return <Navigate to="/onboarding" state={{ from: location.pathname}} />
  }

  if (user?.publicMetadata?.role) {
    if (user.publicMetadata.role === 'mentor') {
        <Navigate to="/dashboard/mentor" state={{ from: location.pathname }} />
    } else if (user.publicMetadata.role === 'mentee'){
        <Navigate to="/dashboard/mentee" state={{ from: location.pathname }} />
    }
  }
  // User is authenticated (and has completed onboarding if required)
  return <>{children}</>;
};