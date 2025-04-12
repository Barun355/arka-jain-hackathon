import React, { useState } from 'react';
import { Users, Search, ChevronDown, Mail, Phone, Calendar, BookOpen, Award, Clock, Plus, X } from 'lucide-react';

type MenteeStatus = 'active' | 'onboarding' | 'inactive' | 'graduated';

interface Mentee {
  id: string;
  name: string;
  email: string;
  phone?: string;
  status: MenteeStatus;
  joinDate: string;
  lastSession: string;
  skills: string[];
  goals: string[];
  sessionsCompleted: number;
  collabsCompleted: number;
}

const MenteeManagementPage: React.FC = () => {
  const [mentees, setMentees] = useState<Mentee[]>([
    {
      id: '1',
      name: 'Alex Chen',
      email: 'alex.chen@example.com',
      phone: '+1 (555) 123-4567',
      status: 'active',
      joinDate: '2025-01-15',
      lastSession: '2025-05-20',
      skills: ['React', 'Node.js', 'TypeScript'],
      goals: ['Get a frontend developer job', 'Build portfolio projects'],
      sessionsCompleted: 12,
      collabsCompleted: 3
    },
    {
      id: '2',
      name: 'Maya Patel',
      email: 'maya.patel@example.com',
      status: 'active',
      joinDate: '2025-02-10',
      lastSession: '2025-05-18',
      skills: ['Python', 'Machine Learning', 'Data Analysis'],
      goals: ['Transition to ML engineer role', 'Publish research paper'],
      sessionsCompleted: 8,
      collabsCompleted: 2
    },
    {
      id: '3',
      name: 'Taylor Smith',
      email: 'taylor.smith@example.com',
      phone: '+1 (555) 987-6543',
      status: 'onboarding',
      joinDate: '2025-05-01',
      lastSession: '',
      skills: ['UI/UX Design', 'Figma', 'User Research'],
      goals: ['Build design portfolio', 'Learn frontend development'],
      sessionsCompleted: 0,
      collabsCompleted: 0
    },
    {
      id: '4',
      name: 'Jordan Lee',
      email: 'jordan.lee@example.com',
      status: 'graduated',
      joinDate: '2024-11-20',
      lastSession: '2025-04-15',
      skills: ['Flutter', 'Firebase', 'Mobile Development'],
      goals: ['Launch mobile app', 'Get first freelance client'],
      sessionsCompleted: 20,
      collabsCompleted: 5
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<MenteeStatus | 'all'>('all');
  const [selectedMentee, setSelectedMentee] = useState<Mentee | null>(null);
  const [showAddMentee, setShowAddMentee] = useState(false);
  const [newMentee, setNewMentee] = useState({
    name: '',
    email: '',
    phone: '',
    status: 'onboarding' as MenteeStatus
  });

  const filteredMentees = mentees.filter(mentee => {
    const matchesSearch = mentee.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         mentee.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || mentee.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: MenteeStatus) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'onboarding': return 'bg-blue-100 text-blue-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'graduated': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const addMentee = () => {
    if (!newMentee.name || !newMentee.email) return;
    
    setMentees([
      ...mentees,
      {
        ...newMentee,
        id: `mentee-${Date.now()}`,
        joinDate: new Date().toISOString().split('T')[0],
        lastSession: '',
        skills: [],
        goals: [],
        sessionsCompleted: 0,
        collabsCompleted: 0
      }
    ]);
    
    setNewMentee({
      name: '',
      email: '',
      phone: '',
      status: 'onboarding'
    });
    setShowAddMentee(false);
  };

  const updateMenteeStatus = (menteeId: string, newStatus: MenteeStatus) => {
    setMentees(mentees.map(mentee => 
      mentee.id === menteeId ? { ...mentee, status: newStatus } : mentee
    ));
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Mentee Management</h1>
          <p className="text-gray-600">Manage your current and past mentees</p>
        </div>
        <button
          onClick={() => setShowAddMentee(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Mentee
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
            placeholder="Search mentees..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="relative">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as MenteeStatus | 'all')}
            className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="onboarding">Onboarding</option>
            <option value="inactive">Inactive</option>
            <option value="graduated">Graduated</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Mentees List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentees.length === 0 ? (
          <div className="col-span-full text-center py-12 bg-white rounded-lg shadow-sm">
            <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
              <Users className="w-full h-full" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">No mentees found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {statusFilter === 'all'
                ? 'You currently have no mentees.'
                : `You have no mentees with status "${statusFilter}".`}
            </p>
            <div className="mt-6">
              <button
                onClick={() => setShowAddMentee(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="-ml-1 mr-2 h-5 w-5" />
                Add New Mentee
              </button>
            </div>
          </div>
        ) : (
          filteredMentees.map(mentee => (
            <div 
              key={mentee.id} 
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedMentee(mentee)}
            >
              <div className="p-4 border-b">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lg text-gray-800">{mentee.name}</h3>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <Mail className="h-4 w-4 mr-1" />
                      <span>{mentee.email}</span>
                    </div>
                    {mentee.phone && (
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <Phone className="h-4 w-4 mr-1" />
                        <span>{mentee.phone}</span>
                      </div>
                    )}
                  </div>
                  <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(mentee.status)}`}>
                    {mentee.status}
                  </span>
                </div>
              </div>
              
              <div className="p-4 border-b">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    <div>
                      <p className="font-medium">Joined</p>
                      <p>{new Date(mentee.joinDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <div>
                      <p className="font-medium">Last Session</p>
                      <p>{mentee.lastSession ? new Date(mentee.lastSession).toLocaleDateString() : 'Never'}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <div>
                      <p className="font-medium">Sessions</p>
                      <p>{mentee.sessionsCompleted} completed</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="h-4 w-4 mr-1" />
                    <div>
                      <p className="font-medium">Collabs</p>
                      <p>{mentee.collabsCompleted} completed</p>
                    </div>
                  </div>
                </div>
                
                {mentee.skills.length > 0 && (
                  <div className="mt-3">
                    <p className="text-sm font-medium text-gray-700">Skills</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {mentee.skills.map(skill => (
                        <span key={skill} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Mentee Detail Modal */}
      {selectedMentee && (
        <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">{selectedMentee.name}</h2>
                <button
                  onClick={() => setSelectedMentee(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Profile</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gray-400 mr-2" />
                      <span>{selectedMentee.email}</span>
                    </div>
                    {selectedMentee.phone && (
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-400 mr-2" />
                        <span>{selectedMentee.phone}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                      <span>Joined on {new Date(selectedMentee.joinDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-400 mr-2" />
                      <span>
                        {selectedMentee.lastSession 
                          ? `Last session: ${new Date(selectedMentee.lastSession).toLocaleDateString()}`
                          : 'No sessions yet'}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(selectedMentee.status)}`}>
                        {selectedMentee.status}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-medium text-gray-700 mt-6 mb-3">Goals</h3>
                  {selectedMentee.goals.length > 0 ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {selectedMentee.goals.map((goal, index) => (
                        <li key={index}>{goal}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-500">No goals specified</p>
                  )}
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Activity</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-800">Sessions Completed</p>
                      <p className="text-2xl font-bold text-blue-600">{selectedMentee.sessionsCompleted}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm text-green-800">Collabs Completed</p>
                      <p className="text-2xl font-bold text-green-600">{selectedMentee.collabsCompleted}</p>
                    </div>
                  </div>
                  
                  <h3 className="font-medium text-gray-700 mt-6 mb-3">Skills</h3>
                  {selectedMentee.skills.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {selectedMentee.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">No skills listed</p>
                  )}
                  
                  <h3 className="font-medium text-gray-700 mt-6 mb-3">Update Status</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => updateMenteeStatus(selectedMentee.id, 'active')}
                      className={`px-3 py-2 text-sm rounded ${selectedMentee.status === 'active' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                    >
                      Active
                    </button>
                    <button
                      onClick={() => updateMenteeStatus(selectedMentee.id, 'onboarding')}
                      className={`px-3 py-2 text-sm rounded ${selectedMentee.status === 'onboarding' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                    >
                      Onboarding
                    </button>
                    <button
                      onClick={() => updateMenteeStatus(selectedMentee.id, 'inactive')}
                      className={`px-3 py-2 text-sm rounded ${selectedMentee.status === 'inactive' ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                    >
                      Inactive
                    </button>
                    <button
                      onClick={() => updateMenteeStatus(selectedMentee.id, 'graduated')}
                      className={`px-3 py-2 text-sm rounded ${selectedMentee.status === 'graduated' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                    >
                      Graduated
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Mentee Modal */}
      {showAddMentee && (
        <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Add New Mentee</h2>
                <button
                  onClick={() => setShowAddMentee(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={newMentee.name}
                    onChange={(e) => setNewMentee({...newMentee, name: e.target.value})}
                    placeholder="Alex Chen"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={newMentee.email}
                    onChange={(e) => setNewMentee({...newMentee, email: e.target.value})}
                    placeholder="alex.chen@example.com"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
                  <input
                    type="tel"
                    value={newMentee.phone}
                    onChange={(e) => setNewMentee({...newMentee, phone: e.target.value})}
                    placeholder="+1 (555) 123-4567"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Initial Status</label>
                  <select
                    value={newMentee.status}
                    onChange={(e) => setNewMentee({...newMentee, status: e.target.value as MenteeStatus})}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="onboarding">Onboarding</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    onClick={() => setShowAddMentee(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={addMentee}
                    disabled={!newMentee.name || !newMentee.email}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400"
                  >
                    Add Mentee
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

export default MenteeManagementPage;