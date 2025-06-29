import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef();
  const logoRef = useRef();
  const linksRef = useRef([]);
  const buttonRef = useRef();

  // Clear linksRef on each render
  linksRef.current = [];

  const addToLinksRef = (el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(logoRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.5,
    })
      .from(linksRef.current, {
        opacity: 0,
        y: -20,
        stagger: 0.2,
        duration: 0.4,
      })
      .from(buttonRef.current, {
        opacity: 1,
        y:10,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
  }, []);

  return (
    <nav ref={navRef} className="w-full bg-black text-white">
      <div className="flex items-center justify-between w-full px-4 sm:px-10 py-6">
        {/* Left: Logo */}
        <div ref={logoRef} className="text-3xl font-bold">
          <img
            src="https://mir-s3-cdn-cf.behance.net/user/230/63852f1048568153.62decc92056a7.jpg"
            width={50}
            alt="logo"
          />
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <a
              key={index}
              ref={addToLinksRef}
              href="#"
              className={`${
                item === "Home"
                  ? "bg-white text-black px-4 py-1 rounded-full text-sm font-semibold"
                  : "text-sm hover:text-purple-400 cursor-pointer"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right: Hire Me Button */}
        <div className="hidden md:block">
          <button
            ref={buttonRef}
            className="border border-white px-5 py-1.5 rounded-full text-sm hover:bg-white hover:text-black transition"
          >
            HIRE ME
          </button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="flex flex-col items-center gap-4 py-4 px-4">
            <a
              href="#"
              className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold w-full text-center"
            >
              Home
            </a>
            <a
              href="#"
              className="text-sm hover:text-purple-400 cursor-pointer py-2"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm hover:text-purple-400 cursor-pointer py-2"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-sm hover:text-purple-400 cursor-pointer py-2"
            >
              Contact
            </a>
            <button className="border border-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-black transition w-full mt-4">
              HIRE ME
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
