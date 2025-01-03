'use client';

import { useState } from 'react';
import BookingForm from '../../components/BookingForm';
import BookingSummary from '../../components/BookingSummary';

const BookingPage = () => {
  const [availableSlots, setAvailableSlots] = useState([]);
  const [reservationDetails, setReservationDetails] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [slotSelected, setSlotSelected] = useState(false);

  // Fetch available slots from backend
  const checkAvailability = async (formData) => {
    try {
      const response = await fetch('https://restaurant-booking-backend-tau.vercel.app/api/bookings', {
        method: 'GET',
      });
      const bookings = await response.json();

      // Filter available slots (mock logic, replace with backend logic if needed)
      const mockSlots = ['11.00 AM','12:00 PM', '1:00 PM', '2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','9:00 PM'];
      const unavailableSlots = bookings
        .filter((booking) => booking.date === formData.date)
        .map((booking) => booking.time);

      const available = mockSlots.filter((slot) => !unavailableSlots.includes(slot));

      setAvailableSlots(available);
      setFormSubmitted(true);
      setReservationDetails({ ...formData });
    } catch (error) {
      console.error('Error fetching availability:', error);
    }
  };

  const confirmBooking = async (slot) => {
    const bookingData = {
      ...reservationDetails,
      time: slot,
    };

    try {
      const response = await fetch('https://restaurant-booking-backend-tau.vercel.app/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error('Failed to confirm booking');
      }

      const result = await response.json();
      console.log('Booking confirmed:', result);
      setReservationDetails(bookingData);
      setSlotSelected(true);
    } catch (error) {
      console.error('Error confirming booking:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      {/* Step 1: Booking Form */}
      {!formSubmitted && <BookingForm onCheckAvailability={checkAvailability} />}

      {/* Step 2: Available Slots */}
      {formSubmitted && !slotSelected && (
        <div className="p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-bold mb-4">Available Slots</h2>
          {availableSlots.length > 0 ? (
            <ul className="space-y-2">
              {availableSlots.map((slot, index) => (
                <li
                  key={index}
                  className="p-2 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200"
                  onClick={() => confirmBooking(slot)}
                >
                  {slot}
                </li>
              ))}
            </ul>
          ) : (
            <p>No slots available for the selected date and time.</p>
          )}
        </div>
      )}

      {/* Step 3: Booking Summary */}
      {slotSelected && <BookingSummary reservationDetails={reservationDetails} />}
    </div>
  );
};

export default BookingPage;
