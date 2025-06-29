import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white">
      <div className="flex items-center justify-between w-full px-4 sm:px-10 py-6">
        {/* Left: Logo */}
        <div className="text-3xl font-bold">
          <img src="https://mir-s3-cdn-cf.behance.net/user/230/63852f1048568153.62decc92056a7.jpg" width={50} alt="" />
        </div>

        {/* Center: Navigation Links (for medium and larger screens) */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
            Home
          </a>
          <a href="#" className="text-sm hover:text-purple-400 cursor-pointer">About</a>
          <a href="#" className="text-sm hover:text-purple-400 cursor-pointer">Projects</a>
          <a href="#" className="text-sm hover:text-purple-400 cursor-pointer">Contact</a>
        </div>

        {/* Right: Hire Me Button (for medium and larger screens) */}
        <div className="hidden md:block">
          <button className="border border-white px-5 py-1.5 rounded-full text-sm hover:bg-white hover:text-black transition">
            HIRE ME
          </button>
        </div>

        {/* Hamburger Menu (for small screens) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="flex flex-col items-center gap-4 py-4 px-4">
            <a href="#" className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold w-full text-center">
              Home
            </a>
            <a href="#" className="text-sm hover:text-purple-400 cursor-pointer py-2">About</a>
            <a href="#" className="text-sm hover:text-purple-400 cursor-pointer py-2">Projects</a>
            <a href="#" className="text-sm hover:text-purple-400 cursor-pointer py-2">Contact</a>
            <button className="border border-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition w-full mt-4">
              HIRE ME
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
