
import React from 'react';
import Section from './Section';
import { Phone, Mail, Calendar, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <Section id="contact" className="bg-raissa-azul-escuro text-white">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Contato</h2>
        <p className="text-gray-100 max-w-2xl mx-auto">
          Vamos conversar? Agende uma aula experimental ou tire suas dúvidas.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Options */}
        <div className="space-y-8 animate-fade-in">
          <h3 className="text-2xl font-medium">Fale comigo</h3>
          
          <div className="space-y-6">
            {/* WhatsApp */}
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-5 bg-green-50 rounded-lg transition-all hover:bg-green-100 text-gray-700"
            >
              <div className="p-3 bg-green-100 rounded-full mr-4">
                <Phone className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium">WhatsApp</h4>
                <p className="text-gray-600">Converse diretamente comigo</p>
              </div>
            </a>
            
            {/* Email */}
            <a 
              href="mailto:raissa@belomi.com" 
              className="flex items-center p-5 bg-blue-50 rounded-lg transition-all hover:bg-blue-100 text-gray-700"
            >
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium">E-mail</h4>
                <p className="text-gray-600">raissa@belomi.com</p>
              </div>
            </a>
            
            {/* Calendly */}
            {/* <a 
              href="#" 
              className="flex items-center p-5 bg-raissa-pessego-claro/30 rounded-lg transition-all hover:bg-raissa-pessego-claro/50 text-gray-700"
            >
              <div className="p-3 bg-raissa-rosa-queimado/20 rounded-full mr-4">
                <Calendar className="h-6 w-6 text-raissa-rosa-queimado" />
              </div>
              <div>
                <h4 className="font-medium">Calendly</h4>
                <p className="text-gray-600">Agende diretamente na minha agenda</p>
              </div>
            </a> */}
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg animate-fade-in text-gray-700">
          <h3 className="text-2xl font-medium mb-6">Envie uma mensagem</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-gray-700">
                Nome
              </label>
              <Input 
                id="name" 
                placeholder="Seu nome completo"
                className="w-full"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-gray-700">
                E-mail
              </label>
              <Input 
                id="email" 
                type="email"
                placeholder="seu.email@exemplo.com"
                className="w-full"
                required
              />
            </div>
            
            <div>
              <label htmlFor="goal" className="block mb-2 text-gray-700">
                Objetivo com o inglês
              </label>
              <Input 
                id="goal" 
                placeholder="Ex: Viagem, trabalho, estudos..."
                className="w-full"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-gray-700">
                Mensagem
              </label>
              <Textarea 
                id="message" 
                placeholder="Escreva sua mensagem aqui..."
                className="w-full min-h-[120px]"
                required
              />
            </div>
            
            <Button type="submit" className="w-full">
              <Send className="h-4 w-4 mr-2" /> Enviar mensagem
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
