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
    <section className="w-full bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center mb-16">
          <span className="text-white text-3xl mr-4">✦</span>
          <h2 className="font-['Inter'] text-5xl font-bold text-white">Experience</h2>
        </div>

        {/* Experience List */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="flex justify-between items-center py-6 border-b border-gray-800 last:border-b-0"
            >
              {/* Left Side - Position */}
              <div className="flex-1">
                <h3 className="font-['Inter'] text-xl font-medium text-white">
                  {exp.position}
                </h3>
              </div>

              {/* Right Side - Company and Duration */}
              <div className="flex flex-col items-end text-right">
                <span className="font-['Inter'] text-xl font-medium text-white mb-1">
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