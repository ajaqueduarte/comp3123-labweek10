import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: ''
  });
  const provinces = [
    "Alberta", "British Columbia", "Manitoba", "New Brunswick",
    "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island",
    "Quebec", "Saskatchewan", "Northwest Territories", "Nunavut", "Yukon"
  ];

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="App">
      <header className="App-header">

        <form className="data-entry-form" onSubmit={handleSubmit}>
          <h2>Data Entry Form</h2>
          <label>
            Email
            <input
              type="email"
              name="email" // Add a name attribute
              value={formData.email} // Bind the input value to the state
              onChange={handleChange} // Set the onChange handler
              placeholder="Enter email"
            />
          </label>
          <label>
            Name
            <input
              type="text"
              name="fullName" // Add a name attribute
              value={formData.fullName} // Bind the input value to the state
              onChange={handleChange} // Set the onChange handler
              placeholder="Full Name"
            />
          </label>
          <label>
            Address
            <input
              type="text"
              name="address" // Add a name attribute
              value={formData.address} // Bind the input value to the state
              onChange={handleChange} // Set the onChange handler
              placeholder="1234 Main St"
            />
          </label>
          <label>
            Address 2
            <input
              type="text"
              name="address2" // Add a name attribute
              value={formData.address2} // Bind the input value to the state
              onChange={handleChange} // Set the onChange handler
              placeholder="Apartment, studio, or floor"
            />
          </label>
          <label>
            City
            <input
              type="text"
              name="city" // Add a name attribute
              value={formData.city} // Bind the input value to the state
              onChange={handleChange} // Set the onChange handler
            />
          </label>
          <label>
            Province
            <select name="province" value={formData.province} onChange={handleChange}>
              <option value="">Choose...</option>
              {provinces.map(province => (
                <option key={province} value={province}>{province}</option>
              ))}
            </select>
          </label>
          <label>
            Postal Code
            <input
              type="text"
              name="postalCode" // Add a name attribute
              value={formData.postalCode} // Bind the input value to the state
              onChange={handleChange} // Set the onChange handler
            />
          </label>
          <label>
            <input type="checkbox" />
            Agree Terms & Condition?
          </label>
          <button type="submit">Submit</button>
        </form>

        {/* Conditional rendering to display the data after form submission */}
        {submittedData && (
          <div className="submitted-data">
            <h2>Part - II</h2>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Full Name:</strong> {submittedData.fullName}</p>
            <p><strong>Address:</strong> {submittedData.address}</p>
            <p><strong>Address 2:</strong> {submittedData.address2}</p>
            <p><strong>City:</strong> {submittedData.city}</p>
            <p><strong>Province:</strong> {submittedData.province}</p>
            <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
