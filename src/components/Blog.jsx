import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const blogPostRefs = useRef([]);

  const blogPosts = [
    {
      id: 1,
      date: "Nov 5, 2023",
      title: "How UX works in web",
      tags: ["UX", "UI"],
      image: "image1.png",
    },
    {
      id: 2,
      date: "Aug 16, 2023",
      title: "Case study - Analysis Application.",
      tags: ["DESIGN", "REACT"],
      image: "image2.png",
    },
    {
      id: 3,
      date: "Feb 16, 2023",
      title: "3 ways to develop your skill",
      tags: ["FIGMA", "WEB"],
      image: "image3.png",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.fromTo(headerRef.current,
        {
          opacity: 0,
          y: -30,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate blog posts
      blogPostRefs.current.forEach((post, index) => {
        if (post) {
          // Main container animation
          gsap.fromTo(post,
            {
              opacity: 0,
              y: 60,
              scale: 0.95
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: post,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );

          // Animate individual elements within each post
          const thumbnail = post.querySelector('.thumbnail');
          const content = post.querySelector('.content');
          const tags = post.querySelectorAll('.tag');
          const readButton = post.querySelector('.read-button');

          // Thumbnail animation
          if (thumbnail) {
            gsap.fromTo(thumbnail,
              {
                opacity: 0,
                x: -30,
                rotation: -5
              },
              {
                opacity: 1,
                x: 0,
                rotation: 0,
                duration: 0.6,
                delay: index * 0.2 + 0.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                  trigger: post,
                  start: "top 80%",
                  toggleActions: "play none none reverse"
                }
              }
            );
          }

          // Content animation
          if (content) {
            const date = content.querySelector('.date');
            const title = content.querySelector('.title');
            
            if (date) {
              gsap.fromTo(date,
                {
                  opacity: 0,
                  y: 20
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  delay: index * 0.2 + 0.3,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: post,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                  }
                }
              );
            }

            if (title) {
              gsap.fromTo(title,
                {
                  opacity: 0,
                  y: 20
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  delay: index * 0.2 + 0.4,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: post,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                  }
                }
              );
            }
          }

          // Tags animation
          tags.forEach((tag, tagIndex) => {
            gsap.fromTo(tag,
              {
                opacity: 0,
                scale: 0.8,
                y: 10
              },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.4,
                delay: index * 0.2 + 0.5 + tagIndex * 0.1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                  trigger: post,
                  start: "top 80%",
                  toggleActions: "play none none reverse"
                }
              }
            );
          });

          // Read button animation
          if (readButton) {
            gsap.fromTo(readButton,
              {
                opacity: 0,
                x: 30,
                scale: 0.9
              },
              {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.6,
                delay: index * 0.2 + 0.6,
                ease: "back.out(1.7)",
                scrollTrigger: {
                  trigger: post,
                  start: "top 80%",
                  toggleActions: "play none none reverse"
                }
              }
            );
          }

          // Hover animations
          post.addEventListener('mouseenter', () => {
            gsap.to(post, {
              y: -5,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out"
            });
            
            if (thumbnail) {
              gsap.to(thumbnail, {
                scale: 1.05,
                rotation: 2,
                duration: 0.3,
                ease: "power2.out"
              });
            }
          });

          post.addEventListener('mouseleave', () => {
            gsap.to(post, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
            
            if (thumbnail) {
              gsap.to(thumbnail, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
              });
            }
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black text-white p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <h1 className="text-xl sm:text-2xl font-bold">Blog</h1>
          </div>
          <button className="text-sm text-gray-400 hover:text-white transition-colors">
            view all
          </button>
        </div>

        {/* Blog Posts */}
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id} 
              ref={el => blogPostRefs.current[index] = el}
              className="bg-gray-900/50 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 cursor-pointer transition-all duration-300 hover:bg-gray-900/70"
            >
              {/* Thumbnail */}
              <div className="thumbnail flex-shrink-0 w-full sm:w-auto">
                <div className="w-full h-40 sm:w-24 sm:h-24 bg-gray-800 rounded-xl overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="content flex-1 w-full">
                <p className="date text-gray-400 text-xs sm:text-sm mb-2">{post.date}</p>
                <h3 className="title text-white text-md sm:text-lg font-semibold mb-3 leading-tight">
                  {post.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag bg-transparent border border-gray-600 text-gray-300 text-xs px-3 py-1 rounded-full hover:bg-gray-800 hover:border-gray-500 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read Button */}
              <div className="read-button flex-shrink-0 w-full sm:w-auto mt-4 sm:mt-0">
                <button className="bg-white text-black border border-white hover:bg-gray-100 hover:scale-105 rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 w-full sm:w-auto">
                  Read
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;