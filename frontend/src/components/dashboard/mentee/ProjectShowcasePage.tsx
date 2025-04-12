import React, { useState } from 'react';
import { Code, Globe, FileText, Search, ChevronDown, ThumbsUp, Download, Calendar, X } from 'lucide-react';

type ProjectStatus = 'draft' | 'submitted' | 'published' | 'needs_revision';

interface Project {
  id: string;
  title: string;
  description: string;
  mentee: {
    id: string;
    name: string;
    avatar?: string;
  };
  status: ProjectStatus;
  submissionDate: string;
  techStack: string[];
  githubLink: string;
  liveDemoLink?: string;
  images: string[];
  documents: string[];
  likes: number;
  views: number;
  mentorFeedback?: string;
}

const ProjectShowcasePage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce application with React, Node.js, and MongoDB',
      mentee: {
        id: 'm1',
        name: 'Alex Chen'
      },
      status: 'published',
      submissionDate: '2025-05-15',
      techStack: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
      githubLink: 'https://github.com/alexchen/ecommerce-platform',
      liveDemoLink: 'https://ecommerce-demo.alexchen.dev',
      images: [
        'https://example.com/project1-1.jpg',
        'https://example.com/project1-2.jpg'
      ],
      documents: [
        'https://example.com/project1-doc.pdf'
      ],
      likes: 24,
      views: 156,
      mentorFeedback: 'Great work on the cart functionality! Consider adding more test coverage.'
    },
    {
      id: '2',
      title: 'Health Tracker App',
      description: 'Mobile application for tracking fitness and nutrition goals',
      mentee: {
        id: 'm2',
        name: 'Maya Patel'
      },
      status: 'submitted',
      submissionDate: '2025-05-20',
      techStack: ['Flutter', 'Firebase', 'Dart'],
      githubLink: 'https://github.com/mayap/health-tracker',
      images: [
        'https://example.com/project2-1.jpg'
      ],
      documents: [],
      likes: 8,
      views: 42,
      mentorFeedback: 'Excellent UI design. Needs more error handling for the API calls.'
    },
    {
      id: '3',
      title: 'Sentiment Analysis Tool',
      description: 'Machine learning model for analyzing product reviews',
      mentee: {
        id: 'm3',
        name: 'Taylor Smith'
      },
      status: 'needs_revision',
      submissionDate: '2025-05-10',
      techStack: ['Python', 'TensorFlow', 'NLTK'],
      githubLink: 'https://github.com/taylorsmith/sentiment-analysis',
      liveDemoLink: 'https://sentiment.taylorsmith.tech',
      images: [],
      documents: [
        'https://example.com/project3-research.pdf',
        'https://example.com/project3-presentation.pptx'
      ],
      likes: 15,
      views: 89,
      mentorFeedback: 'Model accuracy needs improvement. Try different preprocessing techniques.'
    },
    {
      id: '4',
      title: 'Portfolio Website',
      description: 'Personal portfolio website with project showcase',
      mentee: {
        id: 'm4',
        name: 'Jordan Lee'
      },
      status: 'draft',
      submissionDate: '2025-05-22',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/jordanlee/portfolio',
      liveDemoLink: 'https://jordanlee.dev',
      images: [
        'https://example.com/project4-1.jpg',
        'https://example.com/project4-2.jpg',
        'https://example.com/project4-3.jpg'
      ],
      documents: [],
      likes: 5,
      views: 32
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<ProjectStatus | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [feedback, setFeedback] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.mentee.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const updateProjectStatus = (projectId: string, newStatus: ProjectStatus) => {
    setProjects(projects.map(project => 
      project.id === projectId ? { ...project, status: newStatus } : project
    ));
  };

  const submitFeedback = (projectId: string) => {
    if (!feedback) return;
    
    setProjects(projects.map(project => 
      project.id === projectId ? { 
        ...project, 
        mentorFeedback: feedback,
        status: feedback.toLowerCase().includes('revise') ? 'needs_revision' : project.status
      } : project
    ));
    setFeedback('');
    setSelectedProject(null);
  };

  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'submitted': return 'bg-blue-100 text-blue-800';
      case 'needs_revision': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

//   const publishProject = (projectId: string) => {
//     setProjects(projects.map(project => 
//       project.id === projectId ? { ...project, status: 'published' } : project
//     ));
//   };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Project Showcase</h1>
          <p className="text-gray-600">Review and manage mentee projects</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
            className="p-2 border border-gray-300 rounded-md hover:bg-gray-50"
            title={viewMode === 'grid' ? 'List view' : 'Grid view'}
          >
            {viewMode === 'grid' ? <List className="h-5 w-5" /> : <Grid className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search projects, descriptions, or mentees..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="relative">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as ProjectStatus | 'all')}
            className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Statuses</option>
            <option value="draft">Draft</option>
            <option value="submitted">Submitted</option>
            <option value="needs_revision">Needs Revision</option>
            <option value="published">Published</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Projects List */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
            <Code className="w-full h-full" />
          </div>
          <h3 className="text-lg font-medium text-gray-900">No projects found</h3>
          <p className="mt-1 text-sm text-gray-500">
            {statusFilter === 'all'
              ? 'There are currently no projects to display.'
              : `There are no projects with status "${statusFilter}".`}
          </p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              onClick={() => setSelectedProject(project)}
            >
              {project.images.length > 0 && (
                <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={`${project.title} screenshot`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-lg text-gray-800">{project.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(project.status)}`}>
                    {project.status.replace('_', ' ')}
                  </span>
                </div>
                <p className="text-gray-600 mt-1 line-clamp-2">{project.description}</p>
                
                <div className="mt-3 flex items-center text-sm text-gray-500">
                  <span>By {project.mentee.name}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(project.submissionDate).toLocaleDateString()}</span>
                </div>
                
                <div className="mt-3 flex flex-wrap gap-1">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <span className="flex items-center">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {project.likes}
                    </span>
                    <span className="flex items-center">
                      <Eye className="h-4 w-4 mr-1" />
                      {project.views}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    {project.liveDemoLink && (
                      <a 
                        href={project.liveDemoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Globe className="h-5 w-5" />
                      </a>
                    )}
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Code className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm divide-y">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="p-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mt-1">{project.description}</p>
                </div>
                <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(project.status)}`}>
                  {project.status.replace('_', ' ')}
                </span>
              </div>
              
              <div className="mt-3 flex flex-wrap items-center gap-4">
                <div className="flex items-center text-sm text-gray-500">
                  <span>By {project.mentee.name}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{new Date(project.submissionDate).toLocaleDateString()}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center space-x-3 text-sm text-gray-500">
                  <span className="flex items-center">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {project.likes}
                  </span>
                  <span className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {project.views}
                  </span>
                </div>
                <div className="flex space-x-2">
                  {project.liveDemoLink && (
                    <a 
                      href={project.liveDemoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Globe className="h-4 w-4 mr-1" />
                      Demo
                    </a>
                  )}
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-800 flex items-center text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Code className="h-4 w-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <span>By {selectedProject.mentee.name}</span>
                      <span className="mx-2">•</span>
                      <span>Submitted on {new Date(selectedProject.submissionDate).toLocaleDateString()}</span>
                    </div>
                    <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(selectedProject.status)}`}>
                      {selectedProject.status.replace('_', ' ')}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{selectedProject.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="font-medium text-gray-700 mb-2">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {selectedProject.images.length > 0 && (
                    <div className="mb-6">
                      <h3 className="font-medium text-gray-700 mb-3">Screenshots</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {selectedProject.images.map((img, index) => (
                          <div key={index} className="aspect-video bg-gray-100 rounded overflow-hidden">
                            <img 
                              src={img} 
                              alt={`${selectedProject.title} screenshot ${index + 1}`} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex space-x-3">
                    <a 
                      href={selectedProject.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
                    >
                      <Code className="h-5 w-5 mr-2" />
                      View Code
                    </a>
                    {selectedProject.liveDemoLink && (
                      <a 
                        href={selectedProject.liveDemoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                        <Globe className="h-5 w-5 mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
                
                <div>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h3 className="font-medium text-gray-700 mb-3">Project Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">Likes</p>
                        <p className="text-2xl font-bold flex items-center">
                          <ThumbsUp className="h-5 w-5 mr-1 text-blue-500" />
                          {selectedProject.likes}
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <p className="text-sm text-gray-500">Views</p>
                        <p className="text-2xl font-bold flex items-center">
                          <Eye className="h-5 w-5 mr-1 text-green-500" />
                          {selectedProject.views}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {selectedProject.documents.length > 0 && (
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h3 className="font-medium text-gray-700 mb-3">Documents</h3>
                      <div className="space-y-2">
                        {selectedProject.documents.map((doc, index) => (
                          <a 
                            key={index} 
                            href={doc} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-2 bg-white rounded hover:bg-gray-100"
                          >
                            <div className="flex items-center">
                              <FileText className="h-5 w-5 text-gray-400 mr-2" />
                              <span className="truncate">
                                {doc.split('/').pop() || `Document ${index + 1}`}
                              </span>
                            </div>
                            <Download className="h-4 w-4 text-gray-400" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-700 mb-3">Mentor Actions</h3>
                    
                    {selectedProject.mentorFeedback && (
                      <div className="mb-4 p-3 bg-white rounded shadow-sm">
                        <h4 className="font-medium text-sm text-gray-700 mb-1">Your Feedback</h4>
                        <p className="text-sm">{selectedProject.mentorFeedback}</p>
                      </div>
                    )}
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {selectedProject.mentorFeedback ? 'Update Feedback' : 'Provide Feedback'}
                      </label>
                      <textarea
                        placeholder="Share your feedback for the mentee..."
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="w-full p-2 border rounded-md text-sm"
                        rows={3}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <button
                        onClick={() => updateProjectStatus(selectedProject.id, 'published')}
                        className={`px-3 py-2 text-sm rounded ${selectedProject.status === 'published' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                      >
                        Publish
                      </button>
                      <button
                        onClick={() => updateProjectStatus(selectedProject.id, 'needs_revision')}
                        className={`px-3 py-2 text-sm rounded ${selectedProject.status === 'needs_revision' ? 'bg-yellow-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                      >
                        Request Revision
                      </button>
                    </div>
                    
                    <button
                      onClick={() => submitFeedback(selectedProject.id)}
                      disabled={!feedback}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400"
                    >
                      Submit Feedback
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper components for icons not imported from lucide-react
const List: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const Grid: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const Eye: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

export default ProjectShowcasePage;