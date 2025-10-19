import React, { useState } from 'react'

function DynamicForm() {
    const [fields, setFields] = useState([{ task: '' }]);
  const [errors, setErrors] = useState([]);
  const validate = () => {
    const newErrors = fields.map((field) =>
      !field.task ? 'Task is required.' : ''
    );
    return newErrors;
  };
  const handleAddField = () => {
    setFields([...fields, { task: '' }]);
    setErrors([...errors, '']);
  };
  const handleRemoveField = (index) => {
    setFields(fields.filter((_, i) => i !== index));
    setErrors(errors.filter((_, i) => i !== index));
  };
  const handleChange = (index, event) => {
    const newFields = fields.map((field, i) =>
      i === index ? { ...field, [event.target.name]: event.target.value } : field
    );
    setFields(newFields);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (validationErrors.some((error) => error)) {
      setErrors(validationErrors);
    } else {
      console.log('Submitted Tasks:', fields);
      alert('Tasks submitted successfully!');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <input
            type="text"
            name="task"
            value={field.task}
            placeholder={`Task ${index + 1}`}
            onChange={(e) => handleChange(index, e)}
          />
          {errors[index] && <p style={{ color: 'red' }}>{errors[index]}</p>}
          <button type="button" onClick={() => handleRemoveField(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddField}>
        Add Task
      </button>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm