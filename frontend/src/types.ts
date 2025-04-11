export type UserRole = "mentee" | "mentor" | null;
export type UserData = {
  role: UserRole;
  // Basic details
  name: string;
  email: string;
  profilePicture?: File;
  bio?: string;
  linkedinUrl?: string;
  // Education
  education?: {
    institution: string;
    degree: string;
    yearOfStudy: string;
  };
  // Skills
  skills?: {
    techStack: string[];
    skillLevel: "beginner" | "intermediate" | "advanced";
  };
  // Experience
  experience?: {
    previousRoles: string;
    projects: string;
  };
  // Goals
  goals?: {
    learningInterests: string[];
    preferredMentorType: string;
  };
  // Career (for mentors)
  career?: {
    jobTitle: string;
    company: string;
    yearsExperience: string;
    expertiseDomain: string[];
  };
  // Mentorship preferences
  mentorshipPreferences?: {
    sessionTypes: string[];
    availabilityHours: string;
  };
  // Portfolio
  portfolio?: {
    portfolioUrl: string;
    pastMentoringExperience: boolean;
    mentoringDescription?: string;
  };
};
