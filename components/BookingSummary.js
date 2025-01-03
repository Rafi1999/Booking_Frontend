import Link from "next/link";

const BookingSummary = ({ reservationDetails }) => {
    return (
      <div className="p-6 bg-white shadow-md rounded-md text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Booking Confirmed!</h2>
        <p className="text-gray-700 mb-2">Date: {reservationDetails.date}</p>
        <p className="text-gray-700 mb-2">Time: {reservationDetails.time}</p>
        <p className="text-gray-700 mb-2">Guests: {reservationDetails.guests}</p>
        <p className="text-gray-700 mb-4">Name: {reservationDetails.name}</p>
        <p className="text-gray-700 mb-4">Contact: {reservationDetails.contact}</p>
        <Link href="/" className="mt-4 px-6 py-2 bg-primary text-white rounded-md hover:bg-opacity-80">
          Make Another Booking
        </Link>
      </div>
    );
  };
  
  export default BookingSummary;
  