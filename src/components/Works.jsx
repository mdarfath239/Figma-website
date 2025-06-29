import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const sectionRef = useRef();
  const headerRef = useRef();
  const titleRef = useRef();
  const starRef = useRef();
  const viewAllRef = useRef();
  const projectRefs = useRef([]);

  // Clear project refs on each render
  projectRefs.current = [];

  const addToProjectRefs = (el) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  useGSAP(() => {
    // Header Animation Timeline
    const headerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
      }
    });

    // Set initial states
    gsap.set(starRef.current, { rotation: 0, scale: 0 });
    gsap.set(titleRef.current, { x: -100, opacity: 0 });
    gsap.set(viewAllRef.current, { x: 100, opacity: 0 });

    headerTimeline
      .to(starRef.current, {
        scale: 1,
        rotation: 360,
        duration: 1,
        ease: "back.out(1.7)",
      })
      .to(titleRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.5")
      .to(viewAllRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      }, "-=0.4");

    // Continuous star rotation
    gsap.to(starRef.current, {
      rotation: "+=360",
      duration: 10,
      ease: "none",
      repeat: -1,
    });

    // Project cards animations
    projectRefs.current.forEach((project, index) => {
      const image = project.querySelector('.project-image');
      const content = project.querySelector('.project-content');
      const title = project.querySelector('.project-title');
      const description = project.querySelector('.project-description');
      const tags = project.querySelectorAll('.project-tag');
      const button = project.querySelector('.project-button');

      // Set initial states
      gsap.set(project, {
        opacity: 0,
        y: 100,
        rotationX: 15,
      });

      gsap.set(image, {
        scale: 1.2,
        opacity: 0,
      });

      gsap.set([title, description, button], {
        opacity: 0,
        y: 30,
      });

      gsap.set(tags, {
        opacity: 0,
        scale: 0,
      });

      // Main project animation timeline
      const projectTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: project,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      });

      projectTimeline
        // Animate container
        .to(project, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        // Animate image
        .to(image, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        }, "-=0.4")
        // Animate title
        .to(title, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        }, "-=0.3")
        // Animate description
        .to(description, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        }, "-=0.2")
        // Animate tags with stagger
        .to(tags, {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.4,
          ease: "back.out(1.7)",
        }, "-=0.3")
        // Animate button
        .to(button, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        }, "-=0.2");

      // Hover animations for project cards
      project.addEventListener('mouseenter', () => {
        gsap.to(project, {
          y: -10,
          boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(image, {
          scale: 1.05,
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(title, {
          color: "#a855f7",
          x: 10,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(button, {
          scale: 1.05,
          backgroundColor: "#f3f4f6",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      project.addEventListener('mouseleave', () => {
        gsap.to(project, {
          y: 0,
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(image, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(title, {
          color: "#ffffff",
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(button, {
          scale: 1,
          backgroundColor: "#ffffff",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      // Button specific hover animation
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.1,
          boxShadow: "0 5px 15px rgba(147, 51, 234, 0.4)",
          duration: 0.2,
          ease: "back.out(1.7)",
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: project.matches(':hover') ? 1.05 : 1,
          boxShadow: "none",
          duration: 0.2,
          ease: "power2.out",
        });
      });
    });

    // View All link animation
    viewAllRef.current.addEventListener('mouseenter', () => {
      gsap.to(viewAllRef.current, {
        color: "#a855f7",
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    viewAllRef.current.addEventListener('mouseleave', () => {
      gsap.to(viewAllRef.current, {
        color: "#9ca3af",
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    // Parallax effect for the section
    gsap.to(sectionRef.current, {
      yPercent: -5,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

  }, []);

  const projects = [
    {
      id: 1,
      title: "Analysis Application",
      description: "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
      image: "/image1.png",
      tags: ["Desktop", "Web"],
    },
    {
      id: 2,
      title: "Fortknox Application",
      description: "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
      image: "/image2.png",
      tags: ["Desktop", "Web"],
    },
    {
      id: 3,
      title: "Zenoxide Application",
      description: "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
      image: "/image3.png",
      tags: ["App", "Web"],
    }
  ];

  return (
    <section ref={sectionRef} className="w-full bg-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-blue-500 rounded-full blur-2xl animate-pulse delay-100"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400 rounded-full blur-xl animate-pulse delay-200"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="flex justify-between items-center mb-12 sm:mb-16">
          <div className="flex items-center">
            <span 
              ref={starRef}
              className="text-white text-2xl sm:text-3xl mr-3 sm:mr-4 inline-block"
            >
              ✦
            </span>
            <h2 
              ref={titleRef}
              className="font-['Inter'] text-3xl sm:text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text"
            >
              Works
            </h2>
          </div>
          <a 
            ref={viewAllRef}
            href="#" 
            className="text-gray-400 text-sm sm:text-base hover:underline transition-all duration-300 relative"
          >
            view all
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 hover:w-full"></span>
          </a>
        </div>

        {/* Projects Container */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              ref={addToProjectRefs}
              className="bg-gradient-to-r from-gray-800/40 to-gray-700/30 rounded-2xl p-4 sm:p-6 border border-white/10 backdrop-blur-sm flex flex-col lg:flex-row items-start gap-6 lg:gap-8 transition-all duration-300 cursor-pointer relative overflow-hidden"
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-blue-600/0 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
              
              <img 
                src={project.image}
                alt={project.title}
                className="project-image w-full h-48 lg:w-64 lg:h-48 object-cover rounded-xl flex-shrink-0 relative z-10" 
              />
              <div className="project-content flex-1 flex flex-col justify-between w-full relative z-10">
                <div>
                  <h3 className="project-title font-['Inter'] text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="project-description text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 max-w-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="project-tag bg-white/20 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-purple-500/30 hover:border-purple-400/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end w-full">
                  <button className="project-button bg-white text-black px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto relative overflow-hidden group">
                    <span className="relative z-10">View Case Study</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      View Case Study
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Works;