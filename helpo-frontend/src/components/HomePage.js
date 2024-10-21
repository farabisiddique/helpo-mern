import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import '../styles/All.css';
import Navbar from './NavBar';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import Categories from './Categories';
import Community from './Community';
import Reviews from './Reviews';
import Commitment from './Commitment';
import Footer from './Footer';

const HomePage = () => {
  
  return (
    <div className="container-fluid p-0 mainDiv">
      <Helmet>
        <title>Helpo Home Page</title>
      </Helmet>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Categories />
      <Community />
      <Reviews />
      <Commitment />
      <Footer />
      
    </div>
  );
};
export default HomePage;