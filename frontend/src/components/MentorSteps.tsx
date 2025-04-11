import { UserData } from "@/types";
import React, { ChangeEvent } from "react";

interface StepProps {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
  onNext: () => void;
  onBack?: () => void;
  onSkip?: () => void;
}

export const MentorVerification: React.FC<StepProps> = ({
  userData,
  updateUserData,
  onNext,
}) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      updateUserData({ profilePicture: e.target.files[0] });
    }
  };

  const handleLinkedInChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateUserData({ linkedinUrl: e.target.value });
  };

  const validateLinkedIn = (url: string): boolean => {
    // Simple validation - should start with linkedin.com or www.linkedin.com
    return /linkedin\.com/.test(url);
  };

  return (
    <div className="step-form">
      <h2>Professional Verification</h2>

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
        <label>LinkedIn Profile URL</label>
        <input
          type="url"
          placeholder="https://www.linkedin.com/in/your-profile"
          value={userData.linkedinUrl || ""}
          onChange={handleLinkedInChange}
        />
        {userData.linkedinUrl && !validateLinkedIn(userData.linkedinUrl) && (
          <p className="error-text">Please enter a valid LinkedIn URL</p>
        )}
      </div>

      <div className="form-actions">
        <button
          className="btn-primary"
          onClick={onNext}
          disabled={
            userData.linkedinUrl
              ? !validateLinkedIn(userData.linkedinUrl)
              : true
          }
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export const MentorCareerDetails: React.FC<StepProps> = ({
  userData,
  updateUserData,
  onNext,
  onBack,
  onSkip,
}) => {
  const experienceOptions = [
    "<1 year",
    "1-3 years",
    "3-5 years",
    "5-10 years",
    "10+ years",
  ];
  const expertiseOptions = [
    "Frontend",
    "Backend",
    "Full Stack",
    "Data Science",
    "DevOps",
    "Mobile Development",
    "UI/UX Design",
    "Product Management",
  ];
  const sessionTypes = [
    "1:1 Coaching",
    "Group Workshops",
    "Code Reviews",
    "Career Guidance",
    "Interview Preparation",
  ];
  const availabilityOptions = [
    "1-2 hours",
    "3-5 hours",
    "5-10 hours",
    "10+ hours",
  ];

  const handleCareerChange = (
    field: keyof UserData["career"],
    value: string
  ) => {
    updateUserData({
      career: {
        ...userData.career,
        [field]: value,
      } as UserData["career"],
    });
  };

  const handleExpertiseDomainChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const options = e.target.options;
    const selectedValues = [];

    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedValues.push(options[i].value);
      }
    }

    updateUserData({
      career: {
        ...userData.career,
        expertiseDomain: selectedValues,
      } as UserData["career"],
    });
  };

  const handleSessionTypesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    const currentSessionTypes =
      userData.mentorshipPreferences?.sessionTypes || [];
    let newSessionTypes;

    if (isChecked) {
      newSessionTypes = [...currentSessionTypes, value];
    } else {
      newSessionTypes = currentSessionTypes.filter((type) => type !== value);
    }

    updateUserData({
      mentorshipPreferences: {
        ...userData.mentorshipPreferences,
        sessionTypes: newSessionTypes,
      } as UserData["mentorshipPreferences"],
    });
  };

  const handleAvailabilityChange = (value: string) => {
    updateUserData({
      mentorshipPreferences: {
        ...userData.mentorshipPreferences,
        availabilityHours: value,
      } as UserData["mentorshipPreferences"],
    });
  };

  return (
    <div className="step-form">
      <h2>Career Details</h2>

      <div className="form-section">
        <h3>Professional Background</h3>
        <div className="form-group">
          <label>Current Job Title</label>
          <input
            type="text"
            placeholder="Enter your job title"
            value={userData.career?.jobTitle || ""}
            onChange={(e) => handleCareerChange("jobTitle", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Company</label>
          <input
            type="text"
            placeholder="Enter your company name"
            value={userData.career?.company || ""}
            onChange={(e) => handleCareerChange("company", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Years of Experience</label>
          <select
            value={userData.career?.yearsExperience || ""}
            onChange={(e) =>
              handleCareerChange("yearsExperience", e.target.value)
            }
          >
            <option value="">Select experience</option>
            {experienceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Expertise Domain (hold Ctrl/Cmd to select multiple)</label>
          <select
            multiple
            value={userData.career?.expertiseDomain || []}
            onChange={handleExpertiseDomainChange}
          >
            {expertiseOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-section">
        <h3>Mentorship Preferences</h3>
        <div className="form-group">
          <label>Session Types</label>
          <div className="checkbox-group">
            {sessionTypes.map((type) => (
              <label key={type}>
                <input
                  type="checkbox"
                  value={type}
                  checked={
                    userData.mentorshipPreferences?.sessionTypes?.includes(
                      type
                    ) || false
                  }
                  onChange={handleSessionTypesChange}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Availability (hours/week)</label>
          <select
            value={userData.mentorshipPreferences?.availabilityHours || ""}
            onChange={(e) => handleAvailabilityChange(e.target.value)}
          >
            <option value="">Select availability</option>
            {availabilityOptions.map((option) => (
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
          Continue
        </button>
      </div>
    </div>
  );
};

export const MentorPortfolio: React.FC<StepProps> = ({
  userData,
  updateUserData,
  onNext,
  onBack,
  onSkip,
}) => {
  const handlePortfolioUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateUserData({
      portfolio: {
        ...userData.portfolio,
        portfolioUrl: e.target.value,
      } as UserData["portfolio"],
    });
  };

  const handlePastExperienceChange = (value: boolean) => {
    updateUserData({
      portfolio: {
        ...userData.portfolio,
        pastMentoringExperience: value,
        // Reset description if "No" is selected
        ...(value === false ? { mentoringDescription: "" } : {}),
      } as UserData["portfolio"],
    });
  };

  const handleExperienceDescriptionChange = (
    e: ChangeEvent<HTMLTextAreaElement>
  ) => {
    updateUserData({
      portfolio: {
        ...userData.portfolio,
        mentoringDescription: e.target.value,
      } as UserData["portfolio"],
    });
  };

  return (
    <div className="step-form">
      <h2>Proof of Work</h2>

      <div className="form-section">
        <h3>Portfolio</h3>
        <div className="form-group">
          <label>GitHub/Website URL</label>
          <input
            type="url"
            placeholder="https://github.com/yourusername"
            value={userData.portfolio?.portfolioUrl || ""}
            onChange={handlePortfolioUrlChange}
          />
        </div>
      </div>

      <div className="form-section">
        <h3>Past Mentoring Experience</h3>
        <div className="form-group">
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="pastExperience"
                value="yes"
                checked={userData.portfolio?.pastMentoringExperience === true}
                onChange={() => handlePastExperienceChange(true)}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="pastExperience"
                value="no"
                checked={userData.portfolio?.pastMentoringExperience === false}
                onChange={() => handlePastExperienceChange(false)}
              />
              No
            </label>
          </div>
        </div>

        {userData.portfolio?.pastMentoringExperience && (
          <div className="form-group">
            <label>Brief Description of Past Mentoring</label>
            <textarea
              placeholder="Describe your mentoring experience..."
              value={userData.portfolio?.mentoringDescription || ""}
              onChange={handleExperienceDescriptionChange}
            />
          </div>
        )}
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
