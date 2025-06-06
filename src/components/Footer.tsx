
import React from 'react';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-raissa-azul-preto py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-poppins font-semibold mb-2">
              <span className="text-raissa-vermelho-escuro">Teacher</span> Raissa
            </div>
            <p className="text-gray-300">Inglês no seu ritmo, do seu jeito.</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/raibelomi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-raissa-azul-preto hover:bg-raissa-vermelho-escuro hover:text-white transition-colors shadow-sm"
            >
              <Instagram size={20} />
            </a>
            {/* <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-raissa-azul-preto hover:bg-raissa-vermelho-escuro hover:text-white transition-colors shadow-sm"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-raissa-azul-preto hover:bg-raissa-vermelho-escuro hover:text-white transition-colors shadow-sm"
            >
              <Youtube size={20} />
            </a> */}
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 mb-4 md:mb-0">
            &copy; {currentYear} Raissa Belomi. Todos os direitos reservados.
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-raissa-vermelho-escuro">Termos</a>
            <a href="#" className="text-gray-300 hover:text-raissa-vermelho-escuro">Privacidade</a>
            <a href="#" className="text-gray-300 hover:text-raissa-vermelho-escuro">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
