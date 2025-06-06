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
    document.title = "Teacher Raissa";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="class-packages"><ClassPackages /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="differentials"><Differentials /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
