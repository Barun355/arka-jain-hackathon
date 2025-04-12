import React, { useState, useEffect } from "react";

// Icon imports (assuming you're using a package like lucide-react)
import {
  Home,
  Users,
  Calendar,
  Settings,
  Bell,
  Search,
  ChevronDown,
  Menu,
  X,
  UserPlus,
  BookMarked,
  PenTool,
  Award,
} from "lucide-react";
import { Outlet } from "react-router-dom";
import CustomUserButton from "@/components/dashboard/UserButton";
import { useUser } from "@clerk/clerk-react";

const DashboardLayout: React.FC = () => {
  // const user = mentorUsers[0];
  const { user } = useUser();
  const role = user?.publicMetadata?.role;

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMentor = role === "mentor";

  // Common menu items for both roles
  const commonMenuItems = [
    {
      name: "Dashboard",
      icon: <Home className="w-5 h-5" />,
      href: `/dashboard/${role}`,
    },
    {
      name: "Settings",
      icon: <Settings className="w-5 h-5" />,
      href: "/dashboard/settings",
    },
  ];

  // Role-specific menu items
  const mentorMenuItems = [
    {
      name: "Create Sessions",
      icon: <Calendar className="w-5 h-5" />,
      href: "/sessions/create",
    },
    {
      name: "Create Collab",
      icon: <PenTool className="w-5 h-5" />,
      href: "/collab/create",
    },
    {
      name: "Find Mentees",
      icon: <UserPlus className="w-5 h-5" />,
      href: "/find-mentees",
    },
  ];

  const menteeMenuItems = [
    {
      name: "Search Peers",
      icon: <Search className="w-5 h-5" />,
      href: "/search-peers",
    },
    {
      name: "Project Showcase",
      icon: <Award className="w-5 h-5" />,
      href: "/dashboard/showcase",
    },
    {
      name: "Collaborations",
      icon: <BookMarked className="w-5 h-5" />,
      href: "/collaborations",
    },
    {
      name: "Find Mentors",
      icon: <Users className="w-5 h-5" />,
      href: "/find-mentors",
    },
    {
      name: "Sessions",
      icon: <Calendar className="w-5 h-5" />,
      href: "/sessions",
    },
  ];

  const menuItems = [
    ...commonMenuItems,
    ...(isMentor ? mentorMenuItems : menteeMenuItems),
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Desktop */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } hidden md:block bg-white border-r border-gray-200 transition-all duration-300 ease-in-out`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          {sidebarOpen ? (
            <div className="text-xl font-semibold text-indigo-600">
              SkillBridge
            </div>
          ) : (
            <div className="text-xl font-semibold text-indigo-600">PM</div>
          )}
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-full text-gray-500 hover:bg-gray-100"
          >
            {sidebarOpen ? (
              <ChevronDown className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
        <div className="p-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center px-2 py-3 mb-1 rounded-md hover:bg-gray-100"
            >
              <div className="text-gray-500">{item.icon}</div>
              {sidebarOpen && (
                <span className="ml-3 text-sm font-medium text-gray-700">
                  {item.name}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Sidebar overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transform ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          <div className="text-xl font-semibold text-indigo-600">
            PeerMentor
          </div>
          <button
            onClick={closeMobileMenu}
            className="p-1 rounded-full text-gray-500 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-center px-2 py-3 mb-1 rounded-md hover:bg-gray-100"
              onClick={closeMobileMenu}
            >
              <div className="text-gray-500">{item.icon}</div>
              <span className="ml-3 text-sm font-medium text-gray-700">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="h-16 flex items-center justify-between px-4">
            <div className="flex items-center">
              <button
                className="p-1 mr-3 rounded-full text-gray-500 hover:bg-gray-100 md:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </button>
              <h1 className="text-lg font-medium">
                {isMentor ? "Mentor Dashboard" : "Mentee Dashboard"}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-1 rounded-full text-gray-500 hover:bg-gray-100 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <CustomUserButton userRole={role} />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
