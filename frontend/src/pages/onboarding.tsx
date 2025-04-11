// File: App.tsx
import { Confirmation } from "@/components/Confirmation";
import {
  MenteeBasicProfile,
  MenteeEducation,
  MenteeExperience,
} from "@/components/MenteeSteps";
import {
  MentorCareerDetails,
  MentorPortfolio,
  MentorVerification,
} from "@/components/MentorSteps";
import { RoleSelection } from "@/components/RoloSelection";
import React, { useState } from "react";
import { UserData } from "@/types";

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState<UserData>({
    role: null,
    name: "John Doe", // Pre-filled from registration
    email: "john.doe@example.com", // Pre-filled from registration
  });

  const updateUserData = (data: Partial<UserData>) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };

  const goToNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const goToPrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const skipStep = () => {
    goToNextStep();
  };

  const renderStep = () => {
    if (currentStep === 0) {
      return (
        <RoleSelection
          onRoleSelect={(role) => {
            updateUserData({ role });
            goToNextStep();
          }}
        />
      );
    }

    if (userData.role === "mentee") {
      switch (currentStep) {
        case 1:
          return (
            <MenteeBasicProfile
              userData={userData}
              updateUserData={updateUserData}
              onNext={goToNextStep}
            />
          );
        case 2:
          return (
            <MenteeEducation
              userData={userData}
              updateUserData={updateUserData}
              onNext={goToNextStep}
              onBack={goToPrevStep}
              onSkip={skipStep}
            />
          );
        case 3:
          return (
            <MenteeExperience
              userData={userData}
              updateUserData={updateUserData}
              onNext={goToNextStep}
              onBack={goToPrevStep}
              onSkip={skipStep}
            />
          );
        case 4:
          return (
            <Confirmation onExplore={() => console.log("Explore platform")} />
          );
        default:
          return null;
      }
    } else if (userData.role === "mentor") {
      switch (currentStep) {
        case 1:
          return (
            <MentorVerification
              userData={userData}
              updateUserData={updateUserData}
              onNext={goToNextStep}
            />
          );
        case 2:
          return (
            <MentorCareerDetails
              userData={userData}
              updateUserData={updateUserData}
              onNext={goToNextStep}
              onBack={goToPrevStep}
              onSkip={skipStep}
            />
          );
        case 3:
          return (
            <MentorPortfolio
              userData={userData}
              updateUserData={updateUserData}
              onNext={goToNextStep}
              onBack={goToPrevStep}
              onSkip={skipStep}
            />
          );
        case 4:
          return (
            <Confirmation onExplore={() => console.log("Explore platform")} />
          );
        default:
          return null;
      }
    }

    return null;
  };

  return <div className="onboarding-container">{renderStep()}</div>;
};

export default App;
