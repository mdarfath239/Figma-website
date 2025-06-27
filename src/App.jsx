import React from 'react';
import Navbar from './components/Navbar';


import Works from './components/Works';
import Information from './components/Information';
import Blog from './components/Blog';
import Textimonial from './components/Textimonial';
import Frequency from './components/Frequency';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Expertise from './components/Expertise';

function App() {
  return (
    <div className="w-full h-full bg-black text-white">
      <Navbar />
      <Banner/>
      <Expertise/>
      <Works/>
      <Information/>
      <Blog/>
      <Textimonial/>
      <Frequency/>
      <Footer/>
    </div>
  );
}

export default App;
