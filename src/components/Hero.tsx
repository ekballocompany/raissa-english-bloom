import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden"
    >
      {/* Imagem de fundo visível em todas as telas */}
      <div
        className="absolute inset-0 z-0 mt-16"
        style={{
          backgroundImage: "url('img_hero.jpeg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
          backgroundSize: '660px'
        }}
      ></div>

      {/* Overlay azul para mobile */}
      <div className="absolute inset-0 z-10 mt-16 md:hidden" style={{ backgroundColor: '#091836', opacity: 0.85 }}></div>

      {/* Gradiente overlay apenas para desktop */}
      <div
        className="absolute inset-0 z-10 mt-16 hidden md:block"
        style={{
          backgroundImage: `linear-gradient(
            to right,
            #091836 0%,
            #091836 20%,
            #091836 40%,
            rgb(9, 24, 54) 60%,
            rgba(9, 24, 54, 0.51) 80%,
            rgba(9, 24, 54, 0.4) 100%
          )`,
        }}
      ></div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
              Raissa Belomi<br />
              <span className="text-raissa-vermelho-escuro">English Teacher</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-lg">
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
        </div>

        <div className="mt-16 flex justify-center animate-fade-in-slow">
          <a
            href="#about"
            className="p-2 rounded-full border border-white text-white hover:bg-raissa-vermelho-escuro hover:border-raissa-vermelho-escuro transition-colors animate-bounce"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
