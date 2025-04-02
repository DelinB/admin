import React, { useState } from "react";

const RightSideInputForm = ({ fields = [], onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e, path) => {
    setFormData({ ...formData, [path]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Send data to parent component
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded">
      {fields.map((field, index) => (
        <div key={index} className="mb-3">
          <label>{field.name}</label>
          <input
            type="text"
            placeholder={`Enter ${field.name}`}
            value={formData[field.path] || ""}
            onChange={(e) => handleChange(e, field.path)}
            className="border p-2 w-full"
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default RightSideInputForm;
