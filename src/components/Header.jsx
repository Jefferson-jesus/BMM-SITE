import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo/LOGO_MM_AZUL_SVG.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Catálogo', href: '#catalogo' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled 
            ? 'h-16 md:h-18 lg:h-20' 
            : 'h-20 md:h-22 lg:h-24'
        }`}>
          {/* Logo */}
          <a href="#home" className="flex items-center transition-transform duration-300 hover:scale-105">
            <img 
              src={logo}
              alt="BMM Locadora e Serviços"              
              className={`w-auto logo-img transition-all duration-300 ${
                isScrolled 
                  ? 'h-8 md:h-10 lg:h-12' 
                  : 'h-10 md:h-12 lg:h-14'
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-[#0F172A] font-medium text-sm xl:text-base transition-colors duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4FC3F7] to-[#0288D1] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contato"
              className="ml-4 px-6 py-3 bg-gradient-to-r from-[#4FC3F7] to-[#0288D1] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Orçamento
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#0F172A] hover:text-[#4FC3F7] transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-6 animate-fade-in">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-[#0F172A] hover:text-[#4FC3F7] font-medium transition-colors duration-300 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              className="block mt-4 px-6 py-3 bg-gradient-to-r from-[#4FC3F7] to-[#0288D1] text-white font-semibold rounded-lg text-center shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Solicitar Orçamento
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
