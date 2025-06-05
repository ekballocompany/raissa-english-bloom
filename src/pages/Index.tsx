import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ClassPackages from "@/components/ClassPackages";
import Testimonials from "@/components/Testimonials";
import Differentials from "@/components/Differentials";
import Contact from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    document.title = "Teacher Raissa";
  }, []);

  return (
    <>
      <Hero />
      <About />
      <ClassPackages />
      <Testimonials />
      <Differentials />
      <Contact />
    </>
  );
};

export default Index;
