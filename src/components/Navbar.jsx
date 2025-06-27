import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-black text-white ">
      <div className="flex items-center justify-between  w-full px-10 py-6">
        {/* Left: Logo */}
        <div className="text-3xl font-bold">
      <img src="https://mir-s3-cdn-cf.behance.net/user/230/63852f1048568153.62decc92056a7.jpg" width={50} alt="" />
        </div>

        {/* Center: Navigation Links */}
        <div className="flex items-center gap-8">
          <button className="bg-white text-black px-4 py-1 rounded-full text-sm font-semibold">
            Home
          </button>
          <span className="text-sm hover:text-purple-400 cursor-pointer">About</span>
          <span className="text-sm hover:text-purple-400 cursor-pointer">Projects</span>
          <span className="text-sm hover:text-purple-400 cursor-pointer">Contact</span>
        </div>

        {/* Right: Hire Me Button */}
        <div>
          <button className="border border-white px-5 py-1.5 rounded-full text-sm hover:bg-white hover:text-black transition">
            HIRE ME
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
