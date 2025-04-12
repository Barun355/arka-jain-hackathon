import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/landing";
import Mentor from "./pages/dashboards/mentor/page";
import Mentee from "./pages/dashboards/mentee/page";
import DashboardLayout from "./pages/dashboards/layout";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import { ClerkProvider } from "@clerk/clerk-react";
import Onboarding from "./pages/onboarding";
import { ProtectedRoute } from "./components/dashboard/ProtectedRoute";
import { Toaster } from "sonner";
import AccountNotApproved from "./pages/dashboards/AccountNotApproved";
import MentorSessionPage from "./components/dashboard/mentors/MentorSessionPage";
import MentorCollabPage from "./components/dashboard/mentors/MentorCollabPage";
import MenteeManagementPage from "./components/dashboard/mentors/MenteeManagmentPage";
import ProjectShowcasePage from "./components/dashboard/mentee/ProjectShowcasePage";
import MenteeCollabPage from "./components/dashboard/mentee/CollaborationPage";
import MentorDiscoveryPage from "./components/dashboard/mentee/MentorDiscoveryPage";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "mentor",
        element: <Mentor />,
      },
      {
        path: "mentee",
        element: <Mentee />,
      },
      {
        path: 'sessions',
        element: <MentorSessionPage />
      },
      {
        path: "collab",
        element: <MentorCollabPage />
      },
      {
        path: "find-mentees",
        element: <MenteeManagementPage />
      },
      {
        path: "showcase",
        element: <ProjectShowcasePage />
      },
      {
        path: "collaborations",
        element: <MenteeCollabPage />
      },
      {
        path: "find-mentors",
        element: <MentorDiscoveryPage />
      }
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/onboarding",
    element: (
      <ProtectedRoute>
        <Onboarding />
      </ProtectedRoute>
    )
  },
  {
    path: '/not-approved',
    element: <AccountNotApproved />
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        variables: {
          colorPrimary: "#6366F1", // Change this to your desired primary color
        },
        elements: {
          card: "bg-white dark:bg-gray-800 shadow-lg rounded-lg",
          buttonPrimary: "bg-blue-600 text-white hover:bg-blue-700",
        },
      }}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
    >
      <RouterProvider router={router} />
      <Toaster />
    </ClerkProvider>
  </StrictMode>
);
