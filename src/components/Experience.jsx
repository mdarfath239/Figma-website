import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const experienceRefs = useRef([]);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.fromTo(headerRef.current, 
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate experience items
      experienceRefs.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(item,
            {
              opacity: 0,
              x: -50,
              y: 30
            },
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 0.8,
              delay: index * 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
              }
            }
          );

          // Add hover animation
          item.addEventListener('mouseenter', () => {
            gsap.to(item, {
              x: 10,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          item.addEventListener('mouseleave', () => {
            gsap.to(item, {
              x: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      });

      // Animate border lines
      const borderLines = sectionRef.current.querySelectorAll('.border-line');
      borderLines.forEach((line, index) => {
        gsap.fromTo(line,
          {
            scaleX: 0,
            transformOrigin: "left center"
          },
          {
            scaleX: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="flex items-center mb-12 sm:mb-16">
          <span className="text-white text-2xl sm:text-3xl mr-3 sm:mr-4">✦</span>
          <h2 className="font-['Inter'] text-3xl sm:text-4xl md:text-5xl font-bold text-white">Experience</h2>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              ref={el => experienceRefs.current[index] = el}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-b border-gray-800 last:border-b-0 cursor-pointer transition-colors duration-300 hover:bg-gray-900/20 rounded-lg px-4"
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

              {/* Animated border line */}
              <div className="border-line absolute bottom-0 left-0 w-full h-px bg-gray-800"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;