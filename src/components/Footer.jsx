import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const skillsRef = useRef([]);
  const starsRef = useRef([]);
  const titleRef = useRef(null);
  const emailRef = useRef(null);
  const bottomRef = useRef(null);
  const particlesRef = useRef([]);

  // Add refs to arrays
  const addToSkillsRef = (el) => {
    if (el && !skillsRef.current.includes(el)) {
      skillsRef.current.push(el);
    }
  };

  const addToStarsRef = (el) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el);
    }
  };

  useEffect(() => {
    const footer = footerRef.current;
    
    // Create floating particles
    const createParticles = () => {
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-white/10 rounded-full pointer-events-none';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        footer.appendChild(particle);
        particlesRef.current.push(particle);

        // Animate particles
        gsap.to(particle, {
          y: -150,
          x: Math.random() * 100 - 50,
          opacity: 0,
          duration: Math.random() * 4 + 3,
          repeat: -1,
          delay: Math.random() * 3,
          ease: "none"
        });
      }
    };

    // Main animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footer,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        onEnter: createParticles
      }
    });

    // Set initial states
    gsap.set(skillsRef.current, { y: 50, opacity: 0 });
    gsap.set(starsRef.current, { scale: 0, rotation: 180, opacity: 0 });
    gsap.set(titleRef.current, { y: 100, scale: 0.8, opacity: 0 });
    gsap.set(emailRef.current, { y: 50, opacity: 0 });
    gsap.set(bottomRef.current, { y: 30, opacity: 0 });

    // Skills animation with stagger
    tl.to(skillsRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.7)"
    });

    // Stars animation
    tl.to(starsRef.current, {
      scale: 1,
      rotation: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "elastic.out(1, 0.5)"
    }, "-=0.4");

    // Main title animation
    tl.to(titleRef.current, {
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.2");

    // Email section animation
    tl.to(emailRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4");

    // Bottom section animation
    tl.to(bottomRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3");

    // Hover animations for skills
    skillsRef.current.forEach((skill) => {
      if (skill) {
        skill.addEventListener('mouseenter', () => {
          gsap.to(skill, {
            scale: 1.1,
            color: '#ffffff',
            duration: 0.3,
            ease: "power2.out"
          });
        });

        skill.addEventListener('mouseleave', () => {
          gsap.to(skill, {
            scale: 1,
            color: '#d1d5db',
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }
    });

    // Hover animation for main title
    if (titleRef.current) {
      titleRef.current.addEventListener('mouseenter', () => {
        gsap.to(titleRef.current, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      titleRef.current.addEventListener('mouseleave', () => {
        gsap.to(titleRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }

    // Continuous star rotation
    starsRef.current.forEach((star, index) => {
      if (star) {
        gsap.to(star, {
          rotation: 360,
          duration: 8 + index * 2,
          repeat: -1,
          ease: "none",
          delay: index * 0.5
        });
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      particlesRef.current.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
      particlesRef.current = [];
    };
  }, []);

  return (
    <footer 
      ref={footerRef} 
      className="relative bg-black text-white py-12 sm:py-16 px-4 sm:px-6 overflow-hidden"
    >
      <div className="w-full mx-auto relative z-10">
        {/* Top Section with Skills */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex w-full flex-wrap justify-center items-center gap-4 md:gap-8 text-md sm:text-lg md:text-xl font-light tracking-widest">
            <span 
              ref={addToSkillsRef}
              className="text-gray-300 cursor-pointer transition-colors duration-300"
            >
              LOW
            </span>
            <img 
              ref={addToStarsRef}
              src="star.png" 
              alt="" 
              className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer" 
            />
            <span 
              ref={addToSkillsRef}
              className="text-gray-300 cursor-pointer transition-colors duration-300"
            >
              FIGMA
            </span>
            <img 
              ref={addToStarsRef}
              src="star.png" 
              alt="" 
              className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer" 
            />
            <span 
              ref={addToSkillsRef}
              className="text-gray-300 cursor-pointer transition-colors duration-300"
            >
              DESIGNER
            </span>
            <img 
              ref={addToStarsRef}
              src="star.png" 
              alt="" 
              className="h-4 w-4 sm:h-5 sm:w-5 cursor-pointer" 
            />
            <span 
              ref={addToSkillsRef}
              className="text-gray-300 cursor-pointer transition-colors duration-300"
            >
              DEVELOP
            </span>
          </div>
        </div>

        {/* Main CTA Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-wider mb-6 sm:mb-8 cursor-pointer"
          >
            LET'S TALK!
          </h2>
          <div 
            ref={emailRef}
            className="flex justify-center items-center gap-2 text-gray-300 text-sm sm:text-base group cursor-pointer"
          >
            <span className="group-hover:text-white transition-colors duration-300">
              mdarfath239@gmail.com
            </span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="transform rotate-45 group-hover:rotate-90 group-hover:scale-110 transition-all duration-300"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7,7 17,7 17,17"></polyline>
            </svg>
          </div>
        </div>

        {/* Bottom Section */}
        <div 
          ref={bottomRef}
          className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-400"
        >
          <div className="mb-4 md:mb-0">
            <span>© Rehan Raihan - 2023</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a 
              href="#" 
              className="hover:text-white hover:scale-110 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Dribbble</span>
              <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a 
              href="#" 
              className="hover:text-white hover:scale-110 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Behance</span>
              <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a 
              href="#" 
              className="hover:text-white hover:scale-110 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Twitter</span>
              <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a 
              href="#" 
              className="hover:text-white hover:scale-110 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Instagram</span>
              <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/90 pointer-events-none"></div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}
      ></div>
    </footer>
  );
};

export default Footer;