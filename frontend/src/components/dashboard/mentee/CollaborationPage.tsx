import React, { useState } from 'react';
import { Search, ChevronDown, Users, Calendar, Check, X, Award} from 'lucide-react';

type CollabStatus = 'created' | 'inprogress' | 'completed' | 'failed';
type MemberRole = 'mentor' | 'mentee';

interface Collab {
  id: string;
  title: string;
  description: string;
  mentor: {
    id: string;
    name: string;
    expertise: string[];
  };
  status: CollabStatus;
  startDate: string;
  endDate: string;
  members: {
    id: string;
    name: string;
    role: MemberRole;
    status: 'active' | 'pending';
  }[];
  tasks: {
    id: string;
    title: string;
    assignedTo: string;
    status: CollabStatus;
    dueDate: string;
  }[];
  skillsRequired: string[];
  maxParticipants: number;
}

const MenteeCollabPage: React.FC = () => {
  const [myCollabs, setMyCollabs] = useState<Collab[]>([
    {
      id: '1',
      title: 'E-commerce Web App Development',
      description: 'Build a full-stack e-commerce application with React and Node.js',
      mentor: {
        id: 'mentor1',
        name: 'Dr. Sarah Johnson',
        expertise: ['Web Development', 'JavaScript', 'React']
      },
      status: 'inprogress',
      startDate: '2025-05-01',
      endDate: '2025-06-15',
      members: [
        { id: 'mentor1', name: 'Dr. Sarah Johnson', role: 'mentor', status: 'active' },
        { id: 'mentee1', name: 'Alex Chen', role: 'mentee', status: 'active' },
        { id: 'mentee2', name: 'Maya Patel', role: 'mentee', status: 'active' }
      ],
      tasks: [
        {
          id: 't1',
          title: 'Setup project structure',
          assignedTo: 'mentee1',
          status: 'completed',
          dueDate: '2025-05-05'
        },
        {
          id: 't2',
          title: 'Design database schema',
          assignedTo: 'mentee2',
          status: 'inprogress',
          dueDate: '2025-05-10'
        },
        {
          id: 't3',
          title: 'Implement user authentication',
          assignedTo: 'mentee1',
          status: 'created',
          dueDate: '2025-05-15'
        }
      ],
      skillsRequired: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      maxParticipants: 4
    },
    {
      id: '2',
      title: 'ML Sentiment Analysis Project',
      description: 'Create a sentiment analysis model for product reviews',
      mentor: {
        id: 'mentor2',
        name: 'Prof. James Wilson',
        expertise: ['Machine Learning', 'NLP', 'Python']
      },
      status: 'created',
      startDate: '2025-05-10',
      endDate: '2025-06-30',
      members: [
        { id: 'mentor2', name: 'Prof. James Wilson', role: 'mentor', status: 'active' },
        { id: 'mentee1', name: 'Alex Chen', role: 'mentee', status: 'active' }
      ],
      tasks: [
        {
          id: 't4',
          title: 'Research NLP techniques',
          assignedTo: 'mentee1',
          status: 'created',
          dueDate: '2025-05-15'
        }
      ],
      skillsRequired: ['Python', 'Machine Learning', 'NLP'],
      maxParticipants: 3
    }
  ]);

  const [availableCollabs, setAvailableCollabs] = useState<Collab[]>([
    {
      id: '3',
      title: 'Portfolio Website Workshop',
      description: 'Collaborative workshop to build portfolio websites',
      mentor: {
        id: 'mentor3',
        name: 'Emily Rodriguez',
        expertise: ['Web Design', 'UI/UX', 'Frontend Development']
      },
      status: 'created',
      startDate: '2025-05-15',
      endDate: '2025-06-01',
      members: [
        { id: 'mentor3', name: 'Emily Rodriguez', role: 'mentor', status: 'active' },
        { id: 'mentee3', name: 'Taylor Smith', role: 'mentee', status: 'active' }
      ],
      tasks: [],
      skillsRequired: ['HTML', 'CSS', 'JavaScript'],
      maxParticipants: 5
    },
    {
      id: '4',
      title: 'Mobile App Development Sprint',
      description: '2-week intensive mobile app development project',
      mentor: {
        id: 'mentor4',
        name: 'Michael Brown',
        expertise: ['Mobile Development', 'Flutter', 'Firebase']
      },
      status: 'created',
      startDate: '2025-06-01',
      endDate: '2025-06-15',
      members: [
        { id: 'mentor4', name: 'Michael Brown', role: 'mentor', status: 'active' }
      ],
      tasks: [],
      skillsRequired: ['Dart', 'Flutter', 'Firebase'],
      maxParticipants: 4
    }
  ]);

  const [activeTab, setActiveTab] = useState<'my-collabs' | 'available-collabs'>('my-collabs');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<CollabStatus | 'all'>('all');
  const [selectedCollab, setSelectedCollab] = useState<Collab | null>(null);
  const [showJoinRequest, setShowJoinRequest] = useState(false);
  const [joinMessage, setJoinMessage] = useState('');

  // Current mentee ID (would come from auth in real app)
  const currentMenteeId = 'mentee1';

  const filteredMyCollabs = myCollabs.filter(collab => {
    const matchesSearch = collab.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         collab.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || collab.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const filteredAvailableCollabs = availableCollabs.filter(collab => {
    const matchesSearch = collab.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         collab.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || collab.status === statusFilter;
    const notAlreadyMember = !collab.members.some(m => m.id === currentMenteeId);
    return matchesSearch && matchesStatus && notAlreadyMember;
  });

  const joinCollab = (collabId: string) => {
    if (!joinMessage) return;
    
    // In a real app, this would send a request to the mentor
    // Here we simulate adding the mentee to the collab
    setAvailableCollabs(availableCollabs.map(collab => 
      collab.id === collabId 
        ? { 
            ...collab, 
            members: [
              ...collab.members, 
              { 
                id: currentMenteeId, 
                name: 'Alex Chen', // Would come from user data
                role: 'mentee' as MemberRole, 
                status: 'pending' 
              }
            ] 
          } 
        : collab
    ));
    
    setShowJoinRequest(false);
    setJoinMessage('');
    setSelectedCollab(null);
  };

  const leaveCollab = (collabId: string) => {
    setMyCollabs(myCollabs.filter(collab => collab.id !== collabId));
  };

  const completeTask = (collabId: string, taskId: string) => {
    setMyCollabs(myCollabs.map(collab => 
      collab.id === collabId 
        ? { 
            ...collab, 
            tasks: collab.tasks.map(task => 
              task.id === taskId 
                ? { ...task, status: 'completed' } 
                : task
            ) 
          } 
        : collab
    ));
  };

  const getStatusColor = (status: CollabStatus) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'inprogress': return 'bg-blue-100 text-blue-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Collaboration Hub</h1>
          <p className="text-gray-600">Manage your collaborations and discover new opportunities</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b mb-6">
        <button
          onClick={() => setActiveTab('my-collabs')}
          className={`px-4 py-2 font-medium ${activeTab === 'my-collabs' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
          My Collaborations
        </button>
        <button
          onClick={() => setActiveTab('available-collabs')}
          className={`px-4 py-2 font-medium ${activeTab === 'available-collabs' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
        >
          Available Collaborations
        </button>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search collaborations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="relative">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as CollabStatus | 'all')}
            className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Statuses</option>
            <option value="created">Created</option>
            <option value="inprogress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Collabs List */}
      {activeTab === 'my-collabs' && (
        <div className="space-y-4">
          {filteredMyCollabs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
                <Users className="w-full h-full" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">No collaborations found</h3>
              <p className="mt-1 text-sm text-gray-500">
                {statusFilter === 'all'
                  ? "You're not currently part of any collaborations."
                  : `You have no collaborations with status "${statusFilter}".`}
              </p>
              <div className="mt-6">
                <button
                  onClick={() => setActiveTab('available-collabs')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Browse Available Collaborations
                </button>
              </div>
            </div>
          ) : (
            filteredMyCollabs.map(collab => (
              <div key={collab.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 border-b">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg text-gray-800">{collab.title}</h3>
                      <p className="text-gray-600 mt-1">{collab.description}</p>
                    </div>
                    <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(collab.status)}`}>
                      {collab.status}
                    </span>
                  </div>
                  
                  <div className="mt-3 flex items-center text-sm text-gray-500">
                    <span>Mentor: {collab.mentor.name}</span>
                    <span className="mx-2">•</span>
                    <span>Expertise: {collab.mentor.expertise.join(', ')}</span>
                  </div>
                  
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{new Date(collab.startDate).toLocaleDateString()} - {new Date(collab.endDate).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="p-4 border-b">
                  <h4 className="font-medium text-gray-700 mb-3">Your Tasks</h4>
                  {collab.tasks.filter(task => task.assignedTo === currentMenteeId).length === 0 ? (
                    <p className="text-sm text-gray-500">No tasks assigned to you yet</p>
                  ) : (
                    <div className="space-y-2">
                      {collab.tasks.filter(task => task.assignedTo === currentMenteeId).map(task => (
                        <div key={task.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <div>
                            <p className="font-medium">{task.title}</p>
                            <p className="text-sm text-gray-500">
                              Due: {new Date(task.dueDate).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(task.status)}`}>
                              {task.status}
                            </span>
                            {task.status !== 'completed' && (
                              <button
                                onClick={() => completeTask(collab.id, task.id)}
                                className="p-1 text-green-600 hover:bg-green-50 rounded"
                                title="Mark Complete"
                              >
                                <Check className="h-4 w-4" />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="p-4 flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    <span>
                      {collab.members.filter(m => m.role === 'mentee').length} / {collab.maxParticipants} mentees
                    </span>
                  </div>
                  <button
                    onClick={() => leaveCollab(collab.id)}
                    className="px-3 py-1 text-sm border border-red-500 text-red-500 rounded hover:bg-red-50"
                  >
                    Leave Collaboration
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
      
      {activeTab === 'available-collabs' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAvailableCollabs.length === 0 ? (
            <div className="col-span-full text-center py-12 bg-white rounded-lg shadow-sm">
              <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
                <Award className="w-full h-full" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">No collaborations available</h3>
              <p className="mt-1 text-sm text-gray-500">
                {statusFilter === 'all'
                  ? 'There are currently no available collaborations matching your skills.'
                  : `There are no available collaborations with status "${statusFilter}".`}
              </p>
            </div>
          ) : (
            filteredAvailableCollabs.map(collab => (
              <div key={collab.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-4 border-b">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg text-gray-800">{collab.title}</h3>
                      <p className="text-gray-600 mt-1 line-clamp-2">{collab.description}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(collab.status)}`}>
                      {collab.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 border-b">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>Mentor: {collab.mentor.name}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{new Date(collab.startDate).toLocaleDateString()} - {new Date(collab.endDate).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-medium text-gray-700 mb-2">Skills Required</h4>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {collab.skillsRequired.map(skill => (
                      <span key={skill} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      <span>
                        {collab.members.filter(m => m.role === 'mentee').length} / {collab.maxParticipants} mentees
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedCollab(collab);
                        setShowJoinRequest(true);
                      }}
                      className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                      Join
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Join Request Modal */}
      {showJoinRequest && selectedCollab && (
        <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Join Collaboration</h2>
                <button
                  onClick={() => {
                    setShowJoinRequest(false);
                    setSelectedCollab(null);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">{selectedCollab.title}</h3>
                  <p className="text-gray-600 mt-1">{selectedCollab.description}</p>
                </div>
                
                <div className="mt-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message to Mentor (Optional)
                  </label>
                  <textarea
                    placeholder="Explain why you'd like to join this collaboration..."
                    value={joinMessage}
                    onChange={(e) => setJoinMessage(e.target.value)}
                    className="w-full p-2 border rounded-md text-sm"
                    rows={3}
                  />
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    onClick={() => {
                      setShowJoinRequest(false);
                      setSelectedCollab(null);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => joinCollab(selectedCollab.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Send Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenteeCollabPage;