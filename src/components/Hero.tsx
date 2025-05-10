import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero: React.FC = () => {
  return <section id="hero" className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-raissa-creme-claro to-white">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
            Raissa Belomi<br />
            <span className="text-raissa-rosa-queimado">English Teacher</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
            Do zero ao avançado, com propósito e experiências que fazem o inglês fluir.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary" asChild>
              <a href="#about">Conheça minha história</a>
            </Button>
            <Button className="btn-secondary" asChild>
              <a href="#classes">Veja os pacotes de aulas</a>
            </Button>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center animate-fade-in-slow">
          <div className="relative">
            {/* Replace with actual image when available */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-raissa-pessego-claro flex items-center justify-center overflow-hidden border-8 border-white shadow-lg">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" alt="Raissa Belomi - English Teacher" className="w-full h-full object-cover" />
            </div>

          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center animate-fade-in-slow">
        <a href="#about" className="p-2 rounded-full border border-raissa-rosa-queimado text-raissa-rosa-queimado animate-bounce">
          <ArrowDown size={24} />
        </a>
      </div>
    </div>
  </section>;
};
export default Hero;