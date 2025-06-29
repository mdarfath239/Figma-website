import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

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

function Textimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  return (
    <div className="bg-black flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center sm:text-left mb-8 sm:mb-12">
          <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-2">
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">What they say</h2>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 md:p-12 shadow-2xl border border-gray-800">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
              {/* Avatar and Info */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <img
                  src={currentData.avatar}
                  alt={currentData.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-700 mb-4 md:mb-0"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-white font-semibold text-lg mb-1">{currentData.name}</h3>
                  <p className="text-gray-400 text-sm">{currentData.position}</p>
                </div>
                
                {/* Quote */}
                <div className="relative">
                  <div className="text-4xl sm:text-6xl text-gray-600 absolute -top-2 sm:-top-4 -left-2 font-serif">"</div>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed pl-4 sm:pl-8">
                    {currentData.text}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows (Desktop) */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-200 hidden md:flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-200 hidden md:flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-white scale-110'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center gap-4 mt-6 md:hidden">
          <button
            onClick={prevTestimonial}
            className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Textimonial;
