import Link from 'next/link';
import React from 'react';
const MyNavbar = () => {
  return (
    <nav className="bg-[#3e0202] text-white p-4 md:py-4 md:px-7">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">WeServe</h1>
        <ul className="flex">
          <Link href='/'><li className="ml-4">Home</li></Link>
          <Link href='/about'><li className="ml-4">About</li></Link>
          <Link href='/booking'><li className="ml-4">Book</li></Link>
        </ul>
      </div>
    </nav>
  );
};

export default MyNavbar;