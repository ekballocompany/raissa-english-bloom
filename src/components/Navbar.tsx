import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Aulas', href: '#classes' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Contato', href: '#contact' }
  ];

  const agendamentoUrl = 'https://google.com.br';
  const handleAgendarClick = () => {
    window.open(agendamentoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="fixed w-full z-50 bg-white shadow-sm py-3">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-poppins font-semibold">
          <span className="text-raissa-rosa-queimado">Teacher </span>Raissa
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-raissa-rosa-queimado transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <Button onClick={handleAgendarClick} className="btn-primary ml-2">Agende uma Aula</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full shadow-md animate-fade-in">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 py-2 hover:text-raissa-rosa-queimado transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button onClick={handleAgendarClick} className="btn-primary w-full mt-2">
              Agende uma Aula
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
