import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
  const sectionRef = useRef();
  const headerRef = useRef();
  const titleRef = useRef();
  const starRef = useRef();
  const gridRef = useRef();
  const serviceRefs = useRef([]);

  // Clear service refs on each render
  serviceRefs.current = [];

  const addToServiceRefs = (el) => {
    if (el && !serviceRefs.current.includes(el)) {
      serviceRefs.current.push(el);
    }
  };

  useGSAP(() => {
    // Header Animation
    const headerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        markers: false, // Set to true for debugging
      }
    });

    // Star rotation and scale animation
    gsap.set(starRef.current, { rotation: 0, scale: 0 });
    
    headerTimeline
      .to(starRef.current, {
        scale: 1,
        rotation: 360,
        duration: 1,
        ease: "back.out(1.7)",
      })
      .from(titleRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.5");

    // Continuous star spinning
    gsap.to(starRef.current, {
      rotation: "+=360",
      duration: 8,
      ease: "none",
      repeat: -1,
    });

    // Service items staggered animation
    serviceRefs.current.forEach((service, index) => {
      const bullet = service.querySelector('.bullet');
      const title = service.querySelector('.service-title');
      const description = service.querySelector('.service-description');

      // Set initial states
      gsap.set([bullet, title, description], {
        opacity: 0,
        y: 50,
      });

      gsap.set(service, {
        backgroundColor: "transparent",
      });

      // Create individual timeline for each service
      const serviceTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: service,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          onEnter: () => {
            // Add glow effect on enter
            gsap.to(service, {
              backgroundColor: "rgba(147, 51, 234, 0.05)",
              borderRadius: "12px",
              padding: "20px",
              duration: 0.5,
              ease: "power2.out",
            });
          },
          onLeave: () => {
            // Remove glow effect on leave
            gsap.to(service, {
              backgroundColor: "transparent",
              padding: "0px",
              duration: 0.3,
              ease: "power2.out",
            });
          },
          onEnterBack: () => {
            // Re-add glow effect when scrolling back
            gsap.to(service, {
              backgroundColor: "rgba(147, 51, 234, 0.05)",
              borderRadius: "12px",
              padding: "20px",
              duration: 0.5,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            // Remove glow effect when leaving back
            gsap.to(service, {
              backgroundColor: "transparent",
              padding: "0px",
              duration: 0.3,
              ease: "power2.out",
            });
          }
        }
      });

      // Animate bullet first
      serviceTimeline
        .to(bullet, {
          opacity: 1,
          y: 0,
          scale: 1.2,
          duration: 0.4,
          ease: "back.out(1.7)",
        })
        .to(bullet, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        })
        // Then animate title
        .to(title, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        }, "-=0.3")
        // Finally animate description
        .to(description, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        }, "-=0.2");

      // Add hover animations
      service.addEventListener('mouseenter', () => {
        gsap.to(service, {
          backgroundColor: "rgba(147, 51, 234, 0.1)",
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
        
        gsap.to(bullet, {
          scale: 1.3,
          color: "#a855f7",
          duration: 0.3,
          ease: "back.out(1.7)",
        });

        gsap.to(title, {
          color: "#a855f7",
          x: 10,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      service.addEventListener('mouseleave', () => {
        gsap.to(service, {
          backgroundColor: "rgba(147, 51, 234, 0.05)",
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        
        gsap.to(bullet, {
          scale: 1,
          color: "#ffffff",
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(title, {
          color: "#ffffff",
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    // Grid container animation
    gsap.fromTo(gridRef.current, 
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 90%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Parallax effect for the entire section
    gsap.to(sectionRef.current, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

  }, []);

  const services = [
    {
      title: "Branding",
      description: "I specialize in creating unique and memorable brand identities that resonate with your target audience. From logo design to comprehensive brand guidelines, I ensure your brand stands out."
    },
    {
      title: "UI Design",
      description: "Crafting intuitive and visually appealing user interfaces is my passion. I focus on creating seamless interactions and stunning aesthetics that enhance the user experience."
    },
    {
      title: "UX Design",
      description: "Using a user-focused methodology, I investigate, empathize, and visually convey solutions to captivate and involve your users while fulfilling your business requirements."
    },
    {
      title: "Development",
      description: "Bringing designs to life with clean, efficient code. I develop responsive and high-performance websites and applications, ensuring a smooth and engaging user journey."
    }
  ];

  return (
    <section ref={sectionRef} className="w-full bg-black text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="flex items-center mb-12 sm:mb-16">
          <span 
            ref={starRef}
            className="text-white text-2xl sm:text-3xl mr-3 sm:mr-4 inline-block"
          >
            ✦
          </span>
          <h2 
            ref={titleRef}
            className="font-['Work_Sans'] text-3xl sm:text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text"
          >
            Expertise
          </h2>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={addToServiceRefs}
              className="flex items-start transition-all duration-300 cursor-pointer rounded-lg"
            >
              <span className="bullet text-white text-lg mr-3 inline-block">•</span>
              <div>
                <h3 className="service-title font-['Work_Sans'] text-xl sm:text-2xl font-bold text-white mb-2 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="service-description text-gray-400 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative line */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
      </div>
    </section>
  );
};

export default Expertise;