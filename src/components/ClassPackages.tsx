
import React from 'react';
import Section from './Section';
import { User, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ClassPackages: React.FC = () => {
  const packages = [
    {
      title: 'Aula Individual',
      description: 'Foco total no aluno. Aulas personalizadas de acordo com suas necessidades específicas.',
      icon: User,
      features: ['Material personalizado', 'Flexibilidade de horários', 'Ritmo adaptado', 'Atenção exclusiva'],
      value: 'R$120 / aula',
      action: 'Tenho interesse'
    },
    {
      title: 'Aula em Dupla',
      description: 'Ideal para quem quer aprender junto com um amigo ou parceiro, estimulando conversação.',
      icon: Users,
      features: ['Interação em grupo', 'Prática de conversação', 'Economia compartilhada', 'Dinâmicas exclusivas'],
      value: 'R$80 / aula por pessoa',
      action: 'Quero agendar'
    },
    {
      title: 'Grupo de Alunos',
      description: 'Aprenda com interação, sem perder a atenção personalizada e com condições especiais.',
      icon: Users,
      features: ['Ambiente colaborativo', 'Simulações reais', 'Maior economia', 'Networking'],
      value: 'R$60 / aula por pessoa',
      action: 'Saiba mais'
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
            src="https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Teacher Raissa - Pacotes de Aulas" 
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
        
        {/* Right Column - Class Packages */}
        <div className="lg:w-7/12 flex flex-col gap-4">
          {packages.map((pkg, index) => (
            <Card key={index} className="border border-gray-100 shadow-md transition-all duration-300 hover:shadow-lg animate-fade-in max-h-[280px]">
              <CardHeader className="bg-gradient-to-r from-raissa-rosa-queimado/10 to-raissa-salmao-claro/10 rounded-t-lg py-2">
                <div className="flex justify-center mb-1">
                  <div className="bg-raissa-rosa-queimado/10 p-2 rounded-full">
                    <pkg.icon className="h-6 w-6 text-raissa-rosa-queimado" />
                  </div>
                </div>
                <CardTitle className="text-lg text-center">{pkg.title}</CardTitle>
                <CardDescription className="text-center text-sm">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="py-2">
                <div className="text-center mb-2">
                  <span className="text-2xl font-semibold text-gray-900">{pkg.value}</span>
                </div>
                
                <ul className="space-y-1 text-sm">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-3 w-3 text-raissa-rosa-queimado mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-0 pb-3">
                <Button className="w-full btn-primary text-sm py-1">{pkg.action}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ClassPackages;
