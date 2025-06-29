import React from 'react';

const Information = () => {
  const experiences = [
    {
      position: "Lead Product Designer",
      company: "Fortknox",
      duration: "Mar 2022 - Oct 2023"
    },
    {
      position: "Intern Designer",
      company: "OmniSafe",
      duration: "Mar 2022 - Oct 2023"
    },
    {
      position: "UI Designer",
      company: "Dorodesign",
      duration: "Mar 2022 - Oct 2023"
    },
    {
      position: "Frontend Developer",
      company: "OpacityAuthor",
      duration: "Mar 2022 - Oct 2023"
    }
  ];

  return (
    <section className="w-full bg-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center mb-12 sm:mb-16">
          <span className="text-white text-2xl sm:text-3xl mr-3 sm:mr-4">✦</span>
          <h2 className="font-['Inter'] text-3xl sm:text-4xl md:text-5xl font-bold text-white">Experience</h2>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-b border-gray-800 last:border-b-0"
            >
              {/* Left Side - Position */}
              <div className="flex-1 mb-4 sm:mb-0">
                <h3 className="font-['Inter'] text-lg sm:text-xl font-medium text-white">
                  {exp.position}
                </h3>
              </div>

              {/* Right Side - Company and Duration */}
              <div className="flex flex-col items-start sm:items-end text-left sm:text-right">
                <span className="font-['Inter'] text-lg sm:text-xl font-medium text-white mb-1">
                  {exp.company}
                </span>
                <span className="font-['Inter'] text-sm text-gray-400">
                  {exp.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Information;