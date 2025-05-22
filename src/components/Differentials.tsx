
import React from 'react';
import Section from './Section';
import { Calendar, Users, Clock, FileText, MessageSquare, UserPen, RefreshCcw, UserCheck } from 'lucide-react';

const Differentials: React.FC = () => {
  const differentials = [
    {
      icon: UserPen,
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
      icon: RefreshCcw,
      title: 'Acompanhamento contínuo',
      description: 'Avaliação constante do progresso e ajustes no plano de estudos.'
    },
    {
      icon: UserCheck,
      title: 'Abordagem empática e inclusiva',
      description: 'Ofereço um aprendizado acolhedor, que respeite as individualidades e desenvolva a confiança no uso do idioma.'
    }
  ];

  return (
    <Section id="differentials" className="bg-gradient-to-b from-white to-gray-100">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-raissa-azul-escuro">Diferenciais</h2>
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
              <div className="p-3 rounded-full bg-raissa-vermelho-escuro/10 mr-4">
                <item.icon className="h-6 w-6 text-raissa-vermelho-escuro" />
              </div>
              <h3 className="font-medium text-xl text-raissa-azul-intenso">{item.title}</h3>
            </div>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Differentials;
