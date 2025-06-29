import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Floyd Miles",
    position: "CEO",
    avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    text: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers."
  },
  {
    id: 2,
    name: "Jenny Wilson",
    position: "Marketing Director",
    avatar: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    text: "The platform is incredibly user-friendly and helped me land my dream job. The templates are modern and professional, exactly what recruiters are looking for in today's market."
  },
  {
    id: 3,
    name: "Robert Fox",
    position: "Software Engineer",
    avatar: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
    text: "I was struggling to format my resume properly until I found Synergy. The AI suggestions and formatting tools are game-changers for anyone looking to create a standout resume."
  }
];

function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRef = useRef(null);
  const dotsRef = useRef(null);
  const mobileNavRef = useRef(null);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const currentData = testimonials[currentTestimonial];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - hide elements
      gsap.set([headerRef.current, cardRef.current, dotsRef.current, mobileNavRef.current], {
        opacity: 0
      });

      // Header animation
      gsap.fromTo(headerRef.current,
        {
          opacity: 0,
          y: -50,
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
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Card container animation
      gsap.fromTo(cardRef.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
          rotationX: -15
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Individual card elements animation
      const avatar = cardRef.current?.querySelector('.avatar');
      const name = cardRef.current?.querySelector('.name');
      const position = cardRef.current?.querySelector('.position');
      const quote = cardRef.current?.querySelector('.quote');
      const quoteIcon = cardRef.current?.querySelector('.quote-icon');

      if (avatar) {
        gsap.fromTo(avatar,
          {
            opacity: 0,
            scale: 0,
            rotation: -180
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            delay: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      if (name) {
        gsap.fromTo(name,
          {
            opacity: 0,
            x: -30,
            y: 20
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.6,
            delay: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      if (position) {
        gsap.fromTo(position,
          {
            opacity: 0,
            x: -30,
            y: 20
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.6,
            delay: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      if (quoteIcon) {
        gsap.fromTo(quoteIcon,
          {
            opacity: 0,
            scale: 0,
            rotation: -45
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.5,
            delay: 1.0,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      if (quote) {
        gsap.fromTo(quote,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 1.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Navigation arrows
      const leftArrow = cardRef.current?.querySelector('.left-arrow');
      const rightArrow = cardRef.current?.querySelector('.right-arrow');

      if (leftArrow) {
        gsap.fromTo(leftArrow,
          {
            opacity: 0,
            x: -20,
            scale: 0.8
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
            delay: 1.3,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      if (rightArrow) {
        gsap.fromTo(rightArrow,
          {
            opacity: 0,
            x: 20,
            scale: 0.8
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
            delay: 1.3,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: cardRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Dots animation
      gsap.fromTo(dotsRef.current,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: dotsRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Mobile navigation animation
      if (mobileNavRef.current) {
        gsap.fromTo(mobileNavRef.current,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mobileNavRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animation for testimonial changes
  useEffect(() => {
    if (cardRef.current) {
      const tl = gsap.timeline();
      
      // Fade out current content
      tl.to(cardRef.current.querySelector('.content'), {
        opacity: 0.7,
        scale: 0.95,
        duration: 0.2,
        ease: "power2.out"
      })
      // Fade back in with new content
      .to(cardRef.current.querySelector('.content'), {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    }
  }, [currentTestimonial]);

  return (
    <div ref={sectionRef} className="bg-black flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div ref={headerRef} className="text-center sm:text-left mb-8 sm:mb-12">
          <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-2">
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">What they say</h2>
          </div>
        </div>

        {/* Testimonial Card */}
        <div ref={cardRef} className="relative">
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
            <div className="content flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
              {/* Avatar and Info */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <img
                  src={currentData.avatar}
                  alt={currentData.name}
                  className="avatar w-16 h-16 rounded-full object-cover border-2 border-gray-700 mb-4 md:mb-0 hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="name text-white font-semibold text-lg mb-1">{currentData.name}</h3>
                  <p className="position text-gray-400 text-sm">{currentData.position}</p>
                </div>
                
                {/* Quote */}
                <div className="relative">
                  <div className="quote-icon text-4xl sm:text-6xl text-gray-600 absolute -top-2 sm:-top-4 -left-2 font-serif">"</div>
                  <p className="quote text-gray-300 text-base sm:text-lg leading-relaxed pl-4 sm:pl-8">
                    {currentData.text}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows (Desktop) */}
          <button
            onClick={prevTestimonial}
            className="left-arrow absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-gray-800 hover:bg-gray-700 hover:scale-110 text-white p-3 rounded-full transition-all duration-200 hidden md:flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="right-arrow absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-gray-800 hover:bg-gray-700 hover:scale-110 text-white p-3 rounded-full transition-all duration-200 hidden md:flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div ref={dotsRef} className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentTestimonial
                  ? 'bg-white scale-110'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Mobile Navigation */}
        <div ref={mobileNavRef} className="flex justify-center gap-4 mt-6 md:hidden">
          <button
            onClick={prevTestimonial}
            className="bg-gray-800 hover:bg-gray-700 hover:scale-110 text-white p-3 rounded-full transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-gray-800 hover:bg-gray-700 hover:scale-110 text-white p-3 rounded-full transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;