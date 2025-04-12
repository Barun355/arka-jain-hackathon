import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, UserPlus, UserCheck, Users, BookOpen, X, MessageSquare, GitBranch } from 'lucide-react';

interface Peer {
  id: string;
  name: string;
  avatar?: string;
  skills: string[];
  interests: string[];
  bio: string;
  projects: number;
  followers: string[]; // Array of mentee IDs
  isFollowing: boolean; // Derived property based on current user
  mutualInterests?: string[];
  lastActive: string;
}

const PeerManagementPage: React.FC = () => {
  // Current mentee ID (would come from auth in real app)
  const currentMenteeId = 'mentee1';
  
  const [peers, setPeers] = useState<Peer[]>([
    {
      id: 'peer1',
      name: 'Alex Chen',
      skills: ['React', 'Node.js', 'TypeScript'],
      interests: ['Web Development', 'Open Source', 'UI/UX'],
      bio: 'Frontend developer passionate about creating accessible web applications',
      projects: 5,
      followers: ['mentee2', 'mentee3'],
      isFollowing: true,
      mutualInterests: ['Web Development', 'Open Source'],
      lastActive: '2025-05-20T14:30:00'
    },
    {
      id: 'peer2',
      name: 'Maya Patel',
      skills: ['Python', 'Machine Learning', 'Data Analysis'],
      interests: ['AI Ethics', 'Data Visualization', 'Research'],
      bio: 'ML engineer focused on ethical AI applications',
      projects: 3,
      followers: ['mentee4'],
      isFollowing: false,
      mutualInterests: ['Research'],
      lastActive: '2025-05-19T09:15:00'
    },
    {
      id: 'peer3',
      name: 'Taylor Smith',
      skills: ['UI/UX Design', 'Figma', 'User Research'],
      interests: ['Design Systems', 'Accessibility', 'Frontend Development'],
      bio: 'Product designer with frontend development skills',
      projects: 7,
      followers: ['mentee1', 'mentee5'],
      isFollowing: true,
      mutualInterests: ['Frontend Development', 'Accessibility'],
      lastActive: '2025-05-21T11:45:00'
    },
    {
      id: 'peer4',
      name: 'Jordan Lee',
      skills: ['Flutter', 'Firebase', 'Mobile Development'],
      interests: ['Cross-platform Apps', 'Startups', 'Entrepreneurship'],
      bio: 'Mobile developer building the next generation of apps',
      projects: 4,
      followers: [],
      isFollowing: false,
      lastActive: '2025-05-18T16:20:00'
    },
    {
      id: 'peer5',
      name: 'Riley Kim',
      skills: ['DevOps', 'AWS', 'Docker'],
      interests: ['Cloud Infrastructure', 'Automation', 'Security'],
      bio: 'DevOps engineer passionate about scalable systems',
      projects: 6,
      followers: ['mentee3'],
      isFollowing: false,
      lastActive: '2025-05-21T08:10:00'
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [skillFilter, setSkillFilter] = useState<string>('all');
  const [interestFilter, setInterestFilter] = useState<string>('all');
  const [followFilter, setFollowFilter] = useState<'all' | 'following' | 'not-following'>('all');
  const [selectedPeer, setSelectedPeer] = useState<Peer | null>(null);
  const [allSkills, setAllSkills] = useState<string[]>([]);
  const [allInterests, setAllInterests] = useState<string[]>([]);

  // Extract all unique skills and interests for filter options
  useEffect(() => {
    const skillsSet = new Set<string>();
    const interestsSet = new Set<string>();
    
    peers.forEach(peer => {
      peer.skills.forEach(skill => skillsSet.add(skill));
      peer.interests.forEach(interest => interestsSet.add(interest));
    });
    
    setAllSkills(['all', ...Array.from(skillsSet)]);
    setAllInterests(['all', ...Array.from(interestsSet)]);
  }, [peers]);

  const toggleFollow = (peerId: string) => {
    setPeers(peers.map(peer => {
      if (peer.id === peerId) {
        const isFollowing = !peer.isFollowing;
        const followers = isFollowing 
          ? [...peer.followers, currentMenteeId]
          : peer.followers.filter(id => id !== currentMenteeId);
        
        return {
          ...peer,
          followers,
          isFollowing
        };
      }
      return peer;
    }));
  };

  const filteredPeers = peers.filter(peer => {
    const matchesSearch = peer.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         peer.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         peer.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         peer.interests.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesSkill = skillFilter === 'all' || peer.skills.includes(skillFilter);
    const matchesInterest = interestFilter === 'all' || peer.interests.includes(interestFilter);
    
    const matchesFollow = followFilter === 'all' || 
                         (followFilter === 'following' && peer.isFollowing) ||
                         (followFilter === 'not-following' && !peer.isFollowing);
    
    return matchesSearch && matchesSkill && matchesInterest && matchesFollow;
  });

  const formatLastActive = (dateString: string) => {
    const now = new Date();
    const lastActive = new Date(dateString);
    const diffHours = Math.floor((now.getTime() - lastActive.getTime()) / (1000 * 60 * 60));
    
    if (diffHours < 24) {
      return `Active ${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
    } else {
      const diffDays = Math.floor(diffHours / 24);
      return `Active ${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Peer Network</h1>
          <p className="text-gray-600">Connect with fellow mentees and grow together</p>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search peers by name, skills, or interests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        <div className="relative">
          <select
            value={skillFilter}
            onChange={(e) => setSkillFilter(e.target.value)}
            className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
          >
            {allSkills.map(skill => (
              <option key={skill} value={skill}>
                {skill === 'all' ? 'All Skills' : skill}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
        
        <div className="relative">
          <select
            value={interestFilter}
            onChange={(e) => setInterestFilter(e.target.value)}
            className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
          >
            {allInterests.map(interest => (
              <option key={interest} value={interest}>
                {interest === 'all' ? 'All Interests' : interest}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="mb-4 flex justify-between items-center">
        <div className="relative">
          <select
            value={followFilter}
            onChange={(e) => setFollowFilter(e.target.value as 'all' | 'following' | 'not-following')}
            className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Peers</option>
            <option value="following">Following</option>
            <option value="not-following">Not Following</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Showing {filteredPeers.length} {filteredPeers.length === 1 ? 'peer' : 'peers'}
        </div>
      </div>

      {/* Peers List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPeers.length === 0 ? (
          <div className="col-span-full text-center py-12 bg-white rounded-lg shadow-sm">
            <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
              <Users className="w-full h-full" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">No peers found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchQuery 
                ? 'No peers match your search criteria.'
                : 'There are currently no peers matching your filters.'}
            </p>
          </div>
        ) : (
          filteredPeers.map(peer => (
            <div key={peer.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-4 border-b">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lg text-gray-800">{peer.name}</h3>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <span>{formatLastActive(peer.lastActive)}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFollow(peer.id)}
                    className={`p-2 rounded-full ${peer.isFollowing ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
                    title={peer.isFollowing ? 'Unfollow' : 'Follow'}
                  >
                    {peer.isFollowing ? (
                      <UserCheck className="h-5 w-5" />
                    ) : (
                      <UserPlus className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="p-4 border-b">
                <p className="text-gray-600 line-clamp-3">{peer.bio}</p>
              </div>
              
              <div className="p-4">
                <div className="mb-3">
                  <h4 className="font-medium text-gray-700 mb-1">Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {peer.skills.slice(0, 3).map(skill => (
                      <span key={skill} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                        {skill}
                      </span>
                    ))}
                    {peer.skills.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                        +{peer.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                
                {peer.mutualInterests && peer.mutualInterests.length > 0 && (
                  <div className="mb-3">
                    <h4 className="font-medium text-gray-700 mb-1">Mutual Interests</h4>
                    <div className="flex flex-wrap gap-1">
                      {peer.mutualInterests.map(interest => (
                        <span key={interest} className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span>{peer.projects} projects</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{peer.followers.length} followers</span>
                  </div>
                </div>
                
                <div className="flex space-x-2 mt-4">
                  <button
                    onClick={() => setSelectedPeer(peer)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center justify-center"
                  >
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Message
                  </button>
                  <button
                    onClick={() => setSelectedPeer(peer)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center justify-center"
                  >
                    <GitBranch className="h-4 w-4 mr-1" />
                    Collab
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Peer Detail Modal */}
      {selectedPeer && (
        <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">{selectedPeer.name}</h2>
                <button
                  onClick={() => setSelectedPeer(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <span>{formatLastActive(selectedPeer.lastActive)}</span>
                <span className="mx-2">•</span>
                <span>{selectedPeer.followers.length} followers</span>
                <span className="mx-2">•</span>
                <span>{selectedPeer.projects} projects</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="font-medium text-gray-700 mb-2">About</h3>
                  <p className="text-gray-600 mb-6">{selectedPeer.bio}</p>
                  
                  <h3 className="font-medium text-gray-700 mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedPeer.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="font-medium text-gray-700 mb-2">Interests</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedPeer.interests.map(interest => (
                      <span 
                        key={interest} 
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedPeer.mutualInterests?.includes(interest)
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h3 className="font-medium text-gray-700 mb-3">Connection</h3>
                    <div className="space-y-3">
                      <button
                        onClick={() => toggleFollow(selectedPeer.id)}
                        className={`w-full flex items-center justify-center px-4 py-2 rounded-md ${
                          selectedPeer.isFollowing
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-blue-600 text-white'
                        }`}
                      >
                        {selectedPeer.isFollowing ? (
                          <>
                            <UserCheck className="h-5 w-5 mr-2" />
                            Following
                          </>
                        ) : (
                          <>
                            <UserPlus className="h-5 w-5 mr-2" />
                            Follow
                          </>
                        )}
                      </button>
                      <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                        <MessageSquare className="h-5 w-5 mr-2" />
                        Send Message
                      </button>
                      <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                        <GitBranch className="h-5 w-5 mr-2" />
                        Start Collaboration
                      </button>
                    </div>
                  </div>
                  
                  {selectedPeer.mutualInterests && selectedPeer.mutualInterests.length > 0 && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-700 mb-2">Shared Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedPeer.mutualInterests.map(interest => (
                          <span key={interest} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeerManagementPage;