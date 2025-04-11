import React from "react";

interface ConfirmationProps {
  onExplore: () => void;
}

export const Confirmation: React.FC<ConfirmationProps> = ({ onExplore }) => {
  return (
    <div className="confirmation">
      <div className="success-icon">✓</div>
      <h2>Profile Complete!</h2>
      <p>You're all set to start your journey on our platform.</p>
      <button className="btn-primary" onClick={onExplore}>
        Explore Platform
      </button>
    </div>
  );
};
