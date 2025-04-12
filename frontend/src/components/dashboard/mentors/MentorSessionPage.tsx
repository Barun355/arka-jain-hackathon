import React, { useState } from 'react';
import { Calendar, Clock, Users, Plus, List, Grid, Search, ChevronDown, Check, Eye } from 'lucide-react';
import CreateSession from './CreateSessions';

type Session = {
  id: string;
  title: string;
  description: string;
  type: 'one-to-one' | 'one-to-many' | 'workshop' | 'tech' | 'general' | 'custom';
  date: string;
  startTime: string;
  duration: number;
  mentees: { id: string; name: string }[];
  status: 'upcoming' | 'completed' | 'canceled';
  category: 'category-1' | 'category-2' | 'category-3';
  customTypeDescription?: string;
  recurring?: boolean;
  recurringDays?: string[];
};

const MentorSessionPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [showCreateSession, setShowCreateSession] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  // Dummy sessions data with more realistic examples
  const [sessions, setSessions] = useState<Session[]>([
    {
      id: '1',
      title: 'Advanced React Patterns Workshop',
      description: 'Deep dive into advanced React concepts and patterns',
      type: 'workshop',
      date: '2025-05-15',
      startTime: '14:00',
      duration: 90,
      mentees: [
        { id: 'mentee1', name: 'Alex Chen' },
        { id: 'mentee2', name: 'Maya Patel' },
      ],
      status: 'upcoming',
      category: 'category-2',
      recurring: true,
      recurringDays: ['Wednesday']
    },
    {
      id: '2',
      title: 'Career Guidance Session',
      description: 'One-on-one career advice and planning',
      type: 'one-to-one',
      date: '2025-05-10',
      startTime: '16:30',
      duration: 45,
      mentees: [{ id: 'mentee3', name: 'Taylor Smith' }],
      status: 'upcoming',
      category: 'category-1'
    },
    {
      id: '3',
      title: 'ML Model Deployment Techniques',
      description: 'Technical session on deploying machine learning models',
      type: 'tech',
      date: '2025-04-28',
      startTime: '10:00',
      duration: 120,
      mentees: [
        { id: 'mentee1', name: 'Alex Chen' },
        { id: 'mentee4', name: 'Jordan Lee' },
      ],
      status: 'completed',
      category: 'category-2'
    },
    {
      id: '4',
      title: 'Portfolio Review Roundtable',
      description: 'Group review of technical portfolios',
      type: 'general',
      date: '2025-04-20',
      startTime: '13:00',
      duration: 60,
      mentees: [
        { id: 'mentee2', name: 'Maya Patel' },
        { id: 'mentee3', name: 'Taylor Smith' },
        { id: 'mentee4', name: 'Jordan Lee' },
      ],
      status: 'completed',
      category: 'category-2'
    },
    {
      id: '5',
      title: 'Custom Web Security Workshop',
      description: 'Specialized session on web application security',
      type: 'custom',
      date: '2025-05-22',
      startTime: '11:00',
      duration: 90,
      mentees: [
        { id: 'mentee1', name: 'Alex Chen' },
        { id: 'mentee4', name: 'Jordan Lee' },
      ],
      status: 'upcoming',
      category: 'category-3',
      customTypeDescription: 'Security-focused web development'
    }
  ]);

  // Dummy mentees data
  const [availableMentees] = useState([
    { id: 'mentee1', name: 'Alex Chen', skills: ['React', 'Node.js'] },
    { id: 'mentee2', name: 'Maya Patel', skills: ['Python', 'ML'] },
    { id: 'mentee3', name: 'Taylor Smith', skills: ['UI/UX', 'Figma'] },
    { id: 'mentee4', name: 'Jordan Lee', skills: ['Flutter', 'Firebase'] },
  ]);

  // Handle creating a new session
  const handleCreateSession = (newSessionData: any) => {
    const sessionToAdd: Session = {
      id: Math.random().toString(36).substr(2, 9),
      title: newSessionData.title,
      description: newSessionData.description,
      type: newSessionData.type,
      date: newSessionData.date,
      startTime: newSessionData.startTime,
      duration: newSessionData.duration,
      mentees: newSessionData.mentees.map((id: string) => {
        const mentee = availableMentees.find(m => m.id === id);
        return { id, name: mentee?.name || 'Unknown' };
      }),
      status: 'upcoming',
      category: newSessionData.category,
      customTypeDescription: newSessionData.customTypeDescription,
      recurring: newSessionData.recurring,
      recurringDays: newSessionData.recurringDays
    };
    setSessions([...sessions, sessionToAdd]);
    setShowCreateSession(false);
  };

  // Filter sessions based on active tab and filters
  const filteredSessions = sessions.filter(session => {
    const matchesTab = activeTab === 'upcoming' 
      ? new Date(`${session.date}T${session.startTime}`) >= new Date()
      : new Date(`${session.date}T${session.startTime}`) < new Date();
    
    const matchesSearch = session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.mentees.some(mentee => mentee.name.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || session.category === selectedCategory;
    const matchesType = selectedType === 'all' || session.type === selectedType;
    
    return matchesTab && matchesSearch && matchesCategory && matchesType;
  });

  // Session actions
  const cancelSession = (sessionId: string) => {
    setSessions(sessions.map(session => 
      session.id === sessionId ? { ...session, status: 'canceled' } : session
    ));
  };

  const completeSession = (sessionId: string) => {
    setSessions(sessions.map(session => 
      session.id === sessionId ? { ...session, status: 'completed' } : session
    ));
  };

//   const rescheduleSession = (sessionId: string, newDate: string, newTime: string) => {
//     setSessions(sessions.map(session => 
//       session.id === sessionId 
//         ? { ...session, date: newDate, startTime: newTime } 
//         : session
//     ));
//   };

  // Render session card for grid view
  const renderSessionCard = (session: Session) => (
    <div key={session.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-lg text-gray-800">{session.title}</h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">{session.description}</p>
          <div className="flex items-center mt-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{new Date(session.date).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{session.startTime}</span>
            <span className="mx-2">•</span>
            <span>{session.duration} min</span>
          </div>
        </div>
        <span className={`px-2 py-1 text-xs rounded-full ${
          session.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
          session.status === 'completed' ? 'bg-green-100 text-green-800' :
          'bg-red-100 text-red-800'
        }`}>
          {session.status}
        </span>
      </div>
      
      <div className="mt-3">
        <div className="flex items-center text-sm">
          <Users className="h-4 w-4 mr-1 text-gray-500" />
          <span className="text-gray-600">
            {session.mentees.length} mentee{session.mentees.length !== 1 ? 's' : ''}
          </span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-gray-600 capitalize">{session.type.replace('-', ' ')}</span>
          <span className="mx-2 text-gray-400">•</span>
          <span className="text-gray-600">
            {session.category === 'category-1' ? 'Category 1' :
             session.category === 'category-2' ? 'Category 2' : 'Category 3'}
          </span>
        </div>
        
        {session.mentees.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {session.mentees.map(mentee => (
              <span 
                key={mentee.id}
                className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700"
              >
                {mentee.name}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {session.recurring && (
        <div className="mt-2 flex items-center text-xs text-blue-600">
          <span className="mr-1">🔁 Repeats weekly on {session.recurringDays?.join(', ')}</span>
        </div>
      )}
      
      <div className="mt-4 flex justify-end space-x-2">
        {session.status === 'upcoming' && (
          <>
            <button
              onClick={() => cancelSession(session.id)}
              className="px-3 py-1 text-sm border border-red-500 text-red-500 rounded hover:bg-red-50"
            >
              Cancel
            </button>
            <button
              onClick={() => completeSession(session.id)}
              className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
            >
              Complete
            </button>
          </>
        )}
        <button className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50">
          Details
        </button>
      </div>
    </div>
  );

  // Render session item for list view
  const renderSessionListItem = (session: Session) => (
    <div key={session.id} className="border-b py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-800 truncate">{session.title}</h3>
          <p className="text-sm text-gray-500 mt-1 truncate">{session.description}</p>
          <div className="flex items-center mt-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{new Date(session.date).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{session.startTime}</span>
            <span className="mx-2">•</span>
            <Users className="h-4 w-4 mr-1" />
            <span>{session.mentees.length} mentee{session.mentees.length !== 1 ? 's' : ''}</span>
            <span className="mx-2">•</span>
            <span className="capitalize">{session.type.replace('-', ' ')}</span>
          </div>
        </div>
        <div className="flex items-center space-x-4 ml-4">
          <span className={`px-2 py-1 text-xs rounded-full min-w-[80px] text-center ${
            session.status === 'upcoming' ? 'bg-blue-100 text-blue-800' :
            session.status === 'completed' ? 'bg-green-100 text-green-800' :
            'bg-red-100 text-red-800'
          }`}>
            {session.status}
          </span>
          <div className="flex space-x-2">
            {session.status === 'upcoming' && (
              <>
                <button
                  onClick={() => cancelSession(session.id)}
                  className="p-1 text-red-500 hover:bg-red-50 rounded"
                  title="Cancel"
                >
                  <X className="h-4 w-4" />
                </button>
                <button
                  onClick={() => completeSession(session.id)}
                  className="p-1 text-green-600 hover:bg-green-50 rounded"
                  title="Complete"
                >
                  <Check className="h-4 w-4" />
                </button>
              </>
            )}
            <button className="p-1 text-gray-600 hover:bg-gray-50 rounded" title="Details">
              <Eye className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Helper component for X icon
  const X: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Session Management</h1>
          <p className="text-gray-600">Manage your mentoring sessions and workshops</p>
        </div>
        <button
          onClick={() => setShowCreateSession(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          Create Session
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b mb-6">
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`px-4 py-2 font-medium ${activeTab === 'upcoming' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Upcoming Sessions
        </button>
        <button
          onClick={() => setActiveTab('past')}
          className={`px-4 py-2 font-medium ${activeTab === 'past' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Past Sessions
        </button>
      </div>

      {/* Filters and Search */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search sessions, descriptions, or mentees..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="flex space-x-2">
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Categories</option>
              <option value="category-1">Category 1</option>
              <option value="category-2">Category 2</option>
              <option value="category-3">Category 3</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Types</option>
              <option value="one-to-one">One to One</option>
              <option value="one-to-many">One to Many</option>
              <option value="workshop">Workshop</option>
              <option value="tech">Tech</option>
              <option value="general">General</option>
              <option value="custom">Custom</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          
          <button
            onClick={() => setViewMode(viewMode === 'list' ? 'grid' : 'list')}
            className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
            title={viewMode === 'list' ? 'Grid view' : 'List view'}
          >
            {viewMode === 'list' ? <Grid className="h-5 w-5" /> : <List className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Sessions List */}
      {filteredSessions.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
            <Calendar className="w-full h-full" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">No sessions found</h3>
          <p className="mt-1 text-sm text-gray-500">
            {activeTab === 'upcoming'
              ? 'You have no upcoming sessions matching your criteria.'
              : 'You have no past sessions matching your criteria.'}
          </p>
          <div className="mt-6">
            <button
              onClick={() => setShowCreateSession(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="-ml-1 mr-2 h-5 w-5" />
              Create New Session
            </button>
          </div>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSessions.map(renderSessionCard)}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm divide-y">
          {filteredSessions.map(renderSessionListItem)}
        </div>
      )}

      {/* Create Session Modal */}
      {showCreateSession && (
        <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Create New Session</h2>
                <button
                  onClick={() => setShowCreateSession(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <CreateSession
                availableMentees={availableMentees} 
                onCreate={handleCreateSession} 
                onCancel={() => setShowCreateSession(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorSessionPage;