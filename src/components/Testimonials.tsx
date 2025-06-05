
import React, { useState } from 'react';
import Section from './Section';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Kelvin de Oliveira',
      role: 'Personal Trainer - 33 anos',
      content: 'Comecei as aulas com a Raissa pensando no futuro, já que pretendo expandir minha atuação como treinador fora do Brasil. Desde então, tenho me sentido cada vez mais confiante para usar o inglês no meu dia a dia e nos meus projetos profissionais. As aulas são dinâmicas e totalmente voltadas para o que eu preciso. Tem sido uma experiência incrível.',
      rating: 5,
      image: 'testemunho_1.jpeg',
    },
    {
      name: 'Nicolle',
      role: 'Biomédica - 28 anos',
      content: 'Procurei a Raissa para melhorar meu inglês em pouco tempo e fiquei impressionada com o quanto evoluí. Fizemos aulas focadas na minha tese e em situações reais de viagem e trabalho. Foi exatamente o que eu precisava.',
      rating: 5,
      image: 'testemunho_3.jpeg',
    },
    {
      name: 'Gabrielle',
      role: 'Dentista - 29 anos',
      content: 'Depois de tentar diversos cursos, finalmente encontrei na Raissa a professora que entendeu minhas dificuldades. Em 6 meses evoluí mais que em anos de estudo.',
      rating: 5,
      image: 'testemunho_4.jpeg',
    },
    {
      name: 'Brenda',
      role: 'Estudante de administração - 21 anos',
      content: 'As aulas com a Raissa me ajudaram a melhorar meu inglês de forma leve e prática. Tenho aprendido muito e já estou muito mais segura para usar o idioma no meu curso e fora dele também.',
      rating: 5,
      image: 'testemunho_2.jpeg',
    },
    {
      name: 'Dani',
      role: 'Estudante - 13 anos',
      content: 'Eu gosto muito das aulas com a Raissa! Ela ensina de um jeito que dá vontade de aprender e eu já consigo falar muito mais do que antes.',
      rating: 5,
      image: 'testemunho_5.jpeg',
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
                  className={`w-3 h-3 rounded-full transition-all ${i === activeIndex ? 'bg-raissa-rosa-queimado w-6' : 'bg-gray-300'
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
