import { useRef } from 'react';
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Label } from '@/components/ui/label.jsx';
import appsentings from '@/lib/utils/AppSettings.json';

const ContactSection = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/bmmlocadora' },
    { icon: Instagram, href: 'https://instagram.com/bmmlocadora' },
    { icon: Linkedin, href: 'https://linkedin.com/company/bmmlocadora' },
  ];

  const formRef = useRef();

  const handleFormSubmit = (e) => {
    console.log("Enviando formulário de contato...");
    e.preventDefault();
    
    emailjs
      .sendForm(
        console.log("Iniciando envio de e-mail..."),
        "SEU_SERVICE_ID", // exemplo: service_xxx
        "SEU_TEMPLATE_ID", // exemplo: template_abc
        formRef.current,
        "SUA_PUBLIC_KEY" // exemplo: 1AbCdEfG12345
      )
      .then(() => {
        alert("✅ Mensagem enviada com sucesso!");
        e.target.reset();
      })
      .catch((error) => {
        console.error("Erro ao enviar:", error.text);
        alert("❌ Ocorreu um erro. Tente novamente.");
      });
  };

  return (
    <section id="contato" className="section-padding bg-gradient-to-b from-white to-[#F8FAFC] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#4FC3F7]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#0288D1]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {/* Section badge */}
          <div className="inline-block px-4 py-2 bg-[#4FC3F7]/10 rounded-full mb-6">
            <span className="text-[#0288D1] font-semibold text-sm uppercase tracking-wide">Fale Conosco</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] mb-6">
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <div className="accent-line"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender suas necessidades e oferecer as melhores soluções
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 animate-fade-in">
            <h3 className="text-3xl font-bold text-[#0F172A] mb-8">Envie sua Mensagem</h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-lg font-medium text-gray-700">Nome Completo</Label>
                <Input type="text" id="name" placeholder="Seu nome" className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4FC3F7] focus:border-transparent transition-all duration-300" required />
              </div>
              <div>
                <Label htmlFor="phone" className="text-lg font-medium text-gray-700">Telefone</Label>
                <Input type="tel" id="phone" placeholder="(XX) XXXXX-XXXX" className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4FC3F7] focus:border-transparent transition-all duration-300" required />
              </div>
              <div>
                <Label htmlFor="email" className="text-lg font-medium text-gray-700">E-mail</Label>
                <Input type="email" id="email" placeholder="seu.email@exemplo.com" className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4FC3F7] focus:border-transparent transition-all duration-300" required />
              </div>
              <div>
                <Label htmlFor="message" className="text-lg font-medium text-gray-700">Mensagem</Label>
                <Textarea id="message" placeholder="Descreva sua necessidade..." rows="5" className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4FC3F7] focus:border-transparent transition-all duration-300" required />
              </div>
              <Button 
                type="submit" 
                className="premium-button w-full bg-gradient-to-r from-[#4FC3F7] to-[#0288D1] hover:from-[#0288D1] hover:to-[#01579B] text-white font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Enviar Mensagem
                <MessageCircle className="ml-2" size={20} />
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-10 animate-fade-in">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
              <h3 className="text-3xl font-bold text-[#0F172A] mb-6">Nossos Contatos</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4 text-gray-700">
                  <MapPin size={24} className="text-[#0288D1] flex-shrink-0" />
                  <p className="text-lg">{appsentings.endereço}</p>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <Phone size={24} className="text-[#0288D1] flex-shrink-0" />
                  <p className="text-lg">{appsentings.telefone}</p>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <Mail size={24} className="text-[#0288D1] flex-shrink-0" />
                  <p className="text-sm md:text-lg break-words max-w-full">{appsentings.email}</p>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-5 mt-8 justify-center lg:justify-start">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 bg-gradient-to-br from-[#4FC3F7] to-[#0288D1] rounded-full flex items-center justify-center text-white text-2xl shadow-md hover:scale-110 transition-transform duration-300"
                  >
                    <link.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100 overflow-hidden">
              <h3 className="text-3xl font-bold text-[#0F172A] mb-6 px-6">Nossa Localização</h3>
              <div className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.6762467132363!2d-46.6064046!3d-23.6741952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce44a71b7b8b59%3A0x7a5b8a91762bcb1!2sR.%20Dr.%20Benedito%20Tolosa%2C%20707%20-%20Parque%20Bristol%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004193-020!5e0!3m2!1spt-BR!2sbr!4v1730166700000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da BMM Locadora e Serviços"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
