
import React from 'react';
import Section from './Section';
import { Calendar, Users, Clock, FileText, MessageSquare } from 'lucide-react';

const Differentials: React.FC = () => {
  const differentials = [
    {
      icon: Users,
      title: 'Aulas personalizadas',
      description: 'Cada aula é adaptada às suas necessidades e objetivos específicos.'
    },
    {
      icon: MessageSquare,
      title: 'Metodologia comunicativa',
      description: 'Foco na conversação e uso prático do idioma em situações reais.'
    },
    {
      icon: Clock,
      title: 'Flexibilidade de horários',
      description: 'Agende suas aulas de acordo com a sua disponibilidade.'
    },
    {
      icon: FileText,
      title: 'Material exclusivo',
      description: 'Materiais didáticos desenvolvidos especialmente para cada aluno.'
    },
    {
      icon: Calendar,
      title: 'Acompanhamento contínuo',
      description: 'Avaliação constante do progresso e ajustes no plano de estudos.'
    }
  ];

  return (
    <Section id="differentials" className="bg-gradient-to-b from-white to-raissa-creme-claro/30">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Diferenciais</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          O que torna minhas aulas únicas e eficientes para o seu aprendizado.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {differentials.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100 transition-transform hover:-translate-y-1 animate-fade-in"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-raissa-rosa-queimado/10 mr-4">
                <item.icon className="h-6 w-6 text-raissa-rosa-queimado" />
              </div>
              <h3 className="font-medium text-xl">{item.title}</h3>
            </div>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Differentials;
