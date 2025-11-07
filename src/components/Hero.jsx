import { ArrowRight, MessageCircle, Award, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511943431660?text=Olá! Gostaria de solicitar um orçamento.', '_blank');
  };

  const stats = [
    { icon: Award, value: '10+', label: 'Anos de Experiência' },
    { icon: Shield, value: '100%', label: 'Equipamentos Certificados' },
    { icon: Clock, value: '24h', label: 'Suporte Rápido' },
  ];

  return (
    <section id="home" className="hero-section flex items-center justify-center text-white pt-20 relative">
      <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in">
            <Award size={20} className="text-[#4FC3F7]" />
            <span className="text-sm font-medium">Líder em Locação de Equipamentos</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Soluções <span className="text-[#4FC3F7]">Premium</span> em<br />
            Locação de Andaimes e Equipamentos
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed animate-fade-in">
            Equipamentos de alta qualidade, segurança certificada e atendimento especializado 
            para elevar sua obra a outro nível
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button 
              size="lg" 
              className="premium-button bg-white text-[#0288D1] hover:bg-gray-100 font-bold px-8 py-7 text-lg rounded-xl shadow-2xl hover:shadow-[0_20px_50px_rgba(79,195,247,0.4)] transition-all duration-300"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="mr-2" size={24} />
              Solicitar Orçamento Grátis
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="premium-button border-2 border-white text-white hover:bg-white hover:text-[#0288D1] font-bold px-8 py-7 text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça Nossos Serviços
              <ArrowRight className="ml-2" size={24} />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#4FC3F7] rounded-full flex items-center justify-center mb-3">
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
