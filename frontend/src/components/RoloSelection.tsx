import React from "react";
import { UserRole } from "@/types";

interface RoleSelectionProps {
  onRoleSelect: (role: UserRole) => void;
}

export const RoleSelection: React.FC<RoleSelectionProps> = ({
  onRoleSelect,
}) => {
  return (
    <div className="role-selection">
      <h1>Welcome to the Platform</h1>
      <h2>Select Your Role</h2>

      <div className="role-options">
        <div className="role-card" onClick={() => onRoleSelect("mentee")}>
          <h3>Mentee</h3>
          <p>"I want to learn and find mentors"</p>
        </div>

        <div className="role-card" onClick={() => onRoleSelect("mentor")}>
          <h3>Mentor</h3>
          <p>"I want to guide mentees"</p>
        </div>
      </div>
    </div>
  );
};
