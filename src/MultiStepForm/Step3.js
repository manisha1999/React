import React from "react";

function Step3({ onBack }) {
  // Optional: open user's default email app
  const handleOpenEmailApp = () => {
    window.location.href = "mailto:";
  };

  return (
    <div className="step3-container">
      <h3>Step 3: Verify Your Email</h3>
      <p>
        We’ve sent a confirmation email with further instructions.
        Please check your inbox and follow the link to verify your account.
      </p>

      <div className="button-group">
        <button type="button" onClick={onBack}>
          Back
        </button>
        <button type="button" onClick={handleOpenEmailApp}>
          Open Email App
        </button>
      </div>
    </div>
  );
}

export default Step3;
