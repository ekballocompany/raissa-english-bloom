
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
            Olá! Sou Raissa Belomi, sou professora de inglês com certificação internacional TEFL e formação em ESL, além de ser graduanda em Letras. Desde 2020, venho ensinando alunos de diferentes idades e nacionalidades, com aulas personalizadas que respeitam o ritmo e os objetivos de cada um.
          </p>

          <p className="text-gray-700 mb-4">
            Ao longo dos anos, desenvolvi uma metodologia própria que une técnicas comprovadas de aprendizado a uma abordagem descontraída e personalizada. Acredito que cada aluno tem um jeito único de aprender, por isso adapto minhas aulas às necessidades individuais. Minha experiência internacional, com dois intercâmbios marcantes, ampliou minha visão sobre o ensino e o aprendizado de línguas. Nessas vivências, mergulhei em outras culturas, aprimorei meu inglês em contextos reais e refinei métodos que hoje aplico em sala de aula.
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
                  <h4 className="font-medium text-gray-900">Certificação TEFL</h4>
                  <p className="text-gray-700">University of Cambridge</p>
                </div>
              </div>

              {/* Qualification Item */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <FileText className="text-raissa-rosa-queimado" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Certificação ESL</h4>
                  <p className="text-gray-700">University of Cambridge</p>
                </div>
              </div>

              {/* Qualification Item */}
              <div className="flex gap-4">
                <div className="mt-1">
                  <BookOpen className="text-raissa-rosa-queimado" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Graduada em Letras Inglês/Português</h4>
                  <p className="text-gray-700">University of Cambridge</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <Award className="text-raissa-rosa-queimado" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Intercâmbios nos Estados Unidos</h4>
                  <p className="text-gray-700">
                    Dois intercâmbios de trabalho e estudo, com 6 meses cada, morando em diferentes estados dos EUA e vivenciando o inglês no dia a dia.                  </p>
                </div>
              </div>

              {/* Qualification Item */}
              {/* <div className="flex gap-4">
                <div className="mt-1">
                  <Award className="text-raissa-rosa-queimado" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Especialização em Ensino de Idiomas</h4>
                  <p className="text-gray-700">Metodologias Comunicativas</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
