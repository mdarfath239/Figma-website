import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "What is your design process?",
    answer: "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design."
  },
  {
    id: 2,
    question: "What tools and software do you use for UX design?",
    answer: "I use a variety of industry-standard tools including Figma for design and prototyping, Adobe Creative Suite for visual design, Sketch for interface design, InVision for prototyping and collaboration, Miro for user journey mapping and brainstorming, and various user testing platforms like UserTesting and Hotjar for gathering insights."
  },
  {
    id: 3,
    question: "How do you measure the success of your UX designs?",
    answer: "I measure UX design success through multiple metrics including user satisfaction scores, task completion rates, time-on-task measurements, conversion rates, user retention metrics, and qualitative feedback from user interviews and usability testing sessions. I also track business metrics like increased engagement and reduced support tickets."
  },
  {
    id: 4,
    question: "What is your approach to user research?",
    answer: "My user research approach combines both qualitative and quantitative methods. I conduct user interviews, surveys, usability testing, and analytics analysis to understand user needs, behaviors, and pain points. I also create user personas and journey maps to guide design decisions throughout the project."
  },
  {
    id: 5,
    question: "How do you handle design feedback and revisions?",
    answer: "I believe feedback is crucial for creating successful designs. I establish clear communication channels with stakeholders, document all feedback systematically, prioritize changes based on user impact and business goals, and maintain version control throughout the revision process. I also ensure that all changes align with the overall design strategy."
  }
];

function Frequency() {
  const [openItems, setOpenItems] = useState([1]); // First item open by default

  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div key={item.id} className="border-b border-gray-800 last:border-b-0">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full text-left py-4 sm:py-6 flex items-center justify-between group hover:text-gray-300 transition-colors duration-200"
              >
                <h3 className="text-md sm:text-lg font-medium pr-4">{item.question}</h3>
                <div className="flex-shrink-0">
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
                  )}
                </div>
              </button>
              
              {openItems.includes(item.id) && (
                <div className="pb-4 sm:pb-6 pr-4 sm:pr-8">
                  <div className="text-gray-300 text-sm sm:text-base leading-relaxed animate-fadeIn">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Frequency;