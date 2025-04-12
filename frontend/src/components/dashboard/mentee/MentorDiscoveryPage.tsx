import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, UserPlus, UserCheck, Users, Award, BookOpen, Mail, Star, X } from 'lucide-react';

interface Mentor {
  id: string;
  name: string;
  avatar?: string;
  expertise: string[];
  bio: string;
  experience: string;
  followers: string[]; // Array of mentee IDs
  rating: number;
  sessionsCompleted: number;
  isFollowing: boolean; // Derived property based on current user
}

const MentorDiscoveryPage: React.FC = () => {
  // Current mentee ID (would come from auth in real app)
  const currentMenteeId = 'mentee1';
  
  const [mentors, setMentors] = useState<Mentor[]>([
    {
      id: 'mentor1',
      name: 'Dr. Sarah Johnson',
      expertise: ['Web Development', 'JavaScript', 'React'],
      bio: 'Senior web developer with 10+ years of experience building scalable applications',
      experience: '10 years at TechCorp, 5 years teaching',
      followers: ['mentee1', 'mentee3'],
      rating: 4.8,
      sessionsCompleted: 124,
      isFollowing: true
    },
    {
      id: 'mentor2',
      name: 'Prof. James Wilson',
      expertise: ['Machine Learning', 'Python', 'Data Science'],
      bio: 'Machine learning researcher and educator specializing in NLP applications',
      experience: 'PhD in Computer Science, 8 years research experience',
      followers: ['mentee2'],
      rating: 4.6,
      sessionsCompleted: 87,
      isFollowing: false
    },
    {
      id: 'mentor3',
      name: 'Emily Rodriguez',
      expertise: ['UI/UX Design', 'Figma', 'Product Design'],
      bio: 'Product designer passionate about creating intuitive user experiences',
      experience: 'Lead designer at DesignHub, 6 years experience',
      followers: [],
      rating: 4.9,
      sessionsCompleted: 65,
      isFollowing: false
    },
    {
      id: 'mentor4',
      name: 'Michael Brown',
      expertise: ['Mobile Development', 'Flutter', 'Firebase'],
      bio: 'Mobile developer specializing in cross-platform applications',
      experience: '5 years building mobile apps for startups',
      followers: ['mentee1', 'mentee4'],
      rating: 4.5,
      sessionsCompleted: 42,
      isFollowing: true
    },
    {
      id: 'mentor5',
      name: 'Alexis Chen',
      expertise: ['DevOps', 'AWS', 'Docker'],
      bio: 'DevOps engineer focused on cloud infrastructure and automation',
      experience: '7 years in cloud infrastructure',
      followers: ['mentee3'],
      rating: 4.7,
      sessionsCompleted: 53,
      isFollowing: false
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [expertiseFilter, setExpertiseFilter] = useState<string>('all');
  const [followFilter, setFollowFilter] = useState<'all' | 'following' | 'not-following'>('all');
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [allExpertise, setAllExpertise] = useState<string[]>([]);

  // Extract all unique expertise for filter options
  useEffect(() => {
    const expertiseSet = new Set<string>();
    mentors.forEach(mentor => {
      mentor.expertise.forEach(expertise => expertiseSet.add(expertise));
    });
    setAllExpertise(['all', ...Array.from(expertiseSet)]);
  }, [mentors]);

  const toggleFollow = (mentorId: string) => {
    setMentors(mentors.map(mentor => {
      if (mentor.id === mentorId) {
        const isFollowing = !mentor.isFollowing;
        const followers = isFollowing 
          ? [...mentor.followers, currentMenteeId]
          : mentor.followers.filter(id => id !== currentMenteeId);
        
        return {
          ...mentor,
          followers,
          isFollowing
        };
      }
      return mentor;
    }));
  };

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         mentor.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.expertise.some(e => e.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesExpertise = expertiseFilter === 'all' || mentor.expertise.includes(expertiseFilter);
    
    const matchesFollow = followFilter === 'all' || 
                         (followFilter === 'following' && mentor.isFollowing) ||
                         (followFilter === 'not-following' && !mentor.isFollowing);
    
    return matchesSearch && matchesExpertise && matchesFollow;
  });

  const getRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 text-yellow-400 fill-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-4 w-4 text-yellow-400 fill-yellow-400/50" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Mentor Discovery</h1>
          <p className="text-gray-600">Find and follow mentors in your areas of interest</p>
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
            placeholder="Search mentors by name, bio, or expertise..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <div className="relative">
          <select
            value={expertiseFilter}
            onChange={(e) => setExpertiseFilter(e.target.value)}
            className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            {allExpertise.map(expertise => (
              <option key={expertise} value={expertise}>
                {expertise === 'all' ? 'All Expertise' : expertise}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
        
        <div className="relative">
          <select
            value={followFilter}
            onChange={(e) => setFollowFilter(e.target.value as 'all' | 'following' | 'not-following')}
            className="appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All Mentors</option>
            <option value="following">Following</option>
            <option value="not-following">Not Following</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Mentors List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentors.length === 0 ? (
          <div className="col-span-full text-center py-12 bg-white rounded-lg shadow-sm">
            <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
              <Users className="w-full h-full" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">No mentors found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchQuery 
                ? 'No mentors match your search criteria.'
                : 'There are currently no mentors matching your filters.'}
            </p>
          </div>
        ) : (
          filteredMentors.map(mentor => (
            <div key={mentor.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-4 border-b">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lg text-gray-800">{mentor.name}</h3>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <span>{mentor.expertise.join(', ')}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFollow(mentor.id)}
                    className={`p-2 rounded-full ${mentor.isFollowing ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
                    title={mentor.isFollowing ? 'Unfollow' : 'Follow'}
                  >
                    {mentor.isFollowing ? (
                      <UserCheck className="h-5 w-5" />
                    ) : (
                      <UserPlus className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="p-4 border-b">
                <p className="text-gray-600 line-clamp-3">{mentor.bio}</p>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    {getRatingStars(mentor.rating)}
                    <span className="ml-1 text-sm text-gray-600">{mentor.rating.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{mentor.followers.length} followers</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span>{mentor.experience}</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    <span>{mentor.sessionsCompleted} sessions</span>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedMentor(mentor)}
                  className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Mentor Detail Modal */}
      {selectedMentor && (
        <div className="fixed inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">{selectedMentor.name}</h2>
                <button
                  onClick={() => setSelectedMentor(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  {getRatingStars(selectedMentor.rating)}
                  <span className="ml-2 text-gray-600">{selectedMentor.rating.toFixed(1)} rating</span>
                </div>
                <button
                  onClick={() => {
                    toggleFollow(selectedMentor.id);
                    setSelectedMentor({
                      ...selectedMentor,
                      isFollowing: !selectedMentor.isFollowing
                    });
                  }}
                  className={`flex items-center px-4 py-2 rounded-md ${selectedMentor.isFollowing ? 'bg-blue-100 text-blue-600' : 'bg-blue-600 text-white'}`}
                >
                  {selectedMentor.isFollowing ? (
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
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="font-medium text-gray-700 mb-2">About</h3>
                  <p className="text-gray-600 mb-6">{selectedMentor.bio}</p>
                  
                  <h3 className="font-medium text-gray-700 mb-2">Experience</h3>
                  <p className="text-gray-600 mb-6">{selectedMentor.experience}</p>
                  
                  <h3 className="font-medium text-gray-700 mb-2">Expertise</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedMentor.expertise.map(expertise => (
                      <span key={expertise} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                        {expertise}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <h3 className="font-medium text-gray-700 mb-3">Mentor Stats</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Followers</span>
                        <span className="font-medium">{selectedMentor.followers.length}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Sessions Completed</span>
                        <span className="font-medium">{selectedMentor.sessionsCompleted}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Rating</span>
                        <div className="flex items-center">
                          {getRatingStars(selectedMentor.rating)}
                          <span className="ml-1">{selectedMentor.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-700 mb-3">Actions</h3>
                    <div className="space-y-2">
                      <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        <Mail className="h-5 w-5 mr-2" />
                        Send Message
                      </button>
                      <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                        <BookOpen className="h-5 w-5 mr-2" />
                        View Sessions
                      </button>
                    </div>
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

export default MentorDiscoveryPage;