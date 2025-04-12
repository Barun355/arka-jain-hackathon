import React from "react";
import {
  Activity,
  Calendar,
  Users,
  Award,
  TrendingUp,
  BookOpen,
  Clock,
  ChevronRight,
} from "lucide-react";

// For analytics charts
import {
  BarChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Bar,
} from "recharts";
import { useUser } from "@clerk/clerk-react";

const MenteeDashboard: React.FC = () => {

  const { user } = useUser()
  // Dummy data for weekly session attendance
  const weeklySessionData = [
    { name: "Week 1", sessions: 3 },
    { name: "Week 2", sessions: 2 },
    { name: "Week 3", sessions: 4 },
    { name: "Week 4", sessions: 1 },
  ];

  // Dummy data for monthly collaborations
  const monthlyCollabData = [
    { name: "Jan", collaborations: 1 },
    { name: "Feb", collaborations: 2 },
    { name: "Mar", collaborations: 3 },
    { name: "Apr", collaborations: 2 },
  ];

  // Dummy data for skill distribution
  const skillDistributionData = [
    { name: "Web Dev", value: 40 },
    { name: "ML/AI", value: 30 },
    { name: "UI/UX", value: 20 },
    { name: "Mobile", value: 10 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Dummy recent collaborations
  const recentCollaborations = [
    {
      id: "collab1",
      title: "Web App Development Sprint",
      mentor: "James Wilson",
      status: "In Progress",
      dueDate: "2025-04-20",
    },
    {
      id: "collab2",
      title: "ML Project Bootcamp",
      mentor: "Dr. Sarah Johnson",
      status: "Completed",
      dueDate: "2025-04-05",
    },
  ];

  // Dummy recent sessions
  const recentSessions = [
    {
      id: "session1",
      title: "React Fundamentals Workshop",
      mentor: "James Wilson",
      date: "2025-04-10",
      duration: "60 min",
    },
    {
      id: "session2",
      title: "Data Preprocessing Techniques",
      mentor: "Dr. Sarah Johnson",
      date: "2025-04-08",
      duration: "90 min",
    },
    {
      id: "session3",
      title: "Portfolio Review Session",
      mentor: "Emily Rodriguez",
      date: "2025-04-05",
      duration: "45 min",
    },
  ];

  // Dummy top project showcases
  const topProjects = [
    {
      id: "project1",
      title: "Sentiment Analysis Tool",
      creator: "Alex Chen",
      likes: 24,
      views: 156,
    },
    {
      id: "project2",
      title: "E-commerce Mobile App",
      creator: "Maya Patel",
      likes: 18,
      views: 120,
    },
  ];

  // Dummy upcoming sessions
  const upcomingSessions = [
    {
      id: "upcoming1",
      title: "Advanced React Patterns",
      mentor: "James Wilson",
      date: "2025-04-15",
      time: "6:00 PM",
    },
    {
      id: "upcoming2",
      title: "Machine Learning Models Review",
      mentor: "Dr. Sarah Johnson",
      date: "2025-04-18",
      time: "5:30 PM",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome back, {user?.fullName}!
        </h1>
        <p className="text-gray-600 mt-1">
          Track your progress, manage your collaborations, and discover new
          opportunities.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-gray-500">
              Sessions Attended
            </h2>
            <Calendar className="w-5 h-5 text-indigo-500" />
          </div>
          <div className="mt-2">
            <span className="text-3xl font-bold text-gray-800">10</span>
            <span className="ml-2 text-sm text-green-500">
              +20% from last month
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-gray-500">
              Active Collaborations
            </h2>
            <Users className="w-5 h-5 text-purple-500" />
          </div>
          <div className="mt-2">
            <span className="text-3xl font-bold text-gray-800">2</span>
            <span className="ml-2 text-sm text-gray-500">of 3 total</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-gray-500">
              Skills Learned
            </h2>
            <Award className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="mt-2">
            <span className="text-3xl font-bold text-gray-800">12</span>
            <span className="ml-2 text-sm text-green-500">+3 this month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-gray-500">
              Mentorship Hours
            </h2>
            <Clock className="w-5 h-5 text-blue-500" />
          </div>
          <div className="mt-2">
            <span className="text-3xl font-bold text-gray-800">24</span>
            <span className="ml-2 text-sm text-green-500">
              +5 hours this month
            </span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Sessions Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Weekly Session Attendance
            </h2>
            <Activity className="w-5 h-5 text-gray-500" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={weeklySessionData as any}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sessions" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Collaborations Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Monthly Collaborations
            </h2>
            <TrendingUp className="w-5 h-5 text-gray-500" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={monthlyCollabData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="collaborations"
                  stroke="#82ca9d"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Skills Distribution */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Skills Distribution
          </h2>
          <BarChart className="w-5 h-5 text-gray-500" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={skillDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {skillDistributionData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-md font-medium text-gray-700 mb-4">
              Your Top Skills
            </h3>
            <div className="space-y-4">
              {skillDistributionData.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.value}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${skill.value}%`,
                          backgroundColor: COLORS[index % COLORS.length],
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Collaborations */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Collaborations
            </h2>
            <Users className="w-5 h-5 text-gray-500" />
          </div>
          <div className="divide-y divide-gray-200">
            {recentCollaborations.map((collab) => (
              <div key={collab.id} className="py-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-md font-medium text-gray-800">
                      {collab.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Mentor: {collab.mentor}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      collab.status === "In Progress"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {collab.status}
                  </span>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    Due: {collab.dueDate}
                  </span>
                  <a
                    href={`/collaboration/${collab.id}`}
                    className="text-xs text-indigo-600 hover:text-indigo-800 flex items-center"
                  >
                    View Details <ChevronRight className="ml-1 w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <a
              href="/collaborations"
              className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center justify-center"
            >
              View All Collaborations <ChevronRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Recent Sessions */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Sessions
            </h2>
            <Calendar className="w-5 h-5 text-gray-500" />
          </div>
          <div className="divide-y divide-gray-200">
            {recentSessions.map((session) => (
              <div key={session.id} className="py-3">
                <h3 className="text-md font-medium text-gray-800">
                  {session.title}
                </h3>
                <p className="text-sm text-gray-500">
                  Mentor: {session.mentor}
                </p>
                <div className="mt-2 flex justify-between items-center">
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="mr-1 w-3 h-3" /> {session.date}
                    <span className="mx-2">•</span>
                    <Clock className="mr-1 w-3 h-3" /> {session.duration}
                  </div>
                  <a
                    href={`/session/${session.id}`}
                    className="text-xs text-indigo-600 hover:text-indigo-800 flex items-center"
                  >
                    View Notes <ChevronRight className="ml-1 w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <a
              href="/sessions"
              className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center justify-center"
            >
              View All Sessions <ChevronRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Project Showcases */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Top Project Showcases
            </h2>
            <Award className="w-5 h-5 text-gray-500" />
          </div>
          <div className="divide-y divide-gray-200">
            {topProjects.map((project) => (
              <div key={project.id} className="py-3">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-md font-medium text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      By: {project.creator}
                    </p>
                  </div>
                  <div className="flex flex-col items-end text-xs text-gray-500">
                    <div className="flex items-center">
                      <span className="mr-2">👍 {project.likes}</span>
                      <span>👁️ {project.views}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex justify-end">
                  <a
                    href={`/showcase/${project.id}`}
                    className="text-xs text-indigo-600 hover:text-indigo-800 flex items-center"
                  >
                    View Project <ChevronRight className="ml-1 w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <a
              href="/showcase"
              className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center justify-center"
            >
              Explore All Projects <ChevronRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Upcoming Sessions
            </h2>
            <BookOpen className="w-5 h-5 text-gray-500" />
          </div>
          <div className="divide-y divide-gray-200">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="py-3">
                <h3 className="text-md font-medium text-gray-800">
                  {session.title}
                </h3>
                <p className="text-sm text-gray-500">
                  Mentor: {session.mentor}
                </p>
                <div className="mt-2 flex justify-between items-center">
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="mr-1 w-3 h-3" /> {session.date}
                    <span className="mx-2">•</span>
                    <Clock className="mr-1 w-3 h-3" /> {session.time}
                  </div>
                  <a
                    href={`/session/${session.id}/join`}
                    className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-2 py-1 rounded"
                  >
                    Join Session
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <a
              href="/sessions/schedule"
              className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center justify-center"
            >
              Schedule More Sessions <ChevronRight className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeDashboard;
