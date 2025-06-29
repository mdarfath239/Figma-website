import React from 'react';

const Blog = () => {
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

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
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
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-gray-900/50 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              {/* Thumbnail */}
              <div className="flex-shrink-0 w-full sm:w-auto">
                <div className="w-full h-40 sm:w-24 sm:h-24 bg-gray-800 rounded-xl overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <p className="text-gray-400 text-xs sm:text-sm mb-2">{post.date}</p>
                <h3 className="text-white text-md sm:text-lg font-semibold mb-3 leading-tight">
                  {post.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-transparent border border-gray-600 text-gray-300 text-xs px-3 py-1 rounded-full hover:bg-gray-800 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read Button */}
              <div className="flex-shrink-0 w-full sm:w-auto mt-4 sm:mt-0">
                <button className="bg-white text-black border border-white hover:bg-gray-100 rounded-full px-6 py-2 text-sm font-medium transition-colors w-full sm:w-auto">
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