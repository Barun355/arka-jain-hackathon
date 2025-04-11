import { UserData } from "@/types";
import React, { ChangeEvent } from "react";

interface StepProps {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
  onNext: () => void;
  onBack?: () => void;
  onSkip?: () => void;
}

export const MenteeBasicProfile: React.FC<StepProps> = ({
  userData,
  updateUserData,
  onNext,
}) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      updateUserData({ profilePicture: e.target.files[0] });
    }
  };

  const handleBioChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateUserData({ bio: e.target.value });
  };

  return (
    <div className="step-form">
      <h2>Basic Profile</h2>

      <div className="form-group">
        <label>Name</label>
        <input type="text" value={userData.name} readOnly />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input type="email" value={userData.email} readOnly />
      </div>

      <div className="form-group">
        <label>Profile Picture</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>

      <div className="form-group">
        <label>Bio (150 chars max)</label>
        <textarea
          maxLength={150}
          placeholder="Introduce yourself briefly..."
          value={userData.bio || ""}
          onChange={handleBioChange}
        />
      </div>

      <div className="form-actions">
        <button className="btn-primary" onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
};

export const MenteeEducation: React.FC<StepProps> = ({
  userData,
  updateUserData,
  onNext,
  onBack,
  onSkip,
}) => {
  const degreeOptions = ["B.Tech", "BSc", "MSc", "MBA", "PhD", "Other"];
  const yearOptions = [
    "1st Year",
    "2nd Year",
    "3rd Year",
    "4th Year",
    "Graduate",
  ];
  const techOptions = [
    "React",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "Node.js",
    "SQL",
    "MongoDB",
  ];

  const handleEducationChange = (
    field: keyof UserData["education"],
    value: string
  ) => {
    updateUserData({
      education: {
        ...userData.education,
        [field]: value,
      } as UserData["education"],
    });
  };

  const handleTechStackChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const options = e.target.options;
    const selectedValues = [];

    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }

    updateUserData({
      skills: {
        ...userData.skills,
        techStack: selectedValues,
      } as UserData["skills"],
    });
  };

  const handleSkillLevelChange = (
    value: "beginner" | "intermediate" | "advanced"
  ) => {
    updateUserData({
      skills: {
        ...userData.skills,
        skillLevel: value,
      } as UserData["skills"],
    });
  };

  return (
    <div className="step-form">
      <h2>Education & Background</h2>

      <div className="form-section">
        <h3>Education</h3>
        <div className="form-group">
          <label>College/University Name</label>
          <input
            type="text"
            placeholder="Enter your institution name"
            value={userData.education?.institution || ""}
            onChange={(e) =>
              handleEducationChange("institution", e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>Degree/Program</label>
          <select
            value={userData.education?.degree || ""}
            onChange={(e) => handleEducationChange("degree", e.target.value)}
          >
            <option value="">Select degree</option>
            {degreeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Year of Study</label>
          <select
            value={userData.education?.yearOfStudy || ""}
            onChange={(e) =>
              handleEducationChange("yearOfStudy", e.target.value)
            }
          >
            <option value="">Select year</option>
            {yearOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-section">
        <h3>Current Skills</h3>
        <div className="form-group">
          <label>Tech Stack (hold Ctrl/Cmd to select multiple)</label>
          <select
            multiple
            value={userData.skills?.techStack || []}
            onChange={handleTechStackChange}
          >
            {techOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Skill Level</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="skillLevel"
                value="beginner"
                checked={userData.skills?.skillLevel === "beginner"}
                onChange={() => handleSkillLevelChange("beginner")}
              />
              Beginner
            </label>
            <label>
              <input
                type="radio"
                name="skillLevel"
                value="intermediate"
                checked={userData.skills?.skillLevel === "intermediate"}
                onChange={() => handleSkillLevelChange("intermediate")}
              />
              Intermediate
            </label>
            <label>
              <input
                type="radio"
                name="skillLevel"
                value="advanced"
                checked={userData.skills?.skillLevel === "advanced"}
                onChange={() => handleSkillLevelChange("advanced")}
              />
              Advanced
            </label>
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button className="btn-secondary" onClick={onBack}>
          Back
        </button>
        <button className="btn-text" onClick={onSkip}>
          Skip for now
        </button>
        <button className="btn-primary" onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
};

export const MenteeExperience: React.FC<StepProps> = ({
  userData,
  updateUserData,
  onNext,
  onBack,
  onSkip,
}) => {
  const learningOptions = [
    "AI",
    "Web Development",
    "Mobile Development",
    "Data Science",
    "DevOps",
    "Cloud Computing",
    "UI/UX Design",
  ];
  const mentorTypeOptions = [
    "Industry Expert",
    "Academic",
    "Peer Mentor",
    "Startup Founder",
    "Technical Lead",
  ];

  const handleExperienceChange = (
    field: keyof UserData["experience"],
    value: string
  ) => {
    updateUserData({
      experience: {
        ...userData.experience,
        [field]: value,
      } as UserData["experience"],
    });
  };

  const handleLearningInterestsChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const options = e.target.options;
    const selectedValues = [];

    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }

    updateUserData({
      goals: {
        ...userData.goals,
        learningInterests: selectedValues,
      } as UserData["goals"],
    });
  };

  const handleMentorTypeChange = (value: string) => {
    updateUserData({
      goals: {
        ...userData.goals,
        preferredMentorType: value,
      } as UserData["goals"],
    });
  };

  return (
    <div className="step-form">
      <h2>Experience & Goals</h2>

      <div className="form-section">
        <h3>Past Experience</h3>
        <div className="form-group">
          <label>Previous Internships/Jobs (optional)</label>
          <textarea
            placeholder="Describe your previous roles..."
            value={userData.experience?.previousRoles || ""}
            onChange={(e) =>
              handleExperienceChange("previousRoles", e.target.value)
            }
          />
        </div>

        <div className="form-group">
          <label>Projects Done</label>
          <textarea
            placeholder="Title + 2-line description for each project"
            value={userData.experience?.projects || ""}
            onChange={(e) => handleExperienceChange("projects", e.target.value)}
          />
        </div>
      </div>

      <div className="form-section">
        <h3>Goals</h3>
        <div className="form-group">
          <label>
            What do you want to learn? (hold Ctrl/Cmd to select multiple)
          </label>
          <select
            multiple
            value={userData.goals?.learningInterests || []}
            onChange={handleLearningInterestsChange}
          >
            {learningOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Preferred Mentor Type</label>
          <select
            value={userData.goals?.preferredMentorType || ""}
            onChange={(e) => handleMentorTypeChange(e.target.value)}
          >
            <option value="">Select mentor type</option>
            {mentorTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-actions">
        <button className="btn-secondary" onClick={onBack}>
          Back
        </button>
        <button className="btn-text" onClick={onSkip}>
          Skip for now
        </button>
        <button className="btn-primary" onClick={onNext}>
          Complete Profile
        </button>
      </div>
    </div>
  );
};
