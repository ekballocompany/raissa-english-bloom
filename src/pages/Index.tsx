
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ClassPackages from '@/components/ClassPackages';
import Testimonials from '@/components/Testimonials';
import Differentials from '@/components/Differentials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Raissa Belomi - English Teacher";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ClassPackages />
      <Testimonials />
      <Differentials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
