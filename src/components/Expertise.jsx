import React from 'react';

const Expertise = () => {
  return (
    <section className="w-full bg-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center mb-12 sm:mb-16">
          <span className="text-white text-2xl sm:text-3xl mr-3 sm:mr-4">✦</span>
          <h2 className="font-['Work_Sans'] text-3xl sm:text-4xl md:text-5xl font-bold text-white">Expertise</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Service Item 1 */}
          <div className="flex items-start">
            <span className="text-white text-lg mr-3">•</span>
            <div>
              <h3 className="font-['Work_Sans'] text-xl sm:text-2xl font-bold text-white mb-2">Branding</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                I specialize in creating unique and memorable brand identities that resonate with your target audience. From logo design to comprehensive brand guidelines, I ensure your brand stands out.
              </p>
            </div>
          </div>

          {/* Service Item 2 */}
          <div className="flex items-start">
            <span className="text-white text-lg mr-3">•</span>
            <div>
              <h3 className="font-['Work_Sans'] text-xl sm:text-2xl font-bold text-white mb-2">UI Design</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Crafting intuitive and visually appealing user interfaces is my passion. I focus on creating seamless interactions and stunning aesthetics that enhance the user experience.
              </p>
            </div>
          </div>

          {/* Service Item 3 */}
          <div className="flex items-start">
            <span className="text-white text-lg mr-3">•</span>
            <div>
              <h3 className="font-['Work_Sans'] text-xl sm:text-2xl font-bold text-white mb-2">UX Design</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Using a user-focused methodology, I investigate, empathize, and visually convey solutions to captivate and involve your users while fulfilling your business requirements.
              </p>
            </div>
          </div>

          {/* Service Item 4 */}
          <div className="flex items-start">
            <span className="text-white text-lg mr-3">•</span>
            <div>
              <h3 className="font-['Work_Sans'] text-xl sm:text-2xl font-bold text-white mb-2">Development</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Bringing designs to life with clean, efficient code. I develop responsive and high-performance websites and applications, ensuring a smooth and engaging user journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
