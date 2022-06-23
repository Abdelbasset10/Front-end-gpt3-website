import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/heroSection/Hero';
import Brands from './components/brands/Brands';
import WhatIsGPT3 from './components/whatIsGPT3/WhatIsGPT3';
import Features from './components/features/Features';
import Possibility from './components/possibility/Possibility';
import CTA from './components/CTA/CTA';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <div className='bg-gradient'>
        <Navbar />
        <Hero />
      </div>
      <Brands />
      <WhatIsGPT3 />
      <Features />
      <Possibility /> 
      <CTA />
      <Blog />
      <Footer />
   </div>

  )
}

export default App