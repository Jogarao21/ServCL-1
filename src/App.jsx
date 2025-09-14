import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import WhoWeAre from './pages/WhoWeAre';
import Vision from './pages/Vision';
import Mission from './pages/Mission';
import Values from './pages/Values';
import Story from './pages/Story';
import Commitment from './pages/Commitment';
import WhyChoose from './pages/WhyChoose';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import USMortgageProcessing from './pages/USMortgageProcessing';
import TitleSearch from './pages/TitleSearch';
import SoftwareServices from './pages/SoftwareServices';
import Contact from './pages/Contact';
import ScrollToTop from './pages/ScrollToTop';
import './App.css';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <main className="servcl-main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/who-we-are" element={<WhoWeAre />} />
            <Route path='/about/vision' element={<Vision />} />
            <Route path='/about/mission' element={<Mission />} />
            <Route path='/about/values' element={<Values />} />
            <Route path='/about/story' element={<Story />} />
            <Route path='/about/commitment' element={<Commitment />} />
            <Route path='/about/why-choose' element={<WhyChoose />} />
            <Route path='/services/website-development' element={<WebsiteDevelopment />} />
            <Route path='/services/us-mortgage-processing' element={<USMortgageProcessing />} />
            <Route path='/services/title-search' element={<TitleSearch />} />
            <Route path='/services/software-services' element={<SoftwareServices />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
