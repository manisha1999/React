import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  // Move to next step
  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  // Move to previous step
  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  // Update form data as user types
  const handleFormDataChange = (data) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ...data,
    }));
  };

  return (
    <div className="registration-form-container">
      {step === 1 && (
        <Step1 onNext={handleNextStep} onChange={handleFormDataChange} />
      )}

      {step === 2 && (
        <Step2
          onNext={handleNextStep}
          onBack={handlePreviousStep}
          onChange={handleFormDataChange}
        />
      )}

      {step === 3 && <Step3 onBack={handlePreviousStep} />}
    </div>
  );
}

export default RegistrationForm;
