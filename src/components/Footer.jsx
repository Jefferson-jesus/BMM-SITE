import { useState, useEffect } from 'react';
import logo from "../assets/logo/LOGO_MM_AZUL_SVG.svg";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import appsentings from '@/lib/utils/AppSettings.json';

const Footer = () => {
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Catálogo", href: "#catalogo" },
    { name: "Galeria", href: "#galeria" },
    { name: "Contato", href: "#contato" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/bmmlocadora" },
    { icon: Instagram, href: "https://instagram.com/bmmlocadora" },
    { icon: Linkedin, href: "https://linkedin.com/company/bmmlocadora" },
  ];

  return (
    <footer className="bg-[#0A1929] text-white py-12 md:py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#0288D1]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#4FC3F7]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <img 
              src={logo} 
              alt="BMM Locadora e Serviços"              
              className="h-16 w-auto logo-img-footer" />
            </a>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Sua parceira confiável em locação de andaimes e equipamentos para construção civil.
              Qualidade, segurança e eficiência para o seu projeto.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#01579B] rounded-full flex items-center justify-center text-white hover:bg-[#4FC3F7] transition-colors duration-300"
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {navigation.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-[#4FC3F7] transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#4FC3F7] flex-shrink-0 mt-1" />
                <p className="text-gray-300">{appsentings.endereço}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#4FC3F7] flex-shrink-0" />
                <p className="text-gray-300">{appsentings.whatsapp}</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-[#4FC3F7] flex-shrink-0" />
                <p className="text-gray-300">{appsentings.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} BMM Locadora e Serviços. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
