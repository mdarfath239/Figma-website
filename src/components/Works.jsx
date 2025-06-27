import React from 'react';


const Works = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center">
            <span className="text-white text-3xl mr-4">✦</span>
            <h2 className="font-['Inter'] text-5xl font-bold text-white">Works</h2>
          </div>
          <a href="#" className="text-gray-400 text-base hover:text-white hover:underline transition-colors">
            view all
          </a>
        </div>

        {/* Projects Container */}
        <div className="space-y-7">
          {/* Project Card 1 - Analysis Application */}
          <div className="bg-gradient-to-r from-gray-800/40 to-gray-700/30 rounded-2xl p-6 border border-white/10 backdrop-blur-sm flex items-start gap-8">
            <img 
              src={"image1.png"} 
              alt="Analysis Application" 
              className="w-64 h-48 object-cover rounded-xl flex-shrink-0" 
            />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-['Inter'] text-3xl font-bold text-white mb-4">Analysis Application</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-lg">
                  With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.
                </p>
                <div className="flex gap-3 mb-8">
                  <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">Desktop</span>
                  <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">Web</span>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300">
                  View Case Study
                </button>
              </div>
            </div>
          </div>

          {/* Project Card 2 - Fortknox Application */}
          <div className="bg-gradient-to-r from-gray-800/40 to-gray-700/30 rounded-2xl p-6 border border-white/10 backdrop-blur-sm flex items-start gap-8">
            <img 
              src={"image2.png"} 
              alt="Fortknox Application" 
              className="w-64 h-48 object-cover rounded-xl flex-shrink-0" 
            />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-['Inter'] text-3xl font-bold text-white mb-4">Fortknox Application</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-lg">
                  With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.
                </p>
                <div className="flex gap-3 mb-8">
                  <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">Desktop</span>
                  <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">Web</span>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300">
                  View Case Study
                </button>
              </div>
            </div>
          </div>

          {/* Project Card 3 - Zenoxide Application */}
          <div className="bg-gradient-to-r from-gray-800/40 to-gray-700/30 rounded-2xl p-6 border border-white/10 backdrop-blur-sm flex items-start gap-8">
            <img 
              src={"image3.png"} 
              alt="Zenoxide Application" 
              className="w-64 h-48 object-cover rounded-xl flex-shrink-0" 
            />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-['Inter'] text-3xl font-bold text-white mb-4">Zenoxide Application</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-lg">
                  With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.
                </p>
                <div className="flex gap-3 mb-8">
                  <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">App</span>
                  <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">Web</span>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300">
                  View Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;