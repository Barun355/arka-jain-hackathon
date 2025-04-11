import { useState } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  GraduationCap,
  Users,
  BookOpen,
  Layout,
  MessageSquare,
} from "lucide-react";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Peer Connection",
      description:
        "Connect with peers sharing similar skill sets and interests. Collaborate, learn, and grow together in a supportive community.",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Mentor Matching",
      description:
        "Find experienced mentors in your field who can guide you through your professional journey and help you achieve your goals.",
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Collaborative Projects",
      description:
        "Join mentor-led projects, get assigned specific tasks, and track your progress while learning through hands-on experience.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Project Showcase",
      description:
        "Display your projects and achievements to the community. Build your portfolio and gain recognition for your work.",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Interactive Sessions",
      description:
        "Participate in various session types including one-on-one mentoring, group workshops, technical training, and custom learning paths.",
    },
  ];

  const mentors = [
    {
      name: "Sarah Johnson",
      role: "Senior Software Engineer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      description:
        "10+ years of experience in full-stack development. Specializes in React and Node.js. Led multiple successful tech workshops.",
      skills: ["JavaScript", "React", "Node.js"],
      available: true,
    },
    {
      name: "David Chen",
      role: "Tech Lead at Google",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      description:
        "Expert in system design and scalable architectures. Passionate about mentoring junior developers and conducting technical workshops.",
      skills: ["JavaScript", "React", "Node.js"],
      available: true,
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager at Meta",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      description:
        "Experienced in product development and agile methodologies. Helps mentees develop both technical and soft skills.",
      skills: ["JavaScript", "React", "Node.js"],
      available: true,
    },
  ];

  const Logo = () => (
    <div className="flex items-center space-x-2">
      <div className="relative w-16 h-16 rounded-full overflow-clip">
        <img
          src="/skill-bridge-logo.jpeg"
          alt="SkillBridge Logo"
          className="w-16 h-16 object-contain"
        />
      </div>
      <span className="text-xl font-bold">SkillBridge</span>
    </div>
  );

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Improved Navbar */}
      <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-all duration-300 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <a href="#" className="flex items-center space-x-2">
                <Logo />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#mentors"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Mentors
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Contact
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-amber-500" />
                ) : (
                  <Moon className="h-5 w-5 text-indigo-600" />
                )}
              </button>
              <div className="flex items-center justify-center space-x-4">
                <SignedIn>
                  <UserButton />
                </SignedIn>
                <SignedOut>
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300" onClick={() => navigate('/sign-in')}>
                    Get Started
                  </button>
                </SignedOut>
              </div>
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleTheme}
                className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-amber-500" />
                ) : (
                  <Moon className="h-5 w-5 text-indigo-600" />
                )}
              </button>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-all duration-300">
            <div className="fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-900 shadow-xl animate-slide-in-right">
              <div className="flex flex-col p-6 space-y-6">
                <a
                  href="#features"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-lg"
                  onClick={toggleMenu}
                >
                  Features
                </a>
                <a
                  href="#mentors"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-lg"
                  onClick={toggleMenu}
                >
                  Mentors
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-lg"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 mt-4">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Animation */}
      <section className="pt-32 pb-20 px-4 md:px-8 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 h-screen flex flex-col md:justify-center md:items-center">
        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {/* Floating circles */}
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100 dark:bg-blue-900/20 animate-float-slow opacity-50"></div>
          <div className="absolute bottom-10 left-1/4 w-40 h-40 rounded-full bg-indigo-100 dark:bg-indigo-900/20 animate-float-medium opacity-40"></div>
          <div className="absolute top-1/3 right-10 w-80 h-80 rounded-full bg-purple-100 dark:bg-purple-900/20 animate-float opacity-30"></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] dark:opacity-[0.03]"></div>

          {/* Code-like graphics */}
          <div className="absolute bottom-20 right-20 opacity-10 dark:opacity-20">
            <svg
              width="180"
              height="120"
              viewBox="0 0 180 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30,40 L10,60 L30,80"
                stroke="currentColor"
                strokeWidth="4"
                className="text-blue-600 dark:text-blue-400"
              />
              <path
                d="M60,40 L80,60 L60,80"
                stroke="currentColor"
                strokeWidth="4"
                className="text-indigo-600 dark:text-indigo-400"
              />
              <path
                d="M40,30 L50,90"
                stroke="currentColor"
                strokeWidth="4"
                className="text-purple-600 dark:text-purple-400"
              />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Hero Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Unlock
                </span>{" "}
                Your Professional Potential
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                Connect with industry mentors, master in-demand skills, and
                build your portfolio through collaborative projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white font-medium hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
                  Join as Mentor
                </button>
                <button className="px-8 py-3 border-2 border-blue-600 dark:border-blue-500 rounded-lg text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300">
                  Join as Mentee
                </button>
              </div>

              {/* Stats or trust indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12">
                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    10K+
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Active Mentees
                  </p>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                    1K+
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Expert Mentors
                  </p>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    5K+
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Projects Completed
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Illustration/Graphic */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <div className="relative w-full max-w-lg">
                {/* Main central graphic - a stylized connection/network visual */}
                <div className="absolute inset-0 flex items-center justify-center animate-pulse-slow">
                  <div className="w-64 h-64 rounded-full bg-blue-100 dark:bg-blue-900/20"></div>
                </div>

                <div className="relative">
                  {/* Connecting dots/nodes animation */}
                  <svg
                    className="w-full h-80"
                    viewBox="0 0 400 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Central node */}
                    <circle
                      cx="200"
                      cy="150"
                      r="15"
                      fill="url(#blueGradient)"
                      className="animate-pulse"
                    />

                    {/* Surrounding nodes */}
                    <circle
                      cx="120"
                      cy="100"
                      r="10"
                      fill="#4F46E5"
                      className="animate-pulse"
                    />
                    <circle
                      cx="280"
                      cy="100"
                      r="10"
                      fill="#4F46E5"
                      className="animate-pulse"
                    />
                    <circle
                      cx="120"
                      cy="200"
                      r="10"
                      fill="#4F46E5"
                      className="animate-pulse"
                    />
                    <circle
                      cx="280"
                      cy="200"
                      r="10"
                      fill="#4F46E5"
                      className="animate-pulse"
                    />
                    <circle
                      cx="140"
                      cy="170"
                      r="8"
                      fill="#818CF8"
                      className="animate-pulse-slow"
                    />
                    <circle
                      cx="260"
                      cy="170"
                      r="8"
                      fill="#818CF8"
                      className="animate-pulse-slow"
                    />
                    <circle
                      cx="140"
                      cy="130"
                      r="8"
                      fill="#818CF8"
                      className="animate-pulse-slow"
                    />
                    <circle
                      cx="260"
                      cy="130"
                      r="8"
                      fill="#818CF8"
                      className="animate-pulse-slow"
                    />

                    {/* Connection lines */}
                    <line
                      x1="200"
                      y1="150"
                      x2="120"
                      y2="100"
                      stroke="#4F46E5"
                      strokeWidth="2"
                      strokeDasharray="4 2"
                      className="animate-dash"
                    />
                    <line
                      x1="200"
                      y1="150"
                      x2="280"
                      y2="100"
                      stroke="#4F46E5"
                      strokeWidth="2"
                      strokeDasharray="4 2"
                      className="animate-dash"
                    />
                    <line
                      x1="200"
                      y1="150"
                      x2="120"
                      y2="200"
                      stroke="#4F46E5"
                      strokeWidth="2"
                      strokeDasharray="4 2"
                      className="animate-dash"
                    />
                    <line
                      x1="200"
                      y1="150"
                      x2="280"
                      y2="200"
                      stroke="#4F46E5"
                      strokeWidth="2"
                      strokeDasharray="4 2"
                      className="animate-dash"
                    />
                    <line
                      x1="200"
                      y1="150"
                      x2="140"
                      y2="170"
                      stroke="#818CF8"
                      strokeWidth="1"
                      strokeDasharray="4 2"
                      className="animate-dash-slow"
                    />
                    <line
                      x1="200"
                      y1="150"
                      x2="260"
                      y2="170"
                      stroke="#818CF8"
                      strokeWidth="1"
                      strokeDasharray="4 2"
                      className="animate-dash-slow"
                    />
                    <line
                      x1="200"
                      y1="150"
                      x2="140"
                      y2="130"
                      stroke="#818CF8"
                      strokeWidth="1"
                      strokeDasharray="4 2"
                      className="animate-dash-slow"
                    />
                    <line
                      x1="200"
                      y1="150"
                      x2="260"
                      y2="130"
                      stroke="#818CF8"
                      strokeWidth="1"
                      strokeDasharray="4 2"
                      className="animate-dash-slow"
                    />

                    {/* Gradient definition */}
                    <defs>
                      <linearGradient
                        id="blueGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#2563EB" />
                        <stop offset="100%" stopColor="#4F46E5" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Floating skill icons */}
                  <div className="absolute top-10 left-10 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg animate-float-slow">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 19l9-5-9-5-9 5 9 5z" />
                    </svg>
                  </div>
                  <div className="absolute top-20 right-20 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg animate-float">
                    <svg
                      className="w-6 h-6 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L1 21h22L12 2zm0 4l7.53 13H4.47L12 6z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-10 left-1/4 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg animate-float-medium">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 16V8.00004C21 7.26367 20.5962 6.59276 19.9389 6.25457L13.9389 2.98111C12.9404 2.41773 11.7179 2.41773 10.7195 2.98111L4.71945 6.25457C4.06216 6.59276 3.65836 7.26367 3.65836 8.00004V16C3.65836 16.7364 4.06217 17.4073 4.71945 17.7455L10.7195 21.019C11.7179 21.5823 12.9405 21.5823 13.9389 21.019L19.9389 17.7455C20.5962 17.4073 21 16.7364 21 16Z"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 dark:from-indigo-900 dark:via-blue-900 dark:to-gray-900 text-white relative overflow-hidden transition-colors duration-300">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white dark:bg-blue-200"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white dark:bg-blue-200"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Quote icon */}
          <div className="mb-8">
            <svg
              className="w-16 h-16 mx-auto text-blue-300 dark:text-blue-400 opacity-70"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-6 dark:text-gray-100">
            SkillBridge is a forward-thinking platform committed to empowering
            individuals to master in-demand skills, enabling smooth transitions
            into thriving careers — guided by community and mentors who care.
          </p>

          {/* Optional attribution */}
          <div className="mt-8">
            <div className="h-1 w-24 bg-blue-400 dark:bg-blue-500 mx-auto mb-6"></div>
            <p className="text-lg font-medium text-blue-200 dark:text-blue-300">
              Our Mission
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-50"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-40"></div>
          <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 w-4 h-4 bg-blue-400 dark:bg-blue-500 rounded-full opacity-30"></div>
          <div className="absolute top-2/3 right-1/4 transform translate-x-1/2 w-6 h-6 bg-indigo-400 dark:bg-indigo-500 rounded-full opacity-20"></div>

          {/* Subtle connected lines in background */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,50 Q25,30 50,50 T100,50"
              stroke="currentColor"
              strokeWidth="0.1"
              fill="none"
              className="text-blue-500 dark:text-blue-400"
            />
            <path
              d="M0,30 Q35,50 70,30 T100,30"
              stroke="currentColor"
              strokeWidth="0.1"
              fill="none"
              className="text-indigo-500 dark:text-indigo-400"
            />
            <path
              d="M0,70 Q35,50 70,70 T100,70"
              stroke="currentColor"
              strokeWidth="0.1"
              fill="none"
              className="text-purple-500 dark:text-purple-400"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section header with improved styling */}
          <div className="text-center mb-20">
            <div className="inline-block mb-3">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                Platform Features
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Discover What Makes Us Different
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Our platform offers a comprehensive suite of tools and resources
              to help you connect with mentors, build skills, and grow your
              career.
            </p>
          </div>

          {/* Feature cards with improved styling and animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl p-8 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                {/* Decorative accent in the corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-bl-3xl transform translate-x-6 -translate-y-6 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300"></div>

                {/* Icon with enhanced styling */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {feature.description}
                </p>

                {/* Learn more link */}
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                >
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Feature highlight (optional) */}
          <div className="mt-20 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to accelerate your learning journey?
                </h3>
                <p className="text-blue-100">
                  Join thousands of professionals who are advancing their
                  careers with personalized mentorship.
                </p>
              </div>
              <div>
                <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:shadow-lg transition-shadow duration-300">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Section */}
      <section
        id="mentors"
        className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            className="absolute right-0 top-0 h-64 w-64 text-blue-400 dark:text-blue-600 opacity-5"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <path
              d="M40,-65.5C52.9,-56.7,65.1,-47.6,73.8,-34.8C82.6,-22,87.9,-5.5,85.6,9.9C83.2,25.2,73.3,39.3,61.3,50.5C49.4,61.7,35.4,70,20.5,74.4C5.6,78.9,-10.3,79.5,-25.1,74.8C-39.8,70.2,-53.5,60.2,-63.1,47.3C-72.8,34.3,-78.5,18.3,-79.1,2C-79.7,-14.3,-75.2,-30.9,-65.8,-43.7C-56.3,-56.5,-41.9,-65.6,-27.4,-73.5C-12.9,-81.5,1.7,-88.2,15.3,-84.9C28.9,-81.5,41.4,-68.1,54,-54.8L54,-54.8Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg
            className="absolute left-0 bottom-0 h-64 w-64 text-indigo-400 dark:text-indigo-600 opacity-5"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <path
              d="M30.9,-51.2C37.9,-41.9,40.1,-29.7,45.3,-18.4C50.5,-7.1,58.7,3.3,59.3,14.1C59.9,24.8,52.9,35.9,43.4,44.3C33.9,52.7,22,58.4,8.3,63.5C-5.3,68.5,-20.8,72.9,-34.3,69.7C-47.8,66.6,-59.4,55.8,-67.3,42.7C-75.3,29.5,-79.7,14.8,-76.9,1.6C-74,-11.5,-64,-23,-54.2,-33.3C-44.3,-43.7,-34.6,-52.9,-23.5,-55.4C-12.4,-57.8,0.1,-53.4,11.2,-50.5C22.3,-47.5,33,-51,41,-44.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-3">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                Expert Guidance
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Meet Our Top Mentors
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Learn from industry experts who are passionate about sharing their
              knowledge and helping you grow professionally.
            </p>
          </div>

          {/* Mentors grid with improved cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Card header with gradient */}
                <div className="h-24 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path d="M0,0 L100,0 L100,100 Z" fill="white" />
                    </svg>
                  </div>

                  {/* Profile image */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className="p-1 bg-white dark:bg-gray-800 rounded-full">
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-800 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Card content */}
                <div className="pt-16 px-6 pb-6">
                  <h3 className="text-xl font-bold text-center mb-1 text-gray-900 dark:text-white">
                    {mentor.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 text-center font-medium mb-4">
                    {mentor.role}
                  </p>

                  {/* Skills/expertise tags */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {mentor?.skills?.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    )) || (
                      <>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                          Web Development
                        </span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                          React
                        </span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                          UI Design
                        </span>
                      </>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                    {mentor.description}
                  </p>

                  {/* Action buttons */}
                  <div className="flex justify-center space-x-3">
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/40 transition-colors duration-200"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                      </svg>
                      Connect
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 px-4 py-2 border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          d="M8 12h8M12 8v8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      View Profile
                    </a>
                  </div>
                </div>

                {/* Availability indicator (optional) */}
                {mentor.available && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 py-1 rounded-full text-xs">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>available</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* View all mentors button */}
          <div className="mt-16 text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              View All Mentors
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Optional testimonial section */}
        <div className="max-w-5xl mx-auto mt-24 relative z-10">
          <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="flex-shrink-0">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Testimonial"
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <div>
                <svg
                  className="h-8 w-8 text-blue-400 mb-4 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 italic">
                  "Working with mentors on SkillBridge completely transformed my
                  career path. I was able to learn directly from industry
                  experts and build a portfolio that got me hired within weeks!"
                </p>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">
                    Sarah Johnson
                  </p>
                  <p className="text-blue-600 dark:text-blue-400">
                    Frontend Developer at TechCorp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Landing;
