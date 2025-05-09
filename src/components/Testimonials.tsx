
import React, { useState } from 'react';
import Section from './Section';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Ana Silva',
      role: 'Estudante de Intercâmbio',
      content: 'As aulas com a Raissa foram fundamentais para minha aprovação no programa de intercâmbio. Sua metodologia é dinâmica e eficiente!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
    {
      name: 'Carlos Mendes',
      role: 'Profissional de TI',
      content: 'Consegui a promoção que tanto queria graças à fluência que adquiri nas aulas da Raissa. Ela tem um jeito único de ensinar que faz tudo parecer mais fácil.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
    {
      name: 'Mariana Costa',
      role: 'Advogada',
      content: 'Depois de tentar diversos cursos, finalmente encontrei na Raissa a professora que entendeu minhas dificuldades. Em 6 meses evoluí mais que em anos de estudo.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section id="testimonials" className="bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Depoimentos</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Veja como o inglês transformou a vida dos meus alunos.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-raissa-creme-claro/30 p-8 rounded-xl shadow-md animate-fade-in">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex mb-2">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-raissa-rosa-queimado text-raissa-rosa-queimado" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-4">"{testimonials[activeIndex].content}"</p>
                
                <div>
                  <h4 className="font-medium">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-600 text-sm">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-raissa-rosa-queimado text-raissa-rosa-queimado hover:bg-raissa-rosa-queimado hover:text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === activeIndex ? 'bg-raissa-rosa-queimado w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-raissa-rosa-queimado text-raissa-rosa-queimado hover:bg-raissa-rosa-queimado hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
