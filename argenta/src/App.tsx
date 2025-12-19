import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;