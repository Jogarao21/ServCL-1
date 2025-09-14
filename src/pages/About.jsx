import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WhoWeAre from './WhoWeAre';

const About = () => {
  return (
    <Routes>
      {/* FIXED: Remove leading slash for nested routes */}
      <Route path="who-we-are" element={<WhoWeAre />} />
      <Route path="vision" element={<div>Vision Page Coming Soon...</div>} />
      <Route path="mission" element={<div>Mission Page Coming Soon...</div>} />
      <Route path="values" element={<div>Values Page Coming Soon...</div>} />
      <Route path="story" element={<div>Story Page Coming Soon...</div>} />
      <Route path="commitment" element={<div>Commitment Page Coming Soon...</div>} />
      <Route path="why-choose" element={<div>Why Choose Page Coming Soon...</div>} />
      
      {/* Default route for /about */}
      <Route index element={<WhoWeAre />} />
    </Routes>
  );
};

export default About;
