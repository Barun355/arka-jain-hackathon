import React, { useState } from 'react';
import { Plus, Search, ChevronDown, Users, Calendar, X, GitBranch } from 'lucide-react';

type CollabStatus = 'created' | 'inprogress' | 'completed' | 'failed';

interface Collab {
  id: string;
  title: string;
  description: string;
  status: CollabStatus;
  startDate: string;
  endDate: string;
  mentees: { id: string; name: string; avatar?: string }[];
  tasks: {
    id: string;
    title: string;
    assignedTo: string;
    status: CollabStatus;
    dueDate: string;
  }[];
  submissions: {
    id: string;
    taskId: string;
    githubLink: string;
    submittedAt: string;
    status: 'pending' | 'approved' | 'rejected';
    feedback?: string;
  }[];
}

const MentorCollabPage: React.FC = () => {
  const [collabs, setCollabs] = useState<Collab[]>([
    {
      id: '1',
      title: 'E-commerce Web App',
      description: 'Build a full-stack e-commerce application with React and Node.js',
      status: 'inprogress',
      startDate: '2025-05-01',
      endDate: '2025-06-15',
      mentees: [
        { id: 'm1', name: 'Alex Chen' },
        { id: 'm2', name: 'Maya Patel' }
      ],
      tasks: [
        {
          id: 't1',
          title: 'Setup project structure',
          assignedTo: 'm1',
          status: 'completed',
          dueDate: '2025-05-05'
        },
        {
          id: 't2',
          title: 'Design database schema',
          assignedTo: 'm2',
          status: 'inprogress',
          dueDate: '2025-05-10'
        },
        {
          id: 't3',
          title: 'Implement user authentication',
          assignedTo: 'm1',
          status: 'created',
          dueDate: '2025-05-15'
        }
      ],
      submissions: [
        {
          id: 's1',
          taskId: 't1',
          githubLink: 'https://github.com/alexchen/ecom-setup',
          submittedAt: '2025-05-04T14:30:00',
          status: 'approved',
          feedback: 'Good job setting up the initial structure!'
        }
      ]
    },
    {
      id: '2',
      title: 'ML Sentiment Analysis',
      description: 'Create a sentiment analysis model for product reviews',
      status: 'created',
      startDate: '2025-05-10',
      endDate: '2025-06-30',
      mentees: [
        { id: 'm3', name: 'Taylor Smith' }
      ],
      tasks: [
        {
          id: 't4',
          title: 'Research NLP techniques',
          assignedTo: 'm3',
          status: 'created',
          dueDate: '2025-05-15'
        }
      ],
      submissions: []
    },
    {
      id: '3',
      title: 'Portfolio Website',
      description: 'Help mentees build their professional portfolio websites',
      status: 'completed',
      startDate: '2025-04-01',
      endDate: '2025-04-25',
      mentees: [
        { id: 'm2', name: 'Maya Patel' },
        { id: 'm4', name: 'Jordan Lee' }
      ],
      tasks: [
        {
          id: 't5',
          title: 'Design mockups',
          assignedTo: 'm2',
          status: 'completed',
          dueDate: '2025-04-05'
        },
        {
          id: 't6',
          title: 'Implement responsive layout',
          assignedTo: 'm4',
          status: 'completed',
          dueDate: '2025-04-15'
        }
      ],
      submissions: [
        {
          id: 's2',
          taskId: 't5',
          githubLink: 'https://github.com/mayap/portfolio-design',
          submittedAt: '2025-04-04T10:15:00',
          status: 'approved'
        },
        {
          id: 's3',
          taskId: 't6',
          githubLink: 'https://github.com/jordanlee/portfolio-dev',
          submittedAt: '2025-04-14T16:45:00',
          status: 'approved',
          feedback: 'Excellent implementation!'
        }
      ]
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<CollabStatus | 'all'>('all');
  const [selectedCollab, setSelectedCollab] = useState<Collab | null>(null);
  const [showCreateCollab, setShowCreateCollab] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    assignedTo: '',
    dueDate: ''
  });
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [feedback, setFeedback] = useState('');

  const filteredCollabs = collabs.filter(collab => {
    const matchesSearch = collab.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         collab.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || collab.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (collabId: string, newStatus: CollabStatus) => {
    setCollabs(collabs.map(collab => 
      collab.id === collabId ? { ...collab, status: newStatus } : collab
    ));
  };

  const approveSubmission = (submissionId: string) => {
    setCollabs(collabs.map(collab => ({
      ...collab,
      submissions: collab.submissions.map(sub => 
        sub.id === submissionId ? { ...sub, status: 'approved', feedback } : sub
      ),
      tasks: collab.tasks.map(task => {
        const sub = collab.submissions.find(s => s.id === submissionId);
        if (sub && task.id === sub.taskId) {
          return { ...task, status: 'completed' };
        }
        return task;
      })
    })));
    setFeedback('');
  };

  const rejectSubmission = (submissionId: string) => {
    setCollabs(collabs.map(collab => ({
      ...collab,
      submissions: collab.submissions.map(sub => 
        sub.id === submissionId ? { ...sub, status: 'rejected', feedback } : sub
      )
    })));
    setFeedback('');
  };

  const addTask = (collabId: string) => {
    if (!newTask.title || !newTask.assignedTo || !newTask.dueDate) return;
    
    setCollabs(collabs.map(collab => {
      if (collab.id === collabId) {
        return {
          ...collab,
          tasks: [
            ...collab.tasks,
            {
              id: `t${Date.now()}`,
              title: newTask.title,
              assignedTo: newTask.assignedTo,
              status: 'created',
              dueDate: newTask.dueDate
            }
          ]
        };
      }
      return collab;
    }));
    
    setNewTask({ title: '', assignedTo: '', dueDate: '' });
    setShowTaskForm(false);
  };

  const createNewCollab = (newCollab: Omit<Collab, 'id' | 'tasks' | 'submissions'>) => {
    setCollabs([
      ...collabs,
      {
        ...newCollab,
        id: `collab-${Date.now()}`,
        tasks: [],
        submissions: []
      }
    ]);
    setShowCreateCollab(false);
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
          <h1 className="text-2xl font-bold text-gray-800">Collaboration Management</h1>
          <p className="text-gray-600">Manage your ongoing collaborations with mentees</p>
        </div>
        <button
          onClick={() => setShowCreateCollab(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          New Collaboration
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
      <div className="space-y-4">
        {filteredCollabs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
              <Users className="w-full h-full" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">No collaborations found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {statusFilter === 'all'
                ? 'You currently have no collaborations.'
                : `You have no collaborations with status "${statusFilter}".`}
            </p>
            <div className="mt-6">
              <button
                onClick={() => setShowCreateCollab(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="-ml-1 mr-2 h-5 w-5" />
                Create New Collaboration
              </button>
            </div>
          </div>
        ) : (
          filteredCollabs.map(collab => (
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
                
                <div className="mt-3 flex flex-wrap items-center gap-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{new Date(collab.startDate).toLocaleDateString()} - {new Date(collab.endDate).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    <div className="flex -space-x-2">
                      {collab.mentees.slice(0, 3).map(mentee => (
                        <div key={mentee.id} className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                          {mentee.name.charAt(0)}
                        </div>
                      ))}
                      {collab.mentees.length > 3 && (
                        <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                          +{collab.mentees.length - 3}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-b">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium text-gray-700">Tasks</h4>
                  <button 
                    onClick={() => {
                      setSelectedCollab(collab);
                      setShowTaskForm(true);
                    }}
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Task
                  </button>
                </div>
                
                <div className="space-y-2">
                  {collab.tasks.length === 0 ? (
                    <p className="text-sm text-gray-500">No tasks yet</p>
                  ) : (
                    collab.tasks.map(task => {
                      const mentee = collab.mentees.find(m => m.id === task.assignedTo);
                      return (
                        <div key={task.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <div>
                            <p className="font-medium">{task.title}</p>
                            <p className="text-sm text-gray-500">
                              Assigned to: {mentee?.name || 'Unknown'} • Due: {new Date(task.dueDate).toLocaleDateString()}
                            </p>
                          </div>
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(task.status)}`}>
                            {task.status}
                          </span>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
              
              <div className="p-4">
                <h4 className="font-medium text-gray-700 mb-3">Submissions</h4>
                {collab.submissions.length === 0 ? (
                  <p className="text-sm text-gray-500">No submissions yet</p>
                ) : (
                  <div className="space-y-3">
                    {collab.submissions.map(sub => {
                      const task = collab.tasks.find(t => t.id === sub.taskId);
                      return (
                        <div key={sub.id} className="border rounded-lg p-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium">
                                {task?.title || 'Unknown Task'}
                              </p>
                              <a 
                                href={sub.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 hover:underline flex items-center"
                              >
                                <GitBranch className="h-4 w-4 mr-1" />
                                View on GitHub
                              </a>
                            </div>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              sub.status === 'approved' ? 'bg-green-100 text-green-800' :
                              sub.status === 'rejected' ? 'bg-red-100 text-red-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {sub.status}
                            </span>
                          </div>
                          
                          {sub.status === 'pending' && (
                            <div className="mt-3">
                              <textarea
                                placeholder="Provide feedback..."
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                className="w-full p-2 border rounded-md text-sm"
                                rows={2}
                              />
                              <div className="flex justify-end space-x-2 mt-2">
                                <button
                                  onClick={() => rejectSubmission(sub.id)}
                                  className="px-3 py-1 text-sm border border-red-500 text-red-500 rounded hover:bg-red-50"
                                >
                                  Reject
                                </button>
                                <button
                                  onClick={() => approveSubmission(sub.id)}
                                  className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                  Approve
                                </button>
                              </div>
                            </div>
                          )}
                          
                          {sub.feedback && (
                            <div className="mt-2 p-2 bg-gray-50 rounded text-sm">
                              <p className="font-medium">Feedback:</p>
                              <p>{sub.feedback}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              
              <div className="p-4 bg-gray-50 flex justify-between">
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleStatusChange(collab.id, 'created')}
                    className={`px-3 py-1 text-sm rounded ${collab.status === 'created' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    Mark as Created
                  </button>
                  <button
                    onClick={() => handleStatusChange(collab.id, 'inprogress')}
                    className={`px-3 py-1 text-sm rounded ${collab.status === 'inprogress' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    Mark In Progress
                  </button>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleStatusChange(collab.id, 'completed')}
                    className={`px-3 py-1 text-sm rounded ${collab.status === 'completed' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    Complete
                  </button>
                  <button
                    onClick={() => handleStatusChange(collab.id, 'failed')}
                    className={`px-3 py-1 text-sm rounded ${collab.status === 'failed' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    Mark Failed
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Create New Collab Modal */}
      {showCreateCollab && (
        <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">New Collaboration</h2>
                <button
                  onClick={() => setShowCreateCollab(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    placeholder="E-commerce Web App"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    placeholder="Describe the collaboration..."
                    className="w-full p-2 border rounded-md"
                    rows={3}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                    <input
                      type="date"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                    <input
                      type="date"
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mentees</label>
                  <div className="border rounded-md p-2">
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3, 4].map(id => (
                        <div key={id} className="flex items-center px-3 py-1 bg-gray-100 rounded-full">
                          <span>Mentee {id}</span>
                          <button className="ml-2 text-gray-500 hover:text-gray-700">
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                    <button className="mt-2 text-sm text-blue-600 hover:text-blue-800 flex items-center">
                      <Plus className="h-4 w-4 mr-1" />
                      Add Mentee
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    onClick={() => setShowCreateCollab(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      // In a real app, you would gather the form data here
                      createNewCollab({
                        title: 'New Collaboration',
                        description: 'Description of new collaboration',
                        status: 'created',
                        startDate: new Date().toISOString().split('T')[0],
                        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
                        mentees: [{ id: 'm1', name: 'Alex Chen' }]
                      });
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Create Collaboration
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Task Modal */}
      {showTaskForm && selectedCollab && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Add Task to {selectedCollab.title}</h2>
                <button
                  onClick={() => {
                    setShowTaskForm(false);
                    setSelectedCollab(null);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Task Title</label>
                  <input
                    type="text"
                    value={newTask.title}
                    onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                    placeholder="Implement user authentication"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Assign To</label>
                  <select
                    value={newTask.assignedTo}
                    onChange={(e) => setNewTask({...newTask, assignedTo: e.target.value})}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Select Mentee</option>
                    {selectedCollab.mentees.map(mentee => (
                      <option key={mentee.id} value={mentee.id}>{mentee.name}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                  <input
                    type="date"
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({...newTask, dueDate: e.target.value})}
                    min={selectedCollab.startDate}
                    max={selectedCollab.endDate}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    onClick={() => {
                      setShowTaskForm(false);
                      setSelectedCollab(null);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => addTask(selectedCollab.id)}
                    disabled={!newTask.title || !newTask.assignedTo || !newTask.dueDate}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400"
                  >
                    Add Task
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

export default MentorCollabPage;