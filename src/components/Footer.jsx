import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="w-full mx-auto">
        {/* Top Section with Skills */}
        <div className="text-center mb-16">
          <div className="flex w-full flex-wrap justify-center items-center gap-4 md:gap-8 text-lg md:text-xl font-light tracking-widest">
            <span className="text-gray-300">LOW</span>
           <img src="star.png" alt="" />
            <span className="text-gray-300">FIGMA</span>
            <img src="star.png" alt="" />
            <span className="text-gray-300">DESIGNER</span>
            <img src="star.png" alt="" />
            <span className="text-gray-300">DEVELOP</span>
          </div>
        </div>

        {/* Main CTA Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-wider mb-8">
            LET'S TALK!
          </h2>
          <div className="flex justify-center items-center gap-2 text-gray-300">
            <span>mdarfath239@gmail.com</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="transform rotate-45"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7,7 17,7 17,17"></polyline>
            </svg>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            <span>© Rehan Raihan - 2023</span>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="#" 
              className="hover:text-white transition-colors duration-200"
            >
              Dribbble
            </a>
            <a 
              href="#" 
              className="hover:text-white transition-colors duration-200"
            >
              Behance
            </a>
            <a 
              href="#" 
              className="hover:text-white transition-colors duration-200"
            >
              Twitter
            </a>
            <a 
              href="#" 
              className="hover:text-white transition-colors duration-200"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;