import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/ShareRoom.css";
import Navbar from "./Navbar";

const ShareRoom = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    roomName: "",
    location: "",
    description: "",
    amenities: [],
    amenityInput: "",
    minDuration: "",
    maxDuration: "",
    availableDates: [],
    selectedDate: "",
    rentalRate: "",
    name: "",
    contactPhone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "contactPhone") {
      if (!/^\d{0,10}$/.test(value)) {
        return;
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAmenityKeyPress = (e) => {
    if (e.key === "Enter" && formData.amenityInput.trim() !== "") {
      setFormData((prevData) => ({
        ...prevData,
        amenities: [...prevData.amenities, prevData.amenityInput.trim()],
        amenityInput: "",
      }));
    }
  };

  const handleAmenityRemove = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      amenities: prevData.amenities.filter((_, i) => i !== index),
    }));
  };

  const handleDateChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      selectedDate: "",
      availableDates: [...prevData.availableDates, value],
    }));
  };

  const handleDateRemove = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      availableDates: prevData.availableDates.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/discover");
  };

  return (
    <>
      <Navbar />
      <div className="share-room-page">
        <div className="share-room-container">
          <h2>Share Your Room</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="contactPhone">Contact Phone:</label>
            <input
              type="number"
              id="contactPhone"
              name="contactPhone"
              value={formData.contactPhone}
              onChange={handleChange}
              required
            />
            <label htmlFor="roomName">Room Name:</label>
            <input
              type="text"
              id="roomName"
              name="roomName"
              value={formData.roomName}
              onChange={handleChange}
              required
            />
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <label htmlFor="amenities">Amenities:</label>
            <div className="amenities-container">
              {formData.amenities.map((amenity, index) => (
                <div key={index} className="amenity">
                  {amenity}
                  <span
                    className="cross-icon"
                    onClick={() => handleAmenityRemove(index)}
                  >
                    &#x2715;
                  </span>
                </div>
              ))}
              <input
                type="text"
                id="amenitiesInput"
                name="amenityInput"
                value={formData.amenityInput}
                onChange={handleChange}
                onKeyPress={handleAmenityKeyPress}
                placeholder="Press Enter to add"
              />
            </div>
            <label htmlFor="minDuration">Minimum Rental Duration (hrs):</label>
            <input
              type="number"
              id="minDuration"
              name="minDuration"
              value={formData.minDuration}
              onChange={handleChange}
              required
            />
            <label htmlFor="maxDuration">Maximum Rental Duration (hrs):</label>
            <input
              type="number"
              id="maxDuration"
              name="maxDuration"
              value={formData.maxDuration}
              onChange={handleChange}
              required
            />
            <label htmlFor="availableDates">Available Dates to Rent:</label>
            <div className="dates-container">
              {formData.availableDates.map((date, index) => (
                <div key={index} className="date">
                  {date}
                  <span
                    className="cross-icon"
                    onClick={() => handleDateRemove(index)}
                  >
                    &#x2715;
                  </span>
                </div>
              ))}
              <input
                type="date"
                id="selectedDate"
                name="selectedDate"
                value={formData.selectedDate}
                onChange={handleDateChange}
              />
            </div>

            <label htmlFor="rentalRate">Rental Rate (₹/hrs):</label>
            <input
              type="number"
              id="rentalRate"
              name="rentalRate"
              value={formData.rentalRate}
              onChange={handleChange}
              required
            />
            <button type="submit" className="submit">
              Share Your Room
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShareRoom;
