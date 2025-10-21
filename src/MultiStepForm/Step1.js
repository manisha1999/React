import React, { useState } from "react";

function Step1({ onNext, onChange }) {
  // Local state for this step’s form fields
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    reEnterpassword: "",
  });

  // Handle field updates
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Update local state first
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
  
    // Then safely notify parent
    onChange(updatedData);
  };

  // Handle Next button click with validation
  const handleNext = () => {
    const { email, password, reEnterpassword } = formData;

    if (!email || !password || !reEnterpassword) {
      alert("Please fill in all fields before proceeding.");
      return;
    }

    if (password !== reEnterpassword) {
      alert("Passwords do not match.");
      return;
    }

    onNext(); // Move to next step
  };

  return (
    <div className="step1-container">
      <h3>Step 1: Account Details</h3>

      <input
        type="email"
        name="email"
        placeholder="Enter email address"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="reEnterpassword"
        placeholder="Re-enter password"
        value={formData.reEnterpassword}
        onChange={handleChange}
        required
      />

      <button type="button" onClick={handleNext}>
        Get Started
      </button>
    </div>
  );
}

export default Step1;
