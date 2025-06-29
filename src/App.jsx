import React from 'react';
import Navbar from './components/Navbar';


import Works from './components/Works';

import Blog from './components/Blog';
import Testimonial from './components/Testimonial';
import Frequency from './components/Frequency';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Expertise from './components/Expertise';
import Experience from './components/Experience';

function App() {
  return (
    <div className="w-full h-full bg-black text-white">
      <Navbar />
      <Banner/>
      <Expertise/>
      <Works/>
    <Experience/>
      <Blog/>
      <Testimonial/>
      <Frequency/>
      <Footer/>
    </div>
  );
}

export default App;
