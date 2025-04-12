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

const MentorDashboard: React.FC = () => {
  const { user } = useUser();

  // Dummy data for weekly mentoring sessions
  const weeklyMentoringData = [
    { name: "Week 1", sessions: 5 },
    { name: "Week 2", sessions: 3 },
    { name: "Week 3", sessions: 7 },
    { name: "Week 4", sessions: 4 },
  ];

  // Dummy data for active collaborations
  const activeCollabData = [
    { name: "Jan", active: 2, completed: 1 },
    { name: "Feb", active: 3, completed: 2 },
    { name: "Mar", active: 4, completed: 3 },
    { name: "Apr", active: 3, completed: 2 },
  ];

  // Dummy data for expertise distribution
  const expertiseDistributionData = [
    { name: "Web Dev", value: 60 },
    { name: "ML/AI", value: 25 },
    { name: "UI/UX", value: 10 },
    { name: "Mobile", value: 5 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Dummy active collaborations
  const activeCollaborations = [
    {
      id: "collab1",
      title: "Web App Development Sprint",
      mentee: "Alex Chen",
      status: "In Progress",
      progress: "65%",
      dueDate: "2025-04-20",
    },
    {
      id: "collab2",
      title: "ML Project Bootcamp",
      mentee: "Maya Patel",
      status: "In Progress",
      progress: "40%",
      dueDate: "2025-05-15",
    },
    {
      id: "collab3",
      title: "Portfolio Review",
      mentee: "Taylor Smith",
      status: "Completed",
      progress: "100%",
      dueDate: "2025-04-05",
    },
  ];

  // Dummy recent sessions
  const recentSessions = [
    {
      id: "session1",
      title: "React Fundamentals Workshop",
      mentee: "Alex Chen",
      date: "2025-04-10",
      duration: "60 min",
      feedback: "4.8/5",
    },
    {
      id: "session2",
      title: "Data Preprocessing Techniques",
      mentee: "Maya Patel",
      date: "2025-04-08",
      duration: "90 min",
      feedback: "4.9/5",
    },
    {
      id: "session3",
      title: "Portfolio Review Session",
      mentee: "Taylor Smith",
      date: "2025-04-05",
      duration: "45 min",
      feedback: "5/5",
    },
  ];

  // Dummy mentee projects
  const menteeProjects = [
    {
      id: "project1",
      title: "Sentiment Analysis Tool",
      mentee: "Alex Chen",
      status: "In Review",
      lastUpdated: "2 days ago",
    },
    {
      id: "project2",
      title: "E-commerce Mobile App",
      mentee: "Maya Patel",
      status: "Approved",
      lastUpdated: "1 week ago",
    },
  ];

  // Dummy upcoming sessions
  const upcomingSessions = [
    {
      id: "upcoming1",
      title: "Advanced React Patterns",
      mentee: "Alex Chen",
      date: "2025-04-15",
      time: "6:00 PM",
    },
    {
      id: "upcoming2",
      title: "Machine Learning Models Review",
      mentee: "Maya Patel",
      date: "2025-04-18",
      time: "5:30 PM",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome back, {user?.fullName}!
        </h1>
        <p className="text-gray-600 mt-2">
          Manage your mentorship activities, track mentee progress, and schedule sessions.
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Sessions */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Total Sessions</h3>
              <div className="flex items-center mt-1">
                <Clock className="h-5 w-5 text-blue-500 mr-2" />
                <span className="text-xs text-gray-500">This month</span>
              </div>
            </div>
            <TrendingUp className="h-6 w-6 text-green-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold text-gray-800">24</p>
            <p className="text-sm text-green-600 mt-1">+8 from last month</p>
          </div>
        </div>

        {/* Active Mentees */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Active Mentees</h3>
              <div className="flex items-center mt-1">
                <Users className="h-5 w-5 text-indigo-500 mr-2" />
                <span className="text-xs text-gray-500">Capacity: 5</span>
              </div>
            </div>
            <Activity className="h-6 w-6 text-indigo-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold text-gray-800">3</p>
            <p className="text-sm text-gray-500 mt-1">2 slots available</p>
          </div>
        </div>

        {/* Active Collaborations */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Active Collaborations</h3>
              <div className="flex items-center mt-1">
                <BookOpen className="h-5 w-5 text-purple-500 mr-2" />
                <span className="text-xs text-gray-500">This month</span>
              </div>
            </div>
            <TrendingUp className="h-6 w-6 text-purple-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold text-gray-800">5</p>
            <p className="text-sm text-green-600 mt-1">+2 from last month</p>
          </div>
        </div>

        {/* Mentorship Hours */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-gray-500 text-sm font-medium">Mentorship Hours</h3>
              <div className="flex items-center mt-1">
                <Clock className="h-5 w-5 text-amber-500 mr-2" />
                <span className="text-xs text-gray-500">This month</span>
              </div>
            </div>
            <Award className="h-6 w-6 text-amber-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold text-gray-800">36</p>
            <p className="text-sm text-green-600 mt-1">+12 hours this month</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Mentoring Sessions Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Weekly Mentoring Sessions</h3>
            <Calendar className="h-5 w-5 text-blue-500" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyMentoringData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sessions" fill="#3B82F6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Active Collaborations Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Collaboration Activity</h3>
            <Activity className="h-5 w-5 text-purple-500" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activeCollabData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="active" stroke="#8B5CF6" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="completed" stroke="#10B981" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Expertise Distribution */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Your Expertise Distribution</h3>
          <Award className="h-5 w-5 text-amber-500" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expertiseDistributionData}
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
                  {expertiseDistributionData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div>
            <h4 className="text-md font-medium text-gray-700 mb-3">Expertise Breakdown</h4>
            <div className="space-y-3">
              {expertiseDistributionData.map((expertise, index) => (
                <div key={expertise.name} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></div>
                    <span className="text-sm font-medium text-gray-700">{expertise.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{expertise.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Collaborations */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Active Collaborations</h3>
            <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {activeCollaborations.map((collab) => (
              <div key={collab.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-gray-800">{collab.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">Mentee: {collab.mentee}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    collab.status === "Completed" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-blue-100 text-blue-800"
                  }`}>
                    {collab.status}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: collab.progress }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">{collab.progress}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Due: {collab.dueDate}</span>
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Sessions */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Recent Sessions</h3>
            <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {recentSessions.map((session) => (
              <div key={session.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <h4 className="font-medium text-gray-800">{session.title}</h4>
                <p className="text-sm text-gray-500 mt-1">Mentee: {session.mentee}</p>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{session.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{session.duration}</span>
                  </div>
                  <span className="text-sm font-medium text-amber-600">
                    {session.feedback}
                  </span>
                </div>
                <div className="mt-3 flex justify-end">
                  <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
                    View Notes <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mentee Projects */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Mentee Projects</h3>
            <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {menteeProjects.map((project) => (
              <div key={project.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-gray-800">{project.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">Mentee: {project.mentee}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    project.status === "Approved" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-blue-100 text-blue-800"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-gray-500">Updated: {project.lastUpdated}</span>
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    Review Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Upcoming Sessions</h3>
            <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              Schedule New <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="space-y-4">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <h4 className="font-medium text-gray-800">{session.title}</h4>
                <p className="text-sm text-gray-500 mt-1">Mentee: {session.mentee}</p>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{session.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{session.time}</span>
                  </div>
                  <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                    Prepare
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;