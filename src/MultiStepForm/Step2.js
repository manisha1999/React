import React, { useState } from "react";

function Step2({ onNext, onBack, onChange }) {
  // Local state for Step 2 fields
  const [formData, setFormData] = useState({
    organisation: "",
    phone: "",
    message: "",
  });

  // Handle field changes and sync with parent
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Update local state first
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
  
    // Then safely notify parent
    onChange(updatedData);
  };

  // Validate before moving to the next step
  const handleNext = () => {
    const { organisation, phone, message } = formData;

    if (!organisation || !phone || !message) {
      alert("Please fill in all fields before proceeding.");
      return;
    }

    // Optional: simple phone validation
    const phoneRegex = /^[0-9+\-()\s]*$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    onNext(); // Proceed to next step
  };

  return (
    <div className="step2-container">
      <h3>Step 2: Organisation Details</h3>

      <input
        name="organisation"
        type="text"
        placeholder="Enter your organisation name"
        value={formData.organisation}
        onChange={handleChange}
        required
      />

      <input
        name="phone"
        type="tel"
        placeholder="Enter your phone number"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder="Type your message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <div className="button-group">
        <button type="button" onClick={onBack}>
          Back
        </button>
        <button type="button" onClick={handleNext}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Step2;
