import React, { useState } from "react";
import Select from "react-select";
import "./ProviderForm.css";

export default function ProviderForm() {
  //get from backend later
  const categoriesList = [
    { value: "Lawn Care", label: "Lawn Care" },
    { value: "Snow Removal", label: "Snow Removal" },
    { value: "Landscaping", label: "Landscaping" },
    { value: "Gardening", label: "Gardening" },
    { value: "Tree Care", label: "Tree Care" },
    { value: "Pest Control", label: "Pest Control" },
  ];

  //maybe add calendar availability later
  const [formData, setFormData] = useState({
    address: "",
    categories: [],
    radius: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (selectedOptions) => {
    setFormData((prev) => ({
      ...prev,
      categories: selectedOptions || [],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save as array of strings
    const saveData = {
      ...formData,
      categories: formData.categories.map((c) => c.value),
    };

    localStorage.setItem("providerInfo", JSON.stringify(saveData));
    alert("Your provider information has been saved!");
  };

  return (
    <form className="provider-form" onSubmit={handleSubmit}>
      <h2 className="provider-form__title">Provider Details</h2>

      {/* Address */}
      <label htmlFor="address" className="provider-form__label">
        Address
      </label>
      <input
        id="address"
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Enter your address"
        required
        className="provider-form__input"
      />

      {/* Categories */}
      <label htmlFor="categories" className="provider-form__label">
        Service Categories
      </label>
      <Select
        id="categories"
        options={categoriesList}
        isMulti
        value={formData.categories}
        onChange={handleCategoryChange}
        placeholder="Select categories..."
        required
        classNamePrefix="provider-select"
      />

      {/* Travel Radius */}
      <label htmlFor="radius" className="provider-form__label">
        Travel Distance
      </label>
      <select
        id="radius"
        name="radius"
        value={formData.radius}
        onChange={handleChange}
        required
        className="provider-form__select"
      >
        <option value="">Select distance</option>
        <option value="5">5 miles</option>
        <option value="10">10 miles</option>
        <option value="15">15 miles</option>
        <option value="20">20 miles</option>
        <option value="25">25 miles</option>
        <option value="30">30 miles</option>
      </select>

      <button type="submit" className="provider-form__button">
        Save
      </button>
    </form>
  );
}
