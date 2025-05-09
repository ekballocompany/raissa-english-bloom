
import React from 'react';
import Section from './Section';
import { FileText, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Sobre Mim</h2>
          
          <p className="text-gray-700 mb-4">
            Olá! Sou Raissa Belomi, professora de inglês apaixonada por conectar pessoas através do idioma. Minha jornada começou quando percebi o poder transformador que o aprendizado de uma língua estrangeira pode ter na vida das pessoas.
          </p>
          
          <p className="text-gray-700 mb-4">
            Ao longo dos anos, desenvolvi uma metodologia própria que combina técnicas comprovadas de aprendizado com uma abordagem descontraída e personalizada. Acredito que cada aluno tem um jeito único de aprender, e é por isso que adapto minhas aulas para atender às necessidades individuais.
          </p>
          
          <p className="text-gray-700 mb-8">
            Minha missão é desmistificar o aprendizado do inglês, tornando-o acessível e prazeroso para todos os meus alunos.
          </p>
          
          <div className="bg-raissa-creme-claro p-6 rounded-lg border-l-4 border-raissa-rosa-queimado">
            <p className="text-lg italic text-gray-700">
              "O aprendizado acontece quando nos sentimos seguros para cometer erros e livres para expressar nossas ideias."
            </p>
          </div>
        </div>
        
        <div className="animate-fade-in">
          <div className="bg-raissa-pessego-claro/30 p-8 rounded-lg">
            <h3 className="font-poppins text-xl font-medium mb-6">Qualificações</h3>
            
            <div className="space-y-6">
              {/* Qualification Item */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <FileText className="text-raissa-rosa-queimado" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Certificação CELTA</h4>
                  <p className="text-gray-700">University of Cambridge</p>
                </div>
              </div>
              
              {/* Qualification Item */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <Award className="text-raissa-rosa-queimado" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Score TOEFL 115/120</h4>
                  <p className="text-gray-700">Proficiência Avançada</p>
                </div>
              </div>
              
              {/* Qualification Item */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <BookOpen className="text-raissa-rosa-queimado" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Bacharel em Letras</h4>
                  <p className="text-gray-700">Inglês e Português</p>
                </div>
              </div>
              
              {/* Qualification Item */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <Award className="text-raissa-rosa-queimado" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Especialização em Ensino de Idiomas</h4>
                  <p className="text-gray-700">Metodologias Comunicativas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
