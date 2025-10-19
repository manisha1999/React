import React, { useState } from 'react'

function Form() {
    const [formData,setFormData] = useState({name :'', email :''})
    const [errors,setErrors] = useState({})
    const validate = () => {
        const newErrors = {}
        if (!formData.name){
            newErrors.name = "Name is required"
        }
        if(!formData.email){
            newErrors.email ="Email is required"
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)){
            newErrors.email = "Email is invalid"
        }
        return newErrors
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear error for the field
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
        } else {
          console.log('Form Submitted:', formData);
          alert('Form submitted successfully!');
        }
    
    }

    


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name :</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label>Email :</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                {errors.email && <p>{errors.email}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form