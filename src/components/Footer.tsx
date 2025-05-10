
import React from 'react';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-raissa-rosa-queimado/10 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-poppins font-semibold mb-2">
              <span className="text-raissa-rosa-queimado">Teacher</span> Raissa
            </div>
            <p className="text-gray-600">Inglês no seu ritmo, do seu jeito.</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-raissa-rosa-queimado hover:bg-raissa-rosa-queimado hover:text-white transition-colors shadow-sm"
            >
              <Instagram size={20} />
            </a>
            {/* <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-raissa-rosa-queimado hover:bg-raissa-rosa-queimado hover:text-white transition-colors shadow-sm"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-raissa-rosa-queimado hover:bg-raissa-rosa-queimado hover:text-white transition-colors shadow-sm"
            >
              <Youtube size={20} />
            </a> */}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 mb-4 md:mb-0">
            &copy; {currentYear} Raissa Belomi. Todos os direitos reservados.
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-raissa-rosa-queimado">Termos</a>
            <a href="#" className="text-gray-600 hover:text-raissa-rosa-queimado">Privacidade</a>
            <a href="#" className="text-gray-600 hover:text-raissa-rosa-queimado">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
