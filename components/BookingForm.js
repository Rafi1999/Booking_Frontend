'use client';

import { useState } from 'react';

const BookingForm = ({ onCheckAvailability }) => {
  const [formData, setFormData] = useState({
    date: '',
    guests: '',
    name: '',
    contact: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckAvailability(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Make a Reservation</h2>

      <label className="block mb-2">
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
      </label>

      <label className="block mb-2">
        Number of Guests:
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
      </label>

      <label className="block mb-2">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
      </label>

      <label className="block mb-4">
        Contact:
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
      </label>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
        Check Availability
      </button>
    </form>
  );
};

export default BookingForm;
