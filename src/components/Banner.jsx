import React from 'react';

const Banner = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-8">
      {/* Heading */}
      <div className="w-full max-w-full px-4 py-4 mx-auto font-['Work_Sans']">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold leading-tight tracking-tight break-words text-center">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
            <span>I AM A</span>
            <img
              src={"profile.jpg"}
              alt="freelancer"
              className="h-10 w-20 sm:h-12 sm:w-24 md:h-16 md:w-32 rounded-full object-cover"
            />
            <span>FREELANCE</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-2">
            <span>DESIGNER</span>
            <img
              src="side.png"
              alt="uiimage"
              className="h-10 w-20 sm:h-12 sm:w-24 md:h-16 md:w-32 rounded-full object-cover"
            />
            <span>FROM</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-2">SAN FRANCISCO</div>
        </h1>
      </div>

      {/* Logos & Text */}
      <div className="mt-12 w-full flex flex-col md:flex-row items-center justify-evenly px-6 gap-8 md:gap-4">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 text-xl font-bold">
          <span className="flex items-center gap-2">
            <img src="Dark.png" alt="" width={30} />
            doradesign
          </span>
          <span className="flex items-center gap-2">
            <img src="w.png" alt="" width={40} />
            wave
          </span>
          <span className="flex items-center mt-2 gap-2">
            <img src="silia.png" alt="" width={120} />
          </span>
        </div>
        <p className="text-sm text-gray-400 max-w-md text-center md:text-left">
          Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive branding and web designs, each crafted to captivate and inspire.
        </p>
      </div>
    </section>
  );
};

export default Banner;
