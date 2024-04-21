import React, { useState, useEffect } from "react";
import "../CSS/RentRoom.css";
import Navbar from "./Navbar";
import roomData from "./RentRoomFake.json";

const RentRoom = () => {
  const [location, setLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [maxDuration, setMaxDuration] = useState("");
  const [rentalRate, setRentalRate] = useState("");
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [dateSelected, setDateSelected] = useState("date");

  useEffect(() => {
    setFilteredRooms(roomData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const rentalRateNumber = Number(rentalRate);
    const maxDurationNumber = Number(maxDuration);

    let filtered = roomData.filter((room) => {
      return (
        (!location ||
          room.location.toLowerCase().includes(location.toLowerCase())) &&
        (!selectedDate || room.availableDates.includes(selectedDate)) &&
        (!rentalRate || room.rentalRate <= rentalRateNumber) &&
        (!maxDuration ||
          (room.minDuration <= maxDurationNumber &&
            room.maxDuration >= maxDurationNumber))
      );
    });

    if (!location && !selectedDate && !rentalRate && !maxDuration) {
      filtered = roomData;
    }

    filtered.sort((a, b) => a.maxDuration - b.maxDuration);
    filtered.sort((a, b) => b.rentalRate - a.rentalRate);

    setFilteredRooms(filtered);
  };

  useEffect(() => {
    setFilteredRooms(roomData);
  }, []);

  const clearSelectedDate = () => {
    setSelectedDate("");
    setDateSelected("date");
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
    setDateSelected("selectedRentalDate");
  };

  return (
    <div>
      <Navbar />
      <div className="rent-room-page">
        <h2>Find Rooms for Rent</h2>
        <form onSubmit={handleSubmit}>
          <div className="location-date-rent">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <label htmlFor="date">Date:</label>
            <div className="date-input-container">
              <input
                type="date"
                id={dateSelected}
                value={selectedDate}
                onChange={(e) => handleDateSelection(e.target.value)}
              />
              {selectedDate && (
                <button
                  type="button"
                  className="clear-date-button"
                  onClick={clearSelectedDate}
                >
                  &times;
                </button>
              )}
            </div>
          </div>
          <div className="duration-rate-rent">
            <label htmlFor="maxDuration">Rental Duration (hrs):</label>
            <input
              type="number"
              id="maxDuration"
              value={maxDuration}
              onChange={(e) => setMaxDuration(e.target.value)}
            />
            <label htmlFor="rentalRate">Rental Rate (₹/hrs):</label>
            <input
              type="number"
              id="rentalRate"
              value={rentalRate}
              onChange={(e) => setRentalRate(e.target.value)}
            />
          </div>

          <button type="submit" className="search">
            Search
          </button>
        </form>

        {filteredRooms.length === 0 && (
          <p className="noRentals">
            No rentals available based on the selected criteria.
          </p>
        )}

        {filteredRooms.length > 0 && (
          <div className="room-list">
            {filteredRooms.map((room) => (
              <div key={room.id} className="room-card">
                <h3>{room.roomName}</h3>
                <p>
                  <strong>Location:</strong> {room.location}
                </p>
                <p>
                  <strong>Description:</strong> {room.description}
                </p>
                <p>
                  <strong>Amenities:</strong> {room.amenities.join(", ")}
                </p>
                <p>
                  <strong>Minimum Rental Duration (hrs):</strong>{" "}
                  {room.minDuration}
                </p>
                <p>
                  <strong>Maximum Rental Duration (hrs):</strong>{" "}
                  {room.maxDuration}
                </p>
                <p>
                  <strong>Rental Rate (₹/hrs):</strong> {room.rentalRate}
                </p>
                <p>
                  <strong>Name:</strong> {room.name}
                </p>
                <p>
                  <strong>Contact Phone:</strong> {room.contactPhone}
                </p>
                <p>
                  <strong>Available Dates:</strong>{" "}
                  {room.availableDates.join(", ")}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RentRoom;
