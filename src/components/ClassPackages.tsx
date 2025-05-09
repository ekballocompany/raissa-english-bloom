
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
      title: 'Grupo de 3 Alunos',
      description: 'Aprenda com interação, sem perder a atenção personalizada e com condições especiais.',
      icon: Users,
      features: ['Ambiente colaborativo', 'Simulações reais', 'Maior economia', 'Networking'],
      value: 'R$60 / aula por pessoa',
      action: 'Saiba mais'
    }
  ];

  return (
    <Section id="classes" className="bg-raissa-pessego-claro/20">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Pacotes de Aulas</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Escolha a modalidade que melhor se adapta ao seu estilo de aprendizado e objetivos.
          Todas as aulas incluem material didático e acompanhamento personalizado.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <Card key={index} className="border border-gray-100 shadow-lg transition-all duration-300 hover:shadow-xl animate-fade-in">
            <CardHeader className="bg-gradient-to-r from-raissa-rosa-queimado/10 to-raissa-salmao-claro/10 rounded-t-lg pb-4">
              <div className="flex justify-center mb-2">
                <div className="bg-raissa-rosa-queimado/10 p-3 rounded-full">
                  <pkg.icon className="h-8 w-8 text-raissa-rosa-queimado" />
                </div>
              </div>
              <CardTitle className="text-xl text-center">{pkg.title}</CardTitle>
              <CardDescription className="text-center">{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <span className="text-3xl font-semibold text-gray-900">{pkg.value}</span>
              </div>
              
              <ul className="space-y-3">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-raissa-rosa-queimado mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full btn-primary">{pkg.action}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ClassPackages;
