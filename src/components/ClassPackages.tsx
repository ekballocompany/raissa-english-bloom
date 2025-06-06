
import React from 'react';
import Section from './Section';
import { User, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ClassPackages: React.FC = () => {
  const agendamentoUrl = 'https://wa.me/5516991022356?text=Hi%2C%20Teacher!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20ingl%C3%AAs%20%F0%9F%98%8A';
  const handleAgendarClick = () => {
    window.open(agendamentoUrl, '_blank', 'noopener,noreferrer');
  };
  const packages = [
    {
      title: 'Aula Individual',
      description: 'Foco total no aluno. Aulas personalizadas de acordo com suas necessidades específicas.',
      icon: User,
      features: ['Material personalizado', 'Flexibilidade de horários', 'Ritmo adaptado', 'Atenção exclusiva'],
      // value: 'R$120 / aula',
      action: 'Tenho interesse',
      package1: '1 aula/semana: R$320,00 (R$80,00/aula)',
      package2: '2 aula/semana: R$560,00 (R$70,00/aula)',
      package3: '3 aula/semana: R$720,00 (R$60,00/aula)'
    },
    {
      title: 'Aula em Dupla',
      description: 'Ideal para quem quer aprender junto com um amigo ou parceiro, estimulando conversação.',
      icon: Users,
      features: ['Interação em grupo', 'Prática de conversação', 'Economia compartilhada', 'Dinâmicas exclusivas'],
      // value: 'R$80 / aula por pessoa',
      action: 'Quero agendar',
      package1: '1 aula/semana: R$260,00 (R$65,00/aula)',
      package2: '2 aula/semana: R$480,00 (R$60,00/aula)',
      package3: '3 aula/semana: R$600,00 (R$50,00/aula)'
    },
    {
      title: 'Grupo de Alunos',
      description: 'Aprenda com interação, sem perder a atenção personalizada e com condições especiais.',
      icon: Users,
      features: ['Ambiente colaborativo', 'Simulações reais', 'Maior economia', 'Networking'],
      // value: 'R$60 / aula por pessoa',
      action: 'Saiba mais',
      package1: '1 aula/semana: R$200,00 (R$50,00/aula)',
      package2: '2 aula/semana: R$360,00 (R$45,00/aula)',
      package3: '3 aula/semana: R$480,00 (R$40,00/aula)'
    }
  ];

  return (
    <Section id="classes" className="bg-raissa-pessego-claro/20">
      <div className="text-center mb-8 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Pacotes de Aulas</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Escolha a modalidade que melhor se adapta ao seu estilo de aprendizado e objetivos.
          Todas as aulas incluem material didático e acompanhamento personalizado.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Image */}
        <div className="lg:w-5/12 flex justify-center items-start animate-fade-in">
          <img
            src="img_card.jpeg"
            alt="Teacher Raissa - Pacotes de Aulas"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Right Column - Class Packages */}
        <div className="lg:w-7/12 flex flex-col gap-4">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="border border-gray-100 shadow-md transition-all duration-300 hover:shadow-lg animate-fade-in w-full max-w-lg mx-auto"
            >
              <CardHeader className="bg-gradient-to-r from-raissa-rosa-queimado/10 to-raissa-salmao-claro/10 rounded-t-lg py-2 px-3">
                <div className="flex justify-center mb-1">
                  <div className="bg-raissa-rosa-queimado/10 p-2 rounded-full">
                    <pkg.icon className="h-5 w-5 text-raissa-rosa-queimado" />
                  </div>
                </div>
                <CardTitle className="text-base text-center">{pkg.title}</CardTitle>
                <CardDescription className="text-center text-xs">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="py-2 px-3">
                <div className="text-center mb-2">
                  {/* <span className="text-xl font-semibold text-gray-900">{pkg?.value}</span> */}
                </div>

                <div className="flex flex-col md:flex-row gap-4 items-center md:items-start text-center md:text-left">
                  {/* Coluna da esquerda */}
                  <div className="w-full md:w-1/2">
                    <p className="text-sm text-gray-700"><small>{pkg.package1}</small></p>
                    <p className="text-sm text-gray-700"><small>{pkg.package2}</small></p>
                    <p className="text-sm text-gray-700"><small>{pkg.package3}</small></p>
                  </div>

                  {/* Coluna da direita */}
                  <div className="w-full md:w-1/2">
                    <ul className="space-y-1 text-sm max-h-[130px] overflow-y-auto">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start justify-start">
                          <CheckCircle className="h-3 w-3 text-raissa-rosa-queimado mt-1 mr-2" />
                          <span className="text-gray-700 text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>



              <CardFooter className="pt-2 pb-3 px-3">
                <Button onClick={handleAgendarClick}  className="w-full btn-primary text-xs py-1.5">{pkg.action}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

      </div>
    </Section >
  );
};

export default ClassPackages;
