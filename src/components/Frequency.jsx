import React, { useState, useEffect, useRef } from 'react';
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
  const [openItems, setOpenItems] = useState([1]);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const itemRefs = useRef([]);
  const headerRef = useRef(null);

  // Intersection Observer for scroll triggers
  useEffect(() => {
    const observers = [];
    
    // Header observer
    if (headerRef.current) {
      const headerObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideInDown');
          }
        },
        { threshold: 0.1, rootMargin: '50px' }
      );
      headerObserver.observe(headerRef.current);
      observers.push(headerObserver);
    }

    // FAQ items observer
    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleItems(prev => new Set([...prev, index]));
              }, index * 150); // Stagger animation
            }
          },
          { threshold: 0.1, rootMargin: '50px' }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 overflow-hidden">
      <style jsx>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        .animate-slideInDown {
          animation: slideInDown 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        .faq-item {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .faq-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .answer-content {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .answer-content.open {
          max-height: 500px;
        }
        
        .chevron-rotate {
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .chevron-rotate.rotated {
          transform: rotate(180deg);
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className="mb-8 sm:mb-12 opacity-0"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white animate-pulse" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={item.id}
              ref={el => itemRefs.current[index] = el}
              className={`faq-item border-b border-gray-800 last:border-b-0 ${
                visibleItems.has(index) ? 'visible' : ''
              }`}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full text-left py-4 sm:py-6 flex items-center justify-between group hover:text-gray-300 transition-all duration-300 hover:pl-2"
              >
                <h3 className="text-md sm:text-lg font-medium pr-4 transition-all duration-300">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  <ChevronDown className={`w-5 h-5 text-gray-400 group-hover:text-white transition-all duration-300 chevron-rotate ${
                    openItems.includes(item.id) ? 'rotated' : ''
                  }`} />
                </div>
              </button>
              
              <div className={`answer-content ${openItems.includes(item.id) ? 'open' : ''}`}>
                <div className="pb-4 sm:pb-6 pr-4 sm:pr-8">
                  <div className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Scroll indicator */}
        <div className="fixed bottom-8 right-8">
          <div className="w-2 bg-gray-800 rounded-full h-20 relative">
            <div 
              className="w-2 bg-white rounded-full transition-all duration-300"
              style={{
                height: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%`
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frequency;